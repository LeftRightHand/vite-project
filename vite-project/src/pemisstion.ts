import router from "@/router";
//@ts-ignore
import NProgress from 'nprogress';
import "nprogress/nprogress.css";

import useUserStore from "./store/modules/user";

import pinia from "./store";
import setting from "./setting";
NProgress.configure({ showSpinner: false })
let userStore = useUserStore(pinia);
let username = userStore.username;
//全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {
    document.title = `${setting.title} - ${to.meta.title}`
    NProgress.start();
    let token = userStore.token;
    if (token) {
        //已经登录过跳到首页
        if (to.path == '/login') {
            next({ path: '/' })
        } else {
            if (username) {
                next()
            } else {
                try {
                    //获取用户数据
                    await userStore.userInfo()
                    next()
                } catch (error) {
                    await userStore.userLogout()
                    next({ path: '/login', query: { redirect: to.path } })
                }
            }
        }
    } else {
        if (to.path == '/login') {
            next();
        } else {
            next({ path: '/login', query: { redirect: to.path } })
        }
    }
})
//全局后置守卫
router.afterEach((to: any, from: any) => {
    NProgress.done();
})