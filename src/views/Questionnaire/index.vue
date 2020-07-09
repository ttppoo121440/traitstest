<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6 p-0">
        <ProblemTitle
          :count="count"
        />
      </div>
      <div class="col-lg-6 p-0">
        <Options
          :count="count"
          :total.sync="total"
          @next="next"
        />
      </div>
    </div>
    <Dialog
      :is-write="isWrite"
      @close="close"
    />
  </div>
</template>

<script>
import ProblemTitle from "./components/ProblemTitle";
import Options from "./components/Options";
import Dialog from "./components/Dialog";

export default {
  name: "Questionnaire",
  components: {
    ProblemTitle,
    Options,
    Dialog,
  },
  data() {
    return {
      count: 0,
      total: 0,
      totalNumber: 0,
      isWrite: false,
    };
  },
  computed: {
    problemListLength() {
      return this.$store.state.problemList.list.length - 1;
    },
  },
  mounted() {
    if (!this.$store.state.problemList) {
      this.$router.push("/");
    }
  },
  beforeDestroy() {
    this.$unregisterModule(this.$store, ["problemList"]);
  },
  methods: {
    close(data) {
      this.isWrite = data;
    },
    isSelect() {
      if (this.total === 0) {
        this.isWrite = true;
      }
    },
    next() {
      this.isSelect();
      this.totalNumber += this.total;
      this.total = 0;

      this.range();
      this.setCount();
      this.guide();
    },
    setCount() {
      if (this.count % 2 === 0) {
        this.$store.commit("result/SET_COUNT", this.totalNumber);
        this.totalNumber = 0;
      }
    },
    guide() {
      if (this.count === this.problemListLength + 1) {
        this.$router.push("/result");
      }
    },
    range() {
      if (this.count !== this.problemListLength + 1 && this.isWrite === false) {
        this.count += 1;
      }
    },
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
