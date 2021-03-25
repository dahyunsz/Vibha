<template>
  <div class="vibhavideo-container">
    <img class="vibhavideo-bg" src="/vibha-video-bg.jpg" />
    <div class="vibhavideo-center">
      <embed
        class="vibha-video"
        src="https://www.youtube.com/embed/5cqaTv3lyhE"
      />
      <!-- <video class="vibha-video" controls>
        <source src="/vibha-video.mp4" type="video/mp4" />
      </video> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class VibhaVideo extends Vue {}
</script>

<style lang="scss" scoped>
.vibhavideo-container {
  width: 100%;
  height: 900px;
}
.vibhavideo-bg {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
}
.vibhavideo-center {
  text-align: center;
  height: 100%;
  padding-top: 5%;
  padding-bottom: 3%;
}
.vibha-video {
  width: 60%;
  height: 90%;
}
@media screen and (max-width: 1800px) {
  .vibhavideo-center {
    padding-top: 7.5%;
    padding-bottom: 5%;
  }
}
@media screen and (max-width: 1700px) {
  .vibhavideo-center {
    padding-top: 8.5%;
    padding-bottom: 7%;
  }
}
@media screen and (max-width: 1600px) {
  .vibhavideo-container {
    height: 830px;
  }
}
@media screen and (max-width: 1500px) {
  .vibhavideo-center {
    padding-top: 9%;
    padding-bottom: 6%;
  }
}
@media screen and (max-width: 1400px) {
  .vibhavideo-container {
    height: 750px;
  }
}
@media screen and (max-width: 1300px) {
  .vibhavideo-container {
    height: 650px;
  }
  .vibhavideo-center {
    padding-top: 7%;
    padding-bottom: 5%;
  }
}
@media screen and (max-width: 1200px) {
  .vibhavideo-container {
    height: 650px;
  }
  .vibhavideo-center {
    padding-top: 9.5%;
    padding-bottom: 7%;
  }
}
@media screen and (max-width: 1100px) {
  .vibhavideo-container {
    height: 550px;
  }
  .vibhavideo-center {
    padding-top: 7.5%;
    padding-bottom: 5%;
  }
}
@media screen and (max-width: 1000px) {
  .vibhavideo-container {
    height: 550px;
  }
  .vibhavideo-center {
    padding-top: 9.5%;
    padding-bottom: 8%;
  }
}
@media screen and (max-width: 900px) {
  .vibhavideo-container {
    height: 450px;
  }
  .vibhavideo-center {
    padding-top: 7%;
    padding-bottom: 5.5%;
  }
}
@media screen and (max-width: 800px) {
  .vibhavideo-center {
    padding-top: 10.5%;
    padding-bottom: 8%;
  }
}
@media screen and (max-width: 768px) {
  .vibhavideo-center {
    padding-top: 11.5%;
    padding-bottom: 9%;
  }
}
@media screen and (max-width: 700px) {
  .vibhavideo-container {
    height: 400px;
  }
}
@media screen and (max-width: 600px) {
  .vibhavideo-container {
    height: 350px;
  }
}
@media screen and (max-width: 500px) {
  .vibhavideo-container {
    height: 300px;
  }
  .vibhavideo-center {
    padding-top: 11.5%;
    padding-bottom: 10.5%;
  }
}
@media screen and (max-width: 400px) {
  .vibhavideo-container {
    height: 250px;
  }
  .vibhavideo-center {
    padding-top: 13%;
    padding-bottom: 12%;
  }
}
@media screen and (max-width: 375px) {
  .vibhavideo-container {
    height: 230px;
  }
  .vibhavideo-center {
    padding-top: 13%;
    padding-bottom: 10%;
  }
}
</style>
