<template>
  <div class="container">
    <div class="text">
       ⭐별점 5점짜리 카페들을 모아봤어요!⭐
    </div>
    <!-- <div class="input" v-for= "cafe in cafelist" v-bind:key="cafe"> -->
    <div class="list" v-for = "cafe in cafelist" v-bind:key="cafe">
      <div class="cafe">
        <label>카페 이름</label>
        <label>{{cafe.name}}</label>
        <label v-if="cafe.description">카페 설명</label>
        <label v-if="cafe.description">{{cafe.description}}</label>
        <label>카페 주소</label>
        <label>{{cafe.address}}</label>
        <label v-if="cafe.contact">카페 연락처</label>
        <label v-if="cafe.contact">{{cafe.contact}}</label>
        <label>카페 위치</label>
        <label>{{cafe.location}}</label>
        <label>별점</label>
        <label>{{cafe.star}}</label>
      </div>
    </div>
  </div>
</template>

<script>
import Cafe from '../api/Cafe';
export default {
     name: 'Star',
     data() {
       return {
          cafelist: [],
       }
     },
     mounted() {
       this.loadCafes();
     },
     methods: {
       async loadCafes() {
            const data = await Cafe.get(1, 200);
            this.cafes = data;
            console.log(data);
            console.log("cafelist", this.cafelist);
            console.log("cafe", data.items);
            var len = data.items.length;
            for (var i=0; i<=len; i++) {
                var cafe = data.items[i];
                console.log(cafe.star);
                console.log("CAFE", cafe);
                if(cafe.star == 5)
                    this.cafelist.push(cafe);
            }
            console.log(this.cafelist[0]);
        }
     }
}
</script>

<style lang="scss">
.text {
  margin-top: 10px;
  font-size: 15px;
  background: rgba(255, 255, 255, 0.932);
  border-radius: 15px;
  margin: 10px auto;
  padding: 5px 10px;
}
.cafe {
  width: 350px;
  background: rgba(255, 255, 255, 0.932);
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
}
</style>
