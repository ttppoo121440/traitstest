import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/questionnaire",
    name: "Questionnaire",
    component: () => import(/* webpackChunkName: "Questionnaire" */ "@/views/Questionnaire"),
  },
  {
    path: "/result",
    name: "Result",
    component: () => import(/* webpackChunkName: "Result" */ "@/views/Result"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
