alert("Bienvenido a Ladera Tech, donde podes armar tu pc al mejor precio!")
confirm("Primero debes crear un usuario para poder ingresar!, quieres avanzar?")
alert("Se te asigno como nombre de usuario el NOMBRE del TUTOR, y como contraseña en NRO DE COMISION")

let IngresarUsuario = prompt("Ingresa tu nombre de usuario").toLowerCase()
let IngresarContrasena = prompt("Ingresa tu contraseña")

let usuario = "matias"
let contraseña = "57690"
const ingresar = (x, y, a, b) => {

    while (x!== a && y!== b) {
        alert("Nombre de usuario o contraseña incorrecta, intenta nuevamente")
        x = prompt("Ingresa tu nombre de usuario").toLowerCase()
        y = prompt("Ingresa tu contraseña")
    }
    alert("Bienvenido al sistema")
}   

ingresar(IngresarUsuario, IngresarContrasena, usuario, contraseña)
