import { createStore } from "vuex";

export default createStore({
  state: {
    theme: "dark"
  },
  mutations: {
    changeTheme(state){
      if(state.theme==="dark"){
        state.theme="light"
      }
      else{
        state.theme="dark"
      }
    }
  },
  actions: {},
  modules: {},
});