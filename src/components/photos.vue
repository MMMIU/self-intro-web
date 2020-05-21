<template>
  <div id="photos">
    <div class="photoCoverImg" :style="{backgroundPositionY:(scrollTop/2-100)+'px'}"></div>
    <div class="title">作品集</div>
    <div class="tagsBox" v-show="fixedTags"></div>
    <div class="tags" :class="{'fixedTags':fixedTags}">
      <div class="topBox" v-show="fixedTags"></div>
      <ul>
        <li>
          <div :class="{'light':pane[0]}" @click="changePane(0)">
            <span>照片</span>
            <div class="line" v-show="pane[0]"></div>
          </div>
        </li>
        <li>
          <div :class="{'light':pane[1]}" @click="changePane(1)">
            <span>视频</span>
            <div class="line" v-show="pane[1]"></div>
          </div>
        </li>
      </ul>
    </div>
    <transition name="fade">
      <div id="popUp" :style="{height: popupHeight + 'px'}" v-show="displayPopUp">
        <div id="fullSizePhotoPane"></div>
        <div class="introPane">
          <div class="closeSign" @click="displayPopUp=false;"></div>
          <div id="introContent"></div>
        </div>
        <div class="quitPane" @click="displayPopUp=false;"></div>
      </div>
    </transition>
    <div class="mainPane">
      <transition name="fade2">
        <div id="photosContainer" v-show="pane[0]"></div>
      </transition>
      <transition name="fade2">
        <div id="videosContainer" v-if="pane[1]">
          <div class="videoWrap">
            <!-- <video
              id="video"
              src="../../static/media/videos/天地.mp4"
              controls="controls"
            >您的浏览器不支持 video 标签。</video>-->
            <iframe
              src="//player.bilibili.com/player.html?aid=455814065&bvid=BV1M5411x7w5&cid=193512062&page=1"
              scrolling="no"
              border="0"
              frameborder="no"
              framespacing="0"
              allowfullscreen="true"
              id="video"
            ></iframe>
          </div>
          <!-- <video controls="controls" id="video">
            <source src="../../static/media/videos/天地.mp4" type="video/mp4" />你的浏览器不支持H5播放器
          </video>-->
          <div class="cannotPlay">
            <a href="https://www.bilibili.com/video/BV1M5411x7w5/" target="view_window">不能播放点这里</a>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "Photos",
  components: {},
  data() {
    return {
      covers: [""],
      sizes: {
        width: [""],
        height: [""]
      },
      pane: [true, false],
      windowHeight: window.innerHeight,
      popupHeight: window.innerHeight - 46,
      videoPaneHeight: window.innerHeight - 246,
      displayPopUp: false,
      scrollTop: 0,
      fixedTags: false
    };
  },
  props: ["totalHeight"],
  methods: {
    getImgArr: function() {
      this.covers.length = 0;
      const files = require
        .context("../../static/media/images/photos", false, /.jpg$/)
        .keys();
      for (let item of files) {
        var tmp = item.split("./");
        this.covers.push("../../static/media/images/photos/" + tmp[1]);
      }
    },
    addNewPhoto: function(index) {
      var container = document.getElementById("photosContainer");
      var box = document.createElement("div");
      box.className = "box";
      var image = document.createElement("img");
      image.className = "image";
      image.src = this.covers[index];
      image.indexNumber = index;
      this.getImageSize(this.covers[index]);
      box.appendChild(image);
      const that = this;
      box.addEventListener("click", function(e) {
        that.showFullSize(e.target.indexNumber);
      });
      container.appendChild(box);
    },
    getImageSize: function(source) {
      var start_time = new Date().getTime();
      var img_url = source + "?" + start_time;
      var img = new Image();
      img.src = img_url;
      const that = this;
      var check = function() {
        if (img.width > 0 || img.height > 0) {
          clearInterval(set);
          that.sizes.width.push(img.width);
          that.sizes.height.push(img.height);
        }
      };
      var set = setInterval(check, 40);
    },
    showFullSize: function(index) {
      var pop = document.getElementById("popUp");
      var tmp = this.covers[index].split("/");
      var content = document.createElement("div");
      content.className = "fullImage";
      content.style.backgroundImage =
        "url('../../static/media/images/photos/fullSize/" +
        tmp[tmp.length - 1] +
        "')";
      var photoPane = document.getElementById("fullSizePhotoPane");
      photoPane.innerHTML = "";
      photoPane.appendChild(content);
      var intro = document.getElementById("introContent");
      intro.innerHTML = "";
      var text = document.createElement("div");
      var tmp2 = tmp[tmp.length - 1].split(".");
      text.id = "introText";
      text.innerText = tmp2[0];
      text.style.lineHeight = (this.windowHeight - 45) * 0.9 + "px";
      intro.appendChild(text);
      this.displayPopUp = true;
    },
    scrControl: function(t) {
      if (t == 0) {
        document.addEventListener("DOMMouseScroll", this.scrollFunc, {
          passive: false
        });
        document.addEventListener("mousewheel", this.scrollFunc, {
          passive: false
        });
      } else if (t == 1) {
        document.removeEventListener("DOMMouseScroll", this.scrollFunc, {
          passive: false
        });
        document.removeEventListener("mousewheel", this.scrollFunc, {
          passive: false
        });
      }
    },
    handleScroll: function() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    },
    scrollFunc: function(event) {
      var evt = event || window.event;
      if (evt.preventDefault) {
        // Firefox
        evt.preventDefault();
        evt.stopPropagation();
      } else {
        // IE
        evt.cancelBubble = true;
        evt.returnValue = false;
      }
      return false;
    },
    changePane: function(index) {
      for (var i = 0; i < this.pane.length; i++) {
        if (i == index) {
          Vue.set(this.pane, i, true);
        } else {
          Vue.set(this.pane, i, false);
        }
      }
      if (index == 1) {
        window.scrollTo(0, 300);
      }
    }
  },
  mounted() {
    this.getImgArr();
    for (var i = 0; i < this.covers.length; i++) {
      this.addNewPhoto(i);
    }
    window.addEventListener("scroll", this.handleScroll);
  },
  watch: {
    totalHeight: function(totalHeight) {
      this.windowHeight = totalHeight;
      this.popupHeight = totalHeight - 46;
      this.videoPaneHeight = totalHeight - 246;
      var introText = document.getElementById("introText");
      if (introText != null) {
        introText.style.lineHeight = (this.windowHeight - 45) * 0.9 + "px";
      }
    },
    displayPopUp: function() {
      if (this.displayPopUp) {
        this.scrControl(0);
      } else {
        this.scrControl(1);
      }
    },
    scrollTop: function() {
      if (this.scrollTop >= 400) {
        this.fixedTags = true;
      } else {
        this.fixedTags = false;
      }
    }
  }
};
</script>

