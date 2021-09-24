<template>
  <header class="header">
    <h1>todos</h1>
    <BaseInput :value="todoInput" @input-todo="inputTodo" @add-todo="addTodo"/>
  </header>
</template>

<script>

import BaseInput from './BaseInput.vue'

export default {
  name: "Todo",
  components:{BaseInput},
  data(){
    return {
      todoInput: "",
    }
  },
  methods:{
    addTodo(){
      this.$emit('add-todo',this.todoInput);
      this.todoInput=""
    },
    inputTodo(todo){
      this.todoInput=todo;
    }
  }
}
</script>
