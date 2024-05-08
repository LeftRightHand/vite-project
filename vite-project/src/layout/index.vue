<template>
    <div class="layout_container">
        <div class="layout_slider" :class="{ fold: layoutSettingStore.fold ? true : false }">
            <Logo></Logo>
            <el-scrollbar class="scrollbar">
                <el-menu :collapse="layoutSettingStore.fold ? true : false" :default-active="$route.path"
                    background-color="001529" text-color="white">
                    <Menu :menuList="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <div class="layout_tabbar" :class="{ fold: layoutSettingStore.fold ? true : false }">
            <Tabbar></Tabbar>
        </div>
        <div class="layout_main" :class="{ fold: layoutSettingStore.fold ? true : false }">
            <Main></Main>
        </div>
    </div>
</template>

<script setup lang="ts">

import { useRoute } from 'vue-router';

import Logo from './logo/index.vue';

import Menu from './menu/index.vue';

import Tabbar from './tabbar/index.vue';

import Main from './main/index.vue';

import useUserStore from '@/store/modules/user';
//layout配置仓库
import useLayoutSettingStore from '@/store/modules/setting';

const layoutSettingStore = useLayoutSettingStore();
const userStore = useUserStore();
const $route = useRoute()

</script>
<script lang="ts">
export default {
    name: 'Layout'
}
</script>
<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;

    .layout_slider {
        color: white;
        width: $base-menu-width;
        height: 100vh;
        background: $base-menu-background;
        transition: all 0.3s;

        .scrollbar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height);

            .el-menu {
                border-right: none;
            }
        }

        &.fold {
            width: $base-menu-min-width;
        }
    }

    .layout_tabbar {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        left: $base-menu-width;
        top: 0px;
        transition: all 0.3s;

        &.fold {
            width: calc(100vh - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }

    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-tabbar-height);
        left: $base-menu-width;
        top: $base-tabbar-height;
        overflow: auto;
        background-color: white;
        padding: 20px;
        transition: all 0.3s;

        &.fold {
            width: calc(100vh - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }
}
</style>