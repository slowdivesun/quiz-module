import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../components/LandingPage";
import QuestionPage from "../components/QuestionPage";
import InputPage from "../components/InputPage";

const routes = [
  {
    path: "/",
    name: "Home",
    component: InputPage,
  },
  {
    path: "/select-quiz",
    name: "Select",
    component: LandingPage,
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: QuestionPage,
    params: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
