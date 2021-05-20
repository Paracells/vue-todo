<template>
  <ul class="todo-list list-group">
    <li v-for="item in items" :key="item.id" class="list-group-item">
      <todo-list-item :todoListItem="item" />
    </li>
  </ul>
</template>
<script>
import TodoListItem from "./TodoListItem.vue";

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  name: "TodoList",
  components: { TodoListItem },
};
</script>

<style scoped>
.todo-list .list-group-item {
  padding: 0.25rem 0.75rem;
}
</style>