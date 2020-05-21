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
    <webFooter></webFooter>
  </div>
</template>
<script>
import home from "./components/home";
import webFooter from "./components/footer";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    home,
    webFooter
  },
  mounted() {}
};
</script>
