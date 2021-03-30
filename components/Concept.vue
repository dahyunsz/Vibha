<template>
  <div class="concept-page">
    <img src="/concept-img.jpg" class="concept-img" alt="" />
    <img src="/concept-img-mobile.jpg" class="concept-img-mobile" alt="" />
    <div class="concept-modern-component" id="concept">
      <div class="concept-modern">
        <p class="textAlignVer">CONCEPT</p>
        <div class="vertical-line"></div>
      </div>
      <div class="concept-modern-left concept-desktop">
        <p>A Modern <br />Luxury Design</p>
      </div>
      <div class="concept-modern-left concept-mobile">
        <p>
          A Modern <br />Luxury <br />
          Design
        </p>
      </div>
      <div class="concept-modern-right">
        <p>
          Locates in a residential area on Vibhavadi Rangsit Road. It is
          surrounded by nature and convenient facilities like parks, community
          malls, markets, educational institutions, and well-known hospitals.
        </p>
        <br />
        <p>
          บ้านหรูสไตล์โมเดิร์นที่พร้อมตอบสนองการใช้ชีวิตในทุกรูปแบบที่เป็นคุณ
          ตั้งอยู่ในย่านที่พักอาศัยถนนวิภาวดีรังสิต
          รายล้อมด้วยธรรมชาติและไลฟ์สไตล์ ทั้งสวนสาธารณะ ศูนย์การค้า
          ตลาดรวมถึงสถานศึกษาและ<span class="inline-block"
            >โรงพยาบาลชั้นนำ</span
          >
        </p>
      </div>
    </div>
    <img class="concept-func-img" src="/concept-func.jpg" />
    <div class="concept-func-component">
      <img class="concept-bg" src="/concept-bg.jpg" />

      <div class="concept-func-container">
        <p class="concept-func-header">With a simply <br />functional twist</p>
        <br />
        <div class="concept-func-description">
          <p>
            Every single house is designed with the concept of modern luxury
            with a simply functional twist on top of mind to accommodate every
            changeover and meet the needs of all family members. It is
            thoughtfully outlined to maximize usable space while maintaining the
            perfect blend between modern design and the touch
            <span class="inline-block">of nature.</span> Making it ideal for living
          </p>
          <br />
          <p>
            ทุกหลังได้รับการออกแบบสถาปัตยกรรมบนแนวคิด “ A modern luxury design
            with a simply functional twist ”
            เพื่อรองรับการปรับเปลี่ยนในทุกช่วงเวลาและตอบโจทย์การใช้ชีวิตของสมาชิกทุกคนภายในบ้าน
            ความพิถีพิถันในการออกแบบเพื่อให้เกิดพื้นที่ใช้สอยสูงสุด
            แต่ยังคงไว้ซึ่งดีไซน์ที่ลงตัว ผสมผสานกับธรรมชาติและความสดชื่น
            คือสิ่งสำคัญที่สร้างสรรค์อย่างใส่ใจเพื่อ<span class="inline-block"
              >การอยู่อาศัย</span
            ><span class="inline-block">ที่ลงตัว</span>
          </p>
          <br /><br /><br />
        </div>
      </div>
    </div>
    <img class="concept-door concept-desktop" src="/concept-door.jpg" alt="" />
    <img
      class="concept-door concept-mobile"
      src="/concept-door-mobile.jpg"
      alt=""
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Concept extends Vue {}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "DB-Ozone-X";
  src: url(/fonts/DB-Ozone-X.ttf);
}
@font-face {
  font-family: "Kiona-Regular";
  src: url(/fonts/Kiona-Regular.ttf);
}
@font-face {
  font-family: "SukhumvitSet";
  src: url(/fonts/SukhumvitSet.ttf);
}
@font-face {
  font-family: "Cremona";
  src: url(/fonts/Cremona.ttf);
}
@font-face {
  font-family: "Avenir-Next";
  src: url(/fonts/Avenir-Next.ttf);
}
@font-face {
  font-family: "Butler_Medium_Stencil";
  src: url(/fonts/Butler_Medium_Stencil.ttf);
}
body {
  font-size: 0em;
}
.inline-block {
  display: inline-block;
}
.concept-modern-left {
  width: 40%;
  font-weight: bold;
  font-size: 80px;
  padding-top: 15%;
  padding-bottom: 15%;
  padding-left: 7%;
  color: #455a3f;
  font-family: "Butler_Medium_Stencil";
}
.concept-page {
  font-family: "DB-Ozone-X";
  color: black;
}
.concept-img {
  width: 100%;
  height: 100%;
}
.concept-modern-component {
  width: 100%;
  display: flex;
  background-color: #dcd5cd;
}
.concept-modern-right {
  width: 53%;
  padding-top: 12%;
  padding-right: 6%;
  font-size: 24px;
  font-family: "SukhumvitSet";
  font-weight: bold;
}

