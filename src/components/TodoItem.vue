<template>
  <li class = "todo">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="status"
             @click="$emit('click-toggle-btn', id)" />
      <label>{{details}}</label>
      <button class="destroy" @click="$emit('click-delete-btn', id)"></button>
    </div>
    <input class="edit" type="text"
           @input = "$emit('input-edit',id,details)"
           @keyup.enter="$emit('update-todo',id)"
    />
<!--        v-model="todo.title"-->
<!--        v-todo-focus="todo == editedTodo"-->
<!--        @blur="doneEdit(todo)"-->
<!--        @keyup.enter="doneEdit(todo)"-->
<!--        @keyup.esc="cancelEdit(todo)"-->
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props:{
    id: Number,
    details : String,
    status : Boolean,
    editedDetails: String
  },

}
</script>