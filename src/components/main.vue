<template>
  <div class="main">
    <a href="http://www.quickconnect.to/MMMIU">link</a>
  </div>
</template>

<script>
import topMenu from "./topMenu";
export default {
  components: {
    topMenu
  },
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
