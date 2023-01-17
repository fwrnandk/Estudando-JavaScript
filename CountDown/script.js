'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdSegundos); //contando o tempo
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
}

//1000 = 1 segundo
const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id); //clearInterval é o contrario de setInterval
    const contar = () => {
        if (tempo === 0 ){
            pararContagem();
        }
        atualizar(tempo);
        tempo--;
    }
    const id = setInterval(contar,1000);
}

//Função responsável por transformar em segundos
const tempoRestante = () => {
    // 1 de janeiro de 1970 - o js conta os milisegundos a partir desta data
    const dataEvento = new Date ('2022-12-31 12:00:00');
    const hoje = Date.now(); //representa qnts milisegundos teve de 1/1/1970 até hj
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante());