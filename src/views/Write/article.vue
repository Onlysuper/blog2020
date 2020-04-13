<template>
  <div class="write-page bs-outline">
    <div class="write_form">
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
        <div class="selected_tips">
          <!-- <label for="describe">当前选择</label> -->
          <ul>
            <transition-group name="list-complete" tag="p">
              {{selectedTags}}
              <li v-for="(tag) in selectedTags" :key="tag">
                {{tag}}
                <span @click="removeTag(tag)" class="removeTag">x</span>
              </li>
            </transition-group>
          </ul>
        </div>

        <div class="tip_input">
          <input v-model="tagVal" placeholder="请输入标签名称" name="describe" type="text" />
          <button @click="addTag" class="bs-button addtag-but">
            <span>添加标签</span>
          </button>
        </div>
        <div>

          <!-- <label>推荐标签</label> -->
          <ul class="recommend_tips">
            推荐标签：<li v-for="(tag,index) in recommentTags" @click="selectTag(tag.label)" :key="'recomment_tag'+index" :class="['bs-tag',{'selected':tag.selected}]">{{tag.label}}</li>
          </ul>
        </div>

      </div>
      <div class="write_group">
        <label>内容</label>
        <mavon-editor class="bs-outline" v-model="commentContent" ref="md" @change="changeComment" style="min-height: 600px" />
      </div>

    </div>
    <div class="footer">
      <button class="bs-button">
        <span>发布</span>
      </button>
    </div>
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

      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      //   teg
      tagVal: "",
      // 当前选中的标签
      selectedTags: [
        "javascrit",
        "html",
        "node",
        "php"
      ],
      // 提供标签
      recommentTags: [
        {
          label: "选择1",
          selected: false
        },
        {
          label: "选择2",
          selected: false
        },
        {
          label: "选择3",
          selected: false
        },
        {
          label: "选择4",
          selected: false
        },
      ],
      commentContent: '', // 输入的markdown
      conmentHtml: '',    // 及时转的html
    }
  },
  methods: {
    // 删除标签
    removeTag(tag) {
      let selectedIndex = this.selectedTags.findIndex(item => item == tag);
      this.selectedTags.splice(selectedIndex, 1)
      let recommentIndex = this.recommentTags.findIndex(item => item.label == tag);
      if (recommentIndex != -1) {
        this.$set(this.recommentTags[recommentIndex], 'selected', false);
      }
    },
    //添加标签
    addTag(tags) {


      if (tags && Array.isArray(tags)) {
        this.selectedTags = [...this.selectedTags, ...tags]
      } else {
        if (!this.tagVal) {
          return false
        }
        this.selectedTags.push(this.tagVal)
        this.tagVal = ""
      }
      this.selectedTags = [...new Set(this.selectedTags)];

    },
    //选择推荐标签
    selectTag(tag) {
      let index = this.recommentTags.findIndex(item => item.label == tag)
      if (!this.recommentTags[index]['selected']) {
        this.$set(this.recommentTags[index], 'selected', !this.recommentTags[index]['selected']);
      }
      let addTag = this.recommentTags.map(item => {
        if (item.selected) {
          return item.label
        }
      }).filter(item => item);
      this.addTag(addTag)
    },
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
.list-complete-item {
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter-active,
.list-complete-leave-active {
  transition: all 1s;
}
.list-complete-enter, .list-complete-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(10px);
}
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
    }
    .addtag-but {
      padding: 0 20px;
      margin-left: 10px;
    }
  }
  .recommend_tips {
    display: flex;
    margin-bottom: 30px;
    flex-wrap: wrap;
    li {
      margin-right: 10px;
      list-style: none;
      cursor: pointer;
      &.selected {
        color: $bs-lighter-text;
      }
    }
  }
  .selected_tips {
    margin-bottom: 10px;
    ul {
      li {
        list-style: none;
        background: $bs-main;
        color: #fff;
        border-radius: 4px;
        display: inline-block;
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
  .footer {
    margin-top: 20px;
    text-align: right;
    button {
      padding: 0 20px;
      //   min-width: 120px;
    }
  }
}
.v-note-wrapper {
  z-index: 77;
}
</style>