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
    </div>
    <div class="counter">中国时间：{{date}}</div>
    <a href="mailto:1822157830@qq.com?subject=反馈：">
      <div class="contact">
        联系方式：1822157830@qq.com
        <br />©Yifei Miao, 2020
      </div>
    </a>
    <div class="logoBox">
      <div class="myLogo"></div>
    </div>
    <h2 class="name">Yifei Miao</h2>
  </div>
</template>

<script>
import image0 from "../../static/img/邂逅.jpg";
import image1 from "../../static/img/上海.jpg";
import image2 from "../../static/img/人马共辉.jpg";
import image3 from "../../static/img/天池.jpg";
import image4 from "../../static/img/龙井早春.jpg";
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
      covers: [image0, image1, image2, image3, image4],
      show: false,
      firstTime: true
    };
  },
  methods: {
    menu: function() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
    },
    timer: function() {
      setInterval(() => {
        this.firstTime = false;
        this.index2 = this.index;
        this.index = (this.index + 1) % this.covers.length;
        this.changeImg(this.index);
      }, 10000);
    },
    changeImg: function() {
      this.show = false;
      setTimeout(() => {
        this.show = true;
      }, 100);
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
    this.timer();
    this.show = true;
    this.realtime();
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
.myLogo {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background-image: url("../../static/img/logo3.png");
  background-size: cover;
  background-color: white;
  border-radius: 50%;
  border: 2px solid white;
}
.counter {
  float: left;
  margin-top: 70px;
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
</style>
