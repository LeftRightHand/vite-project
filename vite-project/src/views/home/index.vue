<template>
    <div>
        <p>首页{{ userStore.username }}</p>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import useUserStore from '@/store/modules/user';
const userStore = useUserStore();
//首页挂载完毕的请求
onMounted(()=>{
    let result = userStore.userInfo();
})
</script>

<style scoped>

</style>