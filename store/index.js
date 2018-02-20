import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import authModule from './modules/firebase/FirebaseAuthModule'

Vue.use( Vuex )

export default new Vuex.Store({  
  state: 
  {
    title: 'Application'    
    , user: ''
    , userid: ''
    , drawer: false
    , isAuthenticated: false
  }
  /***********************************************************************
  *                                Getters
  ***********************************************************************/
  , getters: 
  {
    getTitle: state => state.title,
    getUser: state => state.user,
    getAuth: state => state.isAuthenticated,
    getDrawer: state => state.drawer,
    isAuthenticated: state => state.isAuthenticated
  }
  /***********************************************************************
  *                                Actions
  ***********************************************************************/
  , actions:  // async tasks 
  {
    CHANGE_APPLICATION_TITLE( { commit, state }, title ) 
    {
      commit( 'SET_APPLICATION_TITLE', title )
    }
    , SIGN_IN_USER( { commit }, user ) 
    {
      commit ( 'SIGN_IN_OUT', { bool: true, email: user.email, uid: user.uid } )
    }
    , SIGN_OUT_USER( { commit } ) 
    {
      commit ( 'SIGN_IN_OUT', { bool: false, email: '', uid: '' } )
    }    
    , TOGGLE_DRAWER( { commit } ) /* Toggle Navigation Drawer */
    {
      commit( 'TOGGLE_DRAWER' )
    }   
  }
  /***********************************************************************
  *                                Mutations
  ***********************************************************************/
  , mutations: 
  {
    SET_APPLICATION_TITLE: ( state, payload ) => 
    {
        state.title = payload
    }
    , SET_APPLICATION_USER: ( state, payload) => 
    {
        state.user = payload
    }
    , SET_USER: ( state, payload ) => 
    {
        state.user = payload
    }
    , SET_USER_ID: ( state, payload ) => 
    {
        state.userid = payload
    }
    , SET_USER_AUTHENTICATION: ( state, bool ) => 
    {
        state.isAuthenticated = bool
    }
    , SET_USER_AUTH: ( state, bool ) =>
    {
        state.isAuthenticated = bool
    }
    , SIGN_IN_OUT: ( state, payload ) => 
    {
      state.isAuthenticated = payload.bool
      state.user = payload.email
      state.userid = payload.uid
    }
    , TOGGLE_DRAWER: ( state, bool ) => 
    {
      state.drawer = !state.drawer
    }
  }
  /***********************************************************************
  *                                Modules
  ***********************************************************************/
  , modules:
  {
    authModule: authModule
  }
  , plugins: [createPersistedState()]
})