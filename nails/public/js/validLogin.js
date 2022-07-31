window.addEventListener('load', function () {
    //console.log("se ha entrado por validacion front")
    let form = document.querySelector('#loginForm')
    let email = document.querySelector('#form3Example3c')
    let emailError = document.querySelector('#emailErrorFront')
    let password = document.querySelector('#form3Example4c')
    let passwordError = document.querySelector('#passwordErrorFront')

    let errors = [];
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
    emailError.style.display="none"
    passwordError.style.display="none"


//email.addEventListener("click", ()=>{return console.log('hice foccus en el email')})
let emailEscrito=""
email.addEventListener("focus", ()=>{
    emailError.style.display="none"
    emailError.style.color="#D36878"
    
    //se incluye la validacion de onkey en el focus 
email.addEventListener("keyup", (event)=>{
    //passwordError.style.display="flex"
    //emailEscrito =email.value
    if((validEmail.test(email.value))){
        emailError.style.display="none"
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
        email.classList.remove("alert-warning");
    } else {
        emailError.style.display ="flex"
        emailError.innerText="Debe ingresar un email valido"
        email.classList.add("is-invalid");
        email.classList.add("alert-warning");
        email.classList.remove("is-valid");
    }
    //console.log(emailEscrito)
})
    //console.log('hice foccus en el email')
})
email.addEventListener("blur", ()=>{
    emailError.style.display="none"
    if(email.value===""){
        emailError.style.display="flex"
        emailError.innerText="Este campo es obligatorio"
        email.classList.add("is-invalid");
        email.classList.add("alert-warning");
        email.classList.remove("is-valid");
        
        if(errors.indexOf("emailVacio")===-1){
            errors.push("emailVacio");
            console.log(errors)        
        }     
    }
    else {
        if(errors.indexOf("emailVacio")!==-1){
            errors.splice(errors.indexOf("emailVacio"),1);
            console.log(errors)
            }
    }  

    if (!(validEmail.test(email.value))) {
        email.classList.add("is-invalid");
        email.classList.add("alert-warning");
        email.classList.remove("is-valid");
        emailError.style.display ="flex"
        emailError.innerText="Debe ingresar un email valido"
        if(errors.indexOf("emailInvalido")===-1){
            errors.push("emailInvalido");
            console.log(errors)        
        }     
    }
    else {
        if(errors.indexOf("emailInvalido")!==-1){
            errors.splice(errors.indexOf("emailInvalido"),1);
            email.classList.add("is-valid");
            email.classList.remove("is-invalid");
            email.classList.remove("alert-warning");
            console.log(errors)
            }
    }  

    
    //  if(emailEscrito.indexOf("@")!==-1){
    //     emailError.style.display="none"
    //     email.classList.add("is-valid");
    //     email.classList.remove("is-invalid");
    //     email.classList.remove("alert-warning");
    // } else {
    //     emailError.style.display ="flex"
    //     emailError.innerText="Debe ingresar un email valido con @"
    //     email.classList.add("is-invalid");
    //     email.classList.add("alert-warning");
    //     email.classList.remove("is-valid");
    //     errors.push("emailsin@");
    // }
    // //console.log('hice foccus en el email')
})
password.addEventListener("focus", ()=>{
    passwordError.style.display="none"
    passwordError.style.color="#D36878"
    //console.log('hice foccus en el email')
    // se incluye la validacion del onkey en el foccus password
    let passwordEscrito=""
    password.addEventListener("keyup", (event)=>{
        //passwordError.style.display="flex"
        passwordEscrito =password.value
        if(passwordEscrito.length >0&&passwordEscrito.length<8){
            passwordError.style.display ="flex"
            passwordError.innerText="La contraseña debe tener mínimo 8 caracteres"
            password.classList.add("is-invalid");
            password.classList.add("alert-warning");
            password.classList.remove("is-valid");
        } else {
            passwordError.style.display="none"
            password.classList.add("is-valid");
            password.classList.remove("is-invalid");
            password.classList.remove("alert-warning");
        }
        //console.log("este es el pas"+passwordEscrito)
    })
})
password.addEventListener("blur", ()=>{
    //passwordError.style.display="flex"
    //passwordEscrito =password.value

    if(password.value===""){
        passwordError.style.display="flex"
        passwordError.innerText="Este campo es obligatorio"
        password.classList.add("is-invalid");
        password.classList.add("alert-warning");
        password.classList.remove("is-valid");
        if(errors.indexOf("passwordVacio")===-1){
            errors.push("passwordVacio");
            console.log(errors)        
        }   
    }
    else {
        if(errors.indexOf("passwordVacio")!==-1){
        errors.splice(errors.indexOf("passwordVacio"),1);
        passwordError.style.display="none"
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
        password.classList.remove("alert-warning"); 
        console.log(errors)
        }
            
    }
    
    if(password.value.length>0 && password.value.length<8){
        passwordError.style.display ="flex"
        passwordError.innerText="La contraseña debe tener mínimo 8 caracteres"
        password.classList.add("is-invalid");
        password.classList.add("alert-warning");
        password.classList.remove("is-valid");
        if(errors.indexOf("longitudPassword")===-1){
            errors.push("longitudPassword");
            console.log(errors)        
        }   
    }
    else {
        if(errors.indexOf("longitudPassword")!==-1){
        errors.splice(errors.indexOf("longitudPassword"),1);
        passwordError.style.display="none"
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
        password.classList.remove("alert-warning");
        console.log(errors)
        
    }  
           
    } 

    //console.log('hice foccus en el email')
})

form.addEventListener("submit", (event)=>{
    console.log(errors)
    if (errors.length > 0) {
        event.preventDefault();
    }

})

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


//})