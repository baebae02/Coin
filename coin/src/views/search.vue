<template>
  <div>
    <div class="input">
        <p>카페 이름 | </p>
        <input placeholder="카페의 이름을 알려주세요!">
    </div>
    <div id="map"></div>
  </div>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
          place: true,
          map: null,
          markers: [],
          infowindow: null,
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
      //지도 만들기
      initMap() {
          const container = document.getElementById("map");
          const options = {
              center: new kakao.maps.LatLng(37.5825627, 127.059971),
              level: 5,
          };
          this.map = new kakao.maps.Map(container, options);
      },
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