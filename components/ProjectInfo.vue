<template>
  <div class="project-info-page" id="projectinfo">
    <div class="project-info">
      <div class="project-line">
        <p class="textAlignVer">PROJECT INFO</p>
        <div class="vertical-line"></div>
      </div>
      <div class="project-info-left">
        <p class="project-header">OUR <br />PROJECT</p>
        <br />
        <br />
        <p class="project-description">
          <span class="description-bold">DEVELOPER : </span><br />K. COMMERCIAL
          & CONSTRUCTION CO.,LTD <br /><span class="description-bold"
            >PROJECT LAND AREA :</span
          >
          263 SQ. WAH <br />
          <span class="description-bold">PROJECT TYPE :</span> MODERN LUXURY
          SINGLE HOUSES<br /><span class="description-bold">TOTAL UNIT :</span>
          4 UNITS
        </p>
        <br />
        <br />
        <p class="project-description">
          <span class="description-bold">LOCATION :</span> VIBHAVADI ROAD SOI 60
          / <br />
          PHAHOLYOTHIN ROAD SOI 49/1
        </p>
        <br />
        <br />
        <p class="project-description">
          <span class="description-bold">ARCHITECT :</span> ARBAY COMPANY
          LIMITED <br />
          <span class="description-bold">INTERIOR :</span> CHEMISTRY
        </p>
        <p @click="onClick()" class="project-plan">PROJECT PLAN</p>
        <b-modal v-model="projectPlan" id="modal-1" title="BootstrapVue">
          <ProjectPlan />
        </b-modal>
      </div>
      <!-- <div class="project-info-right">
        <img src="~static/project-info.jpg" class="img-projectinfo" alt="" />
      </div> -->
    </div>
    <div class="vibha-type">
      <div class="vibha-type-top">
        <img class="Vibha-detail-top-img" src="~static/Vibhalogo.jpg" />
      </div>

      <div v-if="this.isTypeA">
        <div class="vibha-type-bottom">
          <div class="vibha-type-bottom-center">
            <p class="type-actve" @click="onclickTypeA">TYPE A</p>
            <p class="type-non-actve" @click="onclickTypeB">TYPE B</p>
            <p class="type-non-actve" @click="onclickTypeC">TYPE C</p>
          </div>
        </div>
      </div>
      <div v-if="this.isTypeB">
        <div class="vibha-type-bottom">
          <div class="vibha-type-bottom-center">
            <p class="type-non-actve" @click="onclickTypeA">TYPE A</p>
            <p class="type-actve" @click="onclickTypeB">TYPE B</p>
            <p class="type-non-actve" @click="onclickTypeC">TYPE C</p>
          </div>
        </div>
      </div>
      <div v-if="this.isTypeC">
       <div class="vibha-type-bottom">
          <div class="vibha-type-bottom-center">
            <p class="type-non-actve" @click="onclickTypeA">TYPE A</p>
            <p class="type-non-actve" @click="onclickTypeB">TYPE B</p>
            <p class="type-actve" @click="onclickTypeC">TYPE C</p>
          </div>
        </div>
      </div>

      <div v-if="this.isTypeA">
        <ProjectTypeA />
      </div>
      <div v-if="this.isTypeB">
        <ProjectTypeB />
      </div>
      <div v-if="this.isTypeC">
        <ProjectTypeC />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ProjectPlan from "../components/ProjectPlan.vue";
import ProjectTypeA from "../components/ProjectTypeA.vue";
import ProjectTypeB from "../components/ProjectTypeB.vue";
import ProjectTypeC from "../components/ProjectTypeC.vue";

@Component({
  components: {
    ProjectPlan,
    ProjectTypeA,
    ProjectTypeB,
    ProjectTypeC,
  },
})
export default class ProjectInfo extends Vue {
  projectPlan = false;
  isTypeA = true;
  isTypeB = false;
  isTypeC = false;

  onClick() {
    this.projectPlan = !this.projectPlan;
  }

  onclickTypeA() {
    this.isTypeA = true;
    this.isTypeB = false;
    this.isTypeC = false;
  }
  onclickTypeB() {
    this.isTypeB = true;
    this.isTypeA = false;
    this.isTypeC = false;
  }
  onclickTypeC() {
    this.isTypeC = true;
    this.isTypeA = false;
    this.isTypeB = false;
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "DB-Ozone-X";
  src: url(~static/fonts/DB-Ozone-X.ttf);
}
.project-info-page {
  color: #1e2f27;
  font-family: "DB-Ozone-X";
}
.project-info {
  width: 100%;
  display: flex;
  background-color: #b7bcb4;
}
.project-info-left {
  width: 54%;
  padding-top: 8%;
}
.project-info-right {
  width: 46%;
}
.img-projectinfo {
  width: 100%;
  height: 100%;
}
.project-header {
  font-weight: bold;
  font-size: 80px;
}
.project-description {
  font-size: 40px;
}
.description-bold {
  font-weight: bold;
}
.project-type {
  width: 100%;
  display: flex;
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
  padding: 10px;
  color: #455a3f;
  margin-right: 65%;
}
.project-type-Topic {
  font-size: 30px;
  font-weight: bold;
}
.project-type-description {
  font-size: 30px;
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
  color: white;
  font-weight: bold;
  margin-left: 45%;
  margin-top: 150%;
}
div.vertical-line {
  width: 4px;
  background-color: #455a3f;
  height: 145%;
  float: left;
  margin-left: 6.2%;
  position: absolute;
  z-index: 1;
}
.project-line {
  width: 15%;
}

.type-actve {
  border: 2px solid #455a3f;
  color: white;
  background-color: #455a3f;
  font-size: 40px;
  padding: 15px;
  margin-left: 50%;
  margin-bottom: 5%;
  cursor: pointer;
}
.type-non-actve {
  border: 2px solid #455a3f;
  color: #455a3f;
  font-size: 40px;
  padding: 15px;
  margin-bottom: 5%;
  cursor: pointer;
}

.vibha-type {
  width: 100%;
}
.vibha-type-top {
  text-align: center;
}
.vibha-type-bottom {
  width: 100%;
}
.Vibha-detail-top-img {
  width: 25%;
  text-align: center;
}

.vibha-type-bottom-center {
  display: flex;
  justify-content: center;
}
.vibha-type-bottom-center p {
  margin-left: 5%;
  margin-right: 5%;
}
.project-plan {
  border: 2px solid white;
  color: white;
  width: 35%;
  padding: 1%;
  font-size: 30px;
  margin-top: 7%;
  margin-bottom: 10%;
  text-align: center;
  cursor: pointer;
}
.project-description-inner {
  color: #727a7d;
  font-size: 25px;
}
</style>
