<template>
  <div class="container">
    <div class="app-header d-flex">
      <h1>Todo List</h1>
      <h2>{{ getMoreTodo }} more to do, {{ getNeedTodo }} done</h2>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useStore } from "../store";
export default {
  data() {
    return {
      toDo: 2,
      done: 1,
    };
  },
  computed: {
    ...mapState(useStore, ["getNeedTodo", "getMoreTodo"]),
  },
};
</script>
<style scoped>
.app-header {
  align-items: flex-end;
}

.app-header h1 {
  flex-grow: 1;
}

.app-header h2 {
  font-size: 1.2rem;
  color: grey;
}
</style>