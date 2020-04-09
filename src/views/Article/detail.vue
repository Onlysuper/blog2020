<template>
    <article class="articledetail-page">
        <div class="detail-card">
            <h1>小技巧|使用Vue.js的Mixins复用你的代码</h1>
            <div class="meta">
                <time>2019-01-02</time>
            </div>
            <div class="content">
                <!-- <div class="text-content"> -->
                    <p>Vue中的混入 mixins 是一种提供分发 Vue 组件中可复用功能的非常灵活的方式。听说在3.0版本中可能会用Hooks的形式实现，但这并不妨碍它的强大。基础部分的可以看这里。</p>
                    <p>这里主要来讨论 mixins 如何优化我们的数据列表代码。</p>
                    <p>如果我们有大量的表格页面，仔细一扒拉你发现非常多的东西都是可以复用的例如分页，表格高度，加载方法， laoding 声明等一大堆的东西。下面我们来整理出来一个简单通用混入 list.js</p>
                <!-- </div> -->
                <h2 id="1-意外全局变量">意外全局变量</h2>
                <!-- <div class="text-content"> -->
                <p>Vue中的混入 mixins 是一种提供分发 Vue 组件中可复用功能的非常灵活的方式。听说在3.0版本中可能会用Hooks的形式实现，但这并不妨碍它的强大。基础部分的可以看这里。</p>
                <p>这里主要来讨论 mixins 如何优化我们的数据列表代码。</p>
                <p>如果我们有大量的表格页面，仔细一扒拉你发现非常多的东西都是可以复用的例如分页，表格高度，加载方法， laoding 声明等一大堆的东西。下面我们来整理出来一个简单通用混入 list.js</p>
                <p>如果我们有大量的表格页面，仔细一扒拉你发现非常多的东西都是可以复用的例如分页，表格高度，加载方法， laoding 声明等一大堆的东西。下面我们来整理出来一个简单通用混入 list.js</p>
                <p>如果我们有大量的表格页面，仔细一扒拉你发现非常多的东西都是可以复用的例如分页，表格高度，加载方法， laoding 声明等一大堆的东西。下面我们来整理出来一个简单通用混入 list.js</p>
                <p>如果我们有大量的表格页面，仔细一扒拉你发现非常多的东西都是可以复用的例如分页，表格高度，加载方法， laoding 声明等一大堆的东西。下面我们来整理出来一个简单通用混入 list.js</p>
                <p>如果我们有大量的表格页面，仔细一扒拉你发现非常多的东西都是可以复用的例如分页，表格高度，加载方法， laoding 声明等一大堆的东西。下面我们来整理出来一个简单通用混入 list.js</p>
                <p>如果我们有大量的表格页面，仔细一扒拉你发现非常多的东西都是可以复用的例如分页，表格高度，加载方法， laoding 声明等一大堆的东西。下面我们来整理出来一个简单通用混入 list.js</p>
                <p>如果我们有大量的表格页面，仔细一扒拉你发现非常多的东西都是可以复用的例如分页，表格高度，加载方法， laoding 声明等一大堆的东西。下面我们来整理出来一个简单通用混入 list.js</p>
                <p>如果我们有大量的表格页面，仔细一扒拉你发现非常多的东西都是可以复用的例如分页，表格高度，加载方法， laoding 声明等一大堆的东西。下面我们来整理出来一个简单通用混入 list.js</p>
                <h3 id="Question">Question</h3>
                <p>如果我们有大量的表格页面，仔细一扒拉你发现非常多的东西都是可以复用的例如分页，表格高度，加载方法， laoding 声明等一大堆的东西。下面我们来整理出来一个简单通用混入 list.js</p>
                <p>如果我们有大量的表格页面，仔细一扒拉你发现非常多的东西都是可以复用的例如分页，表格高度，加载方法， laoding 声明等一大堆的东西。下面我们来整理出来一个简单通用混入 list.js</p>
                <!-- </div> -->
                <div class="code_content" v-highlight>
                    <div v-html="input"></div>
                </div>
            </div>
        </div>
        <aside>
            <nav class="top-warp">
                <h4>TOC</h4>
                <ol>
                    <li>
                        <a href="#1-意外全局变量">1-意外全局变量</a>
                        <ol>
                           <li> 
                                <a href="#Question">
                                Question
                            </a>
                           </li>
                        </ol>
                    </li>
                </ol>
            </nav>
        </aside>
    </article>
</template>
<script>
export default {
    name:"Articledetail",
    data(){
        return {
            input:"<javascript>eee</javascript>"
        }
    },
    methods:{
       
    }
}
</script> 
<style lang="scss" scoped>
 // 内容样式
.articledetail-page{
    flex: 1;
    // display: flex;
    // flex-direction: ;
    .detail-card{
        width: 80%;
        float: left;
        border-radius: 4px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        // margin-top: -150px;
        position: relative;
        z-index: 10;
        background: #fff;
        padding:30px;
        box-sizing: border-box;
        h2{
            font-size: 32px;
        }
        .meta{
            time{
                line-height: 14px;
                font-size: 13px;
                font-weight: bold;
                color: #727272;
            }
        }
        .content{
            .text-content{
                padding-top: 20px;
            }
            p{
                margin-bottom: 30px;
            }
        }
    }
    aside{
        width:20%;
        float: right;
        .top-warp{
            position: fixed;
            padding-left:60px;
            &.fixed{
                top: 76px;
                bottom: 140px;
                overflow-y: auto;
            }
        }
    }
}

@media screen and (max-width: 760px){
    .articledetail-page{
        .detail-card{
            width: 100%;
        }
    }
    aside {
        display: none;
    }
}
</style>