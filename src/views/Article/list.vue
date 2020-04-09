<template>
    <div class="articlelist-page">
        <div style="height:54px;"></div>
        <div class="nav-box">
          <h2>标签: JavaScript</h2>
          <nav :class="['tags',{expand:moreTagsShow}]">
            <ul class="nav">
              <li v-waves>标签</li>
              <li v-waves>标签</li>
              <li v-waves>标签</li>
              <li v-waves>标签</li>
              <li v-waves>标签</li>
              <li v-waves>标签</li>
              <li v-waves>标签</li>
              <li v-waves>标签</li>
              <li v-waves>标签</li>
              <li v-waves>标签</li>
              <li v-waves>标签</li>
              <li v-waves>标签</li>
              <li v-waves>标签</li>
            </ul>
            <div @click="moreTags" class="more-but">
              <!-- ee -->
               <span class="icon iconfont icon-tubiao-12"></span>
            </div>
          </nav>
        </div>
        <section>
          <hgroup>
            <time>2019-01-02</time>
            <h3 @click="toAricle">小技巧|使用Vue.js的Mixins复用你的代码s</h3>
            <div class="footer">
              <a class="tip success">vue.js</a>
              <a class="tip success">前端</a>
              <a class="tip success">小技巧</a>
            </div>
          </hgroup>
        </section>
        <section>
          <hgroup>
            <time>2019-01-02</time>
            <h3>小技巧|使用Vue.js的Mixins复用你的代码s</h3>
            <div class="footer">
              <a class="tip success">vue.js</a>
              <a class="tip success">前端</a>
              <a class="tip success">小技巧</a>
            </div>
          </hgroup>
        </section>
        <section>
          <hgroup>
            <time>2019-01-02</time>
            <h3>小技巧|使用Vue.js的Mixins复用你的代码s</h3>
            <div class="footer">
              <a class="tip success">vue.js</a>
              <a class="tip success">前端</a>
              <a class="tip success">小技巧</a>
            </div>
          </hgroup>
        </section>
        <section>
          <hgroup>
            <time>2019-01-02</time>
            <h3>小技巧|使用Vue.js的Mixins复用你的代码s</h3>
            <div class="footer">
              <a class="tip success">vue.js</a>
              <a class="tip success">前端</a>
              <a class="tip success">小技巧</a>
            </div>
          </hgroup>
        </section>
        <section>
          <hgroup>
            <time>2019-01-02</time>
            <h3>小技巧|使用Vue.js的Mixins复用你的代码s</h3>
            <div class="footer">
              <a class="tip success">vue.js</a>
              <a class="tip success">前端</a>
              <a class="tip success">小技巧</a>
            </div>
          </hgroup>
        </section>
        <section>
          <hgroup>
            <time>2019-01-02</time>
            <h3>小技巧|使用Vue.js的Mixins复用你的代码s</h3>
            <div class="footer">
              <a class="tip success">vue.js</a>
              <a class="tip success">前端</a>
              <a class="tip success">小技巧</a>
            </div>
          </hgroup>
        </section>
        <section>
          <hgroup>
            <time>2019-01-02</time>
            <h3>小技巧|使用Vue.js的Mixins复用你的代码s</h3>
            <div class="footer">
              <a class="tip success">vue.js</a>
              <a class="tip success">前端</a>
              <a class="tip success">小技巧</a>
            </div>
          </hgroup>
        </section>
    </div>
</template>
<script>
export default {
    name:"Articlelist",
    data(){
      return {
        moreTagsShow:false,
      }
    },
    methods:{
        toAricle(){
            this.$router.push({
                name:'Articledetail'
            })
        },
        moreTags(){
          this.moreTagsShow = !this.moreTagsShow
        }
  }
}
</script> 
<style lang="scss" scoped>
.nav-box{
  padding: 0 20px; 
  box-sizing: border-box;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  color: $bs-color;
  // overflow: hidden;
  padding: 10px;
  h2{
    padding-top: 20px;
    box-sizing: border-box;
  }
  .tags{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    position: relative;
    
    ul{
      transition: 0.2s ease-in-out;
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      list-style: none;
      // color:$bs-light-color;
      overflow: hidden;
      li{
        font-weight: bold;
        // padding:10px 20px;
        text-align: center;
        white-space: nowrap;
        line-height: 40px;
        min-width: 80px;
        cursor: pointer;
        margin-right: 20px;
        &:hover,&:active{
          color:$bs-color;
          background:#fff;
        }
      }
    }
    .more-but{
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      background: #fff;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      .icon{
        font-size: 30px;
      }
    }
    &.expand{
      ul{
        flex-wrap:wrap;
        z-index: 100;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        // display: block;
        white-space: normal;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
      }
      .more-but{
        right: 0;
        top: -44px;
        position: absolute;
      }
      
    }
  }
  
}
 // 内容样式
.articlelist-page{
    padding: 20px;
    max-width: 960px;
    width:100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
}
section{
        background:#fff;
        box-shadow: 0 1px 2px rgba(151, 151, 151, 0.58);
        margin: 10px;
        flex: 1;
        min-width: 250px;
        padding:20px;
        time{
            line-height: 24px;
            font-weight: bold;
            display: block;
            margin: 0 0 10px;
        }
        h3{
          color: #3f51b5;
          position: relative;
          display: inline-block;
          margin-bottom: 16px;
          cursor: pointer;
          &:after {
              content: "";
              position: absolute;
              width: 100%;
              height: 2px;
              bottom: 0;
              left: 0;
              background-color: #3f51b5;
              visibility: hidden;
              -webkit-transform: scaleX(0);
              transform: scaleX(0);
              -webkit-transition: 0.4s ease-in-out;
              transition: 0.4s ease-in-out;
          }
          &:hover:after{
              visibility:initial;
              -webkit-transform: scaleX(1);
              transform: scaleX(1);
          }
        }
        .footer{
          padding: 12px 0px 8px;
          border-top: 1px solid #ddd;
          .tip{
              cursor: pointer;
              display: inline-block;
              margin: 0 8px 8px 0;
              border-radius: 2px;
              color:#fff;
              width: 80px;
              text-align: center;
              &.success{
                background:#8bc34a
              }
          }
        }
        
      }
</style>