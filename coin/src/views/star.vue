<template>
  <div class="container">
    <!-- <div class="input" v-for= "cafe in cafelist" v-bind:key="cafe"> -->
      <div class="input">
        <p>카페 이름 | </p>
        <p>ddd</p>
        <p>카페 설명 | </p>
        <p></p>
        <p>카페 주소 | </p>
        <p></p>
        <p>카페 연락처 |</p>
        <p></p>
        <p>별점 |</p>
        <p>5</p>
    </div>
  </div>
</template>

<script>
export default {
     name: 'Star',
     data() {
       return {
          cafelist: [],
       }
     },
}
</script>

<style>
.input {
    display: grid;
    grid-template-columns: 1fr 3fr;
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 2px 2px #e5e5e5;
    justify-content: space-around;
    margin: 20px;
    padding: 20px;
    row-gap: 10px;
}
input {
  border: none;
  text-align: center;
}
</style>