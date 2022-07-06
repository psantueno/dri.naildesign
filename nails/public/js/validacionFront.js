window.addEventListener('load', function () {
    let form = document.querySelector('#form')
    let button = document.querySelector('#button')
    let name = document.querySelector('#name')
    let nameError = document.querySelector('#nameError')
    let email = document.querySelector('#email')
    let emailError = document.querySelector('#emailError')
    let password = document.querySelector('#password')
    let passwordError = document.querySelector('#passwordError')
    let repassword = document.querySelector('#repassword')
    let repasswordError = document.querySelector('#repasswordError')

    button.addEventListener('click', function (event) {
        event.preventDefault()
        let errores = {}
        if (name.value.length < 1) {
            errores.name = 'Este campo debe estar completo'
        }
        if (email.value.length < 1) {
            errores.email = 'Este campo debe estar completo'
        }
        if (password.value.length < 1) {
            errores.password = 'Este campo debe estar completo'
        }
        if (repassword.value.length < 1) {
            errores.repassword = 'Este campo debe estar completo'
        }
        if (Object.keys(errores).length >= 1) {
            erName.innerText = (errores.name) ? errores.name : ''
        } else {
            form.submit();
        }
    })

})

