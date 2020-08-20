import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import StudentsView from './components/StudentsView'
import StudentDetails from './components/StudentDetails'
import Home from './components/Home'

//importing vue router
import VueRouter from 'vue-router'

Vue.config.productionTip = false
//using vue router
Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/summary', component: StudentsView },
    { path: '/details', component: StudentDetails },
]
const router = new VueRouter({routes, mode: 'history'})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
