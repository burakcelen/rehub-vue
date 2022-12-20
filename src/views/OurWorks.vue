<template>
  <div class="d-flex align-items-center justify-content-end">
<div class="row">
<nav-bar></nav-bar>
</div>
    <div class="row w-100 h-100 g-0" >
      <div class="col-md-2 p-0">
  <sidebar />
      </div>
      <div class="col-md-10 p-0 ">
        <div class="h-100">
      <router-view v-slot="{ Component, route }">
    <transition name="slide-fade">
      <component :is="Component" />
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
.slide-fade-enter-active {
  transition: all .45s ease;
}
.slide-fade-leave-active {
  transition: all .45s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100%);
  opacity: 0;
}


</style>