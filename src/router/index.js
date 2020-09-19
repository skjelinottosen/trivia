import Vue from 'vue';
import VueRouter from 'vue-router';
// View components
import StartScreen from '../views/StartScreen'
import QuestionScreen from '../views/QuestionScreen';
import ResultScreen from '../views/ResultScreen';

Vue.use(VueRouter)

const routes = [
  {
    path: '/startscreen',
    name: 'StartScreen',
    component: StartScreen
  },
  {
    path: '/questions',
    name: 'questionScreen',
    component: QuestionScreen,
  },
  {
    path: '/results',
    name: 'resultScreen',
    component: ResultScreen,
  },
  {
    path: '/',
    redirect: StartScreen
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
