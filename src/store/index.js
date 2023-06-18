import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {},
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    setTasks(state) {
      const newTasks = JSON.parse(localStorage.getItem("tasks"));
      state.tasks = [...newTasks];
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    editTask(state, id) {
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, disabled: !task.disabled } : task
      );
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
  actions: {},
  modules: {},
});
