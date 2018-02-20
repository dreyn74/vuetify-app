module.exports = {
  emailRules: [
    v => !!v || "Email Address is required",
    v =>
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
      "Valid E-Mail Required"
  ],
  passwordRules: [
    v => (!!v && v.length > 7) || "8 Character Password is required"
  ],
  confirmRules: [v => (!!v && v.length > 7) || "Re-Enter Your Password"],
  firebaseConfig: {
    apiKey: "AIzaSyD9NgDJYCGQHn6h9bp83SnO5gVwCVykeU8",
    authDomain: "crackling-torch-8348.firebaseapp.com",
    databaseURL: "https://crackling-torch-8348.firebaseio.com",
    projectId: "crackling-torch-8348",
    storageBucket: "crackling-torch-8348.appspot.com",
    messagingSenderId: "657484236072"
  }
};
