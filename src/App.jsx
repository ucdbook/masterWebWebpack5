/**
 * 路由配置
 * @author yanrong.tian
 * @date 2020/5/15 14:22:00
 */
import React from 'react';
//import routes from './routes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import Layouts from './pages/layouts'
import Index from './pages/index';
import base from './models/base';

import dva, { connect } from 'dva';
import './style.css';

// 1. Initialize
const app = dva();

console.log(2);

// 2. Model
app.model({
  namespace: 'count',
  state: 0,
  reducers: {
    add  (count) { return count + 1 },
    minus(count) { return count - 1 },
  },
});

class TestError extends React.Component {
  componentDidCatch(e) {
    alert(e.message);
  }
  componentDidMount() {
    // throw new Error('a');
  }
  render() {
    return <div>TestError</div>
  }
}

// 3. View
const App = connect(({ count }) => ({
  count
}))(function(props) {
  return (
    <div>
      <TestError />
      <h2>{ props.count }</h2>
      <button key="add" onClick={() => { props.dispatch({type: 'count/add'})}}>+</button>
      <button key="minus" onClick={() => { props.dispatch({type: 'count/minus'})}}>-</button>
    </div>
  );
});

// 4. Router
app.router(() => <App />);

// 5. Start
app.start('#app');

// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <Switch>
//             <Route
//                 exact
//                 key={'ddd'}
//                 path={'/'}
//                 render={dd => (
//                   <Layouts />
//                 )}
//               />
//         </Switch>
//       </Router>
//     );
//   }
// }