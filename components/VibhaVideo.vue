<template>
  <div class="vibhavideo-container">
    <img class="vibhavideo-bg" src="~static/vibha-video-bg.jpg">
    <div class="vibhavideo-center">
      <!-- <embed class="vibha-video" src="https://www.youtube.com/embed/FrOLeoXrvLU" type=""> -->
      <video class="vibha-video" controls>
        <source src="~static/vibha-video.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class VibhaVideo extends Vue {}
</script>

<style lang="scss" scoped>
.vibhavideo-container{
    width: 100%;
    height: 900px;
}
.vibhavideo-bg{
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
}
.vibhavideo-center{
    text-align: center;
    height: 100%;
    padding-top: 2%;
    padding-bottom: 2%;
}
.vibha-video{
    width: 60%;
    height: 90%;
}
@media screen and (max-width: 768px) {
.vibha-video{
    width: 80%;
    height: 80%;
}
.vibhavideo-container{
    width: 100%;
    height: 300px   ;
}
.vibhavideo-center{
    padding-top: 13%;
}
}
</style>
