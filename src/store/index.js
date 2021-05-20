import { defineStore } from "pinia";
export const useStore = defineStore({
  id: "useStore",
  state: () => ({
    items: [
      { id: 1, label: "Drink Coffee", important: false, done: false },
      { id: 2, label: "Learn Vue", important: true, done: false },
      { id: 3, label: "Make Awesome App", important: false, done: false },
    ],
    selectFilter: "all",
    searchValue: "",
  }),
  getters: {
    getFilteredItems: (state) => {
      return state.items.filter((el) =>
        el.label.toLowerCase().includes(state.searchValue)
      );
    },
    getTodos: (state) => {
      switch (state.selectFilter) {
        case "all":
          return state.items;
        case "done":
          return state.items.filter((el) => el.done);
        case "active":
          return state.items.filter((el) => el.important || !el.done);
      }
    },
    getMoreTodo(state) {
      return state.items.length - this.getNeedTodo;
    },
    getNeedTodo: (state) =>
      state.items.reduce((start, next) => start + +next.done || 0, 0),
  },
  actions: {
    addNewTodo(todo) {
      let maxId = this.items.reduce(
        (start, next) => Math.max(start, next.id),
        0
      );
      const toDo = {
        id: ++maxId,
        label: todo,
        important: false,
        done: false,
      };
      this.items.push(toDo);
    },
    markAsDone(id) {
      const item = this.items.find((el) => el.id === id);
      item.done = !item.done;
    },
    markAsImportant(id) {
      const item = this.items.find((el) => el.id === id);
      item.important = !item.important;
    },
    deleteItem(id) {
      const item = this.items.findIndex((el) => el.id === id);
      this.items.splice(item, 1);
    },
  },
});
