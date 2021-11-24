<template>
  <div class="button"
       @click="loginWithKakao">
    <p>Kakao Login</p>
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

</style>
