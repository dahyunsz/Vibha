<template>
  <div class="location-page" id="location">
    <div class="location-header">
      <div class="project-line">
        <p class="textAlignVer">LOCATION</p>
        <div class="vertical-line"></div>
      </div>
      <div class="location-left">
        <img
          src="~static/location-img-house.jpg"
          class="location-img-house"
          alt=""
        />
      </div>
      <div class="location-right">
        <p class="location-description">
          It is convenient to connect your journey to the major districts of
          Bangkok via Vibhavadi and Phaholyothin Road, which easily access the
          green and red line Skytrain within 10 minutes drive.
        </p>
        <br />
        <p class="location-description">
          ความสะดวกสบายที่เชื่อมต่อการเดินทางของคุณสู่ย่าน สำคัญต่าง ๆ
          ของกรุงเทพฯ ด้วยเส้นทางเข้าออกทั้งจาก ถนนวิภาวดี และถนนพหลโยธิน
          ใกล้จุดขึ้นรถไฟฟ้าสายเขียว และ สีแดง เพียง 10 นาที
        </p>
      </div>
    </div>
    <div class="location-bottom">
      <div class="location-bottom-left">
        <img src="~static/location-detail.jpg" alt="" />
      </div>
      <div class="location-bottom-right">
        <table>
          <tr>
            <th class="location-table-header">SURROUNDING</th>
          </tr>
          <br />
          <tr>
            <td class="location-table-data">มหาวิทยาลัยศรีปทุม</td>
            <td class="location-table-data">นอร์ธพาร์ค วิภาวดี</td>
          </tr>
          <tr>
            <td class="location-table-data">มหาวิทยาลัยเกษตรศาสตร์</td>
            <td class="location-table-data">ตึกช้าง</td>
          </tr>
          <tr>
            <td class="location-table-data">มหาวิทยาลัยเกริก</td>
            <td class="location-table-data">SCB พาร์ค</td>
          </tr>
          <tr>
            <td class="location-table-data">โรงพยาบาลวิภาวดี</td>
            <td class="location-table-data">VI พลาซ่า</td>
          </tr>
          <tr>
            <td class="location-table-data">โรงพยาบาลเปาโล เกษตร</td>
            <td class="location-table-data">เมเจอร์ รัชโยธิน</td>
          </tr>
          <tr>
            <td class="location-table-data">สโมสรตำรวจ</td>
            <td class="location-table-data">เซ็นทรัลลาดพร้าว</td>
          </tr>
          <tr>
            <td class="location-table-data">กรมป่าไม้</td>
            <td class="location-table-data">ยูเนี่ยน มอลล์</td>
          </tr>
          <tr>
            <td class="location-table-data">กรมทหารราบที่ 11</td>
            <td class="location-table-data">เทสโก้ หลักสี่</td>
          </tr>
          <tr>
            <td class="location-table-data">ตลาดบางเขน</td>
          </tr>
          <tr>
            <td class="location-table-data">
              Museum of Contemporary art (MOCA)
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Location extends Vue {}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'DB-Ozone-X';
  src: url(~static/fonts/DB-Ozone-X.ttf);
}
.location-page{
  padding-top: 5%;
  font-family: "DB-Ozone-X";
}
.location-header {
  width: 100%;
  padding-top: 20%;
  display: flex;
}
.location-left {
  width: 48%;
}
.location-right {
  width: 52%;
  padding-right: 5%;
  padding-left: 5%;
}
.location-description {
  font-size: 30px;
}
.location-img-house {
  position: absolute;
  z-index: 1;
  width: 50%;
}
.location-bottom {
  width: 100%;
  background-color: #b7bcb4;
  margin-top: 20%;
  padding-top: 15%;
  display: flex;
}
.location-bottom-left {
  width: 50%;
  padding-left: 5%;
  padding-top: 6%;
}
.location-bottom-right {
  width: 50%;
  padding-left: 3%;
  padding-bottom: 8%;
  color: black;
}
.location-table-header {
  font-size: 65px;
}
.location-table-data {
  font-size: 30px;
  padding: 1%;
  font-weight: bold;
  width: 300px;
}
.textAlignVer {
  display: block;
  filter: flipv fliph;
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  transform: rotate(-90deg);
  position: relative;
  width: 20px;
  white-space: nowrap;
  font-size: 42px;
  color: #1e2f27;
  font-weight: bold;
  position: absolute;
  z-index: 1;
  margin-left: 5.8%;
  margin-top: -10%;
}
div.vertical-line {
  width: 4px;
  background-color: #1e2f27;
  height: 100%;
  float: left;
  margin-left: 6.2%;
  position: absolute;
  z-index: 1;
  margin-top: -6%;
}
</style>
