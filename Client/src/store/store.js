import Vue from "vue";
import Vuex from 'vuex';


Vue.use(Vuex)

const store=new Vuex.Store({
    state(){
        return{
            loading:false,
            error:null,
            user:JSON.parse(localStorage.getItem('user')) || null
        }
    },
    mutations:{
        LOGIN_START(state){
            state.loading=true,
            state.user=null,
            state.error=null
        },
        LOGIN_SUCCESS(state,user){
            state.loading=true,
            state.user=user,
            state.error=null,
            localStorage.setItem('user',JSON.stringify(user))
        },
        LOGIN_FAILURE(state,error){
            state.loading=false,
            state.user=null,
            state.error=error
        },
        SET_LOGOUT(state){
            state.loading=false,
            state.user=null,
            state.error=null,
            localStorage.removeItem('user');
        },
    },
    getters: {
        currentUser: state => {
          return state.user
        }
      }
})
export default store
