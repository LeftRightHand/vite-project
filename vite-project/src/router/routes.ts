import { tr } from 'element-plus/es/locales.mjs';

export const constantRoute = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login',
        meta: {
            title: '登录',
            hidden: true,
            icon:'Promotion'
        }
    },
    {
        path: '/',
        component: () => import('@/layout/index.vue'),
        name: 'layout',
        meta: {
            title: 'layout',
            hidden: true
        }
    },
    {
        path: '/other',
        component: () => import('@/views/404/index.vue'),
        meta: {
            title: '其他',
            icon: 'HomeFilled'
        },
        children: [
            {
                path: '/markdown',
                component: () => import('@/views/home/index.vue'),
                name: '文章发布',
                meta: {
                    title: '文章发布',
                    icon: 'HomeFilled'
                }
            },
            {
                path: '/editor',
                component: () => import('@/views/home/index.vue'),
                name: '富文本',
                meta: {
                    title: '富文本',
                    icon: 'HomeFilled'
                }
            },
            {
                path: '/categories',
                component: () => import('@/views/home/index.vue'),
                name: '文章分类',
                meta: {
                    title: '文章分类',
                    icon: 'HomeFilled'
                }
            },
            {
                path: '/article_list',
                component: () => import('@/views/home/index.vue'),
                name: '文章列表',
                meta: {
                    title: '文章列表',
                    icon: 'HomeFilled'
                }
            }
        ]
    },
    {
        path: '/dashboard',
        component: () => import('@/views/404/index.vue'),
        name: 'dashboard',
        meta: {
            title: ''
        },
        children:[
            {
              path: '/dashboard',
              component: () => import('@/views/home/index.vue'),
              name: '系统首页',
              meta: {
                  title: '系统首页',
                  icon: 'HomeFilled'
              }
            }
        ]
    }
]