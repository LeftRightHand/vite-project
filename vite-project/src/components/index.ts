//引入项目中的全局组件
import Category from './Category/index.vue'

import { install } from "element-plus";

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const allGloablComponent: any = { Category };
//对外暴露插件对象
export default {
    install(app: any) {
        Object.keys(allGloablComponent).forEach(key => {
            app.component(key, allGloablComponent[key]);
        })
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}