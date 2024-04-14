export const constantRoute = [{
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    // meta: {
    //     title: '登录',
    //     hidden: true,
    //     icon: 'Promotion'
    // }
},
{   
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: '首页',
}]