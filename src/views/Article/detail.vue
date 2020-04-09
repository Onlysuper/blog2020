<template>
    <article class="articledetail-page">
       <div class="width-limit">
            <div class="detail-card">
             <div class="content">
                <h1>小技巧|使用Vue.js的Mixins复用你的代码</h1>
                <div class="meta">
                    <time>2019-01-02</time>
                </div>
                <p>Vue中的混入 mixins 是一种提供分发 Vue 组件中可复用功能的非常灵活的方式。听说在3.0版本中可能会用Hooks的形式实现，但这并不妨碍它的强大。基础部分的可以看这里。</p>
                <p>这里主要来讨论 mixins 如何优化我们的数据列表代码。</p>
                <p>如果我们有大量的表格页面，仔细一扒拉你发现非常多的东西都是可以复用的例如分页，表格高度，加载方法， laoding 声明等一大堆的东西。下面我们来整理出来一个简单通用混入 list.js</p>
                <h2 id="1-意外全局变量">意外全局变量</h2>
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
                <!-- </div> -->
                <div class="comments">
                    <h3>我要评论</h3>
                    <div>
                        <textarea>
                            
                        </textarea>
                            <!-- <mavon-editor 
                            v-model="commentContent" 
                            ref="md" 
                            @change="changeComment" 
                            style="min-height: 600px"
                        /> -->
                    </div>
                    <div class="footer">
                        <button>提交</button>
                    </div>
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
       </div>
    </article>
</template>
<script>
// 导入组件 及 组件样式
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
    name:"Articledetail",
    components: {
        mavonEditor,
    },
    data(){
        return {
            commentContent:'', // 输入的markdown
            conmentHtml:'',    // 及时转的html
            input:'<pre class="hljs xml"><code style="background-color: transparent;"><span class="diff"></span><span class="line" data-start="0" data-start-original="1" data-end="1" data-id="1640223"></span><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="actionscript">'
                +'</span><span class="line" data-start="2" data-end="2" data-id="1640223"></span><span class="actionscript">    <span class="hljs-keyword">var</span> name = <span class="hljs-string">"小名"</span>'
+'</span><span class="line" data-start="3" data-end="3" data-id="1640223"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>'
        }
    },
    methods:{
        // 所有操作都会被解析重新渲染
        changeComment(value, render){
            // render 为 markdown 解析后的结果[html]
            this.conmentHtml = render;
        },
        // 提交
        submitComment(){
            console.log(this.commentContent);
            console.log(this.conmentHtml);
        }
    }
}
</script> 
<style lang="scss" scoped>
 // 内容样式
.articledetail-page{
    // flex: 1;
    // display: flex;
    // flex-direction:row ;
    width: 100%;
    .detail-card{
        position: relative;
        width: 80%;
        flex: 1;
        border-radius: 4px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10;
        // background: red;
        box-sizing: border-box;
        height: auto;
        float: left;
        &::after{
            content: '';
            display: block;
             clear:both;
        }
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
            box-sizing: border-box;
            padding: 30px;
            p{
                margin-bottom: 30px;
            }
        }
    }
    aside{
        width:20%;
        flex: 0 0 20%;
        float: left;
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
    .comments{
        margin-top: 30px;
        width: 100%;
        textarea{
            width: 100%;
        }
        .footer{
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
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