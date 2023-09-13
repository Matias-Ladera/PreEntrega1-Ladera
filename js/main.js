function pedirNombre() {
    let nombre = prompt("Ingresar tu nombre");
    while (!nombre || !isNaN(nombre)) {
        nombre = prompt("Tienes que ingresar tu nombre, no puedes dejar el campo vacío o ingresar un número");
    }
    return nombre;
}

function pedirCantidadNotas(nombre) {
    let cantidadNotas = parseInt(prompt(nombre + " ingresa la cantidad de notas que quieres promediar"));
    return cantidadNotas;
}

function pedirNotas(cantidadNotas) {
    let notas = [];
    for (let x = 0; x < cantidadNotas; x++) {
        let nota = parseFloat(prompt("Ingresa la nota " + (x + 1)));
        notas.push(nota);
    }
    return notas;
}

function calcularPromedio(notas) {
    let total = 0;
    for (let i = 0; i < notas.length; i++) {
        total += notas[i];
    }
    return total / notas.length;
}

function pedirNotaMinima(nombre) {
    let notaMinima = parseInt(prompt(nombre + " ingresa la cantidad mínima para aprobar"));
    return notaMinima;
}

function mostrarResultado(nombre, promedio, notaMinima) {
    if (promedio >= notaMinima) {
        alert("APROBASTE CON UN PROMEDIO DE " + promedio);
    } else {
        alert("DESAPROBASTE CON UN PROMEDIO DE " + promedio);
    }
}

function funcion() {
    let nombre = pedirNombre();
    let cantidadNotas = pedirCantidadNotas(nombre);
    let notas = pedirNotas(cantidadNotas);
    let promedio = calcularPromedio(notas);
    let notaMinima = pedirNotaMinima(nombre);
    mostrarResultado(nombre, promedio, notaMinima);
}

funcion();