<template>
  <section>
    <Header
      :description-desc="descriptionDesc"
      :description-data="descriptionData"
      :count="count"
      @change="change"
    />
    <Content
      :description-data="descriptionData"
      :description-desc="descriptionDesc"
      :count="count"
      @change="change"
    />
  </section>
</template>

<script>
import Header from "./components/Header";
import Content from "./components/Content";

export default {
  name: "Result",
  components: {
    Header,
    Content,
  },
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    descriptionData() {
      return this.$store.state.result === undefined
        ? [] : this.$store.state.result.description[this.count];
    },
    descriptionDesc() {
      return this.$store.state.result === undefined
        ? [] : this.$store.state.result.description[this.count].description.desc;
    },
  },
  beforeDestroy() {
    this.$unregisterModule(this.$store, ["result"]);
  },
  mounted() {
    if (!this.$store.state.result) {
      this.$router.push("/");
    }
  },
  methods: {
    change(index) {
      this.count = index;
    },
  },
};
</script>

<style  lang="scss" src="./style.scss"></style>
