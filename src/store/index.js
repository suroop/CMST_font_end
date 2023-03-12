import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state ={
    flag:"zh",
};
const mutations ={
    setFlag (state, flag) {
        state.flag = flag
    },
};
export default new Vuex.Store({
    state,
    mutations
})
