/* global __webpack_public_path__ _PROCESS_ENV_PUNLIC_PATH_ */

/**
 * App入口
 * @author yanrong.tian
 * @date 2020/5/15 14:22:00
 */
import React from 'react';
import ReactDom from 'react-dom';
import dva, { connect } from 'dva';
import { Router, Route ,Switch} from 'dva/router';
import base from './models/base';
//import { BrowserRouter as Router, Switch } from 'react-router-dom';
//import { Route } from 'react-router';
import Layout from './pages/layouts';
import { createBrowserHistory as createHistory } from 'history';

//import {run} from './qiankunSetting';

// 1. Initialize
const app = dva({
  history: createHistory()
});

// 2. Model
app.model(base);

// 4. Router
app.router((history) => {
  return <Router history={history.history}>
    <Switch>
      <Layout location={history.history.location}/>
      </Switch>
  </Router>
});

// 5. Start
app.start('#root');
