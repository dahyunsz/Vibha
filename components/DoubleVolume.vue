<template>
  <div class="doublevolume-page">
    <div class="doublevolume-left">
      <h1 class="doublevolume-header">DOUBLE VOLUME</h1>
      <h2 class="doublevolume-topic">LIVING ROOM & DINING ROOM</h2>
    </div>
    <div class="doublevolume-right">
      <img src="~static/double-volume-img.jpg" alt="" />
      <div class="square"></div>
      <p class="doublevolume-description-en">
        A high ceiling hall was delicately designed to accommodate family
        members. It is perfect for common time under sheer of sulight, breezy
        air, and natural wind. The interior design is luxury decorated with the
        large glass walls that give you an exposure to outside views and enhance
        valuable family moments in relaxing atmosphere.
      </p>
      <br />
      <p class="doublevolume-description-th">
        พื้นที่สำหรับการพักผ่อนร่วมกันของสมาชิกภายในบ้าน
        ถูกออกแบบให้เป็นห้องโถงเพดานสูงมีความโปร่ง โล่ง สบาย พร้อมรับแสง
        และลมจากธรรมชาติอย่างเต็มที่ เพิ่มความหรูหราด้วยผนังกระจกบานใหญ่
        เปิดรับมุมมองจากภายนอกสู่ภายใน ช่วยเพิ่ม การผ่อนคลายในทุกๆวันขอครอบครัว
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class DoubleVolume extends Vue {}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'DB-Ozone-X';
  src: url(~static/fonts/DB-Ozone-X.ttf);
}
.doublevolume-page {
  width: 100%;
  display: flex;
  background-color: #93a49e;
  color: black;
  font-family: "DB-Ozone-X";
}
.doublevolume-left {
  width: 22%;
  padding-top: 10%;
  padding-left: 4%;
}
.doublevolume-right {
  width: 78%;
}
.doublevolume-header {
  font-size: 60px;
  font-weight: bold;
  color: white;
}
.doublevolume-topic {
  font-size: 35px;
  font-weight: bold;
  color: #50635d;
  padding-left: 3%;
}
.doublevolume-description-en {
  font-size: 25px;
  padding-top: 3%;
  padding-right: 8%;
  padding-left: 3%;
  font-weight: bold;
}
.doublevolume-description-th {
  font-size: 25px;
  padding-top: 1%;
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
