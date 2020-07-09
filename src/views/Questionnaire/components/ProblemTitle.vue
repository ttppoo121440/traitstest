<template>
  <section class="questionnaire d-flex flex-column justify-content-between">
    <div class="prev">
      <router-link
        class="prev-btn"
        to="/"
      />
    </div>
    <div class="questionnaire-title">
      <div class="questionnaire-label">
        <h2 v-if="count !== 10">
          {{ problemTitle }}
          <span>Q</span>
        </h2>
      </div>
    </div>
    <div class="label-block pl-5">
      <p>五大性格特質心理測驗</p>
      <p>Big Five personality traits test</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProblemTitle",
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
  computed: {
    problemTitle() {
      return this.$store.state.problemList === undefined
        ? "" : this.$store.state.problemList.list[this.count].problem;
    },
  },
};
</script>
