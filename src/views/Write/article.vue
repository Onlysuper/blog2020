<template>
  <div class="Write">
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
      </div>
      <div>
        <h4>内容</h4>
        <mavon-editor v-model="commentContent" ref="md" @change="changeComment" style="min-height: 600px" />
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
</style>