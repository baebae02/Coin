<template>
    <Container>
      <ContentContainer>
        <router-view/>
      </ContentContainer>
      <NavigationContainer>
        <NavBar/>
      </NavigationContainer>
    </Container>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
@import "./store/reset.css";
.main
{
	padding: 5px;
}
#app {
  font-family: 'Do Hyeon', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-height: 414px;
  margin: 0 auto;
}
</style>
<script>
import Container from './components/Container';
import NavBar from './components/NavBar.vue';
import styled, { css } from 'vue3-styled-components';

const ContentContainer = styled.div`
  padding: 0;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
`;
const NavigationContainer = styled('div', { isTop: Boolean })`
  position: fixed;
  width: 414px;
  display: flex;
  justify-content: center;
  z-index: 100;
  ${({ isTop }) =>
    isTop
      ? css`
          top: 0;
        `
      : css`
          bottom: 0;
        `};
`;

export default {
  components: {
    NavigationContainer,
    ContentContainer,
    NavBar,
    Container,
  },
};
</script>