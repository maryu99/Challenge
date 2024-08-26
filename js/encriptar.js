let botonCopiar;
let textoIngresado;
let textoCopiado;
let ocultar;
let mostrar;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
asignarTextoElemento('p', 'Solo letras minúsculas y sin acentos');

function validarTextarea() {
    textoIngresado = document.getElementById('texto_ingresado');
    textoIngresado.addEventListener("keypress", (e) => { //e, provee informacion de donde ha ocurrido el evento
        const expre = /[a-z]/;
        if (!expre.test(e.key)) e.preventDefault();
    })
}
validarTextarea();

function btn_encriptar() {
    let botonEcriptar = document.getElementById('encriptar');
    textoIngresado = document.getElementById('texto_ingresado');
    document.getElementById('desencriptar').disabled = true;

    if (textoIngresado.value.length == 0) {
        asignarTextoElemento('p', 'El campo no puede estar vacio');
        document.getElementById('texto_ingresado').focus();
    }
    else {
        asignarTextoElemento('p', 'Solo letras minúsculas y sin acentos');
        ocultar = document.getElementById('ocultar_contenido').style.display = 'none';
        mostrar = document.getElementById('mostrar_contenido').style.display = 'block';
        encriptar();
    }
}

function encriptar() {
    textoIngresado = document.getElementById('texto_ingresado').value;
    textoIngresado = textoIngresado.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    /* El contenido del input es igual a lo que se ingreso en el textarea (pero ahora encriptado) */
    document.getElementById('texto_encriptado').value = textoIngresado;
}

function btn_copiar() {
    try {
        textoCopiado = document.getElementById('texto_encriptado');
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(textoCopiado.value);
        botonCopiar = document.getElementById('bt_copiar');
        botonCopiar.textContent = "Texto copiado";
        document.getElementById('desencriptar').disabled = false;
    } catch {
        alert("Ocurrio un error, no se pudo copiar el texto")
    }
}

function btn_desencriptar() {
    ocultar = document.getElementById('ocultar_contenido').style.display = 'none';
    mostrar = document.getElementById('mostrar_contenido').style.display = 'block';
    desencriptar();
}

function desencriptar() {
    textoIngresado = document.getElementById('texto_ingresado').value;
    textoIngresado = textoIngresado.replace(/enter/gm, "e").replace(/imes/gm, "i").replace(/ai/gm, "a").replace(/ober/gm, "o").replace(/ufat/gm, "u");
    document.getElementById('texto_encriptado').value = textoIngresado;
}

function cliTextarea() {
    botonCopiar = document.getElementById('bt_copiar');
    botonCopiar.textContent = "Copiar";
    textoIngresado = document.getElementById('texto_ingresado').value = '';
    asignarTextoElemento('p', 'Solo letras minúsculas y sin acentos');
}