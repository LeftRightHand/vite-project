<template>
    <el-button size="small" icon="Refresh" circle @click="updateRefresh"></el-button>
    <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
    <el-button size="small" icon="Setting" circle></el-button>
    <img :src="userStore.avatar" alt="" style="width: 24px; height: 24px; margin: 0 10px; border-radius: 50%;">
    <el-dropdown>
        <span class="el-dropdown-link">
            {{ userStore.username }}
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">

import { useRouter, useRoute } from 'vue-router';

import useLayoutSettingStore from '@/store/modules/setting';

import useUserStore from '@/store/modules/user';
//路由
const $router = useRouter();
const $route = useRoute();
//用户的仓库信息
const userStore = useUserStore();
//设置的仓库
const layoutSettingStore = useLayoutSettingStore();
const updateRefresh = () => {
    layoutSettingStore.refresh = !layoutSettingStore.refresh
}
const fullScreen = () => {
    const full = document.fullscreenElement;
    if (!full) {
        document.documentElement.requestFullscreen();
    } else {
        //退出全屏
        document.exitFullscreen();
    }
}
const logout = async () => {
    await userStore.userLogout();
    $router.push({
        path: '/login',
        query: { redirect: $route.path }
    });
}
</script>
<script lang="ts">
export default {
    name: 'Setting'
}
</script>
<style scoped></style>