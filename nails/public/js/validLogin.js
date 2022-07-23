window.addEventListener('load', function () {
    //console.log("se ha entrado por validacion front")
    let form = document.querySelector('#loginForm')
    let email = document.querySelector('#form3Example3c')
    let emailError = document.querySelector('#emailErrorFront')
    let password = document.querySelector('#form3Example4c')
    let passwordError = document.querySelector('#passwordErrorFront')
    
emailError.style.display="none"
passwordError.style.display="none"

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    console.log('hice fono envie el form sigo en front')
})
//email.addEventListener("click", ()=>{return console.log('hice foccus en el email')})
let emailEscrito=""
email.addEventListener("focus", ()=>{
    emailError.style.display="flex"
    emailError.style.color="#D36878"
    emailError.innerText="Este campo es obligatorio"
    //se incluye la validacion de onkey en el focus 
email.addEventListener("keyup", (event)=>{
    //passwordError.style.display="flex"
    emailEscrito =email.value
    if(emailEscrito.indexOf("@")!==-1){
        emailError.style.display="none"
    } else {
        emailError.style.display ="flex"
        emailError.innerText="debe ser un email valido @"
    }
    console.log(emailEscrito)
})
    //console.log('hice foccus en el email')
})
email.addEventListener("blur", ()=>{
    emailError.style.display="none"
    //console.log('hice foccus en el email')
})
password.addEventListener("focus", ()=>{
    passwordError.style.display="flex"
    passwordError.style.color="#D36878"
    passwordError.innerText="Este campo es obligatorio"

    //console.log('hice foccus en el email')
    // se incluye la validacion del onkey en el foccus password
    let passwordEscrito=""
    password.addEventListener("keyup", (event)=>{
        //passwordError.style.display="flex"
        passwordEscrito =password.value
        if(passwordEscrito.length >0&&passwordEscrito.length<8){
            passwordError.style.display ="flex"
            passwordError.innerText="La contraseña debe tener mínimo 8 caracteres"
        } else {
            passwordError.style.display="none"
        }
        console.log("este es el pas"+passwordEscrito)
    })
})
password.addEventListener("blur", ()=>{
    passwordError.style.display="none"
    //console.log('hice foccus en el email')
})

// abajo la validacion de password que estaba funcionando

// let clave=[]
// password.addEventListener("keyup", (event)=>{
//     //passwordError.style.display="flex"

//     if(event.key ==="Backspace"){
//         clave.pop()
//     } else {
//         clave.push(event.key)
//     }

//     if (clave.length >0&&clave.length<8){
        
//         passwordError.style.display ="flex"
//         passwordError.innerText="La contraseña debe tener mínimo 8 caracteres"
//     } else{
//         passwordError.style.display="none"
//     }
//     //console.log(clave)
// })
//termina la validacion de password que estaba funcionando ok

//validacion de email externa funciona bien 
// let emailEscrito=[]
// email.addEventListener("keyup", (event)=>{
//     //passwordError.style.display="flex"

//     if(event.key ==="Backspace"){
//         emailEscrito.pop()
//     } else {
//         emailEscrito.push(event.key)
//     }

    

//     if (emailEscrito.find(e=>e==="@")=== undefined){
        
//         emailError.style.display ="flex"
//         emailError.innerText="debe ser un email valido @"
//     } else {
//         emailError.style.display="none"

//     }
//     console.log(emailEscrito)
// })


})