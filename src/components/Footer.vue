<template>
    <footer class="footer">
        <span class="todo-count">{{todoCount}}</span>
        <ul class="filters" @click="$emit('select-view-mode',$event.target.innerText)">
            <li><a href="#/all" :class="viewMode === 'All'?'selected':''">All</a></li>
            <li><a href="#/active" :class="viewMode === 'Active'?'selected':''">Active</a></li>
            <li><a href="#/completed" :class="viewMode === 'Completed'?'selected':''">Completed</a></li>
        </ul>
        <button class="clear-completed"
                v-show = "clearCompletedFlag"
                @click="$emit('click-clear-completed')"
                >Clear completed</button>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: {
      todoCount: String,
      viewMode: String,
      clearCompletedFlag: Boolean,
    }
}
</script>
