window.onload = function () {

    let form = document.querySelector('.forms');

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

    let errorName = 0;
    let errorDescript = 0;
    let errorCateg = 0;
    let errorCantid = 0;
    let errorPrice = 0;
    let errorDisc = 0;


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
            errorName = errorName + 1;
            console.log(errorName)

        }
        else if (name.value.length < 4) {
            name.classList.add("is-invalid");
            name.classList.add("alert-warning");
            name.classList.remove("is-valid");
            spanErrName.innerText = "El nombre debe tener al menos 4 caracteres."
            spanErrName.style.display = "block";
            errorName = errorName + 1;
            console.log(errorName)
        }
        else {
            name.classList.add("is-valid");
            name.classList.remove("is-invalid");
            name.classList.remove("alert-warning");
            spanErrName.style.display = "none";
            errorName = 0;
        }
        console.log(errorName)
    });

    descripcion.addEventListener("blur", function () {

        if (descripcion.value == "") {
            descripcion.classList.add("is-invalid");
            descripcion.classList.add("alert-warning");
            descripcion.classList.remove("is-valid");
            spanErrDescrip.innerText = "Debe escribir una descripción para el producto."
            spanErrDescrip.style.display = "block";
            errorDescript = errorDescript + 1;

        }
        else if (descripcion.value.length < 70) {
            descripcion.classList.add("is-invalid");
            descripcion.classList.add("alert-warning");
            descripcion.classList.remove("is-valid");
            spanErrDescrip.innerText = "Detalle más información del producto."
            spanErrDescrip.style.display = "block";
            errorDescript = errorDescript + 1;
        }
        else {
            descripcion.classList.add("is-valid");
            descripcion.classList.remove("is-invalid");
            descripcion.classList.remove("alert-warning");
            spanErrDescrip.style.display = "none";
            errorDescript = 0;
        }
    });

    categoria.addEventListener("blur", function () {

        if (categoria.value == "") {
            categoria.classList.add("is-invalid");
            categoria.classList.add("alert-warning");
            categoria.classList.remove("is-valid");
            spanErrCategory.innerText = "Debe elegir una categoría."
            spanErrCategory.style.display = "block";
            errorCateg = errorCateg + 1;

        }
        else {
            categoria.classList.add("is-valid");
            categoria.classList.remove("is-invalid");
            categoria.classList.remove("alert-warning");
            spanErrCategory.style.display = "none";
            errorCateg = 0;
        }
    });

    cantidad.addEventListener("blur", function () {

        if (cantidad.value === "") {
            cantidad.classList.add("is-invalid");
            cantidad.classList.add("alert-warning");
            cantidad.classList.remove("is-valid");
            spanErrCantidad.innerText = "Debe escribir el stock del producto."
            spanErrCantidad.style.display = "block";
            errorCantid = errorCantid + 1;

        }
        else if (cantidad.value === "0") {
            cantidad.classList.add("is-invalid");
            cantidad.classList.add("alert-warning");
            cantidad.classList.remove("is-valid");
            spanErrCantidad.innerText = "El stock debe ser mayor a cero."
            spanErrCantidad.style.display = "block";
            errorCantid = errorCantid + 1;
        }
        else {
            cantidad.classList.add("is-valid");
            cantidad.classList.remove("is-invalid");
            cantidad.classList.remove("alert-warning");
            spanErrCantidad.style.display = "none";
            errorCantid = 0;
        }
    });

    precio.addEventListener("blur", function () {

        if (precio.value === "") {
            precio.classList.add("is-invalid");
            precio.classList.add("alert-warning");
            precio.classList.remove("is-valid");
            spanErrPrecio.innerText = "Debe escribir el precio del producto."
            spanErrPrecio.style.display = "block";
            errorPrice = errorPrice + 1;

        }
        else if (precio.value === "0") {
            precio.classList.add("is-invalid");
            precio.classList.add("alert-warning");
            precio.classList.remove("is-valid");
            spanErrPrecio.innerText = "El precio debe ser mayor a cero."
            spanErrPrecio.style.display = "block";
            errorPrice = errorPrice + 1;
        }
        else {
            precio.classList.add("is-valid");
            precio.classList.remove("is-invalid");
            precio.classList.remove("alert-warning");
            spanErrPrecio.style.display = "none";
            errorPrice = 0;
        }
    });

    descuento.addEventListener("blur", function () {

        if (descuento.value === "") {
            descuento.classList.add("is-invalid");
            descuento.classList.add("alert-warning");
            descuento.classList.remove("is-valid");
            spanErrDescuento.innerText = "Si el producto no tiene descuento, escriba 0.";
            spanErrDescuento.style.display = "block";
            errorDisc = errorDisc + 1;

        }
        else {
            descuento.classList.add("is-valid");
            descuento.classList.remove("is-invalid");
            descuento.classList.remove("alert-warning");
            spanErrDescuento.style.display = "none";
            errorDisc = 0;
        }
    });

    // EVENTOS KEYUP //

    name.addEventListener("keyup", function () {

        if (name.value == "") {
            name.classList.add("is-invalid");
            name.classList.add("alert-warning");
            name.classList.remove("is-valid");
            spanErrName.innerText = "Debe escribir un nombre para el producto."
            spanErrName.style.display = "block";
            errorName = errorName + 1;

        }
        else if (name.value.length < 4) {
            name.classList.add("is-invalid");
            name.classList.add("alert-warning");
            name.classList.remove("is-valid");
            spanErrName.innerText = "El nombre debe tener al menos 4 caracteres."
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

    descripcion.addEventListener("keyup", function () {

        if (descripcion.value == "") {
            descripcion.classList.add("is-invalid");
            descripcion.classList.add("alert-warning");
            descripcion.classList.remove("is-valid");
            spanErrDescrip.innerText = "Debe escribir una descripción para el producto."
            spanErrDescrip.style.display = "block";
            errorDescript = errorDescript + 1;

        }
        else if (descripcion.value.length < 70) {
            descripcion.classList.add("is-invalid");
            descripcion.classList.add("alert-warning");
            descripcion.classList.remove("is-valid");
            spanErrDescrip.innerText = "Detalle más información del producto."
            spanErrDescrip.style.display = "block";
            errorDescript = errorDescript + 1;
        }
        else {
            descripcion.classList.add("is-valid");
            descripcion.classList.remove("is-invalid");
            descripcion.classList.remove("alert-warning");
            spanErrDescrip.style.display = "none";
            errorDescript = 0;
        }
    });

    cantidad.addEventListener("keyup", function () {

        if (cantidad.value === "") {
            cantidad.classList.add("is-invalid");
            cantidad.classList.add("alert-warning");
            cantidad.classList.remove("is-valid");
            spanErrCantidad.innerText = "Debe escribir el stock del producto."
            spanErrCantidad.style.display = "block";
            errorCantid = errorCantid + 1;

        }
        else if (cantidad.value === "0") {
            cantidad.classList.add("is-invalid");
            cantidad.classList.add("alert-warning");
            cantidad.classList.remove("is-valid");
            spanErrCantidad.innerText = "El stock debe ser mayor a cero."
            spanErrCantidad.style.display = "block";
            errorCantid = errorCantid + 1;
        }
        else {
            cantidad.classList.add("is-valid");
            cantidad.classList.remove("is-invalid");
            cantidad.classList.remove("alert-warning");
            spanErrCantidad.style.display = "none";
            errorCantid = 0;
        }
    });

    precio.addEventListener("keyup", function () {

        if (precio.value === "") {
            precio.classList.add("is-invalid");
            precio.classList.add("alert-warning");
            precio.classList.remove("is-valid");
            spanErrPrecio.innerText = "Debe escribir el precio del producto."
            spanErrPrecio.style.display = "block";
            errorPrice = errorPrice + 1;

        }
        else if (precio.value === "0") {
            precio.classList.add("is-invalid");
            precio.classList.add("alert-warning");
            precio.classList.remove("is-valid");
            spanErrPrecio.innerText = "El precio debe ser mayor a cero."
            spanErrPrecio.style.display = "block";
            errorPrice = errorPrice + 1;
        }
        else {
            precio.classList.add("is-valid");
            precio.classList.remove("is-invalid");
            precio.classList.remove("alert-warning");
            spanErrPrecio.style.display = "none";
            errorPrice = 0;
        }
    });

    descuento.addEventListener("keyup", function () {

        if (descuento.value === "") {
            descuento.classList.add("is-invalid");
            descuento.classList.add("alert-warning");
            descuento.classList.remove("is-valid");
            spanErrDescuento.innerText = "Si el producto no tiene descuento, escriba 0.";
            spanErrDescuento.style.display = "block";
            errorDisc = errorDisc + 1;

        }
        else {
            descuento.classList.add("is-valid");
            descuento.classList.remove("is-invalid");
            descuento.classList.remove("alert-warning");
            spanErrDescuento.style.display = "none";
            errorDisc = 0;
        }
    });

    // EVENTO CHANGE //

    categoria.addEventListener("change", function () {

        if (categoria.value == "") {
            categoria.classList.add("is-invalid");
            categoria.classList.add("alert-warning");
            categoria.classList.remove("is-valid");
            spanCategory.innerText = "Debe elegir una categoría."
            spanErrCategory.style.display = "block";
            
        }
        else {
            categoria.classList.add("is-valid");
            categoria.classList.remove("is-invalid");
            categoria.classList.remove("alert-warning");
            spanErrCategory.style.display = "none";

        }
    });

    // EVENTO SUBMIT //

    form.addEventListener("submit", function (e) {

        let errors = [errorName, errorDescript, errorCateg, errorCantid, errorPrice, errorDisc];

        var contador = 0;

        for (let i = 0; errors.length > i; i++) {

            console.log("haciendo el for")
            console.log(errors[i]) 
            if (errors[i] !== 0) {
                contador = contador + 1;
            } 
        }
        console.log(contador)
        if (contador === 0) {
            alert("El producto ha sido modificado con éxito.")
        } else {
            console.log("no podes pasar")
            e.preventDefault();
        }
    });

}