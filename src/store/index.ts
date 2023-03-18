import { computed, reactive } from "vue";
import * as Request from '@/services/Login'
import { email } from "@vuelidate/validators";

const state = reactive({
    email: '',
    password: '',
    name: '',
    error: ''
})

const getter = reactive({
    isLoggedIn: computed(() => state.email != '')
})

const action = {
    async getUser(name: string, email: string, password:string){
        const user = await Request.getUser(name, email, password)
        state.name = user.name
        state.email = user.email
    },

    async login(email: string, password: string){
        const user = await Request.login(email, password)
        if(user == null){
            state.error = "Cannot find user"
            return false
        }
        state.name = user.name
        state.email = user.email
        state.error = ''

        return true
    },
   async logout(){
    state.name
    state.email
   }
};

export default {state, getter, ...action}

// import Vue from 'vue';
// import Vuex, { StoreOptions } from 'vuex';
// import { RootData } from './type';

// const store: StoreOptions<RootData> = {
//     state: {
//         Hellomessage: 'this is hello stage'
//     },
//     module
// };

// export default new Vuex.Store<RootData>(store)