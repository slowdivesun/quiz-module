<template>
  <div class="questionItemWrapper">
    <div class="questionContainer">
      <h1>{{ question }}</h1>
    </div>
    <div class="optionsContainer">
      <div class="optionsWrapper">
        <button
          v-for="(option, index) in options"
          v-bind:class="{
            selectedOption: selectedOption === index,
            option: true,
          }"
          :key="option"
          @click="selectOption(index)"
        >
          {{ option.statement }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionItem",
  props: {
    number: Number,
    question: String,
    options: Array,
    selectedOption: Number,
  },
  data() {
    return {
      optionChosen: Number,
    };
  },
  methods: {
    selectOption(index) {
      this.optionChosen = index;
      this.$emit("selected", this.optionChosen);
    },
  },
};
</script>

<style scoped>
.option {
  border: 0;
  padding: 10px 20px;
  min-width: 35vw;
  margin: 1px;
  cursor: pointer;
}

.option:hover {
  background-color: rgb(234, 166, 234);
}

.optionsContainer {
  display: flex;
  flex-direction: row;
  height: 20vh;
  flex-wrap: wrap;
  align-items: center;
  width: 100vw;
  justify-content: center;
  align-content: flex-start;
}

.optionsWrapper {
}

.selectedOption {
  background-color: rgb(196, 118, 196);
  /* border: 5px solid purple; */
}

.questionContainer {
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>