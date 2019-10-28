<template>
  <div class="container">
      <addtodo/>
      <router-link to="/"></router-link>
     
    <router-view/>
  </div>
</template>
<script>

 import AddTodo from './components/addtodo.vue'
export default {
  components:{
    addtodo: AddTodo
  }
  
}
</script>





<style lang="scss">
</style>
