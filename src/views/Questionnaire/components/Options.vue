<template>
  <div>
    <div
      v-if="count !== 10"
      class="schedule"
    >
      {{ count+1 }}/{{ listLength }}
    </div>
    <div class="multiple-choice">
      <ul v-if="count !== 10">
        <li
          v-for="item of optionsData"
          :key="item.problem"
        >
          <input
            :id="item.description"
            v-model="totalValue"
            type="radio"
            :value="item.fraction"
            name="exampleRadios"
          >
          <label
            :for="item.description"
            class="p-4"
          >
            {{ item.description }}
          </label>
        </li>
      </ul>
    </div>
    <div class="questionnaire-next">
      <a
        to="/Result"
        class="next-btn text-white"
        href="#"
        @click="$emit('next')"
      >
        下一提
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Options",
  props: {
    count: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  computed: {
    totalValue: {
      get() {
        return this.total;
      },
      set(val) {
        this.$emit("update:total", val);
      },
    },
    listLength() {
      return this.$store.state.problemList === undefined
        ? 0 : this.$store.state.problemList.list.length;
    },
    optionsData() {
      return this.$store.state.problemList === undefined ? []
        : this.$store.state.problemList.list[this.count].options;
    },
  },
};
</script>
