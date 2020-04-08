<template>
<div class="wrapper" :style="{left:wrapperShow||screenWidth<=1204?'0':'-240px'}">
  <aside id="menu" :class="['sidebar',{show:wrapperShow}]">
        <header>
          <div>
            <img src="../assets/images/admin-head.png">
          </div>
          <p>Dunizb</p>
          <p>dunizb@foxmail.com</p>
        </header>
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
  <main id="main" :class="[{show:wrapperShow}]">
    <header>
      <div class="oparte">
        <button :class="['button',{}]" @click="drawClick">点我</button>
      </div>
      <div class="nav-box">
        <h2>标签: JavaScript</h2>
        <!-- <nav> -->
          <ul class="nav">
            <li>标签</li>
            <li>标签</li>
            <li>标签</li>
            <li>标签</li>
            <li>标签</li>
            <li>标签</li>
          </ul>
        <!-- </nav> -->
      </div>
    </header>
    <div class="main">

    </div>
  </main>
  <div @click="drawClick" :class="['mask',{in:maskIn}]" id="mask"></div>
</div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return {
      screenWidth: document.documentElement.clientWidth,//屏幕宽度
      wrapperShow:false,
    }
  },
  components: {
    // HelloWorld
  },
  watch:{
    'screenWidth':function(val){ //监听屏幕宽度变化
       this.winSizeChange(val)
    }
},
computed:{
  // 是否显示遮罩
  maskIn(){
    return this.wrapperShow&&this.screenWidth<=1204;
  },
},
methods:{
  winSizeChange(val){
    this.wrapperShow=val>1204
  },
  drawClick(){
      this.wrapperShow=!this.wrapperShow
    }
  },
  mounted() {
    var _this = this;
    let winWidth = document.documentElement.clientWidth
    _this.winSizeChange(winWidth)
    window.onresize = function(){ // 定义窗口大小变更通知事件
        _this.screenWidth = document.documentElement.clientWidth; //窗口宽度
    };
  }
}
</script>

<style lang="scss">
@import "../assets/scss/sidebar.scss";
</style>

<style lang="scss" scoped>
$main-color:#94d7c5;
$white-back:#fff;
.wrapper{
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  -webkit-transition: 0.4s cubic-bezier(0.18, 0.81, 0.3, 0.89);
  transition: 0.4s cubic-bezier(0.18, 0.81, 0.3, 0.89);
}
.rotateBut{
  transform: rotate(450deg);
}
#main {
    // background:$main-color;
    position: relative;
    left: 240px;
    // padding-left: 240px;
    min-height: 100%;
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
    display: flex;
    flex-direction: column;
    header{
      background:$main-color;
      color:#fff;
      .nav-box{
        padding: 0 20px;
        h2{
          
        }
        ul.nav{
          margin-top: 10px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          list-style: none;
          li{
            padding:0 20px;
            white-space: nowrap;
            // flex: 1;
          }
        }
        // }
      }
    }
    body{
      flex: 1;
      background: #fff;
    }
}
#menu{
  overflow-x: hidden;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 66;
  width: 240px;
  min-height: 100%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  will-change: transform, -webkit-transform;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #fff;
  header{
    width: 100%;
    text-align: center;
    padding: 20px 0;
    background:$main-color;
  }
  .option{
    flex: 1;
  }
  
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
      // .option ul li {
        transform: translate(0,0);
      // }
  }
  &:not(.show){
    .option ul li{
      &:nth-child(odd){
        transform: translate(50%,0);
      }
      &:nth-child(even){
        transform: translate(80%,0);
        // background: translate(-100%,0);
      }
    }
  }
}

.button {
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0);
    background-repeat: no-repeat;
    background-size: 100%;
    border: 0;
    outline: none;
    transition: all 0.5s;
    cursor: pointer;
}





@media screen and (max-width: 1240px){
  #main {
    left: 0;
  }
  #menu {
    z-index: 99;
    box-shadow: none;
    position: fixed;
    transform: translateX(-100%);
    
      &.show {
        transform: translateX(0);
        .option ul li {
          transform: translate(0,0);
        }
        &+ #main {
            left: 0;
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
