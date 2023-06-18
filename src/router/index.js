import Vue from "vue";
import VueRouter from "vue-router";
import TaskPage from "../views/TaskPage.vue";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/tasks",
    name: "taskPage",
    component: TaskPage,
  },
  {
    path: "/",
    name: "homePage",
    component: HomePage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