.concept-func-component {
  margin-top: -25%;
}
.concept-func-header {
  font-weight: bold;
  font-size: 75px;
  font-family: "Butler_Medium_Stencil";
}
.concept-func-description {
  font-size: 30px;
  padding-right: 15%;
}
.textAlignVer {
  display: block;
  filter: flipv fliph;
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  transform: rotate(-90deg);
  position: relative;
  width: 20px;
  white-space: nowrap;
  font-size: 60px;
  color: #1e2f27;
  font-weight: bold;
  margin-left: 58%;
  margin-top: 150%;
}
div.vertical-line {
  width: 4px;
  background-color: #1e2f27;
  height: 293%;
  float: left;
  margin-left: 6%;
  position: absolute;
  z-index: 1;
}
.concept-modern {
  width: 10%;
}
.concept-door {
  height: 100%;
  width: 100%;
}
.concept-bg {
  position: absolute;
  z-index: -1;
  height: 1400px;
}
.concept-func-img {
  padding-left: 30%;
  width: 100%;
}
.concept-func-container {
  padding-left: 30%;
  padding-top: 28%;
  color: white;
}
.concept-img-mobile {
  display: none;
}
.concept-mobile {
  display: none;
}
@media screen and (max-width: 1600px) {
  .concept-modern-left {
    font-size: 70px;
  }
  .concept-modern-right {
    font-size: 22px;
  }
}
@media screen and (max-width: 1500px) {
  div.vertical-line {
    height: 275%;
  }
}
@media screen and (max-width: 1500px) {
  .concept-modern-left {
    font-size: 55px;
  }
  .concept-modern-right {
    font-size: 22px;
  }
}
@media screen and (max-width: 1450px) {
  div.vertical-line {
    height: 260%;
  }
}
@media screen and (max-width: 1450px) {
  .concept-modern-right {
    font-size: 21px;
  }
  .concept-func-header {
    font-size: 65px;
  }
}
@media screen and (max-width: 1400px) {
  .concept-modern-right {
    font-size: 20px;
  }
}
@media screen and (max-width: 1300px) {
  .concept-modern-left {
    font-size: 50px;
  }
  .concept-func-description {
    font-size: 29px;
  }
  .concept-func-header {
    font-size: 60px;
  }
  div.vertical-line {
    height: 240%;
  }
}
@media screen and (max-width: 1200px) {
  .concept-func-header {
    font-size: 55px;
  }
  div.vertical-line {
    height: 240%;
  }
  .textAlignVer {
    font-size: 40px;
  }
}
@media screen and (max-width: 1150px) {
  div.vertical-line {
    height: 230%;
  }
}
@media screen and (max-width: 1100px) {
  .concept-modern-right {
    font-size: 19px;
  }
  .concept-modern-left {
    font-size: 45px;
  }
  .textAlignVer {
    font-size: 40px;
  }
}
@media screen and (max-width: 1024px) {
  div.vertical-line {
    height: 200%;
  }
  .concept-func-description {
    font-size: 16px;
    padding-right: 7%;
  }
  .concept-func-description {
    font-size: 25px;
    padding-right: 7%;
  }
  .concept-func-header {
    font-size: 52px;
  }
  .textAlignVer {
    font-size: 40px;
  }
  div.vertical-line{
    height: 125%;
    width: 2px;
}
}
@media screen and (max-width: 1000px) {
  .concept-modern-right {
    font-size: 16px;
  }
}
@media screen and (max-width: 850px) {
  div.vertical-line {
    height: 200%;
  }
  .concept-func-description {
    font-size: 21px;
    padding-right: 7%;
  }
  .concept-func-header {
    font-size: 48px;
  }
  div.vertical-line {
    height: 185%;
  }
  .textAlignVer {
    margin-left: 50%;
    font-size: 35px;
  }
}
@media screen and (max-width: 800px) {
  .concept-modern-right {
    font-size: 15px;
  }
}
@media screen and (max-width: 780px) {
  div.vertical-line {
    height: 175%;
  }
}
@media screen and (max-width: 768px) {
  .concept-mobile {
    display: block;
  }
  .concept-desktop {
    display: none;
  }
  .concept-img-mobile {
    display: block;
    width: 100%;
  }
  .concept-img {
    display: none;
  }
  .concept-modern-left {
    width: 40%;
    font-size: 22px;
    padding-top: 20%;
  }
  .textAlignVer {
    margin-top: 230%;
    font-size: 25px;
    margin-left: 60%;
  }
  .concept-modern-right {
    width: 53%;
    padding-bottom: 17%;
    font-size: 17px;
    padding-top: 16%;
  }
  .concept-func-img {
    margin-top: -10%;
  }
  .concept-bg {
    height: 1400px;
  }
  .concept-door {
    height: 230px;
  }
  div.vertical-line {
    width: 2px;
    margin-left: 8%;
    height: 105%;
  }
  .concept-mobile {
    display: block;
  }
  .concept-desktop {
    display: none;
  }
  .concept-modern-left {
    font-size: 40px;
  }
  .concept-func-description {
    font-size: 18px;
    padding-right: 7%;
  }
  .concept-func-header {
    font-size: 45px;
  }
  .concept-door {
    height: 320px;
  }
  .textAlignVer {
    margin-left: 70%;
    font-size: 40px;
  }
  div.vertical-line{
    height: 130%;
}
}
@media screen and (max-width: 700px) {
  .concept-mobile {
    display: block;
  }
  .concept-desktop {
    display: none;
  }
  .concept-img-mobile {
    display: block;
    width: 100%;
  }
  .concept-img {
    display: none;
  }
  .textAlignVer {
    margin-top: 230%;
    font-size: 25px;
  }
  .concept-modern-right {
    padding-bottom: 17%;
  }
  .concept-func-img {
    margin-top: -10%;
  }
  .concept-bg {
    height: 1400px;
  }
  .concept-func-header {
    font-size: 40px;
  }
  .concept-func-description {
    font-size: 16px;
    padding-right: 7%;
  }
  div.vertical-line {
    width: 2px;
    margin-left: 8%;
    height: 160%;
  }
  .textAlignVer {
    font-size: 30px;
  }
}
@media screen and (max-width: 600px) {
  .concept-modern-right {
    font-size: 18px;
    padding-top: 16%;
  }
  .concept-modern-left {
    font-size: 35px;
  }
  .concept-func-header {
    font-size: 35px;
  }
  .concept-func-description {
    font-size: 15px;
  }
  div.vertical-line {
    width: 2px;
    margin-left: 8%;
    height: 140%;
  }
}
@media screen and (max-width: 500px) {
  .concept-modern-right {
    font-size: 15px;
    padding-top: 16%;
  }
  .concept-modern-left {
    font-size: 30px;
  }
  .concept-func-header {
    font-size: 30px;
  }
  .concept-func-description {
    font-size: 14px;
  }
  .concept-door {
    height: 300px;
  }
  div.vertical-line {
    width: 2px;
    margin-left: 8%;
    height: 130%;
  }
}
@media screen and (max-width: 400px) {
  .concept-modern-right {
    font-size: 12px;
    padding-top: 16%;
  }
  .concept-modern-left {
    font-size: 25px;
  }
  .concept-func-header {
    font-size: 28px;
  }
  .concept-func-description {
    font-size: 12px;
  }
  .concept-door {
    height: 270px;
  }
}
@media screen and (max-width: 375px) {
  .concept-modern-right {
    font-size: 12px;
    padding-top: 16%;
  }
  .concept-modern-left {
    font-size: 20px;
  }
  .concept-func-header {
    font-size: 26px;
  }
  .concept-func-description {
    font-size: 11px;
  }
  .concept-door {
    height: 260px;
  }
  div.vertical-line {
    width: 2px;
    margin-left: 8%;
    height: 100%;
  }
}
</style>
