<template>
  <div class="container">
    <div class="text">
       ⭐공유하고 싶은 카페를 등록해주세요!⭐
    </div>
    <div class="enroll">
      <label>카페 이름</label>
      <input placeholder="카페의 이름을 알려주세요!" v-model="name">

      <label>카페 설명</label>
      <textarea placeholder="카페의 설명을 알려주세요!" v-model="description">
      </textarea>

      <label>카페 주소</label>
      <input placeholder="카페의 주소를 알려주세요!" v-model="address">

      <label>카페 위치</label>
      <div class="radioContainer">
        <label>
          <input type="radio" class="form-radio" name="radio" value="front" v-model="location" checked/>
          <span class="ml-2">정문</span>
        </label>
        <label>
          <input type="radio" class="form-radio" name="radio" value="back" v-model="location"/>
          <span class="ml-2">후문</span>
        </label>
        <label>
          <input type="radio" class="form-radio" name="radio" value="hoegi" v-model="location"/>
          <span class="ml-2">회기</span>
        </label>
        <label>
          <input type="radio" class="form-radio" name="radio" value="side" v-model="location"/>
          <span class="ml-2">쪽문</span>
        </label>
      </div>

      <label>전화번호</label>
      <input placeholder="카페의 전화번호를 알려주세요!" v-model="phone">

      <label>별점</label>
      <input placeholder="별점을 매겨주세요! (1~5)" v-model="star" type="number">
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
         description: "",
         address: "",
         phone: "",
         start: "",
         location: "front",
         star: 0,
       }
     },
     methods: {
       postCafe() {
         const data = {
           "name" : this.name,
           "description" : this.description,
           "open_hour": "매일 08:00 ~ 22:00",
           "address" : this.address,
           "contact" : this.phone,
           "link": "www.instagram.com/964__coffee",

           "location" : this.location,
           "star": this.star,

           "kakao_id": "682378583",
           "latitude": 127.052990,
           "longitude": 37.5854522,
         }
         Cafe.post(data);
       }
     }
}

</script>

<style lang="scss">
.text {
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
  & > label {
    align-self: center;
  }
  & > .radioContainer {
    text-align: left;
  }
  & > input, textarea {
    border: none;
  }
  & > textarea {
    height: 48px;
  }
}


input:focus, textarea:focus {outline:none;}
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
