// function visitRegister() {

//     let nombre = name.value;
//     let rut = rutNumber.value;
//     let telefono = phone.value;
//     let hora = datetime;
//     console.log(rut)
//         // Para obtener la fecha actual
//     Date.prototype.today = function() {
//         return ((this.getDate() < 10) ? "0" : "") + this.getDate() + "/" + (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1) + "/" + this.getFullYear();
//     }

//     // Para obtener la hora/min/sec actual
//     Date.prototype.timeNow = function() {
//         return ((this.getHours() < 10) ? "0" : "") + this.getHours() + ":" + ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes() + ":" + ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds();
//     }

//     var datetime = "LastSync: " + new Date().today() + " @ " + new Date().timeNow();

//     // const firebase = require("firebase");
//     // // Required for side-effects
//     // require("firebase/firestore");


//     db.collection("Visitantes").add({
//             Nombre: nombre,
//             Rut: rut,
//             Teléfono: telefono,
//             Hora: hora,
//         })
//         .then(function(docRef) {
//             console.log("Document written with ID: ", docRef.id);
//         })
//         .catch(function(error) {
//             console.error("Error adding document: ", error);
//         });

// }

$(document).ready(function() {
    $('select').formSelect();
});

validation = () => {
    let nombre = document.getElementById('name').value
    let rut = document.getElementById('rutNumber').value
    let telefono = document.getElementById('phone').value
    let destination = document.getElementById('destination').value
    let time = datetime.toLocaleString()
    if (nombre === '' || rut == '' || destination == '' || telefono == '') {
        // console.log('complete')
        // status.style.backgroundColor = '#f9dae3';
        // status.innerHTML = `<span class="status">Complete los cambios requeridos</span>`
    } else {
        // status.style.backgroundColor = '#c3e1c3';
        // status.innerHTML = `<span class="status">Agregado</span>`
        redirectFromRegister()
    }
};

function redirectToRegister() {
    location.href = "registro.html"
}