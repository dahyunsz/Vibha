<template>
  <!-- <div class="topnav">
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
  </div> -->
  <b-navbar>
    <template #brand>
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/' }"
      >
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
      <b-navbar-item href="#">
        Documentation
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#">
          About
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "DB-Ozone-X";
  src: url(~static/fonts/DB-Ozone-X.ttf);
}
.test {
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
