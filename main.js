const time_el = document.querySelector('.watch .time');
const Start_btn =document.getElementById('Start');
const Stop_btn =document.getElementById('Stop');
const Reset_btn =document.getElementById('Reset');

let seconds = 0;
let interval = null;

Start_btn.addEventListener('click', start);
Stop_btn.addEventListener('click', stop);
Reset_btn.addEventListener('click', Reset);

function timer () {
    seconds++;
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    if (secs< 10) secs='0' +secs;
    if (mins< 10) mins='0' +mins;
    if (hrs< 10) hrs='0' +hrs;
 
    time_el.innerText = `${hrs}:${mins}:${secs}`;
}

function start () {
    if (interval){
        return
    }

    interval = setInterval(timer, 1000);
}
function stop() {
    clearInterval(interval);
    interval=null;
}
function Reset() {
    stop();
    seconds=0;
    time_el.innerHTML= '00:00:00';
}

