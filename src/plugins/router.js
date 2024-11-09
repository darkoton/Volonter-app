import { createWebHistory, createRouter } from "vue-router";

import Home from "@pages/Home.vue";
import Join from "@pages/Join.vue";
import Shelters from "@pages/Shelters.vue";
import Payment from "@pages/Payment.vue";
import PaymentConfirm from "@pages/PaymentConfirm.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/join", component: Join },
  { path: "/shelters", component: Shelters },
  { path: "/payment", component: Payment },
  { path: "/payment-confirm", component: PaymentConfirm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
