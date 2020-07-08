<template>
  <div class="container">
    <div class="commentary">
      <div
        class="commentary-level my-5"
      >
        {{ translation }}
      </div>
      <div class="commentary-text">
        <p>
          {{ descriptionScoreResult }}
        </p>
        <ul
          v-if="scoreResult === 'middle'"
          class="p-0 my-5"
        >
          <li class="my-3">
            <span>高 ——</span>
            <span>{{ descriptionData.description.high }}</span>
          </li>
          <li class="my-3">
            <span>低 ——</span>
            <span>{{ descriptionData.description.low }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="next-test">
      <div class="test-next-btn">
        <a
          v-if="count !== 4"
          href="#"
          @click="$emit('change',count+1)"
        >下一個：{{ descriptionNext }}</a>
        <router-link
          v-else
          href="#"
          class="renew-btn"
          to="/"
        >
          重新測驗
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: {
    count: {
      type: Number,
      required: true,
    },
    descriptionData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    descriptionNext() {
      return this.$store.state.result === undefined ? ""
        : this.$store.state.result.description[this.count + 1].name;
    },
    countData() {
      return this.$store.state.result === undefined
        ? 0 : this.$store.state.result.count[this.count];
    },
    degreeData() {
      return this.$store.state.result === undefined
        ? {} : this.$store.state.result.degree;
    },
    translation() {
      return this.scoreResult === "low" ? "低" : this.scoreResult === "middle" ? "中" : "高";
    },
    scoreResult() {
      return this.$store.state.result === undefined ? "" : this.degreeData.low >= this.countData ? "low" : this.degreeData.middle === this.countData ? "middle" : "high";
    },
    descriptionScoreResult() {
      return this.$store.state.result === undefined ? "" : this.$store.state.result.description[this.count].description[this.scoreResult];
    },
  },
};
</script>
