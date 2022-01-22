"use scrict";
// import { UseState } from 'react';

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
});

// Conteudo da promoção (cronômetro)
// Math.floor = retorna somente o numero inteiro
const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const quantidadeSegundos = tempo % 60;
    const quantidadeMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const quantidadeHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const quantidadeDias = Math.floor(tempo / (60 * 60 * 24));

    // Mostra na tela os minutos formatados
    segundos.textContent = formatarDigito(quantidadeSegundos);
    minutos.textContent = formatarDigito(quantidadeMinutos);
    horas.textContent = formatarDigito(quantidadeHoras);
    dias.textContent = formatarDigito(quantidadeDias);
}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);

    const contar = () => {
        if(tempo == 0){
            pararContagem();
        }
        atualizar(tempo);
        tempo--;
    }
    const id = setInterval(contar, 1000);
};

const tempoRestante = () => {
    // 1 de Janeiro de 1970 ele começa a contar os milisegundos (Data de referência do js)
    const dataEvento = new Date ('2022-02-16 20:00:00');
    const dataHoje = Date.now();
    return Math.floor((dataEvento - dataHoje) / 1000);
}

contagemRegressiva(tempoRestante());

// Mudando a cor de fundo na parte gallery do site
window.onscroll = function (evento) {  
    document.getElementById("gallery").style.backgroundColor = "#f8f8ff";
}

// Mudando a cor dos objetos em um momento especifico da pagina(gallery)
window.addEventListener('scroll', function (){
    let header = document.querySelector('header')
    let windowPosition = window.scrollY > 2930;
    header.classList.toggle('scrolling-active', windowPosition);

});

// Manipulando o calendario para não haver a possibilidade do usuario escolher uma data antiga para viajar, assim escolhendo sempre uma data de 7 dias depois 
var today = new Date();
today.setDate(today.getDate() + 7); 
today = today.toISOString().split('T')[0];

document.getElementsByName("date")[0].setAttribute('min', today);

// Manipulando a modal de cadastro
// Função para chamar a modal
// classList.add - lista todas as classes 
// .target - mostra o elemento aonde o click foi feito
// target.className - mostra o elemento através de uma class
// localStorage - fica armazenado se o usuario interagiu com tal elemento 
function iniciaModal(modalID){
    if(localStorage.fechaModal !== modalID){
    const modal = document.getElementById(modalID);
        if(modal){
            modal.classList.add('mostrar');
            modal.addEventListener('click', (evento) => {
                if(evento.target.id == modalID || evento.target.className == 'fechar') {
                    modal.classList.remove('mostrar');
                    // localStorage.fechaModal = modalID;
                }
            });
        }
    }
}
const logo = document.querySelector('.banner', '.button');
logo.addEventListener('click', () =>  iniciaModal('modal-promocao'));

document.addEventListener('scroll', () =>{
    if(window.pageXOffset > 800) {
        iniciaModal('modal-promocao');
    }
});

// Após o click do botão e do banner deverá abrir a modal






