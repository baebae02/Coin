<template>
  <div class="container">
    <label>카카오로 로그인할 수 있어요!</label>
    <img class="button"
         src="../assets/kakao_login_large_wide.png"
         @click="loginWithKakao">
  </div>

</template>

<script>
import {KEYS} from "../utils/credentials";

export default {
  name: "Login",
  mounted() {
    /* global Kakao */
    Kakao.init(KEYS.JAVASCRIPT_KEY);
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
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  width: 80%;
}
</style>
