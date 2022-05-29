import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    studentId: null,
    courseId: null,
    quizzes: [],
    selectedQuiz: [],
    loading: false,
    loadingQuiz: false,
  },
  mutations: {
    UPDATE_STUDENT_ID(state, payload) {
      state.studentId = payload;
    },
    UPDATE_COURSE_ID(state, payload) {
      state.courseId = payload;
    },
    UPDATE_QUIZZES(state, payload) {
      state.quizzes = payload;
    },
    UPDATE_LOADING(state, payload) {
      state.loading = payload;
    },
    UPDATE_SELECTED_QUIZ(state, payload) {
      state.selectedQuiz = payload;
    },
    UPDATE_LOADING_QUIZ(state, payload) {
      state.loadingQuiz = payload;
    },
  },
  actions: {
    getStudentId(context, payload) {
      const { studentId } = payload;
      context.commit("UPDATE_STUDENT_ID", studentId);
    },
    getCourseId(context, payload) {
      const { courseId } = payload;
      context.commit("UPDATE_STUDENT_ID", courseId);
    },
    async getQuizzes(context, payload) {
      const { studentId, courseId } = payload;
      context.commit("UPDATE_LOADING", true);
      context.commit("UPDATE_COURSE_ID", courseId);
      context.commit("UPDATE_STUDENT_ID", studentId);
      try {
        const res = await axios.get(`http://localhost:3004/quiz/${courseId}`);
        context.commit("UPDATE_QUIZZES", res.data);
        context.commit("UPDATE_LOADING", false);
      } catch (err) {
        console.log(err);
      }
    },
    async getQuiz(context, payload) {
      context.commit("UPDATE_LOADING_QUIZ", true);
      try {
        const res = await axios.get(
          `http://localhost:3004/quiz/${payload.courseId}/${payload.sectionNum}`
        );
        context.commit("UPDATE_SELECTED_QUIZ", res.data);
        context.commit("UPDATE_LOADING_QUIZ", false);
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    getSelectedQuiz: (state) => {
      return state.selectedQuiz;
    },
  },
});
