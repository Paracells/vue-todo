<template>
  <form className="bottom-panel d-flex" @submit.prevent="add">
    <input
      type="text"
      className="form-control new-todo-label"
      v-model="labelText"
      placeholder="What needs to be done?"
    />

    <button type="submit" className="btn btn-outline-secondary">
      Add Item
    </button>
  </form>
  <div v-if="emptyFiled" class="text-danger mt-1">
    The field cannot be empty
  </div>
</template>
<script>
import { mapActions } from "pinia";
import { useStore } from "../store";

export default {
  name: "TodoListItemAdd",
  data() {
    return {
      labelText: "",
      emptyFiled: false,
    };
  },
  methods: {
    ...mapActions(useStore, ["addNewTodo"]),
    add() {
      if (this.labelText) {
        this.emptyFiled = false;
        this.addNewTodo(this.labelText);
        this.labelText = "";
      } else {
        this.emptyFiled = true;
      }
    },
  },
  watch: {
    labelText(newValue) {
      if (newValue) {
        this.emptyFiled = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.bottom-panel {
  margin-top: 10px;
}

.bottom-panel .new-todo-label {
  width: auto;
  flex-grow: 1;
  margin-right: 3px;
}
</style>