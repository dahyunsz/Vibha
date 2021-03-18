<template>
  <div class="function-page" id="gallery">
    <div class="function-top">
      <div class="function-area">
        <img @click=onClick11() class="function-container" src="~static/func1-1.jpg" />
      </div>
      <div class="function-area">
        <img @click=onClick12() class="function-container" src="~static/func1-2.jpg" />
      </div>
      <div class="function-area">
        <img @click=onClick13() class="function-container" src="~static/func1-3.jpg" />
      </div>
      <div class="function-area">
        <img @click=onClick14() class="function-container" src="~static/func1-4.jpg" />
      </div>
    </div>
    <div class="function-bottom">
      <div class="function-area">
        <img @click=onClick21() class="function-container" src="~static/func2-1.jpg" />
      </div>
      <div class="function-area">
        <img @click=onClick22() class="function-container" src="~static/func2-2.jpg" />
      </div>
      <div class="function-area">
        <img @click=onClick23() class="function-container" src="~static/func2-3.jpg" />
      </div>
      <div class="function-area">
        <img @click=onClick24() class="function-container" src="~static/func2-4.jpg" />
      </div>
    </div>
    

  <b-modal v-model="function1_1" id="modal-1" title="BootstrapVue">
    <DoubleVolume/>
  </b-modal>
  <b-modal v-model="function1_2" id="modal-1" title="BootstrapVue">
    <Pantry/>
  </b-modal>
  <b-modal v-model="function1_3" id="modal-1" title="BootstrapVue">
    <Restroom/>
  </b-modal>
  <b-modal v-model="function1_4" id="modal-1" title="BootstrapVue">
    <ElderlyFunc/>
  </b-modal>

  <b-modal v-model="function2_1" id="modal-1" title="BootstrapVue">
    <Balcony/>
  </b-modal>
  <b-modal v-model="function2_2" id="modal-1" title="BootstrapVue">
    <MasterBedroom/>
  </b-modal>
  <b-modal v-model="function2_3" id="modal-1" title="BootstrapVue">
    <TheGreenSpaceEN/>
  </b-modal>
  <b-modal v-model="function2_4" id="modal-1" title="BootstrapVue">
    <TheGreenSpaceTH/>
  </b-modal>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { component } from "~/node_modules/vue/types/umd";
import DoubleVolume from "../components/DoubleVolume.vue";
import Pantry from "../components/Pantry.vue";
import Balcony from "../components/Balcony.vue";
import MasterBedroom from "../components/MasterBedroom.vue";
import Restroom from "../components/Restroom.vue";
import ElderlyFunc from "../components/ElderlyFunc.vue";
import TheGreenSpaceEN from "../components/TheGreenSpaceEN.vue";
import TheGreenSpaceTH from "../components/TheGreenSpaceTH.vue";

@Component({
  components:{
    DoubleVolume,
    Pantry,
    Balcony,
    MasterBedroom,
    Restroom,
    ElderlyFunc,
    TheGreenSpaceEN,
    TheGreenSpaceTH,
  }
})
export default class FunctionRoom extends Vue {
  function1_1 =false;
  function1_2 =false;
  function1_3 =false;
  function1_4 =false;
  function2_1 =false;
  function2_2 =false;
  function2_3 =false;
  function2_4 =false;

  onClick11(){
    this.function1_1 =!this.function1_1;
  }
  onClick12(){
    this.function1_2 =!this.function1_2;
  }
  onClick13(){
    this.function1_3 =!this.function1_3;
  }
  onClick14(){
    this.function1_4 =!this.function1_4;
  }
  onClick21(){
    this.function2_1 =!this.function2_1;
  }
  onClick22(){
    this.function2_2 =!this.function2_2;
  }
  onClick23(){
    this.function2_3 =!this.function2_3;
  }
  onClick24(){
    this.function2_4 =!this.function2_4;
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'DB-Ozone-X';
  src: url(~static/fonts/DB-Ozone-X.ttf);
}
.function-page {
  width: 100%;
  font-family: "DB-Ozone-X";
}
.function-top {
  width: 100%;
    display: flex;
    height: 600px;
}
.function-bottom {
  width: 100%;
    display: flex;
    height: 600px;
}
.function-area{
  width: 25%;
}
.function-container {
  height: 100%;
  cursor: pointer;
}
.function-button{
  height: 600px;
}
</style>
