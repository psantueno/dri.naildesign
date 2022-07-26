window.onload = function () {

    let form = document.querySelector("#formRegister");

    let name = document.querySelector('#nombre');
    let lastName = document.querySelector("#apellido");
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    //let tyc = document.querySelector('#tyc')

    let spanErrName = document.querySelector(".not-empty-name");
    let spanErrLastName = document.querySelector(".not-empty-last-name");
    let spanErrEmail = document.querySelector(".not-empty-email");
    let spanErrPassword = document.querySelector(".not-empty-password");
    //let spanErrTyc = document.querySelector(".not-empty-tyc")
    
    let errorName = 0;
    let errorLast = 0;
    let errorEmail = 0;
    let errorPass = 0;
    //let errorTyC = 0;

    // VALIDACION DE EMAIL A TRAVES DE REGULAR EXPRESSION //
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    let errors = [];

    // FOCUS //
    document.querySelector('#nombre').focus();

    // EVENTOS BLUR //
//     tyc.addEventListener("blur", function () {

//         if (tyc.value == "") {
//             tyc.classList.add("is-invalid");
//             tyc.classList.add("alert-warning");
//             tyc.classList.remove("is-valid");
//             spanErrTyc.innerText = "1111Debe acptar los términos y condiciones."
//             spanErrTyc.style.display = "block";
//             errorTyc = errorTyc + 1;

//         }

//     else {
//         tyc.classList.add("is-valid");
//         tyc.classList.remove("is-invalid");
//         tyc.classList.remove("alert-warning");
//         spanErrTyc.style.display = "none";
//         errorTyc = 0;
//     }
// });

    name.addEventListener("blur", function () {

        if (name.value == "") {
            name.classList.add("is-invalid");
            name.classList.add("alert-warning");
            name.classList.remove("is-valid");
            spanErrName.innerText = "Debe escribir tu nombre."
            spanErrName.style.display = "block";
            errorName = errorName + 1;

        }
        else if (name.value.length < 3) {
            name.classList.add("is-invalid");
            name.classList.add("alert-warning");
            name.classList.remove("is-valid");
            spanErrName.innerText = "El nombre debe tener al menos 3 caracteres."
            spanErrName.style.display = "block";
            errorName = errorName + 1;
        }
        else {
            name.classList.add("is-valid");
            name.classList.remove("is-invalid");
            name.classList.remove("alert-warning");
            spanErrName.style.display = "none";
            errorName = 0;
        }
    });

    lastName.addEventListener("blur", function () {

        if (lastName.value === "") {
            lastName.classList.add("is-invalid");
            lastName.classList.add("alert-warning");
            lastName.classList.remove("is-valid");
            spanErrLastName.innerText = "Debe escribir tu apellido."
            spanErrLastName.style.display = "block";
            errorLast = errorLast + 1;

        }
        else if (lastName.value.length < 3) {
            lastName.classList.add("is-invalid");
            lastName.classList.add("alert-warning");
            lastName.classList.remove("is-valid");
            spanErrLastName.innerText = "El apellido debe tener al menos 3 caracteres."
            spanErrLastName.style.display = "block";
            errorLast = errorLast + 1;
        }
        else {
            lastName.classList.add("is-valid");
            lastName.classList.remove("is-invalid");
            lastName.classList.remove("alert-warning");
            spanErrLastName.style.display = "none";
            errorLast = 0;
        }
    });

    email.addEventListener("blur", function () {

        if (email.value == "") {
            email.classList.add("is-invalid");
            email.classList.add("alert-warning");
            email.classList.remove("is-valid");
            spanErrEmail.innerText = "Escriba su email."
            spanErrEmail.style.display = "block";
            errorEmail = errorEmail + 1;

        }

        if (validEmail.test(email.value)) {
            email.classList.add("is-valid");
            email.classList.remove("is-invalid");
            email.classList.remove("alert-warning");
            spanErrEmail.style.display = "none";
            errorEmail = 0;
        }
        else {
            email.classList.add("is-invalid");
            email.classList.add("alert-warning");
            email.classList.remove("is-valid");
            spanErrEmail.innerText = "Ingrese un email válido."
            spanErrEmail.style.display = "block";
            errorEmail = errorEmail + 1;
        }
    });

    password.addEventListener("blur", function () {

        if (password.value === "") {
            password.classList.add("is-invalid");
            password.classList.add("alert-warning");
            password.classList.remove("is-valid");
            spanErrPassword.innerText = "Debe escribir un password."
            spanErrPassword.style.display = "block";
            errorPass = errorPass + 1;

        }
        else if (password.value.length < 8) {
            password.classList.add("is-invalid");
            password.classList.add("alert-warning");
            password.classList.remove("is-valid");
            spanErrPassword.innerText = "El password debe tener mínimo 8 caracteres"
            spanErrPassword.style.display = "block";
            errorPass = errorPass + 1;
        }
        else {
            password.classList.add("is-valid");
            password.classList.remove("is-invalid");
            password.classList.remove("alert-warning");
            spanErrPassword.style.display = "none";
            errorPass = 0;
        }
    });

    // EVENTOS KEYUP //

    name.addEventListener("keyup", function () {

        if (name.value == "") {
            name.classList.add("is-invalid");
            name.classList.add("alert-warning");
            name.classList.remove("is-valid");
            spanErrName.innerText = "Debe escribir tu nombre."
            spanErrName.style.display = "block";
            errorName = errorName + 1;

        }
        else if (name.value.length < 3) {
            name.classList.add("is-invalid");
            name.classList.add("alert-warning");
            name.classList.remove("is-valid");
            spanErrName.innerText = "El nombre debe tener al menos 3 caracteres."
            spanErrName.style.display = "block";
            errorName = errorName + 1;
        }
        else {
            name.classList.add("is-valid");
            name.classList.remove("is-invalid");
            name.classList.remove("alert-warning");
            spanErrName.style.display = "none";
            errorName = 0;
        }
    });

    lastName.addEventListener("keyup", function () {

        if (lastName.value == "") {
            lastName.classList.add("is-invalid");
            lastName.classList.add("alert-warning");
            lastName.classList.remove("is-valid");
            spanErrLastName.innerText = "Debe escribir tu apellido."
            spanErrLastName.style.display = "block";
            errorLast = errorLast + 1;

        }
        else if (lastName.value.length < 3) {
            lastName.classList.add("is-invalid");
            lastName.classList.add("alert-warning");
            lastName.classList.remove("is-valid");
            spanErrLastName.innerText = "El apellido debe tener al menos 3 caracteres."
            spanErrLastName.style.display = "block";
            errorLast = errorLast + 1;
        }
        else {
            lastName.classList.add("is-valid");
            lastName.classList.remove("is-invalid");
            lastName.classList.remove("alert-warning");
            spanErrLastName.style.display = "none";
            errorLast = 0;
        }
    });

    email.addEventListener("keyup", function () {

        if (email.value == "") {
            email.classList.add("is-invalid");
            email.classList.add("alert-warning");
            email.classList.remove("is-valid");
            spanErrEmail.innerText = "Escriba su email."
            spanErrEmail.style.display = "block";
            errorEmail = errorEmail + 1;

        }

        if (validEmail.test(email.value)) {
            email.classList.add("is-valid");
            email.classList.remove("is-invalid");
            email.classList.remove("alert-warning");
            spanErrEmail.style.display = "none";
            errorEmail = 0;
        }
        else {
            email.classList.add("is-invalid");
            email.classList.add("alert-warning");
            email.classList.remove("is-valid");
            spanErrEmail.innerText = "Ingrese un email válido."
            spanErrEmail.style.display = "block";
            errorEmail = errorEmail + 1;
        }

    });

    password.addEventListener("keyup", function () {

        if (password.value === "") {
            password.classList.add("is-invalid");
            password.classList.add("alert-warning");
            password.classList.remove("is-valid");
            spanErrPassword.innerText = "Debe escribir un password."
            spanErrPassword.style.display = "block";
            errorPass = errorPass + 1;

        }
        else if (password.value.length < 8) {
            password.classList.add("is-invalid");
            password.classList.add("alert-warning");
            password.classList.remove("is-valid");
            spanErrPassword.innerText = "El password debe tener mínimo 8 caracteres"
            spanErrPassword.style.display = "block";
            errorPass = errorPass + 1;
        }
        else {
            password.classList.add("is-valid");
            password.classList.remove("is-invalid");
            password.classList.remove("alert-warning");
            spanErrPassword.style.display = "none";
            errorPass = 0;
        }
    });

    // EVENTO SUBMIT //

    form.addEventListener("submit", function (e) {

        let errors = [errorTyC, errorName, errorLast, errorEmail, errorPass];

        var contador = 0;

        for (let i = 0; errors.length > i; i++) {

            if (errors[i] !== 0) {
                contador = contador + 1;
            }
        }

        if (contador === 0) {
            alert("El usuario ha sido creado con éxito.")
        }

        else {
            console.log("no podes pasar")
            e.preventDefault();
        }
    });
}