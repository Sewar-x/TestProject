<template>
  <div class="home-page">
    <router-link class="button" :to="{ name: 'exponents' }">
      view exponents</router-link
    >
  </div>
</template>
<script>
export default {
  name: "home",
};
</script>
<style lang="scss" scoped>
.home-page {
  display: flex;
  justify-content: center;
  .button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
}
</style>