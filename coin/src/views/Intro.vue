<template>
    <div class="container">
        <div class="header">
            <div class="nav">
                <div class="place" @click="displayMarker(markerPositions1)">정문</div>
                <div class='place' @click="displayMarker(markerPositions2)">후문</div>
                <div class='place' @click="displayMarker(markerPositions3)">회기</div>
                <div class='place' @click="displayMarker(markerPositions4)">쪽문</div>
            </div>
        </div>
        <div class="body">
            <div id="map"></div>
        </div>
    </div>
</template>

<script>
import Cafe from '../api/Cafe';
export default {
    name: 'Intro',
    data() {
        return {
            place: true,
            map: null,
            markerPositions1: [ //정문
                // [37.5854582, 127.052942], //너디블루
                // [37.5834939, 127.053201], //시사
                // [37.5832233, 127.053948], //정문 투썸
            ],
            markerPositions2: [ //후문
                [37.5854183, 127.060992], //싸가지
                [37.5889331, 127.059183], //빵샘제빵소
                [37.5854183, 127.060992], //플리즈커피
                [37.5893374, 127.061482], //오프사이트
                [37.5888688, 127.061527], //카페시그널
            ],
            markerPositions3: [ //회기
                [37.5899240, 127.059467], //너만보여 크루아상
                [37.5899324, 127.060814], //커피나무
                [37.5903408, 127.054463], //리드스트리트 커피
                [37.5907996, 127.056037], //스타벅스 회기사거리역점
                [37.5901863, 127.057440], //이디야
                [37.5897990, 127.057044], //탐앤탐스
            ],
            markerPositions4: [ //쪽문
                [37.5864026, 127.056385], //커피베이
                [37.5880963, 127.056816], //망우로30
            ],
            markers: [],
            infowindow: null,
            cafes: [],
        };
    },
    mounted() {
        this.loadCafes();
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
        async initMap() {
            const container = document.getElementById("map");
            const options = {
                center: new kakao.maps.LatLng(37.5825627, 127.059971),
                level: 5,
            };
            this.map = new kakao.maps.Map(container, options);
        },
        //마커 표시하기 
        async displayMarker(markerPositions) {
            if (this.markers.length > 0) {
                this.markers.forEach((marker) => marker.setMap(null));
            }

            const positions = markerPositions.map(
                (position) => new kakao.maps.LatLng(...position)
            );

            if (positions.length > 0) {
                this.markers = positions.map(
                    (position) =>
                    new kakao.maps.Marker({
                        map: this.map,
                        position,
                    })
                );
                const bounds = positions.reduce(
                    (bounds, latlng) => bounds.extend(latlng),
                    new kakao.maps.LatLngBounds()
                );
                this.map.setBounds(bounds);
            }
        },
        async displayInfoWindow() {
            if (this.infowindow && this.infowindow.getMap()) {
                //이미 생성한 인포윈도우가 있기 때문에 지도 중심좌표를 인포윈도우 좌표로 이동시킨다.
                this.map.setCenter(this.infowindow.getPosition());
                return;
            }
            var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                iwPosition = new kakao.maps.LatLng(37.5825627, 127.059971), //인포윈도우 표시 위치입니다
                iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
            this.infowindow = new kakao.maps.InfoWindow({
                map: this.map, // 인포윈도우가 표시될 지도
                position: iwPosition,
                content: iwContent,
                removable: iwRemoveable,
            });
            this.map.setCenter(iwPosition);
        },
        async loadCafes() {
            const data = await Cafe.get(1, 20);
            this.cafes = data;
            for (var i in data) {
                var cafe = data[i];
                var locate = [cafe.longitude, cafe.latitude];
                if(cafe.location == "정문")
                    this.markerPositions1.push(locate);
                if(cafe.location == "후문")
                    this.markerPositions2.push(locate);
                if(cafe.location == "회기")
                    this.markerPositions3.push(locate);
                if(cafe.location == "쪽문")
                    this.markerPositions4.push(locate);
            }
        }
    }
}
</script>

<style style="scss">
.container {
    width: 414px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}

.header {
    display: flex;
    flex-direction: column;
    z-index: 10;
    position: fixed;
    top: 10;
    padding-top: 40px;
}

.body {
    display: flex;
    justify-content: center;
    height: 100%;
}

.nav {
    display: flex;
    padding: 10px 30px;
    background: #ffffff;
    border-radius: 15px;
    margin: 20px;
    box-shadow: 3px 3px #e5e5e5;
    flex-direction: row;
    justify-content: space-around;
    width: 200px;
}

.place {
    border-bottom: 2px solid violet;
    border-width: 2px 20px;
}

.place:hover {
    color: rgb(23, 23, 105);
    font-weight: bold;
    transition: 0.5s;
    border-color: rgb(234, 71, 255);
}

#map {
    width: 414px;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
}

.button-group {
    margin: 10px 0px;
}

button {
    margin: 0 3px;
}
</style>