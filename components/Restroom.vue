<template>
  <div class="restroom-page">
    <div class="restroom-left">
      <h1 class="restroom-header">RESTROOM</h1>
      <br>
      <h2 class="restroom-topic">MASTER <br> BEDROOM</h2>
    </div>
    <div class="restroom-right">
      <img src="~static/restroom-img.jpg" alt="" />
      <div class="square"></div>
      <p class="restroom-description-th">
        เพื่อความเป็นส่วนตัว บนพื้นที่ชั้น 3 สำหรับ
        ห้องนอนใหญ่จึงมีการวางผังให้เชื่อมโยงทุกฟังค์ชั่นอย่างลงตัว
        ครบทั้งส่วนของเตียง นอนขนาดใหญ่ ห้องน้ำที่มีทั้ง SHOWER และอ่างอาบน้ำ
        มุมแต่งตัวกับ Walk – in closet และ Mini bar เล็กๆ เพื่ออำนวยความ
        สะดวกในเวลากลางคืน นอกจากนี้
        ยังมีส่วนห้องอเนกประสงค์ที่สามารถเชื่อมต่อกับพื้นที่ห้องนอน
        รองรับทุกการตกแต่ง เพื่อให้ เข้ากับทุกไลฟ์สไตล์ในแบบของคุณ
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Restroom extends Vue {}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'DB-Ozone-X';
  src: url(~static/fonts/DB-Ozone-X.ttf);
}
.restroom-page {
  width: 100%;
  display: flex;
  background-color: #93a49e;
  color: black;
  font-family: "DB-Ozone-X";
}
.restroom-left {
  width: 22%;
  padding-top: 10%;
  padding-left: 4%;
}
.restroom-right {
  width: 78%;
}
.restroom-header {
  font-size: 60px;
  font-weight: bold;
  color: white;
}
.restroom-topic {
  font-size: 35px;
  font-weight: bold;
  color: #50635d;
  padding-left: 3%;
}
.restroom-description-th {
  font-size: 25px;
  padding-top: 3%;
  padding-left: 3%;
  padding-right: 8%;
  padding-bottom: 4%;
  font-weight: bold;
}
.square {
  width: 100%;
  height: 60px;
  background: #d6d1cb;
  margin-left: 8%;
  margin-top: -2%;
}
</style>
