// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBbTJaSegMtVIjTl_YyCfUxChtmMY9scSw",
    authDomain: "jcee-9e53b.firebaseapp.com",
    databaseURL: "https://jcee-9e53b-default-rtdb.firebaseio.com",
    projectId: "jcee-9e53b",
    storageBucket: "jcee-9e53b.appspot.com",
    messagingSenderId: "793414434925",
    appId: "1:793414434925:web:f223c3639436a33b98ff64"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  let telefono = document.querySelector(".telefono").value;
  
  console.log(name, email,telefono, message); 
  document.querySelector(".contact-form").reset();
  saveContactInfo(name, email,telefono, message);
  Swal.fire(
    'Exito!',
    'Tus datos fueron registrados!',
    'success'
  )



 
}

// Save infos to Firebase
function saveContactInfo(name, email,telefono, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    telefono: telefono,
    message: message,
  });
}
