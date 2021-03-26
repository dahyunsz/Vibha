<template>
  <div>
    <Topnav/>
    <div class="div-flex">
      <div class="nav-desktop">
        <NavBar />
      </div>
      <div class="nav-mobile">
        <NavBarMobile/>
      </div>
    </div>
    <VibhaHome/>
    <AboutUs/>
    <VibhaDetail/>
    <Concept/>
    <VibhaVideo/>
    <ProjectInfo/>
    <FunctionRoom/>
    <Location/>
    <Footer/>
  </div>
</template>

<script lang="ts">
//import Vue from "vue";
import { Vue, Component, Prop } from "vue-property-decorator";
import Topnav from "../components/Topnav.vue";
import NavBar from "../components/NavBar.vue";
import VibhaHome from "../components/VibhaHome.vue";
import AboutUs from "../components/AboutUs.vue";
import VibhaDetail from "../components/VibhaDetail.vue";
import Concept from "../components/Concept.vue";
import VibhaVideo from "../components/VibhaVideo.vue";
import ProjectInfo from "../components/ProjectInfo.vue";
import FunctionRoom from "../components/FunctionRoom.vue";
import Location from "../components/Location.vue";
import Footer from "../components/Footer.vue";
import NavBarMobile from "../components/NavBarMobile.vue";

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
    NavBarMobile
  },
})
export default class Index extends Vue {
}
</script>

<style lang="scss" scoped>
.div-flex{
  margin-right: 5%;
}
.nav-mobile{
  display: none;
}
@media screen and (max-width: 1023px) {
  .div-flex{
  margin-right: 0%;
}
.nav-desktop{
  display: none;
}
.nav-mobile{
  display: block;
}
}
</style>
