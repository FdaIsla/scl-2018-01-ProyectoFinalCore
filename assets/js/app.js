function loginWithFirebase() {
    const emailValue = userEmail.value;
    const passwordValue = userPassword.value;


    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
            console.log("Usuario inició sesión con éxito");
            alert("¡Has iniciado sesión con éxito, bienvenid@!");
            redirectFromLogin()
        })
        .catch((error) => {
            console.log("Error de firebase > Código > " + error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            alert("Error de firebase > Código > " + error.code);
            console.log("Error de firebase > Mensaje > " + error.message); //error.message nos mostrará el mensaje de firebase del mismo error
            alert("Error de firebase > Mensaje > " + error.message);
        });
}
//  validación de registro
function isValidEmailFormat(userInput) {
    if (userInput.includes("@")) {
        if (substr(userInput.indexOf("@")).includes(".")) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function isValidPasswordFormat(userInput) {
    if (userInput.lenght <= 8 && isInteger(userInput)) {
        return true;
    } else {
        return false;
    }
}

function isInteger(userInput) {
    let inputIsANumber = parseInt(userInput) != NaN;
    let inputIsAnInteger = userInput % 1 === 0;
    return inputIsANumber && inputIsAnInteger;
}

// Usuarios con sesión activa
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
    } else {
        // No user is signed in.
    }
});


var user = firebase.auth().currentUser;

if (user) {
    // User is signed in.
} else {
    // No user is signed in.
}

// Obtener datos del usuario
var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;

}


function visitRegister() {

}

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// For todays date;
Date.prototype.today = function() {
    return ((this.getDate() < 10) ? "0" : "") + this.getDate() + "/" + (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1) + "/" + this.getFullYear();
}

// For the time now
Date.prototype.timeNow = function() {
    return ((this.getHours() < 10) ? "0" : "") + this.getHours() + ":" + ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes() + ":" + ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds();
}

var datetime = "LastSync: " + new Date().today() + " @ " + new Date().timeNow();

db.collection("Visitantes").add({
        Nombre: document.getElementById().value,
        Rut: document.getElementById().value,
        Teléfono: document.getElementById().value,
        Hora: datetime,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });