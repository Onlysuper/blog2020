<template>
  <div class="wrapper" :style="{left:drawerShow||(screenWidth<=1204)?'0':'-200px'}">
    <!-- <aside id="menu" :class="['sidebar',{show:drawerShow}]"> -->
    <aside id="menu" :class="['sidebar',{show:drawerShow}]">
      <header>
        <ul class="bg-bubbles">
          <li v-for="i in 6" :key="i"></li>
        </ul>
        <div class="head-img">
          <img :src="headimg">
        </div>
        <div>
          <p class="nick-name">una</p>
          <p class="sign-text">buer@foxmail.com</p>
        </div>
      </header>
      <div class="option">
        <ul>
          <!-- <li v-for="menu in menus" :key="menu" class="active"> -->
          <router-link v-for="(menu) in menus" :key="menu.name" :to="menu.url">
            <p>{{menu.name}}</p>
          </router-link>
          <!-- </li> -->

        </ul>
      </div>
    </aside>
    <main id="main" ref="scrollBox" @scroll="scrollFn" :class="[{show:drawerShow}]">
      <header>
        <div :class="['oparte',{show:drawerShow,fixed:scrollTop>54}]">
          <button :class="['button',{show:drawerShow}]" @click="drawClick">
            <span class="icon iconfont icon-caidan"></span>
          </button>
          <div class="oparte-right">
            <div :class="['search',{in:searchFocus}]">
              <input placeholder="请输入关键字" />
              <div @click="searchFocus=!searchFocus" class="fixed-icon">
                <span class="icon iconfont icon-tubiao_huaban"></span>
              </div>
            </div>
            <ul class="but-list">
              <li @click="goSign" class="sign">
                <span class="icon iconfont icon-denglu"></span>
              </li>
              <li @click="goWrite">
                <span class="icon iconfont icon-iconfontedit"></span>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div class="container">
        <div style="height:56px;width:100%"></div>
        <router-view @click.native="tapLink"></router-view>
      </div>
    </main>
    <div @click="drawClick" :class="['mask',{in:maskIn}]" id="mask"></div>
    <transition :duration="300">
      <a c v-if="backTopShow" class="gotop bs-button" href="javascript:;" @click="goTop">
        <span class="icon iconfont icon-huidaodingbu"></span>
      </a>
    </transition>

  </div>
</template>

<script>
import headimg from "@/assets/images/admin-head.png";
export default {
  name: 'Layout',
  data() {
    return {
      headimg,
      menus: [
        {
          url: "/articlelist",
          name: "HOME"
        },
        // {
        //   url: "/notes",
        //   name: "NOTES"
        // },
        {
          url: "/comments",
          name: "MESSAGE"
        },
        // {
        //   url: "/life",
        //   name: "LIFE"
        // },
        {
          url: "/english",
          name: "ENGLISH"
        },
        {
          url: "/about",
          name: "ABOUT"
        }
      ],
      searchFocus: false,
      scrollTop: 0,// 滚动位置
      screenWidth: document.documentElement.clientWidth,//屏幕宽度
      drawerShow: false,
      clickDrawerShow: false,
      //是否显示回到顶部
      backTopShow: false,
      // 是否允许操作返回顶部
      backTopAllow: true,
      // 返回顶部所需时间
      backSeconds: 100,
      // 往下滑动多少显示返回顶部（单位：px）
      showPx: 300,

    }
  },
  components: {
    // HelloWorld
  },
  watch: {
    'screenWidth': function (val) { //监听屏幕宽度变化
      this.winSizeChange(val)
    }
  },
  computed: {
    // 是否显示遮罩
    maskIn() {
      return this.drawerShow && this.screenWidth <= 1204;
    },
  },
  methods: {
    // 点击菜单
    tapLink() {
      this.drawerShow = false;
    },
    // 页面滚动
    scrollFn() {
      this.scrollTop = this.$refs.scrollBox.scrollTop;
      this.backTopShow = this.scrollTop > this.showPx // 是否显示置顶按钮
    },
    // 回到顶部
    goTop() {
      if (!this.backTopAllow) return;
      this.backToTopShow = false;
      this.backTopAllow = false;
      let step = this.scrollTop / this.backSeconds;
      let backTopInterval = setInterval(() => {
        if (this.scrollTop > 0) {
          this.$refs.scrollBox.scrollTop -= step;
        } else {
          this.backTopAllow = true;
          clearInterval(backTopInterval);
        }
      }, 1)
    },
    winSizeChange(val) {
      //   this.drawerShow = val > 1204
      this.drawerShow = val > 1204
    },
    drawClick() {
      this.drawerShow = !this.drawerShow
      //   this.clickDrawerShow = this.drawerShow;
      //   this.clickDrawerShow = !this.clickDrawerShow
    },
    goSign() {
      this.$router.push({
        name: "signin"
      })
    },
    goWrite() {
      this.$router.push({
        name: "write"
      })
    }
  },
  mounted() {
    var _this = this;
    let winWidth = document.documentElement.clientWidth
    console.log('winWidth', winWidth);
    _this.winSizeChange(winWidth)
    window.onresize = function () { // 定义窗口大小变更通知事件
      _this.screenWidth = document.documentElement.clientWidth; //窗口宽度
    };
    window.addEventListener("scroll", this.handleScroll);
  }
  // destroyed() {
  //   document.removeEventListener('scroll', this.handleScroll)
  // }
}
</script>



