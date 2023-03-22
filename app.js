const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function getTime(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secArrow = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secArrow}deg)`;

    const minutes = now.getMinutes();
    const minArrow = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minArrow}deg)`;

    const hours = now.getHours();
    const hourArrow = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourArrow}deg)`;
}

setInterval(getTime, 1000)