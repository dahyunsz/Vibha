<template>
  <div class="bedroom-page">
    <div class="bedroom-left">
      <h1 class="bedroom-header">MASTER BEDROOM</h1>
    </div>
    <div class="bedroom-right">
      <img src="~static/bedroom-img.jpg" alt="" />
      <div class="square"></div>
      <p class="bedroom-description-en">
        To provide you with more privacy, the facilities on the 3rd floor will
        answer your call. The master bedroom is planned to connect all functions
        seamlessly. Complete the entire section with a large bed, a versatile
        bathroom with both shower and bathtub, a dressing corner with a walk-in
        closet, and a small mini bar to accommodate your nighttime. There is
        also a multi-purpose room that connects to the bedroom area, which
        flexible to all sorts of decorations to fit your lifestyle.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class MasterBedroom extends Vue {}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'DB-Ozone-X';
  src: url(~static/fonts/DB-Ozone-X.ttf);
}
.bedroom-page {
  width: 100%;
  display: flex;
  background-color: #93a49e;
  color: black;
  font-family: "DB-Ozone-X";
}
.bedroom-left {
  width: 22%;
  padding-top: 10%;
  padding-left: 4%;
}
.bedroom-right {
  width: 78%;
}
.bedroom-header {
  font-size: 60px;
  font-weight: bold;
  color: white;
}
.bedroom-description-en {
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
