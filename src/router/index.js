import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '@/views/todo.vue'



Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Todo',
    component: Todo
  }

]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
