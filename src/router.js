import Vue from "vue";
import Router from "vue-router";
import Recommend from "./views/Recommend.vue";
import ListItem from "./components/ListItem.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/recommend"
    },
    {
      path: "/recommend",
      name: "recommend",
      component: Recommend,
      children: [
        {
          path: "list/:id",
          component: ListItem
        }
      ]
    }
  ]
});
