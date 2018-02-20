<template>
  <v-form v-model="valid" @submit.prevent="onSubmit" class="frm">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-text-field label="E-mail"
          v-model="email"
          validate-on-blur
          required
          :rules="emailRules">
          <!-- @blur="setUser" -->
        </v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-text-field label="Password"
          v-model="password"
          :type="'password'"
          validate-on-blur
          required>
        </v-text-field>
      </v-flex>
    </v-layout>

     <v-spacer></v-spacer>

    <v-layout row justify-center mt-5>
      <v-flex xs12>
        <div class="text-xs-center">      
          <v-btn 
            color="yellow darken-3"
            v-model="valid" 
            :disabled="!formIsValid"
            type="submit"> Login </v-btn>
        </div>          
      </v-flex>
    </v-layout>

    <!--
    <v-layout row justify-center mt-5>
      <v-flex xs12>
        <div class="text-xs-center">
          <v-btn color="primary" dark slot="activator" @click="onGoogle">Google</v-btn>
        </div>
      </v-flex>
    </v-layout>
    -->
    <!--
    <v-layout row justify-center mt-5>
      <v-flex xs12>
        <div class="text-xs-center sm8">
          <router-link :to="'register'" nowrap>
           <span class="sm9">(Create Account)</span>
          </router-link>
        </div>
      </v-flex>
    </v-layout>
    -->
  </v-form>
</template>

<script>
  import config from "@/config"
  import store from "@/store"

  export default 
  {
    data() {
      return {        
        user: '',
        valid: '',
        email: '',
        password: '',
        emailRules: config.emailRules,
        googleSignInParams: {
          client_id: '306292777405-1r3pot81inr7rmon0gc5sphuhkq2173t.apps.googleusercontent.com'
        }
      }
    },
    methods: 
    {
      title() {
        this.$store.dispatch( 'CHANGE_APPLICATION_TITLE', "Login" )
      },
      //setUser() {
      //  this.$store.dispatch( 'CHANGE_APPLICATION_USER', this.email )
      //},
      onSubmit() 
      {
        this.$store.dispatch( 'authModule/FIREBASE_SIGN_IN', { email: this.email, password: this.password } )
        .then( ( res ) => 
        {          
          this.$store.dispatch( 'SIGN_IN_USER', res )
          this.$router.replace( '/home' )
        })
        .catch( ( error ) => 
        {
          console.log( 'onSubmit(): ' + error.code + ' = ' +  error.message )
        })     
      },
      onGoogle()
      {
        this.$store.dispatch( 'authModule/FIREBASE_GoogleSignin' )
      },
      onSignInSuccess (googleUser) {
        // `googleUser` is the GoogleUser object that represents the just-signed-in user.
        // See https://developers.google.com/identity/sign-in/web/reference#users
        const profile = googleUser.getBasicProfile() // etc etc
      },
      onSignInError (error) {
        // `error` contains any error occurred.
        console.log('OH NOES', error)
      }
    },
    computed: {
      formIsValid() {
        return this.email !== '' && this.password !== ''
      }
    },
    mounted()
    {
      this.title()
      //console.log( this.$store.state )      
    }
  }
</script>

<style scoped>
  .frm { 
    width: 50vw
  }
  .signup-form { 
    width: 500px;
    margin: 30px auto;
    padding: 20px;  
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }

  .submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #521751;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }

  .sm9 { font-size: 1-px !important; color:gray !important; }
  a { text-decoration:none }

  .g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>