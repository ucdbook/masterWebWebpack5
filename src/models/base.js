import { query, queryNavs, queryComponents } from '@/services/app';
//import { qiankunStart } from 'umi';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default {
  namespace: 'base',

  state: {
    name: '魔方-前端设计组件库',
    apps: [],
    navs: [],
  },

  effects: {
    *getApps(_, { put }) {

      const res = yield query();
      yield put({
        type: 'getAppsSuccess',
        payload: {
          apps: res.data,
        },
      });

      // 模拟手动控制 qiankun 启动时机的场景, 需要 defer 配置为 true
      //setTimeout(qiankunStart, 200);
    },

    *getComponents(_, { put }) {

      const res = yield queryComponents();
      const data = res.data || [];
      const dataObj = {};
      data.map(item => {
        dataObj[item.path] = item;
      })
      yield put({
        type: 'getComponentsSuccess',
        payload: {
          data: dataObj,
        },
      });

      // 模拟手动控制 qiankun 启动时机的场景, 需要 defer 配置为 true
      //setTimeout(qiankunStart, 200);
    },

    *getNavs(_, { put }) {
      const res = yield queryNavs();
      let data = res.data;
      data.map(item => {
        let path = '', childrenItem;
        if(item.children && item.children[0]) {
          path = item.children[0].path || '';
          childrenItem = item.children[0];
        }
        if(!path && childrenItem && childrenItem.children && childrenItem.children[0] && childrenItem.children[0].path) {
          path = childrenItem.children[0].path;
        }
        item.path = path;
      })
      yield put({
        type: 'getNavsSuccess',
        payload: {
          navs: data,
        },
      });

      // 模拟手动控制 qiankun 启动时机的场景, 需要 defer 配置为 true
      //setTimeout(qiankunStart, 200);
    },
  },

  reducers: {
    getAppsSuccess(state, { payload }) {
      return {
        ...state,
        apps: payload.apps
      };
    },
    getNavsSuccess(state, { payload }) {
      return {
        ...state,
        navs: payload.navs
      };
    },
    getComponentsSuccess(state, { payload }) {
      return {
        ...state,
        componentsObj: payload.data
      };
    },
  },
};
