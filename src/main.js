import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn'
import request from './utils/request';
import router from './router'
import echarts from 'echarts';

const app = createApp(App);

app.config.productionTip = false;

app.use(ElementPlus, { locale });

app.config.globalProperties.$request = request
app.config.globalProperties.$echarts = echarts;
//路由导航守卫
// 当你没登陆的情况下,强制登录
router.beforeEach((to, from, next) => {
    if (!localStorage.getItem('token')) {
        if (to.path !== '/login') {
            next('/login')
        } else next()
    } next()
});

app.use(router).mount('#app');
