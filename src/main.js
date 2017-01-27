import Vue from 'vue'
import 'framework7'
import Framework7Vue from 'framework7-vue'

import App from './App.vue'
import AboutPage from './pages/about.vue'
import ServicesPage from './pages/services.vue'
import LeftPage1 from './pages/left-page-1.vue'
import LeftPage2 from './pages/left-page-2.vue'

Vue.use(Framework7Vue)

new Vue({
  el: '#app',
  framework7: {
    root: '#app',
    animateNavBackIcon: true,
    routes: [
      {
        path: '/about/',
        component: AboutPage
      },
      {
        path: '/left-page-1/',
        component: LeftPage1
      },
      {
        path: '/left-page-2/',
        component: LeftPage2
      },
      {
        path: '/services/',
        component: ServicesPage
      }
    ]
  },
  render: h => h(App)
})
