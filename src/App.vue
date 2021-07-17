<template>
  <transition id="app" name="component-fade" mode="out-in" duration="100">
    <router-view />
  </transition>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>