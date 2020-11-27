import request from '@/utils/request';

export async function query() {
  return request('/magicApi/childApp/getChildApps', {
    method: 'POST'
  });
}

export async function queryApps() {
  return request('/magicApi/childApp/getChildApps', {
    method: 'POST'
  });
}

export async function queryNavs() {
  return request('/magicApi/childApp/getMasterNavs', {
    method: 'POST'
  });
}

export async function queryComponents() {
  return request('/magicApi/pushAppNavsApi/get', {
    method: 'POST'
  });
}

