<template>
  <input class="new-todo"
         autofocus
         autocomplete="off"
         placeholder="What needs to be done?"
         @input="$emit('input-todo', $event.target.value)"
         @keyup.enter="$emit('add-todo')"
         :value="value"/>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    value: {
      type: String,
      default: '',
    }
  },
}
</script>
