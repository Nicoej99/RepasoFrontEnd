  /* let enviar=document.getElementById("Envio").addEventListener("click", register());
   let Nombre=document.querySelector("Nombres");
   let Apellido=document.querySelector("Apellidos");
   let Cedula=document.querySelector("Cedula");
   let Celular=document.querySelector("Celular");
   let Email=document.querySelector("Email");
   let Clave=document.querySelector("Clave");
   let form = document.querySelector('form');

function register(){
   enviar.addEventListener("click", (event) => {
      e.preventDefault();
    if(Nombre.value.length <3){
          alert("ingrese al menos un nombre valido mayor a 3 caracteres ")
       }
    else if(Apellido.value.length<3){
          alert("ingrese al menos un apellido valido mayor a 3 caracteres")
       } 
    else if(Cedula.value.length<10){
          alert("por favor ingresa un numero de cedula valido")
       }
    else if(Celular.value.length<1){
          alert("por favor ingresa tu numero celular")
       }
    else if(Email.value.length<1){
       alert("el campo email es requerido")
       }
    else if(Clave.value.length<1){
          alert("por favor ingresa una contraseña mas segura")
       }
    else{
       alert("formulario enviado")
    }
 }
 )
 
 
 
    function  prueba(){
       alert("ppp");
 }

}
*/
var Nombre=document.getElementById("Nombres");
var Apellido=document.getElementById("Apellidos");
var Celular=document.getElementById("Celular");
var Email=document.getElementById("Email");
var Cedula=document.getElementById("Cedula");
var form = document.getElementById('form');
var fecha=document.getElementById("fecha");

console.log(form);



form.addEventListener("submit", e=>{
     e.preventDefault();
  if(Nombre.value.length<3){
        alert("ingrese un nombre valido mayor a 3 caracteres ");
    }

   else if(Apellido.value.length<3){
        alert("ingrese un apellido valido mayor a 3 caracteres")
   }
   else if(Cedula.value.length<4 || isNaN(Cedula.value)){
    alert("Esta cedula no es valida o el valor no es numerico");
   }
   else if(Email.value.length<1){
    alert("el campo email es requerido");
   }
   else if(isNaN(Celular.value)){
       alert("el campo debe ser numerico");
   }
   else if(Celular.value.length<10){
       alert("por favor ingresa tu numero celular");
   }
   
   
   else if(Carrera.value.length<1){
    alert("El campo carrera es requerido");
   }
    else{
     alert("formulario enviado");
}
})








function  prueba(){
    alert("ppp");
}

