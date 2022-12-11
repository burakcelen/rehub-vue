<template>
  <div class="d-flex align-items-center justify-content-center bg-danger">
<div class="row">
<nav-bar></nav-bar>
</div>
    <div class="row w-100 h-100 g-0" >
      <div class="col-md-2 p-0">
  <sidebar />
      </div>
      <div class="col-md-10">
        <div class="h-100" style="padding:3.5rem 0 .5rem;">
      <router-view v-slot="{ Component, route }">
    <transition name="slide">
      <component :is="Component" :key="route.path"/>
    </transition>
  </router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar";
import NavBar from "@/components/NavBar";

export default {
  components: {NavBar, Sidebar, }
}
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-in;
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
  left: -80%;
}
.slide-leave-from {
  position: absolute;
  left: 25%;
}
</style>