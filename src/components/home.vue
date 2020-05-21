<template>
  <div>
    <topMenu @innerHeight="changeHeight"></topMenu>
    <router-view :totalHeight="innerHeight"></router-view>
  </div>
</template>
<script>
import topMenu from "../components/topMenu";
export default {
  name: "home",
  data() {
    return {
      innerHeight: window.innerHeight
    };
  },
  components: {
    topMenu
  },
  methods: {
    changeHeight: function(data1) {
      this.innerHeight = data1;
    }
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 700px;
}
</style>
