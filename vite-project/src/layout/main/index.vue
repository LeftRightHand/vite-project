<template>
    <router-view v-slot="{ Component }">
        <Transition name="fade">
            <component :is="Component" v-if="flag" />
        </Transition>
    </router-view>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting';
import { nextTick, ref, watch } from 'vue';
const layoutSettingStore = useLayoutSettingStore();
const flag = ref(true)
watch(() => layoutSettingStore.refresh, () => {
    flag.value = false
    nextTick(()=>{
        flag.value = true
    })
})

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>