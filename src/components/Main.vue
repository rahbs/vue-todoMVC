<template>
  <section class="main" v-show="todos.length" v-cloak>
    <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        :checked="allCompletedFlag"
        @click="$emit('click-toggle-all-btn',$event.target.checked)"
    />
    <label for="toggle-all"></label>
    <ul class="todo-list">
      <TodoItem
          :todos="todos"
          @click-toggle-btn="toggle"
          @click-delete-btn="deleteTodoItem"
          @input-edit="inputEdit"
          @update-todo="updateTodoItem"
      />
    </ul>
  </section>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: 'Main',
  components:{TodoItem},
  props:{
    todos:Array,
    allCompletedFlag : Boolean,
  },
  data(){
    return {
      editInput: "",
    }
  },
  methods:{
    toggle(id){
      this.$emit('click-toggle-btn', id);
    },
    deleteTodoItem(id){
      this.$emit('click-delete-btn', id);
    },
    updateTodoItem(id){
      this.$emit('update-todo', id, this.editInput);
    },
    inputEdit(todo){
      this.editInput=todo;
    }
  }
}
</script>
