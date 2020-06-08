import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter';

import * as mutations from './mutations';
import * as getters from './getters';
import * as actions from './actions';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    
    getters,
    mutations,
    actions,

    modules: {
        counter
    }

    
    // state: {
    //     counter: 0,
    //     value: 0
    // },
    // getters: {
    //     getDoubleCounter(state) {
    //         return state.counter * 2;
    //     },
    //     getStringCounter(state) {
    //         return state.counter + ". kez tıklandı";
    //     },
    //     getValue(state) {
    //         return state.value;
    //     }
    // },
    // mutations: { // <--- sync working....
    //     updateCounter(state, value) {
    //         state.counter += value;
    //     },
        
    //     increaseCounter(state) {
    //         state.counter += 1;
    //     },
    //     decreaseCounter(state) {
    //         state.counter -= 1;
    //     },
    //     setValue(state, payload) {
    //         state.value = payload;
    //     }
    // },
    // actions: { // <--- async working....
    //     increment({commit}) {
    //         commit("increaseCounter");
    //     },
    //     decrement({commit}) {
    //         commit("decreaseCounter");
    //     },
    //     incrementAsync({commit}) {
    //         setTimeout(()=>{
    //             commit("increaseCounter");
    //         }, 1000);
    //     },
    //     decrementAsync({commit}) {
    //         setTimeout(()=>{
    //             commit("decreaseCounter");
    //         }, 1000);
    //     },
    //     decrementAsyncTime({commit}, payload) {
    //         setTimeout(()=>{
    //             commit("decreaseCounter");
    //         }, payload.time);
    //     },
    //     setValueAsync({commit}, payload) {
    //         commit("setValue", payload);
    //     }
    // }
})