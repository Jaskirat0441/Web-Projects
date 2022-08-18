const hourhand = document.querySelector(".hour-hand");
const minhand = document.querySelector(".min-hand");
const sechand = document.querySelector(".sec-hand");


function setTime(){
    const date= new Date();

    const hour= date.getHours();
    const min= date.getMinutes();
    const sec= date.getSeconds();

    const secDegrees= ((sec/60)*360);
    sechand.style.transform = `rotate(${secDegrees}deg)`;

    const minDegress =((min/60)*360) + +(sec/60)*(360/60) ;
    minhand.style.transform=`rotate(${minDegress}deg)`;

    const hourDegres= ((hour/12)*360) + +(min/60)*(360/60);
    hourhand.style.transform= `rotate(${hourDegres}deg)`;
    // console.log(min);
}

setInterval(setTime,1000);


// setTime();