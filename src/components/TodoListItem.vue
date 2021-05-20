<template>
  <span
    class="todo-list-item"
    :class="todoClass"
    @click="markAsDone(todoListItem.id)"
  >
    <span className="todo-list-item-label">{{ todoListItem.label }}</span>

    <button
      type="button"
      className="btn btn-outline-success btn-sm float-end"
      @click.stop="markAsImportant(todoListItem.id)"
    >
      <i className="fa fa-exclamation"></i>
    </button>

    <button
      type="button"
      className="btn btn-outline-danger btn-sm float-end"
      @click.stop="deleteItem(todoListItem.id)"
    >
      <i className="fa fa-trash"></i>
    </button>
  </span>
</template>

<script>
import { mapActions } from "pinia";
import { useStore } from "../store";
export default {
  props: {
    todoListItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(useStore, ["markAsDone", "markAsImportant", "deleteItem"]),
  },
  computed: {
    todoClass() {
      return {
        important: this.todoListItem.important,
        done: this.todoListItem.done,
      };
    },
  },
};
</script>

<style scoped>
.todo-list-item {
  font-size: 1.25rem;
}

.todo-list-item button {
  width: 35px;
  margin: 3px;
}

.todo-list-item-label {
  margin-left: 1.25rem;
  line-height: 35px;
  cursor: pointer;
  user-select: none;
}

.todo-list-item.done .todo-list-item-label {
  text-decoration: line-through;
}

.todo-list-item.important .todo-list-item-label {
  font-weight: bold;
  color: steelblue;
}
</style>