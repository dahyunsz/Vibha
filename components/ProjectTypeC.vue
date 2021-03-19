<template>
  <div class="project-type">
    <div class="project-type-left">
      <div class="project-type-top">
        <img class="type-bg" src="~static/type-bg.jpg" alt="" />
        <div class="project-type-left-padding">
          <p class="project-type-header">TYPE C</p>
          <br />
          <p class="project-type-Topic">LAND AREA :</p>
          <p class="project-type-description">96.41 SQ.WAH</p>
          <br />
          <p class="project-type-Topic">USABLE AREA :</p>
          <p class="project-type-description">
            952.75 SQ. METRE
            <span class="project-description-inner">(Rooftop included)</span>
          </p>
        </div>
      </div>
      <div class="project-type-bottom">
        <!-- desktop -->
        <div class="type-container-left type-container-desktop">
          <div class="type-container">
            <img class="type-img" src="~assets/icon/type-1_1.jpg" width="50" />
            <p class="type-title">3 Bedrooms</p>
          </div>

          <div class="type-container">
            <img class="type-img" src="~assets/icon/type-1_2.jpg" width="50" />
            <p class="type-title">3 Bathrooms</p>
          </div>

          <div class="type-container">
            <img class="type-img" src="~assets/icon/type-1_5.jpg" width="40" />
            <p class="type-title">
              3 &nbsp;
              <span class="frac">
                <span>1</span>
                <span class="symbol">/</span>
                <span class="bottom">2</span>
              </span>
              &nbsp;&nbsp;Storeys with rooftop
            </p>
          </div>
        </div>
        <div class="type-container-right type-container-desktop">
          <div class="type-container">
            <img class="type-img" src="~assets/icon/type-1_3.jpg" width="50" />
            <p class="type-title">3 Car parking</p>
          </div>

          <div class="type-container">
            <img class="type-img" src="~assets/icon/type-1_4.jpg" width="30" />
            <p class="type-title">1 Power room</p>
          </div>
        </div>
        <!-- desktop -->
        <!-- mobile -->
        <div class="type-container-left type-container-mobile">
          <div class="type-container">
            <img class="type-img" src="~assets/icon/type-1_1.jpg" width="50" />
            <p class="type-title">3 Bedrooms</p>
          </div>
          <div class="type-container">
            <img class="type-img" src="~assets/icon/type-1_2.jpg" width="50" />
            <p class="type-title">3 Bathrooms</p>
          </div>
          <div class="type-container">
            <img
              class="type-img img-ladder"
              src="~assets/icon/type-1_5.jpg"
              width="40"
            />
            <p class="type-title">
              3&nbsp;
              <span class="frac">
                <span>1</span>
                <span class="symbol">/</span>
                <span class="bottom">2</span>
              </span>
              &nbsp;Storeys with rooftop
            </p>
          </div>
          <div class="type-container">
            <img class="type-img" src="~assets/icon/type-1_3.jpg" width="50" />
            <p class="type-title">3 Car parking</p>
          </div>

          <div class="type-container">
            <img
              class="type-img img-ladder"
              src="~assets/icon/type-1_4.jpg"
              width="30"
            />
            <p class="type-title">1 Power room</p>
          </div>
        </div>
        <!-- mobile -->
      </div>
    </div>

    <div class="project-type-right">
      <div class="square"></div>
      <div class="project-type-option">
        <div class="is-active">
          <p @click="onClick_FirstFloor">1<sup>ST</sup> FLOOR PLAN</p>
        </div>
        <div class="is-active">
          <p @click="onClick_SecondFloor">2<sup>ND</sup> FLOOR PLAN</p>
        </div>
        <div class="is-active">
          <p @click="onClick_SecondMFloor">2M FLOOR</p>
        </div>
        <div class="is-active">
          <p @click="onClick_ThirdFloor">3<sup>RD</sup> FLOOR PLAN</p>
        </div>
        <div class="is-active">
          <p @click="onClick_Rooftop">ROOFTOP</p>
        </div>
      </div>
      <b-modal v-model="FirstFloor" id="modal-1" title="BootstrapVue">
        <FirstFloor />
      </b-modal>
      <b-modal v-model="SecondFloor" id="modal-1" title="BootstrapVue">
        <SecondFloor />
      </b-modal>
      <b-modal v-model="SecondMFloor" id="modal-1" title="BootstrapVue">
        <SecondMFloor />
      </b-modal>
      <b-modal v-model="ThirdFloor" id="modal-1" title="BootstrapVue">
        <ThirdFloor />
      </b-modal>
      <b-modal v-model="Rooftop" id="modal-1" title="BootstrapVue">
        <Rooftop />
      </b-modal>

      <img src="~static/project-type-c.jpg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import FirstFloor from "../components/TypeC/FirstFloor.vue";
