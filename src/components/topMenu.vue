<template>
  <div id="topMenu">
    <div class="leftMenu" @mouseover="pullLeftMenuPanel" @mouseout="foldLeftMenuPanel">
      <img
        class="leftmenulogo"
        src="../../static/img/leftmenulogo.png"
        alt="M"
        :class="{'light':lightOn}"
        ondragstart="return false"
        onselectstart="return false"
      />
      <div
        class="leftMenuPanel"
        :style="{height:leftMenuPanelHeight+'px',left:leftMenuPanelPosition+'px'}"
      >
        <h4>工具箱</h4>
        <div class="line"></div>
        <ul class="toolsNav">
          <li>
            <a href target="view_window">
              <div>计算器（即将可用）</div>
            </a>
          </li>
          <!-- <li>
            <a href target="view_window">
              <div>摄影</div>
            </a>
          </li>
          <li>
            <a href target="view_window">
              <div>摄影</div>
            </a>
          </li>
          <li>
            <a href target="view_window">
              <div>摄影</div>
            </a>
          </li>-->
        </ul>
      </div>
    </div>
    <ul class="mainNav">
      <li>
        <router-link to="/" target="view_window">
          <a>
            <div>首页</div>
          </a>
        </router-link>
      </li>
      <li>
        <router-link to="/aboutme" target="view_window">
          <a>
            <div>关于我</div>
          </a>
        </router-link>
      </li>
      <li>
        <router-link to="/photos" target="view_window">
          <a>
            <div>摄影</div>
          </a>
        </router-link>
      </li>
      <!-- <li>
        <router-link to="/aboutme" target="view_window">
          <a>
            <div>编程</div>
          </a>
        </router-link>
      </li>
      <li>
        <router-link to="/aboutme" target="view_window">
          <a>
            <div>文章</div>
          </a>
        </router-link>
      </li>-->
      <!-- <li>
        <router-link to="/thanks" target="view_window">
          <a>
            <div>感谢</div>
          </a>
        </router-link>
      </li>-->
    </ul>
    <a href="http://www.mmmiu.top:5000" target="view_window">
      <div class="manager" title="管理员"></div>
    </a>
    <div
      class="musicPane"
      :class="{'musicPaneHeight':displayPlayList}"
      @mouseleave="showPlayList(false)"
    >
      <div class="musicControlsPane">
        <div class="playListButtonBox" @mouseenter="showPlayList(true)">
          <img
            id="playListButton"
            src="../../static/img/playListB.png"
            ondragstart="return false"
            onselectstart="return false"
          />
        </div>
        <img
          id="nextMusic"
          src="../../static/img/nextMusic.png"
          class="musicControl"
          v-on:click="nextMusic"
          @mouseover="onNxtBtn(true)"
          @mouseout="onNxtBtn(false)"
          ondragstart="return false"
          onselectstart="return false"
          title="下一首"
        />
        <img
          id="playPause"
          src="../../static/img/start.png"
          class="musicControl"
          v-on:click="spMusic()"
          @mouseover="onPlayBtn(true)"
          @mouseout="onPlayBtn(false)"
          ondragstart="return false"
          onselectstart="return false"
          :title="'当前: '+getMusicTitle(arr[musicIndex])"
        />
        <img
          id="previousMusic"
          src="../../static/img/previousMusic.png"
          class="musicControl"
          v-on:click="previousMusic"
          @mouseover="onPreBtn(true)"
          @mouseout="onPreBtn(false)"
          ondragstart="return false"
          onselectstart="return false"
          title="上一首"
        />
        <img
          id="cycleControl"
          src="../../static/img/cycle.png"
          class="musicControl"
          v-on:click="cycleControl()"
          @mouseover="onCycBtn(true)"
          @mouseout="onCycBtn(false)"
          ondragstart="return false"
          onselectstart="return false"
          style="margin-right:5px;"
        />
        <img
          id="randomControl"
          src="../../static/img/random.png"
          class="musicControl"
          v-on:click="randomControl()"
          ondragstart="return false"
          onselectstart="return false"
          style="margin-right:5px;height:25px;margin-top:11px;"
          title="随机播放"
        />
      </div>
      <div
        class="playList"
        :class="{'turnOnPlayList':displayPlayList,'disableDiv':!displayPlayList}"
      >
        <audio id="audio" type="audio/mpeg" controls preload>浏览器不支持播放器</audio>
        <span>当前:</span>
        <ul id="currentMusic" class="playListStyle"></ul>
        <span>播放列表:</span>
        <ul id="playListContent" class="playListStyle"></ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topMenu",
  data() {
    return {
      innerHeight: window.innerHeight,
      leftMenuPanelHeight: 0,
      leftMenuPanelPosition: -205,
      lightOn: false,
      previousMusicIndex: 0,
      musicIndex: 0,
      arr: [""],
      displayPlayList: false,
      musicPlaying: false,
      onPlayButton: false,
      single: false,
      random: false
    };
  },
  methods: {
    pullLeftMenuPanel: function() {
      this.leftMenuPanelPosition = 0;
      this.lightOn = true;
    },
    foldLeftMenuPanel: function() {
      this.leftMenuPanelPosition = -205;
      this.lightOn = false;
    },
    windowResize: function() {
      const that = this;
      window.onresize = () => {
        return (() => {
          if (window.innerHeight > 400) {
            that.innerHeight = window.innerHeight;
            that.leftMenuPanelHeight = that.innerHeight - 46;
            that.$emit("innerHeight", that.innerHeight);
          }
        })();
      };
    },
    spMusic: function() {
      var music = document.getElementById("audio");
      if (this.musicPlaying) {
        music.pause();
      } else if (!this.musicPlaying) {
        music.play();
      }
    },
    getMusicArr: function() {
      this.arr.length = 0;
      const files = require
        .context("../../static/media/music", false, /.mp3$/)
        .keys();
      for (let item of files) {
        var tmp = item.split("./");
        this.arr.push(" ../../static/media/music/" + tmp[1]);
      }
      this.arr.sort(function(a, b) {
        return (a + "").localeCompare(b + "");
      });
      this.previousMusicIndex = this.arr.length - 1;
    },
    initMusic: function() {
      var music = document.getElementById("audio");
      music.controls = true;
      music.loop = false;
      music.volume = 0.3;
      music.controlsList = "nodownload";
      music.src = this.arr[this.musicIndex];
      const that = this;
      music.addEventListener("play", function() {
        that.musicPlaying = true;
        that.changePlayIcon();
      });
      music.addEventListener("pause", function() {
        that.musicPlaying = false;
        that.changePlayIcon();
      });
      music.addEventListener("ended", function() {
        this.previousMusicIndex = this.musicIndex;
        if (that.single) {
          music.src = that.arr[that.musicIndex];
          music.play();
        } else {
          if (that.random) {
            that.musicIndex = this.getRandomIndex();
          } else {
            that.musicIndex = (that.musicIndex + 1) % that.arr.length;
          }
          music.src = that.arr[that.musicIndex];
          music.play();
        }
      });
      this.updatePlayList();
    },
    updatePlayList: function() {
      var current = document.getElementById("currentMusic");
      current.innerHTML = "";
      this.addChildToPlayList(this.musicIndex, true, current);
      var list = document.getElementById("playListContent");
      list.innerHTML = "";
      var gray = true;
      for (var i = this.musicIndex + 1; i < this.arr.length; i++) {
        this.addChildToPlayList(i, gray, list);
        gray = !gray;
      }
      for (var i = 0; i < this.musicIndex; i++) {
        this.addChildToPlayList(i, gray, list);
        gray = !gray;
      }
      var item = document.createElement("li");
      item.className = gray
        ? "playListItem grayItem"
        : "playListItem whiteItem";
      var div = document.createElement("div");
      div.innerText = "- - - - - -END- - - - - -";
      item.appendChild(div);
      list.appendChild(item);
    },
    addChildToPlayList: function(index, gray, list) {
      var item = document.createElement("li");
      item.className = gray
        ? "playListItem grayItem"
        : "playListItem whiteItem";
      var div = document.createElement("div");
      div.innerText = this.getMusicTitle(this.arr[index]);
      div.indexNumber = index;
      item.appendChild(div);
      const that = this;
      item.addEventListener("click", function(e) {
        that.switchMusic(e.target.indexNumber);
      });
      list.appendChild(item);
    },
    switchMusic: function(index) {
      this.musicIndex = index;
      var music = document.getElementById("audio");
      music.src = this.arr[this.musicIndex];
      document.title = this.getMusicTitle(this.arr[this.musicIndex]);
      music.play();
    },
    nextMusic: function() {
      this.previousMusicIndex = this.musicIndex;
      if (this.random) {
        this.musicIndex = this.getRandomIndex();
        this.switchMusic(this.musicIndex);
      } else {
        this.musicIndex = (this.musicIndex + 1) % this.arr.length;
        this.switchMusic(this.musicIndex);
      }
    },
    previousMusic: function() {
      this.musicIndex = this.previousMusicIndex;
      this.previousMusicIndex =
        this.musicIndex == 0 ? this.arr.length - 1 : this.musicIndex - 1;
      this.switchMusic(this.musicIndex);
    },
    getMusicTitle: function(source) {
      var tmp = source.split("/");
      var tmp2 = tmp[tmp.length - 1].split(".");
      var tmp3 = tmp2[0].split(" - ");
      return tmp3[1] + " --- " + tmp3[0];
    },
    showPlayList: function(option) {
      var button = document.getElementById("playListButton");
      this.displayPlayList = option;
      if (option) {
        button.src = "../../static/img/playList.png";
      } else {
        button.src = "../../static/img/playListB.png";
      }
    },
    onPlayBtn: function() {
      this.onPlayButton = !this.onPlayButton;
      this.changePlayIcon();
    },
    onPreBtn: function(option) {
      var button = document.getElementById("previousMusic");
      if (option) {
        button.src = "../../static/img/previousMusicC.png";
      } else {
        button.src = "../../static/img/previousMusic.png";
      }
    },
    onNxtBtn: function(option) {
      var button = document.getElementById("nextMusic");
      if (option) {
        button.src = "../../static/img/nextMusicC.png";
      } else {
        button.src = "../../static/img/nextMusic.png";
      }
    },
    onRdmBtn: function(option) {
      var button = document.getElementById("randomControl");
      if (option) {
        button.src = "../../static/img/randomC.png";
      } else {
        button.src = "../../static/img/random.png";
      }
    },
    onCycBtn: function(option) {
      var button = document.getElementById("cycleControl");
      if (option) {
        if (this.single) {
          button.src = "../../static/img/singleC.png";
          button.title = "单曲循环";
        } else {
          button.src = "../../static/img/cycleC.png";
          button.title = "列表循环";
        }
      } else {
        if (this.single) {
          button.src = "../../static/img/single.png";
          button.title = "单曲循环";
        } else {
          button.src = "../../static/img/cycle.png";
          button.title = "列表循环";
        }
      }
    },
    cycleControl: function() {
      this.single = !this.single;
      this.onCycBtn(true);
    },
    randomControl: function() {
      this.random = !this.random;
      this.onRdmBtn(this.random);
    },
    getRandomIndex: function() {
      var tmp = Math.floor(Math.random() * this.arr.length);
      while (tmp == this.musicIndex) {
        tmp = Math.floor(Math.random() * this.arr.length);
      }
      return tmp;
    },
    changePlayIcon: function() {
      var button = document.getElementById("playPause");
      if (button != null) {
        if (this.onPlayButton) {
          if (!this.musicPlaying) {
            button.src = "../../static/img/startC.png";
          } else {
            button.src = "../../static/img/pauseC.png";
          }
        } else {
          if (!this.musicPlaying) {
            button.src = "../../static/img/start.png";
          } else {
            button.src = "../../static/img/pause.png";
          }
        }
      }
    }
  },
  computed: {},
  mounted: function() {
    this.leftMenuPanelHeight = window.innerHeight - 46;
    this.windowResize();
    this.getMusicArr();
    this.initMusic();
  },
  watch: {
    musicIndex(val, oldVal) {
      this.updatePlayList();
    }
  }
};
</script>

