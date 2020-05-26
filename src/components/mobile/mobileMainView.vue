<template>
  <div id="mobileMainView" :style="{height:totalHeight+'px'}">
    <div class="mobileMainPane">
      <div class="mobileMainViewCoverPane"></div>
    </div>
    <div class="logoBox">
      <div class="myLogo"></div>
      <h2 class="name">MMMIU</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "mobileMainView",
  data() {
    return {
      covers: [""],
      imageIndex: 0
    };
  },
  components: {},
  methods: {
    getImgArr: function() {
      this.covers.length = 0;
      const files = require
        .context("../../../static/media/images/mainViewCover", false, /.jpg$/)
        .keys();
      for (let item of files) {
        var tmp = item.split("./");
        this.covers.push(
          "../../../static/media/images/mainViewCover/" + tmp[1]
        );
      }
    }
  },
  props: ["totalHeight"],
  mounted() {}
};
</script>
<style>
#mobileMainView {
  width: 100%;
  background-color: #333;
}
#mobileMainView .mobileMainPane {
  width: 100%;
  height: 100%;
}
#mobileMainView .mobileMainViewCoverPane {
  width: 100%;
  height: 100%;
  background-image: url("../../../static/media/images/mainViewCover/邂逅.jpg");
  background-size: cover;
  background-position: center;
}
#mobileMainView .logoBox {
  position: absolute;
  width: 100%;
  height: 75px;
  bottom: 0px;
  background-color: white;
}
#mobileMainView .myLogo {
  width: 80px;
  height: 80px;
  margin: -40px auto;
  background-image: url("../../../static/img/selfie.jpg");
  background-size: cover;
  background-color: white;
  border-radius: 50%;
  border: 2px solid white;
}
#mobileMainView .name {
  margin-top: 40px;
  width: 100%;
  height: 25px;
  line-height: 25px;
  text-align: center;
}
</style>
