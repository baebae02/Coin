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
        console.log(data[0]);
        this.setMark(data[0].longitude,data[0].latitude, data[0].name, data[0].kakao_id);
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
      async setMark(latitude, longitude, name, id) {
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(latitude, longitude),
          level: 5,
        };
        this.map = new kakao.maps.Map(container, options);

        var markerPosition  = new kakao.maps.LatLng(latitude,longitude); 
        var marker = new kakao.maps.Marker({
          position: markerPosition,
          clickable: true,
        });
        marker.setMap(this.map);
        var iwContent = 
        '<div style="padding:5px;">'+name+'<br><a href="https://map.kakao.com/link/map/'+id+'" style="color:blue" target="_blank">큰지도보기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            iwPosition = new kakao.maps.LatLng(latitude,longitude); //인포윈도우 표시 위치입니다

        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
            position : iwPosition, 
            content : iwContent 
        });
          
        // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
        infowindow.open(this.map, marker); 
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
