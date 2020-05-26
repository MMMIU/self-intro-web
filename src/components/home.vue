<template>
  <div>
    <topMenu @innerHeight="changeHeight" v-if="pc"></topMenu>
    <mobileTopMenu @innerHeight="changeHeight" v-if="!pc"></mobileTopMenu>
    <router-view :totalHeight="innerHeight"></router-view>
    <webFooter @changeView="changeView"></webFooter>
  </div>
</template>
<script>
import topMenu from "../components/topMenu";
import mobileTopMenu from "../components/mobile/mobileTopMenu";
import webFooter from "../components/footer";
export default {
  name: "home",
  data() {
    return {
      innerHeight: window.innerHeight,
      pc: this.isMobile()
    };
  },
  components: {
    topMenu,
    webFooter,
    mobileTopMenu
  },
  methods: {
    changeHeight: function(data1) {
      this.innerHeight = data1;
    },
    changeView: function(data1) {
      if (data1 == "pc") {
        this.pc = true;
      } else {
        this.pc = false;
      }
    },
    linktab: function() {
      let goUrl = this.isMobile();
      if (goUrl && this.pc) {
        this.pc = false;
        this.$router.push({ path: "/mobile" });
      } else if (!goUrl && !this.pc) {
        this.pc = true;
        this.$router.push({ path: "/home" });
      }
    },
    isMobile: function() {
      return navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
    }
  },
  mounted() {
    this.linktab();
  },
  watch: {}
};
</script>
<style>
</style>
