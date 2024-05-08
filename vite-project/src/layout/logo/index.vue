<template>
    <div class="logo">
        <img src="../../../public/logo.png" alt="">
        <p>后台管理系统</p>
    </div>
</template>

<script setup lang="ts">

</script>
<script lang="ts">
export default {
    name: 'Logo'
}
</script>
<style scoped lang="scss">
.logo {
    width: 100%;
    height: $base-menu-logo-height;
    display: flex;
    align-items: center;
    padding: 10px;
    color: white;
    img {
        width: 40px;
        height: 40px;
    }
    p {
        font-size: $base-logo-title-fontSize;
        margin-left: 10px;
    }
}
</style>