<template>
    <el-icon style="margin-right: 20px;" @click="changeIcon">
        <component :is="layoutSettingStore.fold ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index">
            <el-icon style="margin-right: 10px;">
                <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import useLayoutSettingStore from '@/store/modules/setting';
const $route = useRoute();
const layoutSettingStore = useLayoutSettingStore();
const fold = ref(false);
const changeIcon = () => {
    layoutSettingStore.fold = !layoutSettingStore.fold
}
</script>
<script lang="ts">
export default {
    name: 'Breadcrumb'
}
</script>
<style scoped></style>