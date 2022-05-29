<template>
  <div class="container">
    <router-view :test="test"></router-view>
  </div>
</template>

<script>
import test from "./util.js";

export default {
  name: "App",
  data() {
    return {
      test: test,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
