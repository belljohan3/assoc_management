import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "../views/LoginForm.vue";
// import RegistrationForm from "../views/RegistrationForm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginForm,
    },
    {
      path: "/registration",
      name: "registration",
      // route level code-splitting
      // this generates a separate chunk (Registration.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RegistrationForm.vue"),
      // component: RegistrationForm,
    },
  ],
});

export default router;
