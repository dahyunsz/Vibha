<template>
  <div class="project-page">
    <div class="project-center">
      <img class="project-plan-img" src="~static/project-plan.jpg" >
    </div>
    <h1 class="project-titile">PROJECT PLAN</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ProjectPlan extends Vue {
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "DB-Ozone-X";
  src: url(~static/fonts/DB-Ozone-X.ttf);
}
.project-page {
  width: 100%;
  background-color: white;
  color: black;
  font-family: "DB-Ozone-X";
  text-align: center;
}
.project-plan-container{
  text-align: center;
  align-content: center;
}
.project-plan-img{
  width: 50%;
  text-align: center;
}
.project-plan-title{
  font-size: 30px;
}
.project-header {
  font-size: 60px;
  font-weight: bold;
  color: white;
}
.project-titile{
  font-size: 50px;
  color: #1e2f27;
}

</style>
