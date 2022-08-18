const hourhand = document.querySelector(".hour-hand");
const minhand = document.querySelector(".min-hand");
const sechand = document.querySelector(".sec-hand");


const digitalClock = document.getElementById("digital_clock");
const digitalDate = document.getElementById("digital_date");


function setTime() {
    const date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // analog clock

    const secDegrees = ((sec / 60) * 360);
    sechand.style.transform = `rotate(${secDegrees}deg)`;

    const minDegress = ((min / 60) * 360) + +(sec / 60) * (360 / 60);
    minhand.style.transform = `rotate(${minDegress}deg)`;

    const hourDegres = ((hour / 12) * 360) + +(min / 60) * (360 / 60);
    hourhand.style.transform = `rotate(${hourDegres}deg)`;
    // console.log(date);



    // digital clock

    min = (min < 10) ? "0" + min : min;  //pad 0 if less than 10(single digit)
    sec = (sec < 10) ? "0" + sec : sec;

    const timeOfDay = (hour < 12) ? "AM" : "PM";

    hour = (hour > 12) ? hour - 12 : hour;
    hour = (hour == 0) ? 12 : hour;

    digitalClock.innerHTML = `${hour}:${min}:${sec}:${timeOfDay}`;

    // 
    //  digital date

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let month = months[date.getMonth()];
    const year = date.getFullYear();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[date.getDay()];
    const getDate = date.getDate();
    digitalDate.innerHTML = `${day} ${month} ${getDate} ${year}`;

}

setInterval(setTime, 1000);


// setTime();