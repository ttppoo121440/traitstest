<template>
  <div class="container-fluid p-0">
    <Banner />
    <div class="row m-0">
      <div class="col-xl-5 col-lg-12">
        <div class="title">
          <div class="label">
            <h1>五大性格特質 <br>心理測驗</h1>
            <span>Big Five personality <br>
              traits test</span>
          </div>
        </div>
      </div>
      <div class="col-xl-7 col-lg-12">
        <div class="play">
          <div class="content mr-3">
            <p>
              {{ description }}
            </p>
          </div>
          <router-link
            class="theme-btn"
            to="/questionnaire"
          >
            開始測驗
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import problemList from "@/storeModule/problemList";
import result from "@/storeModule/result";
import Banner from "./components/Banner";

export default {
  name: "Home",
  components: {
    Banner,
  },
  data() {
    return {
      description: "",
      api: "https://raw.githubusercontent.com/hexschool/js-training-task/master/api/BigFive.json",
    };
  },
  async mounted() {
    this.$registerModule(this.$store, { problemList, result });

    await axios.get(this.api).then(async (res) => {
      const keys = Object.keys(res.data.problemList);
      this.$store.commit("result/SET_TRAITS", keys);
      this.description = res.data.description || "";
      this.$store.commit("result/SET_DEGREE", res.data.degree);
      this.adapter(res);
    });
  },
  methods: {
    adapter(res) {
      Object.values(res.data.problemList).forEach((item) => {
        this.$store.commit("result/SET_DESCRIPTION", { name: item.name, description: item.description });
        item.problems.forEach((data) => {
          this.$store.commit("problemList/SET_TOPIC", {
            options: data.options,
            problem: data.problem,
          });
        });
      });
    },
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
