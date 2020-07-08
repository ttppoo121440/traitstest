<template>
  <div class="container-fluid p-0 bg-pic">
    <div class="container">
      <header class="header d-flex justify-content-between">
        <div class="logo p-3">
          <a
            href="#"
            class="text-dark"
          >
            <p class="m-0">
              五大性格特質心理測驗
            </p>
            <p>Big Five personality traits test</p>
          </a>
        </div>
        <div class="menu">
          <ul class="d-flex">
            <li
              v-for="(item, index) of descriptionNav"
              :key="item.name"
              class="p-3"
            >
              <a
                href="#"
                :class="{ active: count === index }"
                @click="$emit('change',index)"
              >{{
                item.name
              }}</a>
            </li>
          </ul>
        </div>
      </header>
      <div class="introduction d-flex justify-content-between">
        <div class="introduction-title">
          <h2>{{ descriptionData.name }}</h2>
          <span>{{ traitsData }}</span>
        </div>
        <div class="introduction-content">
          <p>
            {{ descriptionDesc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    descriptionDesc: {
      type: String,
      required: true,
    },
    descriptionData: {
      type: Object,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  computed: {
    descriptionNav() {
      return this.$store.state.result === undefined
        ? [] : this.$store.state.result.description;
    },
    traitsData() {
      return this.$store.state.result === undefined
        ? [] : this.$store.state.result.traits[this.count];
    },
  },
};
</script>
