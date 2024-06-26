import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import 'virtual:svg-icons-register'

import '@/styles/index.scss'

import router from './router'

import pinia from "./store";

import components from "@/components";

import './pemisstion';

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn
});
app.use(components)
app.use(pinia)
app.use(router)

app.mount("#app");
