<template>
  <div class="vibhavideo-container">
    <div class="vibhavideo-center">
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
    background-image: url(~static/vibha-video-bg.jpg);
    height: 900px   ;
}
.vibhavideo-center{
    text-align: center;
    height: 100%;
    padding-top: 9%;
}
.vibha-video{
    width: 60%;
    height: 80%;
}
@media screen and (max-width: 768px) {
.vibha-video{
    width: 80%;
    height: 75%;
}
.vibhavideo-container{
    width: 100%;
    background-image: url(~static/vibha-video-bg.jpg);
    height: 300px   ;
}
.vibhavideo-center{
    padding-top: 13%;
}
}
</style>
