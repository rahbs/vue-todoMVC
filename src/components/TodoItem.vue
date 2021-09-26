<template>
  <section>
    <li v-for="todo in todos"
        class = "todo"
        :key="todo.id"
        :class="{ completed: todo.status, editing: todo == editedTodo}">
      <div class="view">
        <input class="toggle"
               type="checkbox"
               :checked="todo.status"
               @click="$emit('click-toggle-btn', todo.id)"
        />
        <label @dblclick=editTodo(todo)>{{todo.details}}</label>
        <button class="destroy" @click="$emit('click-delete-btn', todo.id)"></button>
      </div>
      <input class="edit"
             type="text"
             :value="todo.details"
             @input = "$emit('input-edit', todo, editedTodo)"
             @keyup.enter="$emit('update-todo', todo, editedTodo)"
             @blur="$emit('update-todo', todo, editedTodo)"
             @keyup.esc="$emit('cancel-edit',todo, editedTodo)"
      />

  <!--        v-todo-focus="todo == editedTodo"-->
    </li>
  </section>
</template>

<script>
export default {
  name: "TodoItem",
  data(){
    return{
      beforeEditCache:"",
      editedTodo:""
    }
  },
  props:{
    todos:Array,
  },
  methods:{
    editTodo(todo){ // 이부분을 밖으로 빼야할 것 같음
      this.beforeEditCache = todo.details;
      this.editedTodo = todo;
      console.log("dblclick");
    },
  }
}
</script>