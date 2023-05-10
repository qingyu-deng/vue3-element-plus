import request from '../utils/request.js';
// 作业列表数据查询接口
// export function worksList(params) {
//     return request({
//         method: 'get',
//         url: '/works',
//         params
//     })
// }
// 列表分页查询接口
export function worksList(params) {
    return request({
        method: 'get',
        url: '/works',
        params
    })
}

// 旅游地图接口
export function travel() {
    return request({
        method: 'get',
        url: '/travel',
    })
}
