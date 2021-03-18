<template>
  <div class="footer-container" id="contactus">
    <div class="footer-left">
      <div class="footer-left-top">
        <div class="footer-form">
          <p class="footer-bold">SALES GALLERY</p>
          <p class="footer-description">VI PLAZA 2nd fLOOR (Vibhavadi Hospital)</p>
        </div>
        <p class="footer-tel">095-632-6356</p>
      </div>
      <br>
      <div class="footer-left-bottom">
        <div class="footer-form">
          <p class="footer-bold">HEAD OFFICE</p>
          <p class="footer-description">11 Sathu Pradit Rd, Chong Nonsi, Yannawa, Bangkok 10120</p>
        </div>
        <p class="footer-tel">(02) 212-4460 – 1</p>
      </div>
    </div>
    <div class="footer-center">
      <p class="footer-bold">SALES TEAM CONTACT</p>
      <p>095-632-6356</p>
      <p class="footer-description">VIBHASALES@KCCTHAILAND.COM</p>
      <img class="footer-logo" src="~static/footer-logo.png">
    </div>
    <div class="footer-right">
      <p class="footer-map">GOOGLE MAP</p>
      <br>
      <p>@vibharesidence</p>
      <img src="~static/footer-qrcode.jpg" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'DB-Ozone-X';
  src: url(~static/fonts/DB-Ozone-X.ttf);
}
.footer-container {
  background-image: linear-gradient(0deg, rgba(33,55,43,1) 0%, rgba(33,55,43,1) 50%, rgba(33,55,43,0.6) 100%), url(~static/footer-bg.jpg);
  background-size: cover;
  width: 100%;
  display: flex;
  color: #b7bcb4;
  font-family: "DB-Ozone-X";
  margin-bottom: -2%;
  padding-top: 8%;
  font-size: 40px;
}
.footer-left {
  width: 33.33%;
}
.footer-center {
  width: 33.33%;
}
.footer-right {
  width: 33.33%;
  
}
.footer-logo{
  width: 52%;
  margin-top: 20%;
  margin-left: 10%;
}
.footer-map{
  border:1px solid #b7bcb4;
  width: 40%;
  text-align: center;
}
.footer-bold{
  font-weight: bold;
}
.footer-form{
  width: 50%;
  margin-left: 20%;
}
.footer-description{
  font-size: 30px;
}
.footer-tel{
  text-align: center;
  margin-left: -20%;
}
// @media screen and (max-width: 768px) {
//   .sub-footer-container {
//     margin-left: 30px;
//   }

//   .text-footer {
//     margin-left: 20px;
//   }
// }
</style>