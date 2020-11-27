import { Breadcrumb, Layout, Menu, Tag } from 'antd';
import { connect } from 'dva';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.less';
import IndexPage from '../index/index';
import CompenentInfo from './CompenentInfo';
import { Router, Route } from 'dva/router';
import remoteRoutes from "tf_react_upload/routes";

import Qiankun from '../../qiankunSetting';

const { Header, Content, Footer, Sider } = Layout;

const renderSubMenus = (selectKey, navs, pathname) => {
  let subNavs = [];
  navs.map(item => {
    if(item.path === selectKey) {
      subNavs = item.children;
    }
  })
  return (
    <Menu mode="inline" selectedKeys={[pathname]} style={{ height: '100%', borderRight: 0 }}>
      {subNavs.map((nav, index) => {
        if (nav.children && nav.children.length) {
          return (
            <Menu.ItemGroup key={'itemGroup' + nav.title + index} title={nav.title}>
              {nav.children.map(sub => {
                return (
                  <Menu.Item key={sub.path}>
                    <Link to={sub.path}>{sub.title}</Link>
                  </Menu.Item>
                );
              })}
            </Menu.ItemGroup>
          )
        }
        else{
          return (
            <Menu.Item key={nav.path}>
              <Link to={nav.path}>{nav.title}</Link>
            </Menu.Item>
          );
        }
        
      })}
  </Menu>
  );
};


const getHeaderSelectKey = (pathname, navs, parent) => {
  let parentPath;
  navs.map(item => {
    if(item.path === pathname) {
      parentPath = parent && parent.path ? parent.path : item.path;
    }
    else if(item.children) {
      parentPath = parentPath || getHeaderSelectKey(pathname, item.children, parent || item);
    }
  })
  return parentPath;
}

class MyLayout extends React.PureComponent {
  constructor(props) {
    super(props);
    const { dispatch } = props;

    dispatch({
      type: 'base/getNavs',
    });

    dispatch({
      type: 'base/getComponents',
    });
  }

  render() {
    const { location, children, base } = this.props;
    const { name, navs, componentsObj } = base;
    
    const headerSelectKey = getHeaderSelectKey(location.pathname, navs);
    let contentLayoutStyle = location.pathname === '/' ? {display: 'none'} : {};
    console.log(222,remoteRoutes)
    const TagA = remoteRoutes[1].mdx;
    console.log(2233, TagA)
    return (
      <Layout className={style.layout}>

        <Header className={style.header}>
          <div className={style.logo}><Link to={'/'}>{name}</Link></div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['home']}
            selectedKeys={[headerSelectKey]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key={'aaa'}>
              <Link to={'/myupload'}>ddd</Link>
            </Menu.Item>
            {navs.map(nav => {
              return (
                <Menu.Item key={nav.path}>
                  <Link to={nav.path}>{nav.title}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Header>
        {// 加载master pages，此处判断较为简单，实际需排除所有子应用base打头的路径
            location.pathname === '/' ? <IndexPage/> : 
              null
            }
            {location.pathname === '/myupload' ? <TagA/>: 
              null
            }
          <Layout style={contentLayoutStyle}>
            <Sider width={250} className={style.sider} theme={'light'}>
                {renderSubMenus(headerSelectKey, navs, location.pathname)}
            </Sider>
            <Content className={style.content}>
              <CompenentInfo componentsObj={componentsObj} pathname={location.pathname}/>
              
              <Qiankun location={location}></Qiankun>
            </Content>
           </Layout>
        </Layout>
    );
  }
}

export default connect(({ base }) => ({
  base,
}))(MyLayout);
