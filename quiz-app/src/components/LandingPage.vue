<template>
  <div class="landingPageWrapper">
    <div v-if="$store.state.loading">Loading</div>

    <div class="quizListWrapper" v-if="!$store.state.loading">
      <div v-for="quiz in $store.state.quizzes" :key="quiz.sectionNum">
        {{ quiz.sectionName }}
        <router-link to="/quiz">
          <button @click="() => onClick(quiz.sectionNum)">Take quiz</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import store from "../store";

export default {
  name: "InputPage",
  methods: {
    onClick(sectionNum) {
      const payload = { sectionNum, courseId: this.$store.state.courseId };
      this.$store.dispatch("getQuiz", payload);
    },
  },
};
</script>


<style scoped>
.landingPageWrapper {
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
}

.landingPageButton {
  padding: 20px;
  background-color: #6a2f85;
  color: white;
  font-weight: 600;
}
</style>