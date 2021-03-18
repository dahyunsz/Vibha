<template>
  <div class="project-type">
      <div class="project-type-left">
        <p class="project-type-header">TYPE A</p>
        <br />
        <p class="project-type-Topic">LAND AREA :</p>
        <p class="project-type-description">61.1 SQ.WAH / 53 SQ.WAH</p>
        <br />
        <p class="project-type-Topic">USABLE AREA :</p>
        <p class="project-type-description">
          561.31 SQ. METRE
          <span class="project-description-inner">(Rooftop included)</span>
        </p>
      </div>
      <div class="project-type-right">
        <img src="~static/project-type-a.jpg" alt="" />
      </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ProjectTypeA extends Vue {}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'DB-Ozone-X';
  src: url(~static/fonts/DB-Ozone-X.ttf);
}
.project-type {
  width: 100%;
  display: flex;
  font-family: "DB-Ozone-X";
}
.project-type-left {
  width: 40%;
  padding-top: 10%;
  padding-left: 5%;
}
.project-type-right {
  width: 60%;
}
.project-type-header {
  font-size: 55px;
  border: 2px solid #455a3f;
  color: #455a3f;
  width: 35%;
  text-align: center;
}
.project-type-Topic {
  font-size: 30px;
  font-weight: bold;
}
.project-type-description {
  font-size: 30px;
}
.project-description-inner{
    color: #727a7d;
    font-size: 25px;
}
</style>
