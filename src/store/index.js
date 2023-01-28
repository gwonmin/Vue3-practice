import { createStore } from "vuex";

export default createStore({
  state: {
    tableData: [
      {
        date: "2016-05-01",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
      },
    ],
    modal: {
      date: "",
      name: "",
      state: "",
      city: "",
      address: "",
      zip: "",
    },
  },
  getters: {},
  mutations: {
    setTableData(state, value) {
      state.tableData.push(value);
    },
    setModal(state, value) {
      state.modal = value;
    },
  },
  actions: {
    addTableData({ commit }, form) {
      commit("setTableData", JSON.parse(JSON.stringify(form))); //JSON.parse(JSON.stringify(form)) => 깊은 복사
    },
    clearModal({ commit }) {
      commit("setModal", {
        date: "",
        name: "",
        state: "",
        city: "",
        address: "",
        zip: "",
      });
    },
  },
  modules: {},
});
