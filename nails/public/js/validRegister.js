window.onload = function () {

    let form = document.querySelector('.forms');
    console.log("conectado")

    let name = document.querySelector('#nombre');
    let lastName = document.querySelector("#apellido");
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let precio = document.querySelector('#precio');
    let descuento = document.querySelector('#descuento');

    let spanErrName = document.querySelector(".not-empty-name");
    let spanErrLastName = document.querySelector(".not-empty-last-name");
    let spanErrEmail = document.querySelector(".not-empty-email");
    let spanErrPassword = document.querySelector(".not-empty-password");
    let spanErrPrecio = document.querySelector(".not-empty-precio");
    let spanErrDescuento = document.querySelector(".not-empty-descuento");

    let errors = [];

    // FOCUS //
    document.querySelector('#nombre').focus();

    // EVENTOS BLUR //
    name.addEventListener("blur", function () {

        if (name.value == "") {
            name.classList.add("is-invalid");
            name.classList.add("alert-warning");
            name.classList.remove("is-valid");
            spanErrName.innerText = "Debe escribir tu nombre."
            spanErrName.style.display = "block";
            errors.push("name");

        }
        else if (name.value.length < 3) {
            name.classList.add("is-invalid");
            name.classList.add("alert-warning");
            name.classList.remove("is-valid");
            spanErrName.innerText = "El nombre debe tener al menos 3 caracteres."
            spanErrName.style.display = "block";
            errors.push("name");
        }
        else {
            name.classList.add("is-valid");
            name.classList.remove("is-invalid");
            name.classList.remove("alert-warning");
            spanErrName.style.display = "none";
        }
    });

    lastName.addEventListener("blur", function () {

        if (lastName.value == "") {
            lastName.classList.add("is-invalid");
            lastName.classList.add("alert-warning");
            lastName.classList.remove("is-valid");
            spanErrLastName.innerText = "Debe escribir tu apellido."
            spanErrLastName.style.display = "block";
            errors.push("lastName");

        }
        else if (lastName.value.length < 3) {
            lastName.classList.add("is-invalid");
            lastName.classList.add("alert-warning");
            lastName.classList.remove("is-valid");
            spanErrLastName.innerText = "El apellido debe tener al menos 3 caracteres."
            spanErrLastName.style.display = "block";
            errors.push("lastName");
        }
        else {
            lastName.classList.add("is-valid");
            lastName.classList.remove("is-invalid");
            lastName.classList.remove("alert-warning");
            spanErrLastName.style.display = "none";
        }
    });

    email.addEventListener("blur", function () {

        if (email.value == "") {
            email.classList.add("is-invalid");
            email.classList.add("alert-warning");
            email.classList.remove("is-valid");
            spanErrEmail.innerText = "Debe escribir tu email."
            spanErrEmail.style.display = "block";
            errors.push("email");

        }
        else if (email.value.indexOf("@", 0) != 1) {
            email.classList.add("is-invalid");
            email.classList.add("alert-warning");
            email.classList.remove("is-valid");
            spanErrEmail.innerText = "Debe ser un email válido."
            spanErrEmail.style.display = "block";
            errors.push("email");

        }
        else if (email.value.indexOf(".", 0) < 0) {
            email.classList.add("is-invalid");
            email.classList.add("alert-warning");
            email.classList.remove("is-valid");
            spanErrEmail.innerText = "Debe ser un email válido."
            spanErrEmail.style.display = "block";
            errors.push("email");

        }
        else {
            email.classList.add("is-valid");
            email.classList.remove("is-invalid");
            email.classList.remove("alert-warning");
            spanErrEmail.style.display = "none";
        }
    });

    password.addEventListener("blur", function () {

        if (password.value === "" ) {
            password.classList.add("is-invalid");
            password.classList.add("alert-warning");
            password.classList.remove("is-valid");
            spanErrPassword.innerText = "Debe escribir un password."
            spanErrPassword.style.display = "block";
            errors.push("password");

        }
        else if (password.value.length < 8) {
            password.classList.add("is-invalid");
            password.classList.add("alert-warning");
            password.classList.remove("is-valid");
            spanErrPassword.innerText = "El password debe tener mínimo 8 caracteres"
            spanErrPassword.style.display = "block";
            errors.push("cantidad");
        }
        else {
            password.classList.add("is-valid");
            password.classList.remove("is-invalid");
            password.classList.remove("alert-warning");
            spanErrPassword.style.display = "none";
        }
    });

    precio.addEventListener("blur", function () {

        if (precio.value === "" ) {
            precio.classList.add("is-invalid");
            precio.classList.add("alert-warning");
            precio.classList.remove("is-valid");
            spanErrPrecio.innerText = "Debe escribir el precio del producto."
            spanErrPrecio.style.display = "block";
            errors.push("precio");

        }
        else if (precio.value === "0") {
            precio.classList.add("is-invalid");
            precio.classList.add("alert-warning");
            precio.classList.remove("is-valid");
            spanErrPrecio.innerText = "El precio debe ser mayor a cero."
            spanErrPrecio.style.display = "block";
            errors.push("precio");
        }
        else {
            precio.classList.add("is-valid");
            precio.classList.remove("is-invalid");
            precio.classList.remove("alert-warning");
            spanErrPrecio.style.display = "none";
        }
    });

    descuento.addEventListener("blur", function () {

        if (descuento.value === "" ) {
            descuento.classList.add("is-invalid");
            descuento.classList.add("alert-warning");
            descuento.classList.remove("is-valid");
            spanErrDescuento.innerText = "Si el producto no tiene descuento, escriba 0.";
            spanErrDescuento.style.display = "block";
            errors.push("discount");

        }
        else {
            descuento.classList.add("is-valid");
            descuento.classList.remove("is-invalid");
            descuento.classList.remove("alert-warning");
            spanErrDescuento.style.display = "none";
        }
    });

    // EVENTO SUBMIT //

    form.addEventListener("submit", function (e) {

        if (errors.length > 0) {
            e.preventDefault();
        }

        alert("El producto ha sido creado con éxito.")
    })

}