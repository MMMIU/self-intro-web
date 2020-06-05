<template>
  <div id="mobileMainView" :style="{height:totalHeight+'px'}">
    <div id="mobileMainPane">
      <transition name="fade">
        <div id="mobileMainViewCoverPane" v-show="show"></div>
      </transition>
    </div>
    <div class="arrow leftArrow" @click="switchImage(imageIndex==0?covers.length-1:imageIndex-1)"></div>
    <div class="arrow rightArrow" @click="switchImage(imageIndex==covers.length-1?0:imageIndex+1)"></div>
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
      imageIndex: 0,
      show: true
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
    },
    switchImage: function(index) {
      this.show = false;
      this.imageIndex = index;
      var pane = document.getElementById("mobileMainViewCoverPane");
      var backPane = document.getElementById("mobileMainPane");
      pane.style.backgroundImage = "url('" + this.covers[index] + "')";
      setTimeout(() => {
        this.show = true;
      }, 100);
      var preImage = new Image();
      preImage.src = this.covers[
        index == 0 ? this.covers.length - 1 : index - 1
      ];
      var nxtImage = new Image();
      nxtImage.src = this.covers[
        index == this.covers.length - 1 ? 0 : index + 1
      ];
    }
  },
  props: ["totalHeight"],
  mounted() {
    this.getImgArr();
    this.switchImage(0);
  }
};
</script>
<style>
#mobileMainView {
  width: 100%;
  background-color: #333;
}
#mobileMainView #mobileMainPane {
  width: 100%;
  height: 100%;
}
#mobileMainView #mobileMainViewCoverPane {
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
#mobileMainView .arrow {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  margin-top: -20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.3s;
  cursor: pointer;
}
#mobileMainView .rightArrow {
  right: 10px;
  background-image: url("../../../static/img/arrowRight.png");
}
#mobileMainView .leftArrow {
  left: 10px;
  background-image: url("../../../static/img/arrowLeft.png");
}
#mobileMainView .rightArrow:hover {
  background-image: url("../../../static/img/arrowRightC.png");
}
#mobileMainView .leftArrow:hover {
  background-image: url("../../../static/img/arrowLeftC.png");
}
#mobileMainView .fade-enter-active {
  transition: all 0.5s ease;
}
#mobileMainView .fade-leave-active {
  transition: all 0s ease;
}
#mobileMainView .fade-enter {
  opacity: 0;
}
#mobileMainView .fade-leave-to {
  opacity: 0;
}
</style>
