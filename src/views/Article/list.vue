<template>
    <div class="articlelist-page">
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
    methods:{
        toAricle(){
            this.$router.push({
                name:'Articledetail'
            })
        }
  }
}
</script> 
<style lang="scss" scoped>
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