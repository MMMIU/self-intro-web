<template>
  <div id="headerMain">
    <div class="contentBox">
      <transition name="fade">
        <div class="title" v-if="show">
          <h1>{{titleSet[titleIndex]}}</h1>
          <h3>{{describtionSet[titleIndex]}}</h3>
          <div class="go">
            {{goSets[titleIndex]}}
            <hr>
          </div>
        </div>
      </transition>
    </div>
    <div class="buttonBar">
      <div class="buttons">
        <ul>
          <li @click="stopTimer(),bt(0)">
            <div
              class="button"
              :class="{buttonDark:!buttonLightSet[0],buttonLight:buttonLightSet[0]}"
            >
              <div class="buttonAnim" v-if="anim[0]"></div>
            </div>
          </li>
          <li @click="stopTimer(),bt(1)">
            <div
              class="button"
              :class="{buttonDark:!buttonLightSet[1],buttonLight:buttonLightSet[1]}"
            >
              <div class="buttonAnim" v-if="anim[1]"></div>
            </div>
          </li>
          <li @click="stopTimer(),bt(2)">
            <div
              class="button"
              :class="{buttonDark:!buttonLightSet[2],buttonLight:buttonLightSet[2]}"
            >
              <div class="buttonAnim" v-if="anim[2]"></div>
            </div>
          </li>
          <li @click="stopTimer(),bt(3)">
            <div
              class="button"
              :class="{buttonDark:!buttonLightSet[3],buttonLight:buttonLightSet[3]}"
            >
              <div class="buttonAnim" v-if="anim[3]"></div>
            </div>
          </li>
          <li @click="stopTimer(),bt(4)">
            <div
              class="button"
              :class="{buttonDark:!buttonLightSet[4],buttonLight:buttonLightSet[4]}"
            >
              <div class="buttonAnim" v-if="anim[4]"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerMain",
  data() {
    return {
      titleIndex: 0,
      titleLinkSet: ["#", "#", "#", "#", "#"],
      titleSet: [
        "爆款商品拼购2折起",
        "DCDN IP应用加速 产品发布会",
        "云时序数据库 TSDB 重磅升级",
        "Cloud Toolkit开发者插件再升级",
        "阿里云时空数据库正式公测"
      ],
      describtionSet: [
        "云主机低至199元/年，降低上云门槛",
        "快速交付、高性能、高可用的IP应用程序加速，大幅提升传输速率和可用性",
        "TSDB完美适配Promethues，发布时序结构化查询引擎TSQL，1元体验",
        "支持实时查看远程服务器的应用部署日志",
        "高效处理时序/空间数据，完全兼容标准SQL"
      ],
      goSets: ["立即抢购", "了解详情", "查看详情", "免费下载", "免费试用"],
      buttonLightSet: [false, false, false, false, false],
      anim: [true, false, false, false, false],
      show: false,
      useTimer: true,
      timerindex: 0
    };
  },
  components: {},
  methods: {
    bt: function(index) {
      if (!this.buttonLightSet[index]) {
        this.$emit("bgimg", index);
        this.show = false;
        if (!this.useTimer) {
          this.buttonLightSet = [false, false, false, false, false];
          this.buttonLightSet[index] = true;
        }
        this.titleIndex = index;
        setTimeout(() => {
          this.show = true;
        }, 300);
      }
    },
    stopTimer: function() {
      this.useTimer = false;
      this.anim = [false, false, false, false, false];
    },
    timer: function() {
      setInterval(() => {
        this.timerindex = (this.timerindex + 1) % 5;
        if (this.useTimer) {
          this.anim = [false, false, false, false, false];
          this.anim.splice(this.timerindex, 1, true);
          this.bt(this.timerindex);
        }
      }, 10000);
    }
  },
  mounted: function() {
    this.show = true;
    this.timer();
  }
};
</script>

<style scoped>
#headerMain {
  width: 100%;
  height: 410px;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 90px;
}
.largeLink {
  height: 100%;
  width: 100%;
}
.contentBox {
  width: 85%;
}
.title {
  width: 1020px;
  color: white;
  margin: 90px auto auto auto;
}
.title h1 {
  font-weight: 400;
  font-size: 40px;
}
.title h3 {
  margin-top: 10px;
}
.title h3,
.go {
  font-size: 20px;
  font-weight: 300;
}
.go {
  width: 80px;
  line-height: 10px;
  margin-top: 50px;
  background-color: none;
  transition: 0.3s;
}
.go:hover {
  color: #66cae2;
  transition: 0.3s;
}
hr {
  width: 100%;
  height: 4px;
  color: white;
  border: none;
  background-color: #66cae2;
}
.buttonBar {
  position: absolute;
  top: 390px;
  width: 100%;
  height: 20px;
  min-width: 1000px;
}
.buttons {
  width: 250px;
  height: 20px;
  margin: 0px auto;
}
.buttons ul {
  list-style: none;
  display: inline;
  margin: 0px auto;
}
.buttons ul li {
  height: 100%;
  width: 40px;
  margin: auto 5px;
  float: left;
  cursor: pointer;
}
a {
  height: 100%;
  width: 100%;
  text-decoration: none;
}
.button {
  height: 5px;
  width: 40px;
}
.buttonDark {
  background-color: rgb(71, 73, 78);
}
.buttonLight {
  background-color: white;
}
.buttonAnim {
  width: 100%;
  height: 100%;
  background-color: white;
  animation: animationF 10s linear;
}
@keyframes animationF {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
.fade-enter-active {
  transition: all 0.1s ease;
}
.fade-enter {
  transform: translateY(10px);
  opacity: 0;
}
</style>