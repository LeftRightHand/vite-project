import router from "@/router";
//@ts-ignore
import NProgress from 'nprogress';
import "nprogress/nprogress.css";
//全局前置守卫
router.beforeEach((to: any, from: any, next: any)=>{
    NProgress.start();
    next();
})
//全局后置守卫
router.afterEach((to: any, from: any)=>{
    NProgress.done();
})