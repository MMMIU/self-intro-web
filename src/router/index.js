import Vue from 'vue'
import Router from 'vue-router'
import mainView from '../components/mainView.vue'
import aboutMe from '../components/aboutMe.vue'
import photos from '../components/photos.vue'
import thanks from '../components/thanks.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: mainView
    },
    {
      path: '/',
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
    }

  ]
})
