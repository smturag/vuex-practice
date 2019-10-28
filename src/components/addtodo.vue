<template>
    <div class="addTodo">
        <form @submit="onSubmit">
            <input type="text" v-model="title" placeholder="Add something is there">
            <button>Submit </button>
        </form>

    </div>
</template>

<script>

import {mapActions} from 'vuex'
export default {
    data(){
        return{
            title:''
        }
    },
    methods:{
        ...mapActions(["addTodo"]),
        onSubmit(e){
            e.preventDefault();
            this.addTodo(this.title);


        }
    }

}
</script>

<style>

</style>
