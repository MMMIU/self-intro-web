<template>
  <div id="photos">
    <div class="mainPane"></div>
  </div>
</template>

<script>
export default {
  name: "Photos",
  components: {},
  data() {
    return {
      date: new Date()
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
#photos {
  height: 2000px;
  background-color: white;
  font-family: "仿宋";
  /* background: url("../../static/img/snow.jpg") right center fixed no-repeat; */
  background-size: auto 100%;
  width: 100%;
  min-width: 800px;
  overflow: hidden;
}
.mainPane {
  width: 100%;
  height: 80%;
  margin: 100px auto auto auto;
  background-color: rgb(255, 245, 247);
}
#time {
  height: 100px;
  color: black;
}
</style>
