<template>
  <div class="button">
    <p>Redirected</p>
  </div>
</template>

<script>
import {getKakaoToken} from "../utils/KakaoLogin";
import {KEYS} from "../utils/credentials"
import {User} from "../api/User"

export default {
  name: "OAuth",
  async mounted() {
    const code = this.$route.query.code;
    const result = await getKakaoToken(code);
    console.log(result);
    const ACCESS_TOKEN = result.data.access_token

    /* global Kakao */
    if (!Kakao.isInitialized())
      Kakao.init(KEYS.JAVASCRIPT_KEY);
    Kakao.Auth.setAccessToken(ACCESS_TOKEN)

    Kakao.API.request({
      url: '/v2/user/me',
      success: async function (response) {
        const user_id = response.id;
        const nickname = response.properties.nickname;

        const signup_response = await User.post({
          'kakao_id': String(user_id),
          'nickname': nickname
        })
        console.log(signup_response);
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
