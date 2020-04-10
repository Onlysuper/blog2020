<template>
  <div class="write-page bs-outline">
    <form action="#" class="write_form">
      <div class="write_group">
        <label for="title">标题</label>
        <input name="title" type="text" />
      </div>
      <div class="write_group">
        <label for="describe">摘要</label>
        <input name="describe" type="text" />
      </div>
      <div class="write_group">
        <label for="type">归属菜单</label>
        <select>
          <option>笔记</option>
          <option>总结</option>
        </select>
      </div>
      <div class="write_group">
        <label for="describe">标签</label>
        <div>
          <!-- <label>推荐标签</label> -->
          <ul class="recommend_tips">
            <li class="bs-tag">nodejs</li>
            <li class="bs-tag">javascript</li>
          </ul>
        </div>
        <div class="tip_input">
          <input placeholder="请输入标签名称" name="describe" type="text" />
          <button class="bs-button">
            <span>添加标签</span>
          </button>
        </div>

        <div class="selected_tips">
          <!-- <label for="describe">当前选择</label> -->
          <ul>
            <li>
              巴拉
              <span>x</span>
            </li>
            <li>
              巴拉
              <span>x</span>
            </li>
            <li>
              巴拉
              <span>x</span>
            </li>
          </ul>
        </div>

      </div>
      <div class="write_group">
        <label>内容</label>
        <mavon-editor class="bs-outline" v-model="commentContent" ref="md" @change="changeComment" style="min-height: 600px" />
      </div>
      <div>
        <button class="bs-button">
          <span>提交</span>
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  components: {
    mavonEditor,
  },
  data() {
    return {
      commentContent: '', // 输入的markdown
      conmentHtml: '',    // 及时转的html
    }
  },
  methods: {
    // 所有操作都会被解析重新渲染
    changeComment(value, render) {
      console.log(value);
      console.log(render);
      // render 为 markdown 解析后的结果[html]
      this.conmentHtml = render;
    },
    // 提交
    submitComment() {
      console.log(this.commentContent);
      console.log(this.conmentHtml);
    }
  }
}
</script>
<style lang="scss" scoped>
.write-page {
  padding: 20px;
  margin-top: 20px;
  .write_group {
    label {
      font-size: 13px;
      color: #8599ab;
      font-weight: 400;
      margin-bottom: 10px;
    }
    input,
    select {
      width: 100%;
      margin-bottom: 20px;
    }
    .tip_input {
      display: flex;
      flex-direction: row;
      margin-bottom: 10px;
      input {
        margin-bottom: 0;
      }
      button {
        padding: 0 20px;
        margin-left: 10px;
      }
    }
  }
  .recommend_tips {
    display: flex;
    li {
      margin-right: 10px;
      list-style: none;
      cursor: pointer;
      //   display: inline;
    }
  }
  .selected_tips {
    margin-bottom: 30px;
    ul {
      li {
        list-style: none;
        background: $bs-main;
        color: #fff;
        border-radius: 4px;
        display: inline;
        padding: 2px 15px;
        font-size: 12px;
        position: relative;
        margin-right: 10px;
        span {
          position: absolute;
          cursor: pointer;
          width: 10px;
          height: 10px;
          top: 50%;
          right: 5px;
          margin-top: -5px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
.v-note-wrapper {
  z-index: 77;
}
</style>