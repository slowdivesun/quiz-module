import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../components/LandingPage";
import QuestionPage from "../components/QuestionPage";
import InputPage from "../components/InputPage";
import store from "../store";

const beforeSelectQuiz = (to, from, next) => {
  if (store.state.courseId === null || store.state.studentId === null) {
    next({ name: "Home" });
  } else {
    next();
  }
};

const beforeQuiz = (to, from, next) => {
  if (
    store.state.courseId === null ||
    store.state.studentId === null ||
    store.state.selectedQuiz === null
  ) {
    next({ name: "Home" });
  } else {
    next();
  }
};

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
    beforeEnter: beforeSelectQuiz,
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: QuestionPage,
    params: true,
    beforeEnter: beforeQuiz,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
