<template>
  <div class="topMenu">
    <ul>
      <li>
        <a href="http://www.baidu.com">
          <div>关于我</div>
        </a>
      </li>
      <li>
        <a href="http://www.baidu.com">
          <div>关于我</div>
        </a>
      </li>
      <li>
        <a href="http://www.baidu.com">
          <div>关于我</div>
        </a>
      </li>
      <li>
        <a href="http://www.baidu.com">
          <div>关于我</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "topMenu",
  data() {
    return {
      msg: "11111"
    };
  }
};
</script>

<style scoped>
.topMenu {
  position: absolute;
  height: 45px;
  width: 100%;
  transition: 0.3s;
}
.topMenu:hover {
  background-color: #454545;
  transition: 0.3s;
}
.topMenu ul {
  height: 100%;
}
.topMenu ul li {
  float: left;
}
.topMenu ul li a div {
  height: 100%;
  width: 75px;
  line-height: 45px;
}
.topMenu ul li a div:hover {
  color: #66cae2;
  transition: 0.3s;
}
.topMenu ul li a {
  color: aliceblue;
  margin-top: 50px;
}
.topMenu ul li a:link,
.topMenu ul li a:visited {
  font: Tahoma, Helvetica, Arial, "宋体", sans-serif;
  font-weight: 300;
  font-size: 15px;
  transition: 0.3s;
  color: rgb(235, 235, 235);
  text-decoration: none;
}
</style>
