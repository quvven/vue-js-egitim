import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import {router} from "./router"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: ""
    },
    mutations:{
        setToken(state, token){
            state.token = token
        },
        clearToken(state) {
            state.token = ""
        }
    },
    actions: {
        initAuth({ commit, dispatch}){
            let token = localStorage.getItem("token")
             if(token){
 
                 let expirationDate = localStorage.getItem("expirationDate")
                 let time = new Date().getTime()
 
                 if(time >= +expirationDate){
                     console.log("old token!!!")
                     dispatch("logout")
                 } else {
                     commit("setToken", token)
                     let timerSecond = +expirationDate - time
                     console.log(timerSecond)
                     dispatch("setTimeoutTimer", timerSecond)
                     router.push("/")
                 }
 
             } else {
                 router.push("/auth")
                 return false
             }
        },
        login({commit, dispatch, state}, authData) {
            let authLink = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key="
            if(authData.isUser){
                authLink = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key="
            }
            return axios.post(
                authLink + "AIzaSyCuNstf_AUUefpfZ4MYQNz755cM4mL6d4M",
                { email :authData.email, password : authData.password, returnSecureToken : true}
            ).then(response => {
                // console.log(response.data)
                commit("setToken", response.data.idToken)
                localStorage.setItem("token", response.data.idToken)

                localStorage.setItem("expirationDate", new Date().getTime() + +response.data.expiresIn * 1000)

                dispatch("isExpires", +response.data.expiresIn * 1000)
                // dispatch("isExpires", 1000)
            })
        },
        logout({commit, dispatch, state}, authData) {
            commit("clearToken")
            localStorage.removeItem("token")
            localStorage.removeItem("expirationDate")
            router.replace("/auth")

        },
        isExpires({dispatch}, expiresIn) {
            setTimeout(()=> {
                dispatch("logout")
            }, expiresIn)
        }
    },
    getters: {
        isAuth(state) {
            return state.token !== "" ? true: false;
        }
    }
})

export default store;
