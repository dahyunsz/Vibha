<template>
  <div class="green-th-page">
    <div class="green-th-left">
      <h1 class="green-th-header">THE GREEN SPACE</h1>
    </div>
    <div class="green-th-right">
      <img src="~static/green-th-img.jpg" alt="" />
      <div class="square"></div>
      <p class="green-th-description-th">
        เพื่อสนองความต้องการและความสะดวกสบายในการ ดูแลผู้สูงอายุภายในบ้าน
        ชั้นหนึ่งถูกจัดวางให้เป็นพื้นที่ส่วนตัวของผู้ สูงอายุ
        เพื่อการเข้าถึงที่ง่าย ภายในห้องนอนและห้องน้ำได้รับการดีไซน์ให้เหมาะสม
        ปลอดภัย สามารถเปิดรับแสง และอากาศ บริสุทธิ์จากภายนอก พร้อมกับสวนเล็กๆ
        ด้านข้าง ให้การพักผ่อนเป็นไป อย่างเต็มที่ในทุกช่วงเวลา
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class TheGreenSpaceTH extends Vue {}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'DB-Ozone-X';
  src: url(~static/fonts/DB-Ozone-X.ttf);
}
.green-th-page {
  width: 100%;
  display: flex;
  background-color: #93a49e;
  color: black;
  font-family: "DB-Ozone-X";
}
.green-th-left {
  width: 22%;
  padding-top: 10%;
  padding-left: 4%;
}
.green-th-right {
  width: 78%;
}
.green-th-header {
  font-size: 60px;
  font-weight: bold;
  color: white;
}
.green-th-topic {
  font-size: 35px;
  font-weight: bold;
  color: #50635d;
  padding-left: 3%;
}
.green-th-description-th {
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
