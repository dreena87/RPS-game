// Firebase initialize app
var config = {
    apiKey: "AIzaSyDqIe35tRN5QvjAO7k10GAYUmLLOXt8YjE",
    authDomain: "rock-paper-scissors-0525.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-0525.firebaseio.com",
    projectId: "rock-paper-scissors-0525",
    storageBucket: "rock-paper-scissors-0525.appspot.com",
    messagingSenderId: "139030332062"
  };
  firebase.initializeApp(config);

  // login Firebase authenticatin

  function submitCreateAccount() {
      var displayName = document.querySelector("#entry-displayname");
      var email = document.querySelector("#entry-email");
      var password = document.querySelector("#entry-password");
  }

