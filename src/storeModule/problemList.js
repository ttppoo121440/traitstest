export default {
  namespaced: true,
  state: () => ({
    list: [],
  }),
  mutations: {
    SET_TOPIC: (state, val) => {
      state.list.push(val);
    },
  },
};
