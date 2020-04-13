<template>
  <div class="stars">
    <div class="star" v-for='(start,index) in startNum' :style="startStyle[index]" :key="'start'+start"></div>
  </div>
</template>
<script>
// import "/starSky.scss";
export default {
  name: "StarSky",
  data() {
    return {
      startNum: 800,// 星星个数
      startSpacec: 800,// 星星个数
      startStyle: []
    }
  },
  methods: {
    startSkyInit() {
      let startStyle = [];
      for (var i = 0; i < this.startNum; i++) {
        //   console.log('这里');
        var s = 0.2 + (Math.random() * 1);
        var curR = this.startSpacec + (Math.random() * 300);
        startStyle.push(
          {
            transformOrigin: "0 0 " + curR + "px",
            transform: " translate3d(0,0,-" + curR + "px) rotateY(" + (Math.random() * 360) + "deg) rotateX(" + (Math.random() * -50) + "deg) scale(" + s + "," + s + ")"
          }
        )

      }
      this.startStyle = startStyle;
    }
  },
  mounted() {
    this.startSkyInit();
  }
}
</script>
<style lang="scss">
body {
  background: radial-gradient(
    200% 100% at bottom center,
    #f7f7b6,
    #e96f92,
    #75517d,
    #1b2947
  );
  background: radial-gradient(
    220% 105% at top center,
    #1b2947 10%,
    #75517d 40%,
    #e96f92 65%,
    #f7f7b6
  );
  background-attachment: fixed;
  overflow: hidden;
}

@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg)
      rotateY(-360deg);
  }
}
.stars {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  bottom: 0;
  perspective-origin: 50% 100%;
  left: 50%;
  animation: rotate 90s infinite linear;
}

.star {
  width: 2px;
  height: 2px;
  background: #f7f7b6;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 0 0 -300px;
  transform: translate3d(0, 0, -300px);
  backface-visibility: hidden;
}

// @import url(starSky.scss);
</style>