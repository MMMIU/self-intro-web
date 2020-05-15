<template>
  <div class="topMenu">
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
          </li>
          <li>
            <a href target="view_window">
              <div>摄影</div>
            </a>
          </li>
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
      <li>
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
      </li>
      <li>
        <router-link to="/thanks" target="view_window">
          <a>
            <div>感谢</div>
          </a>
        </router-link>
      </li>
    </ul>
    <a href="http://www.mmmiu.top:5000" target="view_window">
      <div class="manager" title="管理员"></div>
    </a>
    <div class="playListPane" @mouseover="showPlayList(true)" @mouseout="showPlayList(false)">
      <div class="playListButtonBox">
        <img
          id="playListButton"
          src="../../static/img/playListB.png"
          ondragstart="return false"
          onselectstart="return false"
        />
      </div>
      <div
        class="playList"
        :class="{'turnOnPlayList':displayPlayList,'disableDiv':!displayPlayList}"
      >
        <audio id="audio" type="audio/mpeg" controls :title="musicTitle">浏览器不支持播放器</audio>
        <span>NEXT:</span>
      </div>
    </div>
    <img
      id="musicControl"
      src="../../static/img/start.png"
      v-on:click="spMusic()"
      @mouseover="onPlayBtn(true)"
      @mouseout="onPlayBtn(false)"
      ondragstart="return false"
      onselectstart="return false"
    />
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
      musicIndex: 0,
      arr: [
        "../../static/media/伦桑 - 烟雨行舟.mp3",
        "../../static/media/MMMIU - 江南诗意曲（伴奏）.mp3"
      ],
      musicTitle: "",
      displayPlayList: false,
      musicPlaying: false,
      onPlayButton: false
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
    initMusic: function() {
      var music = document.getElementById("audio");
      music.volume = 0.3;
      music.controlsList = "nodownload";
      const that = this;
      music.addEventListener("play", function() {
        that.musicPlaying = true;
        that.changePlayIcon();
      });
      music.addEventListener("pause", function() {
        that.musicPlaying = false;
        that.changePlayIcon();
      });
      this.playListControl();
    },
    playListControl: function() {
      var music = document.getElementById("audio");
      music.controls = true;
      music.src = this.arr[this.musicIndex];
      music.addEventListener("ended", playEndedHandler, false);
      music.loop = false;
      this.changeMusicTitle();
      const that = this;
      function playEndedHandler() {
        that.musicIndex = (that.musicIndex + 1) % that.arr.length;
        music.src = that.arr[that.musicIndex];
        that.changeMusicTitle();
        music.play();
      }
    },
    changeMusicTitle: function() {
      var tmp = this.arr[this.musicIndex].split("/");
      var tmp2 = tmp[tmp.length - 1].split(".");
      this.musicTitle = tmp2[0];
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
    changePlayIcon: function() {
      var button = document.getElementById("musicControl");
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
  },
  computed: {},
  mounted: function() {
    this.leftMenuPanelHeight = window.innerHeight - 46;
    this.windowResize();
    this.initMusic();
  }
};
</script>

<style scoped>
.topMenu {
  z-index: 99999;
  position: absolute;
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
.topMenu:hover {
  background-color: whitesmoke;
  transition: 0.3s;
}
.leftMenu {
  width: 45px;
  height: 45px;
  position: absolute;
  text-align: center;
  line-height: 45px;
  border-right: 1px solid rgb(64, 69, 74);
  border-bottom: 1px solid rgb(64, 69, 74);
  transition-duration: 1s;
}
.leftmenulogo {
  height: 45.5px;
  width: auto;
}
.light {
  background-color: lightblue;
  transition: 0.3s;
}
.mainNav {
  list-style: none;
  position: absolute;
  left: 55px;
}
.mainNav li {
  float: left;
  text-align: center;
}
.mainNav li div {
  height: 100%;
  width: 75px;
  line-height: 45px;
}
a div:hover {
  color: #66cae2;
  transition: 0.3s;
}
a:link,
a:visited {
  font-weight: 300;
  font-size: 15px;
  transition: 0.3s;
  color: black;
  text-decoration: none;
}
.leftMenuPanel {
  position: absolute;
  width: 200px;
  background-color: whitesmoke;
  top: 46px;
  transition: 0.3s;
  border-right: 1px solid rgb(64, 69, 74);
  border-bottom: 1px solid rgb(64, 69, 74);
  transition-delay: 0.2s;
}
.leftMenuPanel:hover {
  background-color: whitesmoke;
  transition: 0.1s;
}
.leftMenuPanel h4 {
  text-align: left;
  margin-left: 10px;
  color: black;
}
.line {
  border: none;
  outline: none;
  height: 1px;
  background-color: rgb(100, 100, 100);
  width: 90%;
}
.line2 {
  width: 100%;
}
.toolsNav {
  list-style: none;
  padding-top: 10px;
}
.toolsNav li a div {
  text-align: left;
  padding-left: 15px;
  line-height: 50px;
}
.manager {
  float: right;
  background-image: url("../../static/img/manager.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 35px 35px;
  width: 45px;
  height: 45px;
  transition: 0.3s;
}
.manager:hover {
  background-image: url("../../static/img/managerC.png");
}
audio {
  height: 45px;
  width: 100%;
}
audio:focus {
  outline: none;
}
.playListPane {
  float: right;
  transition: 0.3s;
}
.playListButtonBox {
  height: 45px;
  width: 45px;
}
#playListButton {
  cursor: pointer;
  float: right;
  margin-top: 5px;
  height: 35px;
  width: 35px;
}
.playList {
  position: absolute;
  margin-left: -230px;
  top: 46px;
  width: 300px;
  height: 300px;
  background-color: whitesmoke;
  opacity: 0;
  transition: 0.5s;
  transition-delay: 0.3s;
}
.disableDiv {
  pointer-events: none;
}
.playList span {
  margin-left: 10px;
  line-height: 15px;
}
.turnOnPlayList {
  opacity: 1;
  display: inline;
}
#musicControl {
  float: right;
  height: 35px;
  width: 35px;
  margin-top: 5px;
  cursor: pointer;
}
</style>
