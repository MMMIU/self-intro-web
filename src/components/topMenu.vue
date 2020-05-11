<template>
  <div class="topMenu">
    <ul>
      <li>
        <div>
          <a href>关于我</a>
        </div>
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
  background-color: black;
}
.topMenu ul {
  height: 100%;
  background-color: gray;
}
.topMenu ul li {
  display: inline;
  line-height: 100%;
}
.topMenu ul li div {
  height: 100%;
  width: 100%;
}
.topMenu ul li a {
  height: 100%;
  width: 100%;
  background-color: green;
  line-height: 100%;
  color: aliceblue;
}
a:hover {
  transition: 0.3s;
  color: #66cae2;
}
a:link,
a:visited {
  font: Tahoma, Helvetica, Arial, "宋体", sans-serif;
  font-weight: 300;
  font-size: 15px;
  transition: 0.3s;
  color: rgb(235, 235, 235);
  text-decoration: none;
}
</style>
