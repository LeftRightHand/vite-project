<template>
    <div class="layout_container">
        <div class="layout_slider">
            <Logo></Logo>
        </div>
        <div class="layout_tabbar">456</div>
        <div class="layout_main">789</div>
    </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
</script>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;
    background-color: red;

    .layout_slider {
        color: white;
        width: $base-menu-width;
        height: 100vh;
        background: $base-menu-background;
        // transition: all 0.3s;
    }

    .layout_tabbar {
        position: fixed;
        background-color: yellow;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        left: $base-menu-width;
        top: 0px;
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
    }
}
</style>