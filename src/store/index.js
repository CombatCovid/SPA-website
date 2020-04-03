import Vue from 'vue'
import Vuex from 'vuex'

// import { gql } from 'apollo-boost'

// Import client to vuex to pass data to actions
// import { defaultClient as apolloClient } from '../main'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    loading:false,
    language:"ES",
    repoList:[],
    selectedRepo:null,
    repoDocs:[],
    repoImages:[],
  },
  mutations:{
    // Change the state of language
  },
  actions:{
    // Change the 

  },
  getters:{
    // Dispatch repo name from card component
  }
})
