<template>
  <div class="comments-page">
    <div class="content">
      <template v-for="(group,groupIndex) in commentGroups">
        <div class="time-step" :key="'msg'+groupIndex">
          <div v-for="(comment,index) in group.comments" :key="'comment'+index" class="item-row">
            <div class="head-img">
              <img :src="comment.headimg">
            </div>
            <div class="text">
              <span>{{comment.content}}</span>
            </div>
            <div class="time">
              <time>
                {{comment.time}}
              </time>
            </div>
          </div>
          <div class="division-line">
            <span> {{group.time}}</span>
          </div>
        </div>
        <!-- <div class="division-line"></div> -->
      </template>
    </div>
  </div>
</template>
<style lang="scss">
.comments-page {
  width: 100%;
  .content {
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
  }
  .time-step {
    width: 100%;
  }
  .item-row {
    display: flex;
    flex-direction: row;
    padding: 20px 0;
    align-items: center;
    .head-img {
      flex: 0 0 100px;
      justify-content: center;
      align-items: center;
      display: flex;
    }
    .text {
      flex: 1;
      span {
        background: rgba(55, 150, 246, 0.1);
        display: block;
        box-sizing: border-box;
        padding: 10px 20px;
        border-radius: 20px;
        margin-right: 20px;
      }
    }
    .time {
      flex: 0 0 80px;
    }
  }
  .division-line {
    position: relative;
    text-align: center;

    &::before {
      position: absolute;
      display: block;
      content: "";
      width: 100%;
      height: 1px;
      background: #eee;
      left: 0;
      top: 50%;
      z-index: 0;
    }
    span {
      background: #fff;
      display: inline-block;
      position: relative;
      z-index: 2;
      padding: 0 20px;
    }
  }
}
</style>
<script>
import headimg from "@/assets/images/admin-head.png";
export default {
  data() {
    return {
      headimg,
      commentGroups: [
        {
          time: 'today',
          comments: [
            {
              headimg: headimg,
              content: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
              time: "5:00 pm"
            },
            {
              headimg: headimg,
              content: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
              time: "5:00 pm"
            },
            {
              headimg: headimg,
              content: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
              time: "5:00 pm"
            }
          ]
        },
        {
          time: 'tomorrow',
          comments: [
            {
              headimg: headimg,
              content: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
              time: "5:00 pm"
            },
            {
              headimg: headimg,
              content: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
              time: "5:00 pm"
            },
            {
              headimg: headimg,
              content: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
              time: "5:00 pm"
            }
          ]
        }
      ]
    }
  }
}
</script>>
