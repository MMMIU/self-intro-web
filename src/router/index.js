import Vue from 'vue'
import Router from 'vue-router'
import mainView from '../components/mainView.vue'
import aboutMe from '../components/aboutMe.vue'
import photos from '../components/photos.vue'
import thanks from '../components/thanks.vue'
import mobileMainView from '../components/mobile/mobileMainView.vue'
import mobileAboutMe from '../components/mobile/mobileAboutMe.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: mainView
    },
    {
      path: '/home',
      component: mainView
    },
    {
      path: '/aboutme',
      component: aboutMe
    },
    {
      path: '/photos',
      component: photos
    },
    {
      path: '/thanks',
      component: thanks
    },
    {
      path: '/mobile',
      component: mobileMainView
    },
    {
      path: '/mobileaboutme',
      component: mobileAboutMe
    }
  ]
})
