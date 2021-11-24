<template>
  <div class="container">

    <label v-if="!logined">카카오로 로그인할 수 있어요!</label>
    <img class="button"
         src="../assets/kakao_login_large_narrow.png"
         @click="loginWithKakao"
         v-if="!logined">
    <label v-else>
      로그아웃되었어요!
    </label>
  </div>

</template>

<script>
import {KEYS} from "../utils/credentials";

export default {
  name: "Login",
  data() {
    return {
      logined: false
    }
  },
  mounted() {
    /* global Kakao */
    if (!Kakao.isInitialized())
      Kakao.init(KEYS.JAVASCRIPT_KEY);
    if (Kakao.Auth.getAccessToken()) {
      this.logined = true
      Kakao.Auth.logout(function() {
        console.log(Kakao.Auth.getAccessToken());
      });
    } else {
      this.logined = false
    }
  },
  methods: {
    loginWithKakao() {
      const params = {
        redirectUri: 'http://localhost:8080/oauth'
      }
      Kakao.Auth.authorize(params);
    }
  }
}
</script>

<style scoped>
.container {
  color: white;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
img {
  width: 30%;
}
label {
  height: 180px;
}
</style>
