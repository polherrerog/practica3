import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/LandingView.vue";
import GameView from "@/views/GameView.vue";
import RankingView from "@/views/RankingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/juego',
      name: 'game',
      component: GameView
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: RankingView
    }
  ]
})