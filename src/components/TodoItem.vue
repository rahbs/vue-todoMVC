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
        <label @dblclick="editTodo(todo)">{{todo.details}}</label>
        <button class="destroy" @click="$emit('click-delete-btn', todo.id)"></button>
      </div>
      <input class="edit"
             type="text"
             :value="todo.details"
             @input = "$emit('input-edit',$event.target.value)"
             @keyup.enter="doneEdit(todo.id)"
             @blur="$emit('update-todo', todo.id)"
      />
    </li>
  </section>
</template>

<script>
export default {
  name: "TodoItem",
  data(){
    return{
      editedTodo:{},
    }
  },
  props:{
    todos:Array,
  },
  methods:{
    editTodo(todo){
      this.editedTodo = todo;
    },
    doneEdit(id){
      this.$emit('update-todo', id);
      if (!this.editedTodo) {
        return;
      }
      this.editedTodo = null;
    }
  }
}
</script>