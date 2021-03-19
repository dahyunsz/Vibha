<template>
  <div>
    <Topnav/>
    <NavBar />
    <VibhaHome/>
    <AboutUs/>
    <VibhaDetail/>
    <Concept/>
    <VibhaVideo/>
    <ProjectInfo/>
    <FunctionRoom/>
    <Location/>
    <Footer/>

    <!-- <DoubleVolume/>
    <Pantry/>
    <Balcony/>
    <MasterBedroom/>
    <Restroom/>
    <ElderlyFunc/>
    <TheGreenSpaceEN/>
    <TheGreenSpaceTH/>
    <ProjectTypeB/>
    <ProjectTypeC/> -->
    <!-- <ProjectPlan/> -->
  </div>
</template>

<script lang="ts">
//import Vue from "vue";
import { Vue, Component, Prop } from "vue-property-decorator";
import NavBar from "../components/NavBar.vue";
import VibhaHome from "../components/VibhaHome.vue";
import AboutUs from "../components/AboutUs.vue";
import VibhaDetail from "../components/VibhaDetail.vue";
import Concept from "../components/Concept.vue";
import ProjectInfo from "../components/ProjectInfo.vue";
import Location from "../components/Location.vue";
import Footer from "../components/Footer.vue";
import DoubleVolume from "../components/DoubleVolume.vue";
import Pantry from "../components/Pantry.vue";
import Balcony from "../components/Balcony.vue";
import MasterBedroom from "../components/MasterBedroom.vue";
import Restroom from "../components/Restroom.vue";
import ElderlyFunc from "../components/ElderlyFunc.vue";
import TheGreenSpaceEN from "../components/TheGreenSpaceEN.vue";
import TheGreenSpaceTH from "../components/TheGreenSpaceTH.vue";
import FunctionRoom from "../components/FunctionRoom.vue";
import ProjectTypeB from "../components/ProjectTypeB.vue";
import ProjectTypeC from "../components/ProjectTypeC.vue";
import ProjectPlan from "../components/ProjectPlan.vue";
import VibhaVideo from "../components/VibhaVideo.vue";
import Topnav from "../components/Topnav.vue";
@Component({
  components: {
    Topnav,
    NavBar,
    VibhaHome,
    AboutUs,
    VibhaDetail,
    Concept,
    VibhaVideo,
    ProjectInfo,
    FunctionRoom,
    Location,
    Footer,

    DoubleVolume,
    Pantry,
    Balcony,
    MasterBedroom,
    Restroom,
    ElderlyFunc,
    TheGreenSpaceEN,
    TheGreenSpaceTH,
    ProjectTypeB,
    ProjectTypeC,
    ProjectPlan,
  },
})
export default class Index extends Vue {
}
</script>

<style lang="scss" scoped>
</style>
