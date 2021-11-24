<template>
  <div class="container">
    <img class="button"
         src="../assets/kakao_login_medium_narrow.png"
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
  display: flex;
  align-items: center;
}
</style>