<style lang="scss" scoped>
.oparte-right {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  .but-list {
    // padding-left: 30px;
    display: flex;
    li {
      margin-left: 30px;
      display: inline-block;
      height: 100%;
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        font-size: 26px;
        cursor: pointer;
      }
    }
  }
}
.bg-bubbles {
  position: absolute;
  // 使气泡背景充满整个屏幕；
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // 如果元素内容超出给定的宽度和高度，overflow 属性可以确定是否显示滚动条等行为；
  overflow: hidden;
  li {
    border-radius: 100%;
    position: absolute;
    // bottom 的设置是为了营造出气泡从页面底部冒出的效果；
    bottom: -160px;
    // 默认的气泡大小；
    width: 20px;
    height: 20px;
    background-color: rgba(255, 255, 255, 0.15);
    list-style: none;
    // 使用自定义动画使气泡渐现、上升和翻滚；
    animation: square 15s infinite;
    transition-timing-function: linear;
    // 分别设置每个气泡不同的位置、大小、透明度和速度，以显得有层次感；
    &:nth-child(1) {
      left: 10%;
    }
    &:nth-child(2) {
      left: 20%;
      width: 90px;
      height: 90px;
      animation-delay: 2s;
      animation-duration: 7s;
    }
    &:nth-child(3) {
      left: 25%;
      animation-delay: 4s;
    }
    &:nth-child(4) {
      left: 40%;
      width: 60px;
      height: 60px;
      animation-duration: 8s;
      background-color: rgba(255, 255, 255, 0.3);
    }
    &:nth-child(5) {
      left: 70%;
    }
    &:nth-child(6) {
      left: 80%;
      width: 120px;
      height: 120px;
      animation-delay: 3s;
      background-color: rgba(255, 255, 255, 0.2);
    }
    // &:nth-child(7) {
    //   left: 32%;
    //   width: 160px;
    //   height: 160px;
    //   animation-delay: 2s;
    // }
    // &:nth-child(8) {
    //   left: 55%;
    //   width: 20px;
    //   height: 20px;
    //   animation-delay: 4s;
    //   animation-duration: 15s;
    // }
    // &:nth-child(9) {
    //   left: 25%;
    //   width: 10px;
    //   height: 10px;
    //   animation-delay: 2s;
    //   animation-duration: 12s;
    //   background-color: rgba(255, 255, 255, 0.3);
    // }
    // &:nth-child(10) {
    //   left: 85%;
    //   width: 160px;
    //   height: 160px;
    //   animation-delay: 5s;
    // }
  }
  // 自定义 square 动画；
  @keyframes square {
    0% {
      opacity: 0.5;
      transform: translateY(0px) rotate(45deg);
    }
    25% {
      opacity: 0.75;
      transform: translateY(-400px) rotate(90deg);
    }
    50% {
      opacity: 1;
      transform: translateY(-600px) rotate(135deg);
    }
    100% {
      opacity: 0;
      transform: translateY(-1000px) rotate(180deg);
    }
  }
}

