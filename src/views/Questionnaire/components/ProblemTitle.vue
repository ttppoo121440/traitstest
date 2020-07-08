<template>
  <div class="questionnaire">
    <div class="prev">
      <router-link
        class="prev-btn"
        to="/"
      />
      <div class="questionnaire-title">
        <div class="questionnaire-label">
          <h2 v-if="count !== 10">
            {{ problemTitle }}
            <span>Q</span>
          </h2>
        </div>
      </div>
      <div class="label-block">
        <div>
          <p>五大性格特質心理測驗</p>
          <p>Big Five personality traits test</p>
        </div>
      </div>
    </div>
  </div>
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
