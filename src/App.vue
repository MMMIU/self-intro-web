<template>
  <div
    id="app"
    oncontextmenu="return false"
    onselectstart="return false"
    ondragstart="return false"
    onbeforecopy="return false"
    oncopy="document.selection.empty()"
    onselect="document.selection.empty()"
  >
    <home></home>
  </div>
</template>
<script>
import home from "./components/home";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    home
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
