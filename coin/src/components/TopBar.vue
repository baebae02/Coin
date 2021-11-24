<template>
  <div v-bind="this.$props" class="top-bar">
    <div @click="this.$router.go(-1)">
      <img src="@/assets/logo.jpeg" alt="뒤로가기" />
    </div>
    <div style="font-size: 24px">{{ title }}</div>
    <div style="font-size: 16px">{{ description }}</div>
    <div class="login" @click="this.$router.push('/login')">{{ login }}?</div>
  </div>
</template>

<script>

import {KEYS} from "../utils/credentials";

const props = {
  title: {
    type: String,
    default() {
      return 'Coin';
    },
  },
  description: {
    type: String,
    default() {
      switch (window.location.pathname) {
        case '/':
          return '홈'
        case '/add':
          return '카페 등록'
        case '/search':
          return '카페 검색하기'
        case '/star':
          return '5점 리뷰 카페 모아보기'
        default:
          return '어디서 코딩을 할까요!'
      }
    }
  },
  login: {
    type: String,
    default() {
      /* global Kakao */
      if (!Kakao.isInitialized())
        Kakao.init(KEYS.JAVASCRIPT_KEY);
      if (Kakao.Auth.getAccessToken())
        return 'Logout';
      else
        return 'Login';
    }
  }
};
export default {
  name: 'TopBar',
  props,
  components: { },
  setup(props) {
    return { ...props };
  },
  methods: {
    checkActive(actionName) {
      return this.$props.actions.includes(actionName);
    },
  },
};
</script>

<style lang="scss" scoped>
.top-bar {
  background-color: white;
  align-items: center;
  height: 42px;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 6fr;
}
</style>
