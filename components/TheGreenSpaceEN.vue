<template>
  <div class="green-en-page">
    <div class="green-en-left">
      <h1 class="green-en-header">THE GREEN SPACE</h1>
    </div>
    <div class="green-en-right">
      <img src="~static/green-en-img.jpg" alt="" />
      <div class="square"></div>
      <p class="green-en-description-en">
        The exterior designer intentionally synchronizes the green space with
        the house right from the first floor to the master bedroom, where the
        members see the tall tree from the center of the house and enjoy a
        spacious area on the rooftop. The residents can experience planting and
        decorating trees where they create a fresh atmosphere and balance the
        air circulation from outside to inside. The house is perfect for you and
        your family to rest in nature.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class TheGreenSpaceEN extends Vue {}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'DB-Ozone-X';
  src: url(~static/fonts/DB-Ozone-X.ttf);
}
.green-en-page {
  width: 100%;
  display: flex;
  background-color: #93a49e;
  color: black;
  font-family: "DB-Ozone-X";
}
.green-en-left {
  width: 22%;
  padding-top: 10%;
  padding-left: 4%;
}
.green-en-right {
  width: 78%;
}
.green-en-header {
  font-size: 60px;
  font-weight: bold;
  color: white;
}
.green-en-topic {
  font-size: 35px;
  font-weight: bold;
  color: #50635d;
  padding-left: 3%;
}
.green-en-description-en {
  font-size: 25px;
  padding-top: 3%;
  padding-right: 8%;
  padding-left: 3%;
  font-weight: bold;
  padding-bottom: 4%;
}
.square {
  width: 100%;
  height: 60px;
  background: #d6d1cb;
  margin-left: 8%;
  margin-top: -2%;
}
</style>
