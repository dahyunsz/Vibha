<template>
  <div class="topnav">
    <div class="topnav-right navbar-desktop">
      <a v-scroll-to="{ el: '#aboutus' }">ABOUT US</a>
      <a v-scroll-to="{ el: '#concept' }">CONCEPT</a>
      <a v-scroll-to="{ el: '#projectinfo' }">PROJECT INFO</a>
      <a v-scroll-to="{ el: '#location' }">LOCATION</a>
      <a v-scroll-to="{ el: '#gallery' }">GALLERY</a>
      <a v-scroll-to="{ el: '#contactus' }">CONTACT US</a>
    </div>
    <div class="topnav-right navbar-mobile">
      <div class="navbar-mobile-container">
        <img
          class="menu-icon"
          @click="onclick"
          src="~assets/icon/menu.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {
 
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "DB-Ozone-X";
  src: url(~static/fonts/DB-Ozone-X.ttf);
}
.test{
  color: black;
}
.main-menu {
  text-transform: uppercase;
}
.topnav {
  padding-top: 4%;
  padding-bottom: 3%;
  font-family: "DB-Ozone-X";
}
.topnav a {
  color: black;
  text-align: center;
  padding: 16px 18px;
  text-decoration: none;
  font-size: 35px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav-right {
  float: right;
  padding-right: 4%;
}
.navbar-mobile {
  display: none;
}
@media screen and (max-width: 768px) {
  .navbar-mobile {
    display: block;
  }
  .navbar-desktop {
    display: none;
  }
  .navbar-mobile-container {
    width: 100%;
    height: 80px;
    text-align: right;
  }
  .menu-icon {
    width: 10%;
  }
}
</style>
