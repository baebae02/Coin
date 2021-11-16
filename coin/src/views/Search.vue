<template>
  <div>
    <div class="input">
        <p>카페 이름 | </p>
        <input placeholder="카페의 이름을 알려주세요!" v-model="name" @keydown.enter="searchCafeByName">
    </div>
    <div id="map"></div>
  </div>
</template>

<script>
import Cafe from '../api/Cafe';
export default {
    name: 'Search',
    data() {
        return {
          place: true,
          map: null,
          markers: [],
          infowindow: null,
          name: '',
          location: '',
        }
    },
    mounted() {
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement("script");
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap);
            script.src =
                "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=31652f421b801ed9daa3adf27ec87f89";
            document.head.appendChild(script);
        }
    },
    methods: {
      async searchCafeByName() {
        const data = await Cafe.get(1, 20, this.name, this.location);
        this.setMark(data[0].longitude,data[0].latitude)
      },
      //지도 만들기
      async initMap() {
        const container = document.getElementById("map");
          const options = {
            center: new kakao.maps.LatLng(37.5825627, 127.059971),
              level: 5,
          };
          this.map = new kakao.maps.Map(container, options);
      },
      async setMark(latitude, longitude) {
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(37.5825627, 127.059971),
            level: 5,
        };
        this.map = new kakao.maps.Map(container, options);
        var markerPosition  = new kakao.maps.LatLng(latitude,longitude); 
        var marker = new kakao.maps.Marker({
          position: markerPosition
        });
        marker.setMap(this.map);
      }
    }
}
</script>

<style>
.input {
    display: flex;
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 2px 2px #e5e5e5;
    position: fixed;
    top: 10;
    z-index: 10;
}
input {
  border: none;
  text-align: center;
}
</style>
