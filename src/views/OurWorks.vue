<template>

  <sidebar />
      <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script>
import Sidebar from "@/components/Sidebar";

export default {
  components: {Sidebar}
}
</script>
<style scoped>

.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}
.slide-enter-to {
  position: absolute;
  right: 0;
}
.slide-enter-from {
  position: absolute;
  right: -100%;
}
.slide-leave-to {
  position: absolute;
  left: -100%;
}
.slide-leave-from {
  position: absolute;
  left: 0;
}
</style>