<style>
#topMenu {
  z-index: 99999;
  position: fixed;
  top: 0px;
  height: 45px;
  width: 100%;
  transition: 0.3s;
  border-bottom: 1px solid #292a2e;
  background: hsla(0, 0%, 100%, 0.75);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  min-width: 800px;
  user-select: none;
}
#topMenu:hover {
  background-color: whitesmoke;
  transition: 0.3s;
}
#topMenu .leftMenu {
  width: 45px;
  height: 45px;
  position: absolute;
  text-align: center;
  line-height: 45px;
  border-right: 1px solid rgb(64, 69, 74);
  border-bottom: 1px solid rgb(64, 69, 74);
  transition-duration: 1s;
}
#topMenu .leftmenulogo {
  height: 45px;
  width: auto;
}
#topMenu .light {
  background-color: lightblue;
  transition: 0.3s;
}
#topMenu .mainNav {
  list-style: none;
  position: absolute;
  left: 55px;
}
#topMenu .mainNav li {
  float: left;
  text-align: center;
}
#topMenu .mainNav li div {
  height: 100%;
  width: 75px;
  line-height: 45px;
}
#topMenu a div:hover {
  color: #66cae2;
  transition: 0.3s;
}
#topMenu a:link,
#topMenu a:visited {
  font-weight: 300;
  font-size: 15px;
  transition: 0.3s;
  color: black;
  text-decoration: none;
}
#topMenu .leftMenuPanel {
  position: absolute;
  width: 200px;
  background-color: whitesmoke;
  top: 46px;
  transition: 0.3s;
  border-right: 1px solid rgb(64, 69, 74);
  border-bottom: 1px solid rgb(64, 69, 74);
  transition-delay: 0.2s;
}
#topMenu .leftMenuPanel:hover {
  background-color: whitesmoke;
  transition: 0.1s;
}
#topMenu .leftMenuPanel h4 {
  text-align: left;
  margin-left: 10px;
  color: black;
}
#topMenu .line {
  border: none;
  outline: none;
  height: 1px;
  background-color: rgb(100, 100, 100);
  width: 90%;
}
#topMenu .line2 {
  width: 100%;
}
#topMenu .toolsNav {
  list-style: none;
  padding-top: 10px;
}
#topMenu .toolsNav li a div {
  text-align: left;
  padding-left: 15px;
  line-height: 50px;
}
#topMenu .manager {
  float: right;
  background-image: url("../../static/img/manager.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 35px 35px;
  width: 45px;
  height: 45px;
  transition: 0.3s;
}
#topMenu .manager:hover {
  background-image: url("../../static/img/managerC.png");
}
#topMenu audio {
  height: 45px;
  width: 100%;
}
#topMenu audio:focus {
  outline: none;
}
#topMenu .playListButtonBox {
  float: right;
  transition: 0.3s;
  height: 45px;
  width: 45px;
}
#playListButton {
  cursor: pointer;
  margin: 5px 5px;
  height: 35px;
  width: 35px;
}
#topMenu .musicPane {
  width: 300px;
  float: right;
  margin-top: 46px;
}
#topMenu .musicPaneHeight {
  height: 301px;
}
#topMenu .musicControlsPane {
  position: absolute;
  height: 46px;
  width: 300px;
  top: 0;
  margin-left: 0;
  z-index: -9999;
}
#topMenu .playList {
  position: absolute;
  top: 46px;
  width: 300px;
  height: 300px;
  background-color: whitesmoke;
  opacity: 0;
  transition: 0.5s;
  transition-delay: 0.3s;
  box-shadow: 1px 1px 5px rgb(100, 100, 100);
}
#playListContent {
  width: 100%;
  height: 250px;
}
#currentMusic {
  width: 300px;
}
#topMenu .playListItem:hover {
  color: pink;
}
#topMenu .disableDiv {
  pointer-events: none;
}
#topMenu .playList span {
  float: left;
  margin-top: 10px;
  margin-bottom: 5px;
  width: 100%;
  height: 14px;
  margin-left: 10px;
  line-height: 14px;
}
#topMenu .turnOnPlayList {
  opacity: 1;
  display: inline;
}
#topMenu .musicControl {
  float: right;
  height: 35px;
  width: 35px;
  margin-top: 5px;
  cursor: pointer;
}
#topMenu .playListStyle {
  width: 100%;
  word-wrap: normal;
  overflow-x: hidden;
  overflow-y: auto;
  list-style: none;
  border-top: 1px solid black;
}
#topMenu .playListItem {
  width: 300px;
  height: auto;
  line-height: 30px;
  padding-left: 10px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s;
}
#topMenu .grayItem {
  background-color: gray;
  color: whitesmoke;
}
#topMenu .whiteItem {
  background-color: whitesmoke;
  color: gray;
}
#topMenu .playListItem:hover {
  color: pink;
}
#topMenu .playListItem div {
  width: 90%;
}
</style>
