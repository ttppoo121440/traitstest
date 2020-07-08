export default {
  namespaced: true,
  state: () => ({
    description: [],
    count: [],
    degree: {},
    traits: [],
  }),
  mutations: {
    SET_DESCRIPTION: (state, val) => {
      state.description.push(val);
    },
    SET_COUNT: (state, val) => {
      state.count.push(val);
    },
    SET_DEGREE: (state, val) => {
      state.degree = val;
    },
    SET_TRAITS: (state, val) => {
      state.traits = val;
    },
  },
};
