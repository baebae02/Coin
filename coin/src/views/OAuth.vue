<template>
  <div class="button">
    <p>Redirected</p>
  </div>
</template>

<script>
import {getKakaoToken} from "../utils/KakaoLogin";
import {KEYS} from "../utils/credentials"

export default {
  name: "OAuth",
  async mounted() {
    const code = this.$route.query.code;
    const result = await getKakaoToken(code);
    console.log(result);
    const ACCESS_TOKEN = result.data.access_token

    /* global Kakao */
    Kakao.init(KEYS.JAVASCRIPT_KEY);
    Kakao.Auth.setAccessToken(ACCESS_TOKEN)

    Kakao.API.request({
      url: '/v2/user/me',
      success: function(response) {
        console.log(response);
        const user_id = response.id;
        const nickname = response.properties.nickname;
        console.log(user_id, nickname);
      },
      fail: function(error) {
        console.log(error);
      }
    });
  },
}
</script>

<style scoped>

</style>
