import React from 'react';
import ReactDOM from 'react-dom';
import { queryApps } from './services/app';
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';

/**
 * 渲染子应用
 */
function Render(props) {
  const { appContent, loading } = props;
  return (
    <div>
      {loading && (
        <h4 className="subapp-loading">Loading...</h4>
      )}
      <div dangerouslySetInnerHTML={{ __html: appContent }} />
    </div>
  )
}

let pre;
const render = function({ appContent, loading }) {
  const container = document.getElementById('root-subapp-container');//'root-subapp-container'
  if(container && !pre) {
    const subApp = React.createElement('div', {
      dangerouslySetInnerHTML: {
        __html: appContent
      }
    });
    ReactDOM.render(
      subApp,
      container,
    )
  }
  
}

function genActiveRule(routerPrefix) {
  return location => {
    return location.pathname.startsWith(routerPrefix);
  };
}

const getSubAppData = async () =>{
  console.log(7777, document.getElementById('root-subapp-container'))
  const res = await queryApps();
  const data = res.data;
  let newData = []
  data.map(item => {
    newData.push(Object.assign({}, {
      activeRule: genActiveRule(item.base.replace(/\/$/, '')),
      //render: render,
      props: Object.assign({}, item.props, {
        base: item.base,
      }),
      container: '#root-subapp-container',
      name: item.name,
      entry: item.entry
    }))
  })
  return {
    registerData: newData
    
  }
}

let data;
const _run = async (history, render) => {
  
  if(data) {
    console.log(99, data, history)
    return;
  }
  data = await getSubAppData();
  data = data.registerData
  registerMicroApps(data, {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  });
  console.log(98, data, history)

  const name = history.pathname.split(/\//)[1];
  if(JSON.stringify(data).indexOf('"'+name+'"') > 0) {
    setDefaultMountApp('/'+name);
  }
  console.log(98, '/'+name, data, history, name, JSON.stringify(data).indexOf('"'+name+'"') > 0);
  
  start({
    prefetch: true,
    registerRuntimeKeyInIndex: true,
    sandbox: true,
    excludeAssetFilter: (url) => {
      let isExclude = true;
      
      if(url.indexOf('//10.77.0.107:8000') >= 0) {
        isExclude = false;
      }

      return false;
    }

  });
}

export const run = _run;

class MyLayout extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    _run(this.props.location);
  }
  render() {
    return <div id="root-subapp-container" />
  }
}

export default MyLayout