<template>
  <StyledContainer v-bind="this.$props">
    <slot />
  </StyledContainer>
</template>

<script>
import styled from 'vue3-styled-components';

const StyledContainer = styled('div')`
  
  max-width: 414px;
  align-item: center;
  margin: 0 auto;
  width: 100%;
  background: radial-gradient(at -15% 30%,#241a64 10px,#536ed1 30%,#638cb3 50%)
`;
export default {
  name: 'Container',
  components: { StyledContainer },
  setup(props) {
    return { ...props };
  },
};
</script>