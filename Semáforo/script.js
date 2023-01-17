const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalID = null;

//pegando o Id do botão que o usuário selecionou, mas para isso precisa da função turON
const trafficLight = (event) => {
    stopAtutomatic();
    turnOn[event.target.id]();
}

//tem a ver com ID
const nextIndex = () => {
    colorIndex = colorIndex < 2 ? ++colorIndex : 0;
}

//array de cores para fazer ser automatico
const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

//para o intervalo automático
const stopAtutomatic = () => {
    clearInterval (intervalID);
}

//responsável por dizer oq cada ID do botão temq fazetr
const turnOn = {
    'red': () => img.src = 'img/vermelho.png',
    'yellow': () => img.src = 'img/amarelo.png',
    'green': () => img.src = 'img/verde.png',
    'automatic': () => intervalID = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficLight);