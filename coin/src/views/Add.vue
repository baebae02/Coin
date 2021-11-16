<template>
  <div class="container">
    <div class="input">
        <p>카페 이름 | </p>
        <input placeholder="카페의 이름을 알려주세요!">
        <p>카페 설명 | </p>
        <input placeholder="카페의 설명을 알려주세요!">
        <p>카페 주소 | </p>
        <input placeholder="카페의 주소를 알려주세요!">
        <p>카페 연락처 |</p>
        <input placeholder="카페의 전화번호를 알려주세요!">
        <p>별점 |</p>
        <input placeholder="별점을 매겨주세요!">
    </div>
  </div>
</template>

<script>
export default {
     name: 'Add',
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

input:focus {outline:none;}
</style>
