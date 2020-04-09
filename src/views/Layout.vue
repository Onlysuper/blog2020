<template>
<div class="wrapper" :style="{left:drawerShow||screenWidth<=1204?'0':'-200px'}">
  <aside id="menu" :class="['sidebar',{show:drawerShow}]">
        <header>
          <div class="head-img">
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
  <main id="main" ref="scrollBox" @scroll="scrollFn"  :class="[{show:drawerShow}]">
    <header>
      <div :class="['oparte',{show:drawerShow,fixed:scrollTop>54}]">
        <button :class="['button',{show:drawerShow}]" @click="drawClick">
          <span class="icon iconfont icon-caidan"></span>
        </button>
        <div class="search">
          <input/>
          <span class="icon iconfont icon-tubiao_huaban"></span>
        </div>
      </div>
      <div style="height:54px;"></div>
      <div class="nav-box">
        <h2>标签: JavaScript</h2>
        <!-- <nav> -->
          <ul class="nav">
            <li>标签</li>
            <li>标签</li>
            <li>标签</li>
            <!-- <li>标签</li>
            <li>标签</li>
            <li>标签</li> -->
          </ul>
        <!-- </nav> -->
      </div>
    </header>
    <div class="container">
        <router-view></router-view>
    </div>
  </main>
  <div @click="drawClick" :class="['mask',{in:maskIn}]" id="mask"></div>
  <transition :duration="300">
    <a v-if="backTopShow" class="gotop" href="javascript:;" @click="goTop">
      顶
    </a>
  </transition>
</div>
</template>

<script>

export default {
  name: 'Layout',
  data(){
    return {
      scrollTop:0,// 滚动位置
     screenWidth: document.documentElement.clientWidth,//屏幕宽度
     drawerShow:false,
      //是否显示回到顶部
     backTopShow : false,
     // 是否允许操作返回顶部
     backTopAllow : true,
     // 返回顶部所需时间
     backSeconds : 100,
     // 往下滑动多少显示返回顶部（单位：px）
     showPx : 300,
     
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
    return this.drawerShow&&this.screenWidth<=1204;
  },
},
methods:{
  // 页面滚动
  scrollFn() {
    this.scrollTop=this.$refs.scrollBox.scrollTop;
    this.backTopShow = this.scrollTop > this.showPx // 是否显示置顶按钮
  },
  // 回到顶部
  goTop(){
    if (!this.backTopAllow) return;
    this.backToTopShow = false;
    this.backTopAllow = false;
    let step = this.scrollTop / this.backSeconds;
    let backTopInterval = setInterval(()=>{
      if(this.scrollTop>0){
        this.$refs.scrollBox.scrollTop-=step;
      }else{
        this.backTopAllow = true;
        clearInterval(backTopInterval);
      }
    },1)
  },
  winSizeChange(val){
    this.drawerShow=val>1204
  },
 
  drawClick(){
      this.drawerShow=!this.drawerShow
    }
  },
  mounted() {
    var _this = this;
    let winWidth = document.documentElement.clientWidth
    _this.winSizeChange(winWidth)
    window.onresize = function(){ // 定义窗口大小变更通知事件
        _this.screenWidth = document.documentElement.clientWidth; //窗口宽度
    };
    window.addEventListener("scroll",this.handleScroll); 
  }
  // destroyed() {
  //   document.removeEventListener('scroll', this.handleScroll)
  // }
}
</script>

<style lang="scss">
@import "../assets/scss/sidebar.scss";
</style>

<style lang="scss" scoped>
$bs-main:#94d7c5;
$bs-active:#94d7c5;
$bs-back:#f3f7f8;
$bs-text:#727272;

$white-back:#fff;
.gotop{
  position: fixed;
  right: 20px;
  bottom: 50px;
}
.wrapper{
  right: 0;
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
    background:$bs-back;
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
    header{
      background:$bs-main;
      color:#fff;
      min-height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width:100%;
      .oparte{
        background:$bs-main;
        z-index: 10;
        transition: padding-left 0.6s ease-in-out, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s linear;
        // min-width: 1000px;
        // transition: 0.4s ease-in-out;
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
        &.show{
          left: 200px;
          width: auto;
        }
        &.fixed{
          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        }
      }
      .nav-box{
        padding: 0 20px;
        box-sizing: border-box;
        max-width: 960px;
        width: 100%;
        margin: 0 auto;
        h2{
          padding-top: 20px;
          box-sizing: border-box;
        }
        ul.nav{
          margin-top: 10px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          list-style: none;
          li{
            padding:10px 20px;
            white-space: nowrap;
            cursor: pointer;
            &:hover,&:active{
              background:#fff;
              color: $bs-active;
            }
          }
        }
      }
      &:last-of-type{
        // padding-bottom: 20px;
      }
    }
    // 内容样式
    .container{
      padding: 20px;
      max-width: 960px;
      width:100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      
    }
}
#menu{
  overflow-x: hidden;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  // padding-left: 0;
  bottom: 0;
  z-index: 66;
  width: 200px;
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
    // padding: 20px 0;
    background:$bs-main;
    color:#fff;
    min-height:150px;
    flex: 0 0 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .head-img{
       padding-top: 20px;
    }
    &:last-of-type{
      padding-bottom: 10px;
    }

  }
  .option{
    flex: 1;
    padding-top: 20px;
    overflow: auto;
    ul li {
      display: flex;
      align-items: center;
      width:195px;
      // margin-top: 15px;
      padding:0 20px;
      cursor: pointer;
      color: #727272;
      line-height: 44px;
      transform: translateZ(0);
      position: relative;
      transition-property: color;
      transition-duration: 0.4s;
      transition: all 1s;
      transform: translate(0,0);
      &:hover{
        color:$bs-main
      }
    }
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
    // font-size: 100px;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0);
    background-repeat: no-repeat;
    background-size: 100%;
    border: 0;
    outline: none;
    transition: all 0.5s;
    cursor: pointer;
    color:#fff;
    text-align: left;
    &.show{
      // transform: rotate(450deg);
    }
    .icon{
      font-size: 30px;
    }
    &:active{
        // color:yellow;
        transform:scale(0.67);
        -ms-transform:rotate(0.67); 	/* IE 9 */
        -moz-transform:rotate(0.67); 	/* Firefox */
        -webkit-transform:rotate(0.67); /* Safari 和 Chrome */
        -o-transform:rotate(0.67); 	/* Opera */
    }
}
.search{
  input{
    background: none;
    border:0;
    outline: none;
  }
  .icon{
    font-size: 30px;
  }
}





@media screen and (max-width: 1240px){
  #main {
    left: 0;
    .oparte{
      &.show{
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
