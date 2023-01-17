'use strict';

//Variável que possui as letras com seus sons
const sons = {
    'F': 'ela_rica.mp3',
    'E': 'only_fans.mp3',
    'L': 'lanca.mp3',
    'I': 'silicone.mp3',
    'P': 'melzin.mp3',
    'W': 'ransar.mp3',
    'R': 'redkush.mp3',
    'X': 'pai.mp3',
    'T': 'gp.mp3'
}

//Função que cria a div em que aparecem as letras
const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);
}

//Função que exibe as letras da função sons
const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

//Função que toca o som
const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`);
    audio.play();
}

//Efeitinho pra ficar bonitinho
const adicionarEfeito = (letra) => document.getElementById(letra)
                                           .classList.toggle('active');

//Tira o efeito bonitinho dps do clique
const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend',removeActive);
};

//Função que determina oq acontece qnd clica
const ativarDiv = (evento) => {
    const letra = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase();
    const letraPermitida = sons.hasOwnProperty(letra);
    if (letraPermitida){
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
}


exibir(sons);
document.getElementById('container')
        .addEventListener('click', ativarDiv);

//aqui faz as teclas funcionarem
window.addEventListener('keyup',ativarDiv);