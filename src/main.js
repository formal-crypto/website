/* eslint-disable new-cap */
/* eslint-disable prettier-vue/prettier */
import Vue from 'vue'
import App from './App.vue'
import Notifications from 'vue-notification'
import router from '@/router'
import VueMeta from 'vue-meta'
import Bowser from 'bowser'
import loader from "vue-ui-preloader";
import smoothscroll from 'smoothscroll-polyfill';
import Helpers from './utils/helpers.js'

import './assets/sass/app.scss'

// kick off the polyfill!
Vue.use(loader);
smoothscroll.polyfill();
Vue.use(Helpers)
Vue.use(Helpers)
Vue.use(Notifications)
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})
Vue.config.productionTip = false

window.appVue = new Vue({
  data() {
    return {
      windowTop: 0,
      width: null,
      height: null,
      desctopMinBreakpoint: 1500,
      tabletBreakpoint: 1200,
      tabletSmallBreakpoint: 1024,
      mobileBreakpoint: 768,
      bowser: null,
    }
  },
  computed: {
    isDesctopMin() {
      return this.width <= this.desctopMinBreakpoint
    },
    isTablet() {
      return this.width <= this.tabletBreakpoint
    },
    isSmallTablet() {
      return this.width <= this.tabletSmallBreakpoint
    },
    isMobile() {
      return this.width <= this.mobileBreakpoint
    },
  },
  watch: {},
  async created() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.bowser = Bowser.parse(window.navigator.userAgent)
  },
  mounted() {
    this.addListeners()
  },
  methods: {
    addListeners() {
      window.addEventListener('scroll', this.onScroll)
      window.addEventListener('resize', this.onResize)
    },
    onScroll(e) {
      this.windowTop = window.pageYOffset
    },
    onResize(state) {
      this.width = window.innerWidth
      this.height = window.innerHeight
      document.body.classList.remove('scroll-off')
    },
    async goTo(link) {
      if (!this.$scrollTo(link)) {
        try {
          await this.$router.push({
            path: '/'
          })
        } catch (error) {}
        setTimeout(() => {
          this.$scrollTo(link)
        }, 500)
      }
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')
