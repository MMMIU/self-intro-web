<template>
  <footer class="webFooter">
    <p>{{copyright}} {{title}}</p>
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
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style scoped>
.webFooter {
  min-width: 800px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: lightblue;
  color: antiquewhite;
  text-align: center;
}
</style>
