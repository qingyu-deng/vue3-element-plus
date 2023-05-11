import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        redirect: '/login',
        hidden: true,
        component: () => import('@/components/Login')  //官方推荐的路由懒加载
    },
    {
        path: '/login',
        hidden: true,
        component: () => import('@/components/Login')
    },
    {
        path: '/home',
        name: '学生管理',
        iconClass: 'fa fa-users',
        redirect: '/home/student', //重定向
        component: () => import('@/components/Home'),
        children: [
            {
                path: '/home/student',
                name: '学生列表',
                iconClass: 'fa fa-list',
                component: () => import('@/views/students/StudentList')
            },
            {
                path: '/home/info',
                name: '信息列表',
                iconClass: 'fa fa-list-alt',
                component: () => import('@/views/students/InfoList')
            },
            {
                path: '/home/work',
                name: '作业列表',
                iconClass: 'fa fa-list-ul',
                component: () => import('@/views/students/WorkList')
            },
        ]
    },
    {
        path: '/home',
        name: '数据分析',
        iconClass: 'fa fa-bar-chart',
        component: () => import('@/components/Home'),
        children: [
            {
                path: '/home/dataview',
                name: '数据概览',
                iconClass: 'fa fa-line-chart',
                component: () => import('@/views/dataAnalys/DataView')
            },
            {
                path: '/home/map',
                name: '地图概览',
                iconClass: 'fa fa-line-chart',
                component: () => import('@/views/dataAnalys/MapView')
            },
            {
                path: '/home/scoremap',
                name: 'Cesium地图',
                iconClass: 'fa fa-line-chart',
                component: () => import('@/views/dataAnalys/ScoreMap')
            },
            {
                path: '/home/travemap',
                name: '旅游地图',
                iconClass: 'fa fa-line-chart',
                component: () => import('@/views/dataAnalys/TraveMap')
            }
        ]
    },
    {
        path: '/home',
        name: '用户中心',
        iconClass: 'fa fa-user',
        component: () => import('@/components/Home'),
        children: [
            {
                path: '/home/users',
                name: '权限配置',
                iconClass: 'fa fa-user',
                component: () => import('@/views/users/User')
            }
        ]
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
