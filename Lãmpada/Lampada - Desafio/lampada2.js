const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function isLampOff () {
    return lamp.src.indexOf ('desligada') > -1
}

function lampOnOff () {
    if (!isLampBroken ()) {
        if (isLampOff ()) {
            lamp.src = './img/ligada.jpg';
        }else{
            lamp.src = './img/desligada.jpg';
        }
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseover', lampOnOff);
lamp.addEventListener('mouseleave', lampOnOff);
lamp.addEventListener('dblclick', lampBroken);