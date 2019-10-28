<template>
    <div class="todo" >
        <h4 style="display:block;">{{Name}}</h4>
        <div v-for="todo in allTodos" :key="todo.title" class="container">{{todo.title}}
           <button @click="deleteTodo(todo.id)">Submit</button>
        </div>
        
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {    
    data(){
        return{
            Name:'Todo',           
        }
    },
    methods:{
        ...mapActions(["fetchData","deleteTodo"])
    },
    computed: mapGetters(["allTodos"]),
    created()
    {
        this.fetchData()
    }
}
</script>
<style scoped>
.todo{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    
}
.container{
    
   background: coral; 
   color: white;
    padding: 3rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
    
    
}
i{
    color: #000;
}
</style>
