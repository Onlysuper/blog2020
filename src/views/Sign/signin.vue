<template>
  <div class="sign">
    <div class="container">
      <form action="#" class="sign__form">
        <a href="index.html" class="sign__logo">
          <img src="../../assets/logo.png" alt="" />
        </a>
        <div class="sign__group">
          <input type="text" class="sign__input" placeholder="请输入账号" />
        </div>
        <div class="sign__group">
          <input type="password" class="sign__input" placeholder="请输入密码" />
        </div>
        <div class="sign__group check">
          <input id="remember" name="remember" type="checkbox" checked="checked" />
          <label for="remember">Remember Me</label>
        </div>
        <button class="sign__btn bs-button full" type="button">
          <span>登录</span>
        </button>
        <span class="sign__text">Don't have an account? <a href="signup.html">Sign up!</a></span>
        <span class="sign__text"><a href="forgot.html">Forgot password?</a></span>
      </form>
    </div>
    <div class="stars">
      <div class="star" v-for='(start,index) in startNum' :style="startStyle[index]" :key="'start'+start"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "signin",
  data() {
    return {
      startNum: 800,// 星星个数
      startSpacec: 800,// 星星个数
      startStyle: []
    }
  },
  mounted() {
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
}
</script>
<style lang="scss">
.sign {
  display: block;
  position: relative;
  /* background: url(../img/bg.jpg) no-repeat center/cover; */
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sign__form {
    position: relative;
    box-shadow: 0 2px 26px 0 rgba(133, 153, 171, 0.1);
    padding: 40px 20px;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid rgba(133, 153, 171, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px;
  }
  .sign__logo {
    display: block;
    margin-bottom: 40px;
  }
  .sign__group {
    position: relative;
    margin-bottom: 20px;
    width: 100%;

    input[type="checkbox"] {
      visibility: hidden;
      & + label {
        padding-left: 30px;
        position: relative;
        font-size: 13px;
        color: #8599ab;
        padding-top: 3px;
        cursor: pointer;
        &::before {
          content: "";
          display: block;
          width: 20px;
          height: 20px;
          cursor: pointer;
          position: absolute;
          top: 0;
          left: 0;
          border: 1px solid rgba(133, 153, 171, 0.2);
          background-color: #fafafa;
          border-radius: 4px;
        }
      }
      &:checked {
        & + label::before {
          content: "\2714";
          display: block;
          text-align: center;
          font-size: 16px;
          color: $bs-main;
        }
      }
    }
  }
  .sign__input {
    width: 100%;
    height: 40px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    background-color: #fafafa;
    border: 1px solid rgba(133, 153, 171, 0.2);
    font-size: 14px;
    color: #364e65;
    padding: 0 15px;
  }
  .sign__group {
    position: relative;
    margin-bottom: 20px;
    width: 100%;
  }
  .sign__text {
    margin-top: 15px;
    font-size: 13px;
    color: #8599ab;
  }
  .sign__btn {
    font-size: 16px;
    font-weight: bold;
  }
  .sign__logo {
    display: block;
    margin-bottom: 40px;
    img {
      width: 60px;
    }
  }
}

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
</style>
