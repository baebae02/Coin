<template>
  <div class="container">
    <div class="text">
       ⭐별점 5점짜리 카페들을 모아봤어요!⭐
    </div>
    <!-- <div class="input" v-for= "cafe in cafelist" v-bind:key="cafe"> -->
    <div class="list" v-for = "cafe in cafelist" v-bind:key="cafe">
      <div class="cafe">
        <p>카페 이름 | </p>
        <p>{{cafe.name}}</p>
        <p>카페 설명 | </p>
        <p>{{cafe.description}}</p>
        <p>카페 주소 | </p>
        <p>{{cafe.address}}</p>
        <p>카페 연락처 |</p>
        <p>{{cafe.contact}}</p>
        <p>별점 |</p>
        <p>{{cafe.star}}</p>
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
            const data = await Cafe.get(1, 20);
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

<style>
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
}
</style>