.gotop {
  position: fixed;
  right: 5px;
  bottom: 5px;
  z-index: 999;
  // background: $bs-main;
  // color:$bs-white;
  width: 40px;
  height: 40px;
  // border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // text-align: center;
  // line-height: 40px;
  .icon {
    font-size: 22px;
    font-weight: bold;
  }
  // a{
  //   background: $bs-main;
  //   color:$bs-white;
  // }
}
.wrapper {
  right: 0;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  -webkit-transition: 0.4s cubic-bezier(0.18, 0.81, 0.3, 0.89);
  transition: 0.4s cubic-bezier(0.18, 0.81, 0.3, 0.89);
}
.rotateBut {
  transform: rotate(450deg);
}
#main {
  color: $bs-normal-text;
  // background:$bs-back;
  position: absolute;
  left: 200px;
  right: 0;
  min-height: 100%;
  height: 100%;
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  header {
    background: $bs-main;
    background: $bs-white;
    color: $bs-main;
    // min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    .oparte {
      background: $bs-main;
      background: $bs-white;
      z-index: 10;
      transition: padding-left 0.6s ease-in-out,
        background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 0.15s linear;
      left: 0;
      right: 0;
      box-sizing: border-box;
      padding: 0 20px;
      position: fixed;
      height: 56px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      &.show {
        left: 200px;
        width: auto;
      }
      &.fixed {
        z-index: 88;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
          0 2px 10px 0 rgba(0, 0, 0, 0.12);
      }
      button {
        text-align: left;
      }
    }
  }
  // 内容样式
  .container {
    // padding: 20px;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: $bs-light-back;
  }
}
#menu {
  overflow-x: hidden;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  // padding-left: 0;
  bottom: 0;
  z-index: 99;
  width: 200px;
  min-height: 100%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  will-change: transform, -webkit-transform;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #fff;
  header {
    width: 100%;
    text-align: center;
    // padding: 20px 0;
    background: $bs-main;
    color: #fff;
    min-height: 150px;
    flex: 0 0 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .nick-name {
      font-weight: bold;
      font-size: 20px;
    }
    .sign-text {
      font-size: 14px;
      // color: sign-text;
    }
    .head-img {
      padding-top: 20px;
    }
    &:last-of-type {
      padding-bottom: 10px;
    }
  }
  .option {
    flex: 1;
    padding-top: 20px;
    overflow: auto;
    user-select: none;
    ul {
      //   display: flex;
      //   align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 0 20px;
      a {
        display: flex;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        padding: 0 20px;
        cursor: pointer;
        color: $bs-normal-text;
        transform: translateZ(0);
        position: relative;
        transition-property: color;
        transition-duration: 0.4s;
        transition: all 1s;
        transform: translate(0, 0);
        line-height: 44px;
        font-size: 14px;
        font-weight: bold;
        color: inherit;
        text-decoration: none;
        &.active {
          background: $bs-active-back;
          color: $bs-main;
        }
        // a {
        //   color: inherit;
        //   text-decoration: none;
        // }
        &:hover {
          color: $bs-main;
        }
      }
    }
  }

  &:not(.show) {
    .option ul li {
      &:nth-child(odd) {
        transform: translate(50%, 0);
      }
      &:nth-child(even) {
        transform: translate(80%, 0);
        // background: translate(-100%,0);
      }
    }
  }
}

.button {
  // font-size: 100px;
  width: 35px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0);
  background-repeat: no-repeat;
  background-size: 100%;
  border: 0;
  outline: none;
  transition: all 0.3s;
  cursor: pointer;
  text-align: left;
  border-radius: 10px;
  text-align: center;
  color: $bs-main;
  // color:$bs-text
  .icon {
    font-size: 22px;
  }
  &:hover {
    background: $bs-hover;
    color: $bs-main;
  }
  &:active {
    background: $bs-hover;
    color: $bs-main;
    // color:yellow;
    // transform:scale(0.97);
    // -ms-transform:rotate(0.97); 	/* IE 9 */
    // -moz-transform:rotate(0.97); 	/* Firefox */
    // -webkit-transform:rotate(0.97); /* Safari 和 Chrome */
    // -o-transform:rotate(0.97); 	/* Opera */
  }
}
.search {
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  input {
    background: none;
    border: 0;
    outline: none;
    flex: 1;
    padding-left: 20px;
    transition: 0.2s ease-in-out;
    opacity: 0;
    width: 0;
    border-bottom: 1px solid $bs-main;
    height: 40px;
    font-size: 16px;
    color: $bs-main;
    border-radius: 0;
    &::placeholder {
      font-size: inherit;
      color: $bs-light-color;
    }
  }
  &.in {
    input {
      width: 320px;
      opacity: 1;
    }
  }
  .fixed-icon {
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    .icon {
      font-size: 28px;
    }
  }
}

@media screen and (max-width: 1204px) {
  #main {
    left: 0;
    .oparte {
      &.show {
        left: 0 !important;
        width: auto;
      }
    }
  }
  #menu {
    z-index: 99;
    box-shadow: none;
    position: fixed;
    transform: translateX(-100%);

    &.show {
      transform: translateX(0);
      .option ul li {
        transform: translate(0, 0);
      }
      & + #main {
        left: 0;
      }
    }
  }
  .search {
    flex: 1;
    padding-left: 10px;
    box-sizing: border-box;
    &.in {
      input {
        width: 100%;
        opacity: 1;
      }
    }
  }
}

.mask {
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 88;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0;
  pointer-events: none;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  &.in {
    visibility: visible;
    pointer-events: auto;
    opacity: 0.3;
  }
}
</style>