import SecondFloor from "../components/TypeC/SecondFloor.vue";
import SecondMFloor from "../components/TypeC/SecondMFloor.vue";
import ThirdFloor from "../components/TypeC/ThirdFloor.vue";
import Rooftop from "../components/TypeC/Rooftop.vue";

@Component({
  components: {
    FirstFloor,
    SecondFloor,
    SecondMFloor,
    ThirdFloor,
    Rooftop,
  },
})
export default class ProjectTypeB extends Vue {
  FirstFloor = false;
  SecondFloor = false;
  SecondMFloor = false;
  ThirdFloor = false;
  Rooftop = false;
  onClick_FirstFloor() {
    this.FirstFloor = !this.FirstFloor;
  }
  onClick_SecondFloor() {
    this.SecondFloor = !this.SecondFloor;
  }
  onClick_SecondMFloor() {
    this.SecondMFloor = !this.SecondMFloor;
  }
  onClick_ThirdFloor() {
    this.ThirdFloor = !this.ThirdFloor;
  }
  onClick_Rooftop() {
    this.Rooftop = !this.Rooftop;
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "DB-Ozone-X";
  src: url(~static/fonts/DB-Ozone-X.ttf);
}
.project-type {
  width: 100%;
  display: flex;
  font-family: "DB-Ozone-X";
}
.project-type-left {
  width: 40%;
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
.project-description-inner {
  color: #727a7d;
  font-size: 25px;
}
.type-container {
  display: flex;
  width: 100%;
}
.type-title {
  font-size: 30px;
}
.type-bg {
  position: absolute;
  z-index: -1;
  width: 40%;
}
.project-type-left-padding {
  padding-left: 14%;
  padding-top: 30%;
}
.project-type-bottom {
  display: flex;
  width: 100%;
  padding-top: 30%;
  justify-content: center;
  margin-left: -5%;
}
.type-container {
  margin: 10%;
}
.type-container-right {
  margin-top: 1%;
  margin-left: -6%;
}
.project-type-option {
  // background: white;
  font-size: 30px;
  position: absolute;
  z-index: 1;
  opacity: 1;
  height: 134%;
  width: 20%;
  padding-top: 6%;
  color: black;
}

.project-type-right {
  width: 60%;
}
.project-type-option p {
  margin: 2%;
  padding-left: 15%;
}
.is-active:hover {
  opacity: 1;
  background-color: white;
  cursor: pointer;
}
.square {
  opacity: 0.4;
  height: 164%;
  width: 20%;
  background: white;
  position: absolute;
  z-index: 1;
}
.frac {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  letter-spacing: 0.001em;
  text-align: center;
  font-size: 18px;
}
.frac > span {
  display: block;
}
.frac span.bottom {
  border-top: thin solid black;
}
.frac span.symbol {
  display: none;
}
.type-container-mobile {
  display: none;
}
@media screen and (max-width: 768px) {
  .type-container-mobile {
    display: flex;
    flex-direction: column;
  }
  .type-container-desktop {
    display: none;
  }
  .project-type-left {
    width: 100%;
  }
  .type-bg {
    position: absolute;
    z-index: -1;
    width: 100%;
  }
  .project-type-header {
    font-size: 18px;
    border: 2px solid #455a3f;
    color: #455a3f;
    width: 50%;
    font-weight: bold;
    text-align: center;
  }
  .project-type-Topic {
    font-size: 13px;
    font-weight: bold;
  }
  .project-type-description {
    font-size: 13px;
  }
  .project-description-inner {
    color: #727a7d;
    font-size: 13px;
  }
  .type-container {
    display: flex;
    width: 100%;
  }
  .type-title {
    font-size: 13px;
  }
  .project-type-option {
    // background: white;
    font-size: 13px;
    position: absolute;
    z-index: 1;
    opacity: 1;
    height: 134%;
    width: 20%;
    padding-top: 6%;
    color: black;
  }
  .project-type-left {
    display: flex;
  }
  .project-type-top {
    width: 50%;
  }
  .project-type-bottom {
    width: 50%;
    padding-top: 20%;
    padding-left: 3%;
    padding-bottom: 10%;
  }
  .type-img {
    width: 15%;
  }

  .type-bg {
    height: 100%;
  }
  .type-title {
    padding-left: 5%;
    width: 100%;
  }
  .frac {
    font-size: 10px;
  }

  .type-container {
    margin: 3%;
  }
  .project-type-right {
    width: 100%;
  }
  .project-type {
    flex-direction: column;
  }
  .square {
    height: 61.7%;
    width: 35%;
  }
  .project-type-option {
    width: 35%;
    height: 0%;
  }
}
</style>
