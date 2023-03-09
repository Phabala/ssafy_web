import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Main from "../views/Main.vue";
import About from "../views/About.vue";
import Board from "../views/Board.vue";

Vue.use(VueRouter);

const routes = [
  // 라우터: 페이지에 route 경로에 맞는 views 내 파일을 보여줌
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/board",
    name: "board",
    component: Board,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
