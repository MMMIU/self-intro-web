<template>
  <div id="app">
    <topMenu></topMenu>
    <router-view />
  </div>
</template>

<script>
import topMenu from "./components/topMenu";
export default {
  components: {
    topMenu
  },
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 2000px;
  background-color: #f0f0f0;
}
</style>
