import Vue from 'vue'
import Buefy from 'buefy'
var VueScrollTo = require('vue-scrollto')

Vue.use(Buefy)

Vue.use(VueScrollTo)
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: -200,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})