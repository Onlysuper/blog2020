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
        <button @click="signIn" class="sign__btn bs-button full" type="button">
          <span>登录</span>
        </button>
        <span class="sign__text">Don't have an account? <a href="signup.html">Sign up!</a></span>
        <span class="sign__text"><a href="forgot.html">Forgot password?</a></span>
      </form>
    </div>
    <StarSky></StarSky>
  </div>
</template>
<script>
import StarSky from "@src/components/StarSky"
export default {
  name: "signin",
  components: {
    StarSky,
  },
  data() {
    return {}
  },
  methods: {
    signIn() {
      this.$router.push({
        path: "articlelist"
      })
    }
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
</style>
