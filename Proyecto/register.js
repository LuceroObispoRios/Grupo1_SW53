document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('registro').addEventListener('click', function(e) {
        e.preventDefault()
    
        const username = document.getElementById("username") // sirve para el nombre de la empresa
        const email = document.getElementById("email")
        const ubicacion = document.getElementById("ubicacion")
        const contactNumber = document.getElementById("contactNumber")
        const contrasena = document.getElementById("contrasena")
        const contrasena2 = document.getElementById("contrasena2")
        const textarea = document.getElementById("description")
        const warning = document.getElementById("warnings")
    
        let warnings = "";
        let entrar = false;
        let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        let regexContact = /^[0-9]{9}$/;
    
        let services = [];
    
        if(username.value.length < 1){
            warnings += `El nombre no es valido <br>`
            entrar = true
        }
    
        if(!regexEmail.test(email.value)){
            warnings += `El email no es valido <br>`
            entrar = true
        }
    
        if(ubicacion.value.length < 1){
            warnings += `La ubicacion no es valida <br>`
            entrar = true
        }
    
        if(!regexContact.test(contactNumber.value)){
            warnings += `El numero de contacto no es valido <br>`
            entrar = true
        }
    
        if(contrasena.value.length < 6){
            warnings += `La contraseña no es valida <br>`
            entrar = true
        }
        if(contrasena.value != contrasena2.value){
            warnings += `No se confirmo la contraseña correctamente <br>`
            entrar = true
        }
        
        document.querySelectorAll('[type="checkbox"]').forEach(item => {
            if(item.checked == true){
                services.push(item.value) // el atributo valor del checkbox
            }
        })
    
        if(textarea.value.length < 1){
            warnings += `La descripcion no es valida <br>`
            entrar = true
        }
    
        if(entrar){
            warning.innerHTML = warnings
        }
    
    })
})

function SaveUserJSON(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var ubicacion = document.getElementById("ubicacion").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var contrasena = document.getElementById("contrasena").value;
    var description = document.getElementById("description").value;

    var services = [];

    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        if(item.checked == true){
            services.push(item.value) // el atributo valor del checkbox
        }
    })

    var empresa = {
        username: username,
        email: email,
        ubicacion: ubicacion,
        contactNumber: contactNumber,
        contrasena: contrasena,
        description: description,
        services: services
    }

    var users = JSON.parse(localStorage.getItem("users"));

    if(users == null){
        var users = [];
    }

    users.push(empresa);

    localStorage.setItem("users", JSON.stringify(users));
    alert("Empresa registrada con exito");
    window.location.href = "inicio-sesion.html";
} //application-localstorage-file//:

function SaveUserLocalMemory(){
    
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var ubicacion = document.getElementById("ubicacion").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var contrasena = document.getElementById("contrasena").value;   
    var description = document.getElementById("description").value; 

    var services = [];  
    registro.querySelectorAll('[type="checkbox"]').forEach(item => {
        if(item.checked == true){
            services.push(item.value) // el atributo valor del checkbox
        }
    })
    
    //guardando data en local storage
    var empresaID = localStorage.setItem("empresaID", username);
    var empresaEmail = localStorage.setItem("empresaEmail", email);
    var empresaUbicacion = localStorage.setItem("empresaUbicacion", ubicacion);
    var empresaNumber = localStorage.setItem("empresaNumber", contactNumber);
    var empresaContrasena = localStorage.setItem("empresaContrasena", contrasena);
    var empresaDesc = localStorage.setItem("empresaDesc", description);
    var empresaServices = localStorage.setItem("empresaServices", services);

    window.location.href = "inicio-sesion.html";
    //la data guardada de nombre de empresa (empresaID) y contraseña (empresaContrasena)
    //se debe igualar en login para que funcione este ultimo

}
