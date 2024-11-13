import { createWebHashHistory, createRouter } from "vue-router";
import { useUserStore } from "@stores/user.js";

import Home from "@pages/Home.vue";
import JoinLogin from "@pages/Login.vue";
import JoinRegister from "@pages/Register.vue";
import Shelters from "@pages/Shelters.vue";
import Payment from "@pages/Payment.vue";
import PaymentConfirm from "@pages/PaymentConfirm.vue";
import Profile from "@pages/Profile.vue";
import News from "@pages/News.vue";
import AdminNews from "@pages/AdminNews.vue";
import AdminNewsEditor from "@pages/AdminNewsEditor.vue";

function adminGuard(to, from, next) {
  const { authorized } = useUserStore()
  if (!authorized) {
    next({ name: 'login' })
  } else {
    next()
  }
}

const routes = [
  { name: "home", path: "/", component: Home },
  {
    name: "join",
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
  { name: "shelters", path: "/shelters", component: Shelters },
  { name: "payment", path: "/payment", component: Payment },
  { name: "payment-confirm", path: "/payment-confirm", component: PaymentConfirm },
  { name: "profile", path: "/profile", component: Profile },
  { name: "news", path: "/news", component: News },
  {
    name: "admin",
    path: "/admin",
    redirect: "/admin/news-list",
    beforeEnter: [adminGuard],
    children: [
      { name: "admin-news-list", path: "news-list", component: AdminNews },
      { name: "admin-news-create", path: "news-editor", component: AdminNewsEditor },
      { name: "admin-news-editor", path: "news-editor/:id", component: AdminNewsEditor }
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
