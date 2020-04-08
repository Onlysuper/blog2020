<template>
<div id="wrapper" class="home">
  <aside id="menu" :class="['sidebar',menuClass]">
        <!-- <div class="headSculpture">
            <img src="images/headSculpture.jpg" alt="">
            <p>昵称：粉红色少女</p>
         </div> -->
         <div class="option">
            <ul>
               <li><img src="images/home.png" alt="">
                  <p>首页</p>
               </li>
               <li><img src="images/works.png" alt="">
                  <p>我的作品</p>
               </li>
               <li><img src="images/release.png" alt="">
                  <p>发布作品</p>
               </li>
               <li><img src="images/collection.png" alt="">
                  <p>我的收藏</p>
               </li>
               <li><img src="images/setup.png" alt="">
                  <p>设置</p>
               </li>
               <li><img src="images/home.png" alt="">
                  <p>首页</p>
               </li>
               <li><img src="images/works.png" alt="">
                  <p>我的作品</p>
               </li>
               <li><img src="images/release.png" alt="">
                  <p>发布作品</p>
               </li>
               <li><img src="images/collection.png" alt="">
                  <p>我的收藏</p>
               </li>
               <li><img src="images/setup.png" alt="">
                  <p>设置</p>
               </li>
            </ul>
        </div>
  </aside>
  <main id="main">
    <button :class="['button',{'rotateBut':rotateBut}]" @click="hideMenu">点我</button>
    我是内容
  </main>
  <div @click="hideMenu" :class="['mask',{in:maskIn}]" id="mask"></div>
</div>
</template>

<script>
// import "src/assets/scss/sidebar.scss"
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data(){
    return {
      screenWidth: document.documentElement.clientWidth,//屏幕宽度
      menuClass:'', // menu classname
      // rotateBut:false,// 按钮是否旋转45度
    }
  },
  components: {
    // HelloWorld
  },
  watch:{
    'screenWidth':function(val){ //监听屏幕宽度变化
        if(document.body.clientWidth>1204){
          this.menuClass=""
        }
    }
},
computed:{
  // 是否显示遮罩
  maskIn(){
    return this.menuClass=='show'
  },
  rotateBut(){
    if(this.screenWidth>1204){
      return this.menuClass=='hide';
    }else{
       return this.menuClass=='show' 
    }
  }
},
methods:{
    hideMenu(){
      if(this.screenWidth>1204){
        // pc端
        let isHide = this.menuClass=='hide';
        this.menuClass=isHide?'':'hide'
      }else{
        // 移动端
        let isHide = this.menuClass=='hide'||this.menuClass==''
        this.menuClass=isHide?'show':'hide'
      }
    }
  },
  mounted() {
    var _this = this;
    window.onresize = function(){ // 定义窗口大小变更通知事件
        _this.screenWidth = document.documentElement.clientWidth; //窗口宽度
        // _this.screenHeight = document.documentElement.clientHeight; //窗口高度
    };
  }
}
</script>

<style lang="scss">
@import "../assets/scss/sidebar.scss";
</style>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100vh;
}
.rotateBut{
  transform: rotate(450deg);
}
#main {
    position: relative;
    left: 240px;
    min-height: 100%;
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
}
#menu{
  overflow-x: hidden;
  background-color: #BE04A7;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 66;
  width: 240px;
  min-height: 100%;
  // background: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;
  -webkit-transition: 0.4s cubic-bezier(0.18, 0.81, 0.3, 0.89);
  transition: 0.4s cubic-bezier(0.18, 0.81, 0.3, 0.89);
  will-change: transform, -webkit-transform;
  .option ul li {
      display: flex;
      align-items: center;
      width:195px;
      margin-top: 15px;
      padding-left:25px;
      cursor: pointer;
      color: #D0D1D7;
      transform: translateZ(0);
      position: relative;
      transition-property: color;
      transition-duration: 0.4s;
      transition: all 1s;
      .option ul li {
        transform: translate(0,0);
      }
  }
  &.hide {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    &+ #main {
        left: 0;
    }
    .option ul li {
        &:nth-child(even){
          transform: translate(-200px,0);
        }
        &:nth-child(odd){
            transform: translate(200px,0);
        }
    }
  }
}





@media screen and (max-width: 1240px){
  #main {
    left: 0;
  }
  #menu {
    z-index: 99;
    box-shadow: none;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
      &.show {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        .option ul li {
          transform: translate(0,0);
        }
        &+ #main {
            left: 0px;
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
      opacity: .3;
    }
}
</style>
