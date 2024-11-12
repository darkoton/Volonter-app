import { createWebHashHistory, createRouter } from "vue-router";

import Home from "@pages/Home.vue";
import JoinLogin from "@pages/Login.vue";
import JoinRegister from "@pages/Register.vue";
import Shelters from "@pages/Shelters.vue";
import Payment from "@pages/Payment.vue";
import PaymentConfirm from "@pages/PaymentConfirm.vue";
import Profile from "@pages/Profile.vue";
import News from "@pages/News.vue";

const routes = [
  { path: "/", component: Home },
  {
    path: "/join",
    redirect: "/join/user",
    children: [
      {
        name: 'login',
        path: 'login',
        component: JoinLogin
      },
      {
        name: 'user',
        path: 'user',
        redirect: "/join/user/register",
        children: [
          {
            name: 'user-register',
            path: 'register',
            component: JoinRegister
          }
        ]
      },
      {
        name: 'volunteer',
        path: 'volunteer',
        redirect: "/join/volunteer/register",
        children: [
          {
            name: 'volunteer-register',
            path: 'register',
            component: JoinRegister
          }
        ]
      }
    ]
  },
  { path: "/shelters", component: Shelters },
  { path: "/payment", component: Payment },
  { path: "/payment-confirm", component: PaymentConfirm },
  { path: "/profile", component: Profile },
  { path: "/news", component: News },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
