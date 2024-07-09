let imagen = document.getElementById('imagen')
let titulo = document.getElementById('titulo')
let parrafo = document.getElementById('parrafo')
let removerImagen = imagen.parentNode



const shift = 3; // Clave para el cifrado César

function encriptar() {
    const inputTextArea = document.getElementById('inputTextArea');
    const outputTextArea = document.getElementById('outputTextArea');
    const text = inputTextArea.value;
    let encryptedText = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            if ((code >= 65) && (code <= 90)) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if ((code >= 97) && (code <= 122)) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        encryptedText += char;
    }
    outputTextArea.value = encryptedText;
    removerContenido()
}

function desencriptar() {
    const inputTextArea = document.getElementById('inputTextArea');
    const outputTextArea = document.getElementById('outputTextArea');
    const text = inputTextArea.value;
    let decryptedText = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            if ((code >= 65) && (code <= 90)) {
                char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
            } else if ((code >= 97) && (code <= 122)) {
                char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
            }
        }
        decryptedText += char;
    }
    outputTextArea.value = decryptedText;
    removerContenido()
}


function removerContenido(){
    removerImagen.removeChild(imagen)
    titulo.textContent= ''
    parrafo.textContent= ''

}
