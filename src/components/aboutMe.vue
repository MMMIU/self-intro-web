<template>
  <div id="aboutMe">
    <div class="content">
      <div class="coverImg" :style="{backgroundPositionY:(scroll/2-100)+'px'}">
        <h1>个人简介</h1>
      </div>
      <div class="board">
        <div class="innerBoard">
          <iframe
            width="100%"
            height="1000px"
            scrolling="no"
            src="../../../static/media/files/CV.pdf"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutMe",
  components: {},
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
  height: auto;
  background-color: rgb(255, 245, 247);
  font-family: "仿宋";
  background: url("../../static/img/snow.jpg") right center fixed no-repeat;
  background-size: auto 100%;
  width: 100%;
  min-width: 800px;
}
.content {
  width: 1024px;
  height: 100%;
  margin: 0 auto;
}
h1 {
  line-height: 200px;
  text-align: center;
  color: whitesmoke;
}
.coverImg {
  margin-top: 46px;
  width: 100%;
  height: 200px;
  background-image: url("../../static/img/青海.jpg");
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
  margin: -50px auto;
}
.innerBoard {
  padding-top: 30px;
  padding-bottom: 30px;
  height: 100%;
  width: 100%;
  margin: 5% auto;
}
.innerBoard iframe {
  white-space: pre-wrap;
}
</style>
