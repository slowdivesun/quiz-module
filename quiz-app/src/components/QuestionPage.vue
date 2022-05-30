<template>
  <div class="questionPageWrapper">
    <div class="timer">timer</div>

    <div v-if="$store.state.loadingQuiz">Loading</div>
    <div v-if="!$store.state.loadingQuiz">
      <div class="controls">
        <button
          class="controlButton"
          :disabled="currentQues === 0"
          @click="handlePrevious()"
        >
          Prev
        </button>
        <button
          class="controlButton"
          :disabled="currentQues === $store.state.selectedQuiz.length - 1"
          @click="handleNext()"
        >
          Next
        </button>
      </div>
      <QuestionItem
        @selected="handleSelect"
        :selectedOption="chosenArray[currentQues]"
        :question="$store.state.selectedQuiz[currentQues].question"
        :number="currentQues + 1"
        :options="$store.state.selectedQuiz[currentQues].options"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import QuestionItem from "./QuestionItem.vue";

export default {
  name: "QuestionPage",
  components: { QuestionItem },
  props: {
    test: Object,
  },
  data() {
    return {
      currentQues: 0,
      chosenArray: [],
    };
  },
  methods: {
    initializechosenArray() {
      for (let i = 0; i < this.$store.state.selectedQuiz.length; i++) {
        this.chosenArray.push(null);
      }
    },
    setOption(ind, opt) {
      this.chosenArray[ind] = opt;
    },
    handlePrevious() {
      this.currentQues = this.currentQues - 1;
    },
    handleNext() {
      this.currentQues = this.currentQues + 1;
    },
    handleSelect(value) {
      this.chosenArray[this.currentQues] = value;
      console.log(this.chosenArray);
    },
  },
  watch: {
    selectedQuiz: function () {
      this.initializechosenArray();
    },
  },
  computed: {
    ...mapGetters({
      selectedQuiz: "getSelectedQuiz",
    }),
  },
};
</script>

<style>
.questionPageWrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.controls {
  width: 100vw;
  display: flex;
  justify-content: flex-end;
}

.controlButton {
  border: 0;
  padding: 5px 10px;
  color: white;
  background-color: purple;
  cursor: pointer;
  margin: 3px;
}

.timer {
  height: 10vh;
  display: flex;
  align-items: center;
}
</style>