<style>
#photos {
  height: auto;
  background-color: white;
  font-family: "仿宋";
  background-size: auto 100%;
  width: 100%;
  min-width: 800px;
}
#photos .photoCoverImg {
  margin-top: 46px;
  width: 100%;
  height: 300px;
  background-image: url("../../static/media/images/photos/2M3A7515.jpg");
  background-repeat: no-repeat;
  background-size: 110% auto;
}
#photos .title {
  width: 100%;
  height: 100px;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
}
#photos .tags {
  width: 100%;
  height: 50px;
  border-top: 1px solid rgb(200, 200, 200);
  border-bottom: 1px solid rgb(200, 200, 200);
  text-align: center;
  background-color: white;
  transition: 0.3s;
  min-width: 800px;
}
#photos .tagsBox {
  width: 100%;
  height: 50px;
}
#photos .topBox {
  width: 100%;
  height: 46px;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: whitesmoke;
}
#photos .fixedTags {
  background-color: whitesmoke;
  position: fixed;
  z-index: 9999;
  top: 46px;
}
#photos .fixedTags:hover {
  background-color: whitesmoke;
}
#photos .tags .line {
  width: 100%;
  height: 2px;
  background-color: #66cae2;
}
#photos .light {
  color: #66cae2;
  background-color: rgba(200, 200, 200, 0.1);
}
#photos .tags ul {
  list-style: none;
}
#photos .tags ul li {
  cursor: pointer;
  position: relative;
  display: inline-block;
}
#photos .tags ul li div {
  width: 100px;
  height: 100%;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  transition: 0.3s;
}
#photos .tags ul li div:hover {
  color: #66cae2;
}
#photos .mainPane {
  padding: 0 2.5%;
  width: 95%;
  height: auto;
  margin: 0px auto;
  min-width: 700px;
  background-color: rgba(193, 210, 240, 0.2);
}
#photosContainer {
  margin-top: 30px;
  columns: 4;
  column-gap: 10px;
}
#photos .box {
  width: 100%;
  height: auto;
}
#photos .box .image {
  width: 100%;
  height: auto;
}
#popUp {
  width: 100%;
  position: fixed;
  z-index: 999999999;
  top: 46px;
  background-color: rgba(0, 0, 0, 0.5);
  min-width: 700px;
}
#fullSizePhotoPane {
  position: relative;
  width: 70%;
  height: 90%;
  left: 3%;
  top: 3%;
  background-color: whitesmoke;
}
#photos .quitPane {
  width: 100%;
  height: 100%;
}
#photos .fullImage {
  position: relative;
  width: 95%;
  height: 90%;
  top: 5%;
  left: 2.5%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.introPane {
  position: absolute;
  width: 22%;
  height: 90%;
  left: 75%;
  top: 3%;
  background-color: whitesmoke;
}
#introContent {
  position: absolute;
  width: 100%;
  height: 100%;
}
#introText {
  width: 100%;
  height: 100%;
  margin: 0px auto;
  font-size: 30px;
  text-align: center;
}
#photos .closeSign {
  z-index: 9999;
  position: absolute;
  width: 30px;
  height: 30px;
  margin-left: calc(100% - 40px);
  margin-top: 10px;
  background-image: url("../../static/img/close.png");
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: 0.3s;
}
#photos .closeSign:hover {
  background-image: url("../../static/img/closeC.png");
}
#videosContainer {
  width: 100%;
  height: auto;
  padding: 5% 0;
  position: relative;
}
#photos .videoWrap {
  position: relative;
  width: 100%;
  height: 90%;
}
#video {
  width: 80%;
  height: 500px;
  margin-left: 10%;
  background-color: black;
}
#photos a:link,
#photos a:visited {
  color: #aaaaaa;
  text-decoration: none;
  transition: 0.3s;
}
#photos a:hover {
  color: #66cae2;
}
#photos .cannotPlay {
  width: 100%;
  text-align: center;
  margin: 0 auto;
}
#photos .fade-enter-active {
  transition: all 0.5s ease;
}
#photos .fade-leave-active {
  transition: 0.5s ease;
}
#photos .fade-enter {
  opacity: 0;
}
#photos .fade-leave-to {
  opacity: 0;
}
#photos .fade2-enter-active {
  transition-delay: 0.5s;
  transition: all 0.5s ease;
}
#photos .fade2-leave-active {
  transition: 0s;
}
#photos .fade2-enter {
  opacity: 0;
}
#photos .fade2-leave-to {
  opacity: 0;
}
@media screen and (max-width: 1500px) {
  #photosContainer {
    columns: 3;
  }
}
@media screen and (max-width: 1200px) {
  #photosContainer {
    columns: 2;
  }
}
@media screen and (max-width: 900px) {
  #photosContainer {
    columns: 1;
  }
}
</style>
