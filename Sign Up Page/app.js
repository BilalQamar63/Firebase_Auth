var firebaseConfig = {
  apiKey: "AIzaSyDC2FDAR8vbxKoXVbdTi5N_IX5pDf5AGps",
  authDomain: "fir-auth-e13f8.firebaseapp.com",
  projectId: "fir-auth-e13f8",
  storageBucket: "fir-auth-e13f8.appspot.com",
  messagingSenderId: "709277746070",
  appId: "1:709277746070:web:20bb5e7d17ac54d71513b7"
};

var app = firebase.initializeApp(firebaseConfig);

// ========E-MAIL & PASSWORD SIGN UP & SIGN IN PAGE=====


function SignUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
    firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
    // Email verification sent!
    // ...
  });
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
 
}


// ===================LOGIN ===================

function signIn(){
  var email = document.getElementById("loginEmail");
  var password = document.getElementById("loginPassword");

  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}

// ===============SIGN IN WITH GOOGLE==============

function signWithGoogle(){

  var provider = new firebase.auth.GoogleAuthProvider();

  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user)
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

// ===============SIGN IN WITH GITHUB =============

function signWithGithub(){
  var provider = new firebase.auth.GithubAuthProvider();

  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    console.log(user)
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}