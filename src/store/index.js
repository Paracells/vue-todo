import { defineStore } from "pinia";
export const useStore = defineStore({
  id: "useStore",
  state: () => ({
    todo: "",
    items: [
      { id: 1, label: "Drink Coffee", important: false, done: false },
      { id: 2, label: "Learn Vue", important: true, done: false },
      { id: 3, label: "Make Awesome App", important: false, done: false },
    ],
    sort: "",
  }),
  getters: {
    getTodo: (state) => state.todo,
    getTodos: (state) => state.items,
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
      console.log(maxId);
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
