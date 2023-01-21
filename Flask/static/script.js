  // Initialize Firebase. For security reasons, the firebaseConfig is not public.
  var firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "PROJECT_ID.firebaseapp.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
  };
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the form element
  var form = document.getElementById('login-form');

  // Handle form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the email and password values from the form
    var email = form.elements.email.value;
    var password = form.elements.password.value;

    // The key is not added in the code for security reasons.
    const authURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key='

    const xhr = new XMLHttpRequest();
    xhr.open('POST', authURL);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
      if (xhr.status === 200) {
        // Sign in successful, do something with the response

        // The url for the admin panel depends on the solution: local grafana server or GrafanaCloud.
        const adminPanel = ''

        window.open(adminPanel);
      } else {
        // Sign in failed, handle the error
        var mailbox = document.getElementById("email")
        var pwdbox = document.getElementById("password");
        mailbox.style.border = "2px solid red";
        pwdbox.style.border = "2px solid red";
      }
    };
    xhr.send(JSON.stringify({
     email: email,
      password: password,
      eturnSecureToken: true
    }));
  });