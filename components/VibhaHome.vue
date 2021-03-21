<template>
  <div class="Vibhahome-page">
    <div class="Vibhahome-contact">
      <div class="Vibhahome-contact-container">
        <img class="facebook-icon" src="~assets/icon/facebook-icon.png" />
      </div>
      <div class="Vibhahome-contact-container">
        <img class="instagram-icon" src="~assets/icon/instagram-icon.png" />
      </div>
      <div class="Vibhahome-contact-container">
        <img class="youtube-icon" src="~assets/icon/youtube-icon.png" />
      </div>
    </div>
    <img class="Vibhahome-logo" src="/Vibhahome-logo.png" alt="" />
    <img class="Vibhahome-img vibhahome-desktop" src="/Vibhahome.jpg" />
    <img
      class="Vibhahome-img vibhahome-mobile"
      src="/Vibhahome-mobile.jpg"
    />
    <p class="Vibhahome-title">YOUR LIFTIME LIVING BEGINS</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class VibhaHome extends Vue {}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "DB-Ozone-X";
  src: url(/fonts/DB-Ozone-X.ttf);
}
.Vibhahome-img {
  text-align: right;
  width: 90%;
  height: 100%;
}
.Vibhahome-page {
  background-color: #93a49e;
  width: 100%;
  display: flex;
  font-family: "DB-Ozone-X";
}
.Vibhahome-contact {
  width: 10%;
  padding-top: 29%;
  text-align: center;
}
.Vibhahome-logo {
  width: 30%;
  position: absolute;
  z-index: 1;
  margin-top: -5%;
  margin-left: 12%;
}
.Vibhahome-title {
  position: absolute;
  z-index: 1;
  color: white;
  font-size: 25px;
  padding-left: 45%;
  padding-top: 55%;
  font-weight: bold;
}
.vibhahome-desktop {
  display: block;
}
.vibhahome-mobile {
  display: none;
}
.facebook-icon {
  color: #1e2f27;
}
.Vibhahome-contact-container {
  padding: 15%;
}
.facebook-icon {
  width: 40%;
}
.youtube-icon {
  width: 50%;
}
.instagram-icon {
  width: 30%;
}
@media screen and (max-width: 700px) {
  .vibhahome-desktop {
    display: none;
  }
  .vibhahome-mobile {
    display: block;
  }

  .Vibhahome-img {
    width: 80%;
    height: 100%;
  }
  .Vibhahome-contact {
    width: 20%;
  }
  .Vibhahome-title {
    padding-top: 105%;
    padding-left: 60%;
    font-size: 14px;
  }
  .Vibhahome-logo {
    width: 50%;
    margin-top: -13%;
    margin-left: 14%;
  }
  .facebook-icon {
    width: 40%;
  }
  .youtube-icon {
    width: 50%;
  }
  .instagram-icon {
    width: 40%;
  }
  .Vibhahome-contact {
    padding-top: 43%;
  }
}
</style>