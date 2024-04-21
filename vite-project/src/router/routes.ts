export const constantRoute = [
    {
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
        component: () => import('@/layout/index.vue'),
        name: 'layout',
    }]