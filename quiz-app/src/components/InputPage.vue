<template>
  <div>
    <form @submit="(e) => onSubmit(e)">
      <input
        required
        type="text"
        :value="studentId"
        @change="(e) => onChangeStudentId(e)"
        placeholder="Enter your Student ID"
      />
      <input
        required
        type="text"
        :value="courseId"
        @change="(e) => onChangeCourseId(e)"
        placeholder="Enter Course ID"
      />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "InputPage",
  data() {
    return {
      studentId: "",
      courseId: "",
    };
  },
  methods: {
    onChangeStudentId(e) {
      this.studentId = e.target.value;
    },
    onChangeCourseId(e) {
      this.courseId = e.target.value;
    },
    onSubmit(e) {
      e.preventDefault();
      const payload = { studentId: this.studentId, courseId: this.courseId };
      this.$store.dispatch("getQuizzes", payload);
      router.push("/select-quiz");
    },
  },
};
</script>
