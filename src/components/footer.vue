<template>
  <footer class="webFooter">
    <div class="right">{{copyright}}</div>
    <router-link to="/home" target="view_window">
      <a @click="changeView('pc')">
        <div>PC版</div>
      </a>
    </router-link>
    <router-link to="/mobile" target="view_window">
      <a @click="changeView('mobile')">
        <div>移动版</div>
      </a>
    </router-link>
  </footer>
</template>

<script>
export default {
  name: "webFooter",
  data() {
    return {
      copyright: "©MMMIU 2020"
    };
  },
  methods: {
    changeView: function(option) {
      this.$emit("changeView", option);
    }
  }
};
</script>

<style scoped>
.webFooter {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: lightblue;
  color: antiquewhite;
  text-align: center;
}
.right {
  float: left;
  margin-left: 10px;
  height: 100%;
}
a {
  float: right;
  font-size: 10px;
  margin-right: 10px;
}
a:link,
a:visited {
  color: black;
  text-decoration: none;
  transition: 0.3s;
}
a:hover {
  color: whitesmoke;
  transition: 0.3s;
}
</style>
