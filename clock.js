
function tick() {

    tickRotate += 6;
    bigRotate += 0.1;
    littleRotate += 0.0083333333333333;
    document.getElementById('slim_arrow').style.transform = `rotate(${tickRotate}deg)`;
    document.getElementById('big_arrow').style.transform = `rotate(${bigRotate}deg)`;
    document.getElementById('little_arrow').style.transform = `rotate(${littleRotate}deg)`;

}

const now = new Date();
now.getHours();
let tickRotate = now.getSeconds() * 6;
let bigRotate = (now.getMinutes() * 60 + now.getSeconds()) * 0.1;
let littleRotate = (now.getHours() % 12 * 3600 + now.getMinutes() * 60 + now.getSeconds()) * 0.0083333333333333;
tick();

setInterval(tick, 1000);





