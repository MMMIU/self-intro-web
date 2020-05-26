<template>
  <div id="mobileTopMenu">
    <div class="mobileMenu">
      <img
        class="mobileMenuLogo"
        src="../../../static/img/leftmenulogo.png"
        alt="M"
        :class="{'light':mobileMenuPanelStatus}"
        ondragstart="return false"
        onselectstart="return false"
        @click="displayMobileMenuPanel()"
      />
      <transition name="fade">
        <div
          class="exitPane"
          @click="displayMobileMenuPanel()"
          :style="{height:innerHeight+'px'}"
          v-show="mobileMenuPanelStatus"
        >
          <div class="mobileMenuPanel">
            <h4>菜单</h4>
            <div class="line"></div>
            <ul class="toolsNav">
              <li>
                <router-link to="/mobileaboutme" target="view_window">
                  <a>
                    <div>关于我</div>
                  </a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <ul class="mainNav">
      <li>
        <router-link to="/mobile" target="view_window">
          <a>
            <div>首页</div>
          </a>
        </router-link>
      </li>
    </ul>
    <a href="http://www.mmmiu.top:5000" target="view_window">
      <div class="manager" title="管理员"></div>
    </a>
  </div>
</template>

<script>
export default {
  name: "mobileTopMenu",
  data() {
    return {
      mobileMenuPanelStatus: false,
      innerHeight: window.innerHeight
    };
  },
  methods: {
    displayMobileMenuPanel: function() {
      this.mobileMenuPanelStatus =  ！this.mobileMenuPanelStatus;
    },
    menuPanel: function(data) {
      this.mobileMenuPanelStatus = !this.mobileMenuPanelStatus && data;
    },
    windowResize: function() {
      const that = this;
      window.onresize = () => {
        return (() => {
          that.innerHeight = window.innerHeight;
          that.$emit("innerHeight", that.innerHeight);
        })();
      };
    }
  },
  computed: {},
  mounted() {
    this.windowResize();
  }
};
</script>

<style>
#mobileTopMenu {
  z-index: 99999;
  position: fixed;
  top: 0px;
  height: 45px;
  width: 100%;
  transition: 0.3s;
  border-bottom: 1px solid #292a2e;
  background: hsla(0, 0%, 100%, 0.75);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  user-select: none;
}
#mobileTopMenu:hover {
  background-color: whitesmoke;
  transition: 0.3s;
}
#mobileTopMenu .mobileMenu {
  width: 45px;
  height: 45px;
  text-align: center;
  line-height: 45px;
  border-right: 1px solid rgb(64, 69, 74);
  border-bottom: 1px solid rgb(64, 69, 74);
  transition-duration: 1s;
}
#mobileTopMenu .mobileMenuLogo {
  height: 45px;
  width: 45px;
}
#mobileTopMenu .light {
  background-color: lightblue;
  transition: 0.3s;
}
#mobileTopMenu a div:hover {
  color: #66cae2;
  transition: 0.3s;
}
#mobileTopMenu a:link,
#mobileTopMenu a:visited {
  font-weight: 300;
  font-size: 15px;
  transition: 0.3s;
  color: black;
  text-decoration: none;
}
#mobileTopMenu .exitPane {
  position: fixed;
  width: 100%;
  top: 46px;
}
#mobileTopMenu .mobileMenuPanel {
  position: absolute;
  width: 100%;
  background-color: whitesmoke;
  transition: 0.3s;
  border-right: 1px solid rgb(64, 69, 74);
  border-bottom: 1px solid rgb(64, 69, 74);
  transition-delay: 0.2s;
}
#mobileTopMenu .mobileMenuPanel h4 {
  text-align: left;
  margin-left: 10px;
  color: black;
}
#mobileTopMenu .line {
  border: none;
  outline: none;
  height: 1px;
  background-color: rgb(100, 100, 100);
  width: 90%;
}
#mobileTopMenu .line2 {
  width: 100%;
}
#mobileTopMenu .toolsNav {
  list-style: none;
  padding-top: 10px;
}
#mobileTopMenu .toolsNav li a div {
  text-align: left;
  padding-left: 15px;
  line-height: 50px;
}
#mobileTopMenu .manager {
  position: absolute;
  background-image: url("../../../static/img/manager.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 35px 35px;
  width: 45px;
  height: 45px;
  right: 0;
  top: 0;
  transition: 0.3s;
}
#mobileTopMenu .manager:hover {
  background-image: url("../../../static/img/managerC.png");
}
#mobileTopMenu .light {
  background-color: lightblue;
  transition: 0.3s;
}
#mobileTopMenu .mainNav {
  list-style: none;
  position: absolute;
  left: 55px;
  top: 0px;
}
#mobileTopMenu .mainNav li {
  float: left;
  text-align: center;
}
#mobileTopMenu .mainNav li div {
  height: 100%;
  width: 75px;
  line-height: 45px;
}
#mobileTopMenu .fade-enter-active {
  transition: all 0.5s ease;
}
#mobileTopMenu .fade-leave-active {
  transition: all 0.5s ease;
}
#mobileTopMenu .fade-enter {
  transform: translateX(-100%);
  opacity: 0;
}
#mobileTopMenu .fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
