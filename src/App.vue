<template>
  <div class="todo-app">
    <the-header />
    <the-search />
    <todo-list :items="getFilteredItems" class="mt-4" />
    <todo-list-item-add />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheSearch from "./components/TheSearch.vue";
import TodoList from "./components/TodoList.vue";
import TodoListItemAdd from "./components/TodoListItemAdd.vue";

import { mapState } from "pinia";
import { useStore } from "./store";
export default {
  components: { TheHeader, TheSearch, TodoList, TodoListItemAdd },
  data: () => ({}),
  computed: {
    ...mapState(useStore, ["getFilteredItems"]),
  },
};
</script>
<style scoped>
.todo-app {
  margin: 2rem auto 0 auto;
  max-width: 700px;
}
</style>