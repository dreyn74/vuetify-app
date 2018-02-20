<template>
  <v-form v-model="valid" @submit.prevent="onSubmit" class="frm">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-text-field label="E-mail"
          v-model="email"
          :rules="emailRules"
          validate-on-blur
          required>
          <!-- @blur="setUser" -->
        </v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-text-field label="Password"
          v-model="password"
          :rules="passwordRules"
          :type="'password'"
          validate-on-blur
          required>
        </v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-text-field label="Confirm Password"
          v-model="confirmPassword"
          :rules="confirmRules"
          :type="'password'"
          validate-on-blur
          required>
        </v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row justify-center>
      <v-flex xs12 offset-xs3>
        <div class="text-xs-center">      
          <v-checkbox
            label="Accept the terms"
            v-model="terms"
            required>            
          </v-checkbox>

          <!--<v-dialog v-model="dialog" persistent max-width="290">
            <v-btn color="primary" dark slot="activator">Open Dialog</v-btn>
            <v-card>
              <v-card-title class="headline">Use Google's location service?</v-card-title>
              <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat @click.native="dialog = false">Disagree</v-btn>
                <v-btn color="green darken-1" flat @click.native="dialog = false">Agree</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>-->
        </div>          
      </v-flex>
    </v-layout>
<!--
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-btn color="primary" dark slot="activator">Open Dialog</v-btn>
        <v-card>
          <v-card-title class="headline">Use Google's location service?</v-card-title>
          <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click.native="dialog = false">Disagree</v-btn>
            <v-btn color="green darken-1" flat @click.native="dialog = false">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
-->
    <v-spacer></v-spacer>

    <v-layout row justify-center mt-5>
      <v-flex xs12>
        <div class="text-xs-center">      
          <v-btn 
            color="yellow darken-3"
            v-model="valid" 
            :disabled="!formIsValid"
            type="submit"> Submit </v-btn>
        </div>          
      </v-flex>      
    </v-layout>    
  </v-form>
</template>

<script>
  import config from "@/config/index"
  import router from '@/router'  

  export default 
  {
    data () {
      return {
        valid: false,
        email: '',
        password: '',
        confirmPassword: '',
        terms: false,
        emailRules: config.emailRules,
        passwordRules: config.passwordRules,
        confirmRules: config.confirmRules,
        dialog: false     
      }
    },
    computed: 
    {
      formIsValid() 
      {
        return this.email !== '' &&
               this.password !== '' &&
               this.confirmPassword !== '' && this.confirmPassword === this.password &&
               this.terms != false
      }
      //, getUser() {
      //  return this.$store.getters.user
      //}
    }, 
    methods: 
    {
      onSubmit () 
      {
        const formData = { user: this.email, email: this.email, password: this.password }

        this.$store.dispatch( 'authModule/FIREBASE_CREATE', formData )
        .then( () => 
        {
          router.replace( '/login' )                    
        })
        .then( () =>
        {
          console.log( this.$store.state )
        })  
        .catch( ( error ) => 
        {
          console.log( 'onSubmit(): ' + error.code + ' = ' +  error.message )
        })      
      }, 
      title() {
          this.$store.dispatch('CHANGE_APPLICATION_TITLE', 'Signup')
      },
      //setUser() {
      //  this.$store.dispatch('CHANGE_APPLICATION_USER', this.email)
      //},
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
    /* Mounted */
    mounted() 
    {
      this.title()
    }
  }
</script>

<style scoped>
  .frm { width: 50vw; }
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
</style>