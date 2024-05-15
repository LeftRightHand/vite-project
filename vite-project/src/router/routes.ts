import { fa, tr } from 'element-plus/es/locales.mjs';

export const constantRoute = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login',
        meta: {
            title: '登录',
            hidden: true,
            icon: 'Promotion'
        }
    },
    {
        path: '/',
        component: () => import('@/layout/index.vue'),
        name: 'layout',
        meta: {
            title: '',
            hidden: false,
            icon: ''
        },
        redirect: '/home',
        children: [
            {
                path: '/',
                component: () => import('@/views/home/index.vue'),
                name: 'home',
                meta: {
                    title: '首页',
                    icon: 'HomeFilled',
                    hidden: false,
                }
            }
        ]
    },
    {
        path: '/other',
        component: () => import('@/layout/index.vue'),
        meta: {
            title: '文章管理',
            icon: 'HomeFilled'
        },
        children: [
            {
                path: '/markdown',
                component: () => import('@/views/home/index.vue'),
                name: '文章发布',
                meta: {
                    title: '文章发布',
                    icon: 'Comment'
                }
            },
            {
                path: '/editor',
                component: () => import('@/views/home/index.vue'),
                name: '富文本',
                meta: {
                    title: '富文本',
                    icon: 'Edit'
                }
            },
            {
                path: '/categories',
                component: () => import('@/views/home/index.vue'),
                name: '文章分类',
                meta: {
                    title: '文章分类',
                    icon: 'Bell'
                }
            },
            {
                path: '/article_list',
                component: () => import('@/views/home/index.vue'),
                name: '文章列表',
                meta: {
                    title: '文章列表',
                    icon: 'More'
                }
            }
        ]
    },
    {
        path: '/acl',
        component: () => import('@/layout/index.vue'),
        name: 'Acl',
        meta: {
            title: '权限管理',
            icon: 'Lock',
            hidden: false
        },
        children: [
            {
                path: '/acl/user',
                component: () => import('@/views/acl/user/index.vue'),
                name: 'Acl',
                meta: {
                    title: '用户管理',
                    icon: 'HomeFilled'
                }
            },
            {
                path: '/acl/role',
                component: () => import('@/views/acl/role/index.vue'),
                name: 'Role',
                meta: {
                    title: '用户管理',
                    icon: 'User'
                }
            },
        ]
    },
    {
        path: '/product',
        component: () => import('@/layout/index.vue'),
        name: 'Product',
        meta: {
            title: '商品管理',
            icon: 'Goods',
        },
        redirect: '/product/trademark',
        children: [
            {
                path: '/product/trademark',
                component: () => import('@/views/product/trakemark/index.vue'),
                name: "Trademark",
                meta: {
                    title: '品牌管理',
                    icon: 'ShoppingCartFull',
                }
            },
            {
                path: '/product/attr',
                component: () => import('@/views/product/trakemark/index.vue'),
                name: "Attr",
                meta: {
                    title: '属性管理',
                    icon: 'ChromeFilled',
                }
            },
            {
                path: '/product/spu',
                component: () => import('@/views/product/trakemark/index.vue'),
                name: "Spu",
                meta: {
                    title: 'SPU管理',
                    icon: 'Calendar',
                }
            },
            {
                path: '/product/sku',
                component: () => import('@/views/product/trakemark/index.vue'),
                name: "Sku",
                meta: {
                    title: 'SKU管理',
                    icon: 'Orange',
                }
            },
        ]
    }
]