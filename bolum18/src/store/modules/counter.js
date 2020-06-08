const state = {
    counter: 0,
}

const getters = {
    getDoubleCounter(state) {
        return state.counter * 2;
    },
    getStringCounter(state) {
        return state.counter + ". kez tıklandı";
    },
}

const mutations = {
    updateCounter(state, value) {
        state.counter += value;
    },
    
    increaseCounter(state) {
        state.counter += 1;
    },
    decreaseCounter(state) {
        state.counter -= 1;
    },
}

const actions = {
    increment({commit}) {
        commit("increaseCounter");
    },
    decrement({commit}) {
        commit("decreaseCounter");
    },
    incrementAsync({commit}) {
        setTimeout(()=>{
            commit("increaseCounter");
        }, 1000);
    },
    decrementAsync({commit}) {
        setTimeout(()=>{
            commit("decreaseCounter");
        }, 1000);
    },
    decrementAsyncTime({commit}, payload) {
        setTimeout(()=>{
            commit("decreaseCounter");
        }, payload.time);
    },
}


export default {
    state,
    getters,
    mutations,
    actions
}
