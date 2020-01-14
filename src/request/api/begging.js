import request from '../request'

export function getBeggingList(params) {
  return request({
    url: '/begging/list',
    method: 'get',
    params,
  })
}

export function addBuying() {
  return request({
    url: '/buying/add',
    method: 'post',
  })
}
