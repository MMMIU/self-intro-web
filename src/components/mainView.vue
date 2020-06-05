<template>
  <div id="mainView" :style="{height: (totalHeight + 1)+'px'}">
    <div
      class="box"
      :style="{height:(totalHeight - 100)+'px',backgroundImage: firstTime?'none':'url(' + covers[index2] + ')'}"
    >
      <transition name="fade">
        <div
          class="coverImg"
          v-if="show"
          :style="{backgroundImage: 'url(' + covers[index] + ')',height:(totalHeight - 100)+'px',backgroundPositionY:(scroll/2)+'px'}"
        ></div>
      </transition>
      <transition name="fade2">
        <div class="autoPlayOff" v-show="autoPlayOffStatus">自动图片切换已关闭</div>
      </transition>
      <div class="arrow leftArrow" @click="changeImg(index==0?covers.length-1:index-1),arrowUsed()"></div>
      <div
        class="arrow rightArrow"
        @click="changeImg(index==covers.length-1?0:index+1),arrowUsed()"
      ></div>
    </div>
    <div class="counter">
      不支持部分老式浏览器
      <br />
      <a href="http://www.shijian.cc/shiqu/156/" target="view_window">中国时间：{{date}}</a>
    </div>
    <div class="contact">
      <a href="mailto:1822157830@qq.com?subject=反馈：">联系方式：1822157830@qq.com</a>
      <br />
      <router-link to="/thanks" target="view_window">
        <a>感谢</a>
      </router-link>
    </div>
    <div class="logoBox">
      <div class="myLogo"></div>
    </div>
    <h2 class="name">MMMIU</h2>
  </div>
</template>

<script>
export default {
  components: {},
  name: "mainView",
  data() {
    return {
      date: new Date(),
      windowHeight: window.innerHeight + 1,
      coverHeight: window.innerHeight - 100,
      scroll: 0,
      index: 0,
      index2: 0,
      covers: [""],
      show: false,
      firstTime: true,
      useTimer: true,
      autoPlayOffStatus: false
    };
  },
  methods: {
    menu: function() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
    },
    timer: function() {
      var timeTen = setInterval(() => {
        this.firstTime = false;
        if (this.useTimer) {
          this.changeImg((this.index + 1) % this.covers.length);
        }
      }, 10000);
    },
    changeImg: function(index) {
      this.show = false;
      this.index2 = this.index;
      this.index = index;
      setTimeout(() => {
        this.show = true;
      }, 100);
      let preload = new Image();
      preload.src = this.covers[(this.index + 1) % this.covers.length];
    },
    arrowUsed: function() {
      if (this.useTimer) {
        this.autoPlayOffStatus = true;
        setTimeout(() => {
          this.autoPlayOffStatus = false;
        }, 3000);
      }
      this.useTimer = false;
    },
    realtime: function() {
      const that = this;
      that.getTime();
      setInterval(() => {
        that.getTime();
      }, 1000);
    },
    getTime: function() {
      var timezone = 8;
      var offset_GMT = new Date().getTimezoneOffset();
      var nowDate = new Date().getTime();
      this.date = this.formatDate(
        new Date(nowDate + offset_GMT * 60 * 1000 + timezone * 60 * 60 * 1000)
      );
    },
    formatDate: function(date) {
      return (
        date.getFullYear() +
        "-" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + date.getDate()).slice(-2) +
        " " +
        ("0" + date.getHours()).slice(-2) +
        ":" +
        ("0" + date.getMinutes()).slice(-2) +
        ":" +
        ("0" + date.getSeconds()).slice(-2)
      );
    },
    getImgArr: function() {
      this.covers.length = 0;
      const files = require
        .context("../../static/media/images/mainViewCover", false, /.jpg$/)
        .keys();
      for (let item of files) {
        var tmp = item.split("./");
        this.covers.push("../../static/media/images/mainViewCover/" + tmp[1]);
      }
    }
  },
  props: ["totalHeight"],
  watch: {
    totalHeight: function(totalHeight) {
      this.windowHeight = totalHeight + 1;
      this.coverHeight = totalHeight - 100;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
    this.getImgArr();
    this.timer();
    this.show = true;
    this.realtime();
  },
  beforeCreate() {
    let image = new Image();
    image.src = 'url("../../static/media/images/mainViewCover/上海.jpg")';
  }
};
</script>

<style scoped>
#mainView {
  height: 100%;
  background-color: rgb(255, 245, 247);
  margin: 0px;
  min-width: 800px;
}
.box {
  width: 100%;
  background-color: rgb(150, 150, 150);
  background-position: top;
  background-size: cover;
}
.coverImg {
  z-index: -1;
  width: 100%;
  background-position: top;
  background-size: cover;
  background-color: rgb(255, 245, 247);
}
.logoBox {
  position: absolute;
  width: 100%;
  height: auto;
  margin: -50px 0;
  min-width: 800px;
}
.arrow {
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
.rightArrow {
  right: 10px;
  background-image: url("../../static/img/arrowRight.png");
}
.leftArrow {
  left: 10px;
  background-image: url("../../static/img/arrowLeft.png");
}
.rightArrow:hover {
  background-image: url("../../static/img/arrowRightC.png");
}
.leftArrow:hover {
  background-image: url("../../static/img/arrowLeftC.png");
}
.autoPlayOff {
  width: 200px;
  height: 50px;
  background-color: whitesmoke;
  position: fixed;
  top: 50px;
  left: calc(50% - 100px);
  box-shadow: 0px 0px 5px #888888;
  text-align: center;
  line-height: 50px;
}
.myLogo {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background-image: url("../../static/img/selfie.jpg");
  background-size: cover;
  background-color: white;
  border-radius: 50%;
  border: 2px solid white;
}
.counter {
  float: left;
  margin-top: 55px;
  margin-left: 10px;
  font-size: 13px;
  color: #aaaaaa;
  line-height: 20px;
  text-align: left;
}
.contact {
  float: right;
  margin-top: 55px;
  margin-right: 10px;
  font-size: 13px;
  color: #aaaaaa;
  line-height: 20px;
  text-align: right;
}
.contact a {
  float: right;
  margin-left: 5px;
}
.name {
  width: 200px;
  height: 25px;
  margin: 60px auto 0px auto;
  line-height: 25px;
  text-align: center;
}
.line {
  border: none;
  outline: none;
  height: 0px;
  border-bottom: dotted 3px #000;
}
.line1 {
  margin: 21px 20px auto 20px;
}
a:link,
a:visited {
  color: #aaaaaa;
  text-decoration: none;
  transition: 0.3s;
}
a:hover {
  color: #66cae2;
}
.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-leave-active {
  transition: 0s;
}
.fade-enter {
  transform: translateY(45px);
  opacity: 0;
}
.fade2-enter-active {
  transition: all 0.5s ease;
}
.fade2-leave-active {
  transition: all 0.5s ease;
}
.fade2-enter {
  transform: translateY(45px);
  opacity: 0;
}
.fade2-leave-to {
  opacity: 0;
}
</style>
