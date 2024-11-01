// Título
document.querySelector("#btitulo").onclick = alterar_titulo;
function alterar_titulo() {
    document.querySelector('#realtitulo').innerHTML = 'Título Modificado!';
    document.querySelector('#btitulo').style.backgroundColor = 'red';
}

// Imagem
document.querySelector("#bimagem").onclick = trocar_imagem;
function trocar_imagem() {
    document.querySelector('#image').src = 'dog2.png';
    document.querySelector('#bimagem').style.backgroundColor = 'blue';
}

// Texto
document.querySelector('#bparagrafo').onclick = modificar_texto;
function modificar_texto() {
    document.querySelector('#paragrafo').innerHTML = 'TEXTO ALTERADO!';
    document.querySelector('#bparagrafo').style.backgroundColor = 'red';
}

// Áudio
document.querySelector('#baudio').onclick = tocar_musica;
function tocar_musica() {
    var audio = new Audio('explosion.wav');
    audio.play();
    document.querySelector('#baudio').style.backgroundColor = 'red';
}

// Toggle 1
document.querySelector('#b1').onclick = alternar1;
function alternar1() {
    document.querySelector('#b1').style.backgroundColor = 'orange';
    document.querySelector('#b2').style.backgroundColor = 'orange';
    document.querySelector('#b3').style.backgroundColor = 'orange';
}

// Toggle 2
document.querySelector('#b2').onclick = alternar2;
function alternar2() {
    document.querySelector('#b1').style.backgroundColor = 'pink';
    document.querySelector('#b2').style.backgroundColor = 'pink';
    document.querySelector('#b3').style.backgroundColor = 'pink';
}

// Toggle 3
document.querySelector('#b3').onclick = alternar3;
function alternar3() {
    document.querySelector('#b1').style.backgroundColor = 'grey';
    document.querySelector('#b2').style.backgroundColor = 'grey';
    document.querySelector('#b3').style.backgroundColor = 'grey';
}
