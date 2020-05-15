<template>
  <div id="aboutMe">
    <div class="content">
      <div class="coverImg" :style="{backgroundPositionY:(scroll/2-100)+'px'}"></div>
      <h1>感谢大佬们的文章和视频</h1>
      <div class="dotLine dotLine1"></div>
      <div class="board">
        <div class="innerBoard">
          <ol>
            <li>
              <a
                href="https://www.jianshu.com/p/22fcc52385cd"
                target="view-window"
              >我的这颗橘子是甜的 《JS/控制Html标签audio的播放、暂停、停止和播放次数》</a>
            </li>
            <li>
              <a
                href=" http://www.lmlblog.com/400.html"
                target="view-window"
              >maolai 《HTML5 audio如何实现播放多个MP3音频》</a>
            </li>
            <li>
              <a
                href=" https://blog.csdn.net/lander_xiong/article/details/79018737"
                target="view-window"
              >lander_xiong 《Vue2.0的三种常用传值方式、父传子、子传父、非父子组件传值》</a>
            </li>
            <li>
              <a
                href=" https://blog.csdn.net/W_jin/article/details/86712099"
                target="view-window"
              >W_cc 《JSON.parse() 的坑！》</a>
            </li>
            <li>
              <a
                href=" https://blog.csdn.net/m0_37852904/article/details/89204244"
                target="view-window"
              >阡路陌人 《router-view 组件间传值》</a>
            </li>
            <li>
              <a
                href="https://www.bilibili.com/video/BV114411D7Zn"
                target="view-window"
              >咲百杨 [html+css]6分钟实现响应式瀑布流布局</a>
            </li>
            <li>
              <a
                href="https://www.jianshu.com/p/599bfacbca82"
                target="view-window"
              >闲汪 《vue项目打包上线的一些坑（持续更新中）》</a>
            </li>
            <li>
              <a
                href="https://www.cnblogs.com/nanacln/p/11127883.html"
                target="view-window"
              >nanacln 《播放、暂停事件监听》</a>
            </li>
            <li>
              <a
                href="https://www.cnblogs.com/zhaoxishm/p/6445680.html"
                target="view-window"
              >博地凡夫 《html实现 页面禁止右键 禁止复制 禁止图片拖动 禁止复制和剪切》</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topMenu from "./topMenu";
export default {
  name: "aboutMe",
  components: {
    topMenu
  },
  data() {
    return {
      msg: "个人简介",
      scroll: 0
    };
  },
  methods: {
    menu() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
  }
};
</script>

<style scoped>
#aboutMe {
  height: 2000px;
  background-color: rgb(255, 245, 247);
  font-family: "仿宋";
  background: url("../../static/img/snow.jpg") right center fixed no-repeat;
  background-size: auto 100%;
  width: 100%;
  min-width: 800px;
}
.content {
  width: 1024px;
  height: 90%;
  margin: 0 auto;
}
.content h1 {
  font-weight: 100;
  line-height: 40px;
  margin: 10px auto auto 10px;
}
.coverImg {
  margin-top: 46px;
  width: 100%;
  height: 200px;
  background-image: url("../../static/img/DVA.png");
  background-repeat: no-repeat;
  background-size: 110% auto;
}
.dotLine {
  border: none;
  outline: none;
  height: 0px;
  border-bottom: dotted 3px rgb(29, 29, 29);
  width: 100%;
}
.dotLine1 {
  margin: 20px auto 0 auto;
}
.board {
  width: 100%;
  height: 80%;
  background-color: rgb(255, 245, 247);
  margin: -50px auto;
}
.innerBoard {
  height: 100%;
  width: 90%;
  margin: 5% auto;
  padding-top: 10px;
}
ul {
  list-style: none;
}
li {
  margin-top: 10px;
}
a:link,
a:visited {
  font-weight: 300;
  font-size: 15px;
  transition: 0.3s;
  color: black;
  text-decoration: none;
}
a:hover {
  color: green;
}
</style>
