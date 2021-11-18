<template>
  <div v-bind="this.$props" class="top-bar">
    <div @click="this.$router.go(-1)">
      <img src="@/assets/logo.jpeg" alt="뒤로가기" />
    </div>
    <div style="font-size: 18px">{{ title }}</div>
    <div style="font-size: 14px">{{ description }}</div>
  </div>
</template>

<script>

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
      return 'Where are we gonna code in?'
    }
  },
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
</style>
