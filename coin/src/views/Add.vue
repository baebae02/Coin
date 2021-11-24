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
      <div ref="wrap" style="display:none;position: absolute">
        <img src="//t1.daumcdn.net/postcode/resource/images/close.png" id="btnFoldWrap" style="cursor:pointer;position:absolute; right:0; top:0px; z-index:1" @click="foldDaumPostcode" alt="접기 버튼">
      </div>
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
    <div class="bottom">
      <div class="btn">
        <Button @click="postCafe()">등록하기!</Button>
      </div>
      <div class="btn">
        <Button class="w-button3" @click="openDaumPostcode">주소 검색!</Button>
      </div>
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
       async postCafe() {
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
         try {
           await Cafe.post(data);
         } catch (e) {
           console.error(e);
           window.alert(e.message);
         }
       },
       openDaumPostcode () {
        const elementWrap = this.$refs.wrap
        // 현재 scroll 위치를 저장해놓는다.
        const currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop)
        new window.daum.Postcode({
            oncomplete: (data) => {
                // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                let addr = '' // 주소 변수

                // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                // document.getElementById('address').value = addr
                this.address = addr

                // iframe을 넣은 element를 안보이게 한다.
                // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
                elementWrap.style.display = 'none'

                // 우편번호 찾기 화면이 보이기 이전으로 scroll 위치를 되돌린다.
                document.body.scrollTop = currentScroll
            },
            // 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분. iframe을 넣은 element의 높이값을 조정한다.
            onresize: function (size) {
                elementWrap.style.height = size.height + 'px'
            },
            width: '60%',
        }).embed(elementWrap)
        elementWrap.style.display = 'block'
    },
    foldDaumPostcode () {
        const elementWrap = this.$refs.wrap
        elementWrap.style.display = 'none'
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
.bottom {
  display: flex;
  width: 70%;
  justify-content: space-around;
}
</style>
