<template>
  <div class="container">
    <div class="text">
       ⭐공유하고 싶은 카페를 등록해주세요!⭐
    </div>
    <div class="enroll">
      <p>카페 이름 | </p>
      <input placeholder="카페의 이름을 알려주세요!" v-model="name">
      <p>카페 설명 | </p>
      <input placeholder="카페의 설명을 알려주세요!" v-model="descript">
      <p>카페 주소 | </p>
      <input placeholder="카페의 주소를 알려주세요!" v-model="address">
      <p>카페 분류 |</p>
      <input placeholder="정문, 후문, 쪽문, 회기 중에 골라주세요!" v-model="locate">
      <p>카페 연락처 |</p>
      <input placeholder="카페의 전화번호를 알려주세요!" v-model="phone">
      <p>별점 |</p>
      <input placeholder="별점을 매겨주세요!" v-model="star">
    </div>
    <div class="btn">
      <Button @click="postCafe()">등록하기!</Button>
    </div>
  </div>
</template>

<script>
import Cafe from '../api/Cafe';
export default {
     name: 'Add',
     data() {
       return {
         name: "",
         descript: "",
         address: "",
         phone: "",
         start: "",
         locate: "",
         star: 0,
       }
     },
     methods: {
       postCafe() {
         const data = {
           "address" : this.address,
           "contact" : this.phone,
           "description" : this.descript,
           "locate" : this.locate,
           "kakao_id": "682378583",
           "latitude": 127.052990,
           "link": "www.instagram.com/964__coffee",
           "longitude": 37.5854522,
           "name" : this.name,
           "open_hour": "매일 08:00 ~ 22:00",
           "star": this.star,
         }
         Cafe.post(data);
       }
     }
}

</script>

<style>
.text {
  margin-top: 10px;
  font-size: 15px;
  background: rgba(255, 255, 255, 0.932);
  border-radius: 15px;
  margin: 10px auto;
  padding: 5px 10px;
}
.enroll {
  width: 350px;
  background: rgb(255, 255, 255);
  border-radius: 15px;
  box-shadow: 2px 2px rgb(185, 185, 185, 0.5);
  display: grid;
  grid-template-columns: 1fr 2fr;
  row-gap: 10px;
  padding: 5px;
  margin: 10px auto;
}
.enroll input {
  border: none;
}

input:focus {outline:none;}
.btn {
  margin: 10px auto;
  background: rgb(255, 255, 255);
  border-radius: 15px;
  box-shadow: 2px 2px rgb(185, 185, 185, 0.5);
  padding: 10px 20px;
}
.btn Button {
  border: none;
  font-weight: bold;
  font-size: 15px;
  background-color: white;
}
</style>
