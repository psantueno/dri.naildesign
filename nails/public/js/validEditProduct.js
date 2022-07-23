window.onload = function () {

    let form = document.querySelector('.forms');
    console.log("conectado")

    let name = document.querySelector('#nombre');
    let descripcion = document.querySelector("#descripcion");
    let categoria = document.querySelector('#categoria');
    let cantidad = document.querySelector('#cantidad');
    let precio = document.querySelector('#precio');
    let descuento = document.querySelector('#descuento');

    let spanErrName = document.querySelector(".not-empty-name");
    let spanErrDescrip = document.querySelector(".not-empty-descripcion");
    let spanErrCategory = document.querySelector(".not-empty-categoria");
    let spanErrCantidad = document.querySelector(".not-empty-cantidad");
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
            spanErrName.innerText = "Debe escribir un nombre para el producto."
            spanErrName.style.display = "block";
            errors.push("name");

        }
        else if (name.value.length < 4) {
            name.classList.add("is-invalid");
            name.classList.add("alert-warning");
            name.classList.remove("is-valid");
            spanErrName.innerText = "El nombre debe tener al menos 4 caracteres."
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

    descripcion.addEventListener("blur", function () {

        if (descripcion.value == "") {
            descripcion.classList.add("is-invalid");
            descripcion.classList.add("alert-warning");
            descripcion.classList.remove("is-valid");
            spanErrDescrip.innerText = "Debe escribir una descripción para el producto."
            spanErrDescrip.style.display = "block";
            errors.push("description");

        }
        else if (descripcion.value.length < 70) {
            descripcion.classList.add("is-invalid");
            descripcion.classList.add("alert-warning");
            descripcion.classList.remove("is-valid");
            spanErrDescrip.innerText = "Detalle más información del producto."
            spanErrDescrip.style.display = "block";
            errors.push("description");
        }
        else {
            descripcion.classList.add("is-valid");
            descripcion.classList.remove("is-invalid");
            descripcion.classList.remove("alert-warning");
            spanErrDescrip.style.display = "none";
        }
    });

    categoria.addEventListener("blur", function () {

        if (categoria.value == "") {
            categoria.classList.add("is-invalid");
            categoria.classList.add("alert-warning");
            categoria.classList.remove("is-valid");
            spanCategory.innerText = "Debe elegir una categoría."
            spanErrCategory.style.display = "block";
            errors.push("category");

        }
        else {
            categoria.classList.add("is-valid");
            categoria.classList.remove("is-invalid");
            categoria.classList.remove("alert-warning");
            spanErrCategory.style.display = "none";
        }
    });

    cantidad.addEventListener("blur", function () {

        if (cantidad.value === "" ) {
            cantidad.classList.add("is-invalid");
            cantidad.classList.add("alert-warning");
            cantidad.classList.remove("is-valid");
            spanErrCantidad.innerText = "Debe escribir el stock del producto."
            spanErrCantidad.style.display = "block";
            errors.push("cantidad");

        }
        else if (cantidad.value === "0") {
            cantidad.classList.add("is-invalid");
            cantidad.classList.add("alert-warning");
            cantidad.classList.remove("is-valid");
            spanErrCantidad.innerText = "El stock debe ser mayor a cero."
            spanErrCantidad.style.display = "block";
            errors.push("cantidad");
        }
        else {
            cantidad.classList.add("is-valid");
            cantidad.classList.remove("is-invalid");
            cantidad.classList.remove("alert-warning");
            spanErrCantidad.style.display = "none";
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