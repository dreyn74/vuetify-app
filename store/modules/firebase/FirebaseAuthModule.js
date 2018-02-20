import firebase from 'firebase'

export default  
{
  namespaced: true,
  state:
  {
    name: 'Firebase_AuthModule',
  },

  /***********************************************************************
   *                                Getters
  ***********************************************************************/
  getters:
  {
    getName: state => state.name
  },
  /***********************************************************************
   *                                Actions
  ***********************************************************************/
  actions:
  {
    /* Initial User Login Creation (email/password) */
    FIREBASE_CREATE( { commit }, user ) 
    {
      return new Promise( ( resolve, reject ) => {
        firebase.auth().createUserWithEmailAndPassword( user.email, user.password )
          .then( ( user ) => {
            console.log( user )
            //user.sendEmailVerification()
            resolve( user )
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    /* User Sign In */
    FIREBASE_SIGN_IN( { commit }, { email, password } ) 
    {
      return new Promise( ( resolve, reject ) => {
        firebase.auth().signInWithEmailAndPassword( email, password )
          .then( ( user ) => {
            resolve( user )
          })
          .catch( ( err ) => {
            reject( err )
          })
      })
    },
    /* User Sign Out */
    FIREBASE_SIGN_OUT( { commit } ) 
    {
      return new Promise( ( resolve, reject ) => {
        firebase.auth().signOut()
          .then( ( user ) => {
            resolve( user )
          })
          .catch( ( err ) => {
            reject( err )
          })
      })
    },
    FIREBASE_GoogleSignin( { commit } ) 
    {
      const provider = new firebase.auth.GoogleAuthProvider()
      
      firebase.auth().signInWithPopup( provider )
        .then( result => {
          console.log( result )
          // This gives you a Google Access Token. Use it to access the Google API.
          var token = result.credential.accessToken
          console.log( token )

          // The signed-in user info.
          var user = result.user
          console.log( user )

          this.$store.dispatch('SIGN_IN_USER', user)
          this.$router.push('/home')
        })
        .catch( error => {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          // The email of the user's account used.
          var email = error.email
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential

          console.log( errorCode, errorMessage, email, credential )
        })
    }
  }
}