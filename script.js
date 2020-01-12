let clock = document.getElementById('clock');
let img = document.getElementById('lolcatImage');
let partyButton = document.getElementById('partyTimeButton');
let partyTime = 0;
let timeEvent = document.getElementById('timeEvent');
let wakeUp = document.getElementById('wakeUpTimeSelector');
let lunch = document.getElementById('lunchTimeSelector');
let nap = document.getElementById('napTimeSelector');

function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  clock.innerHTML = h + ":" + m + ":" + s;
  updateTimeEvent();
  let t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  };  // add zero in front of numbers < 10
  return i;
}

function updateTimeEvent() {
  let today = new Date();
  let h = today.getHours();
  if(h == partyTime){
    img.src = "img/partyTime.jpg";
    timeEvent.innerHTML = "Let's party!";
  }else if(h == wakeUp.value){
    img.src = 'img/wakeUp.jpg';
    timeEvent.innerHTML = 'WAKE UP!';
  }else if(h == lunch.value){
    img.src = 'img/lunchTime.jpg';
    timeEvent.innerHTML = 'Lunch Time';
  }else if(h == nap.value){
    img.src = 'img/napTime.jpg';
    timeEvent.innerHTML = 'Nap Time';
  }else if(h >= 5 && h <= 11){
    img.src = 'img/morning.jpeg';
    timeEvent.innerHTML = 'Good morning';
  }else if(h <= 16){
    img.src = 'img/afternoon.jpg';
    timeEvent.innerHTML = 'Good afternon';
  }else if (h <= 23){
    img.src = 'img/evening.jpg';
    timeEvent.innerHTML = 'Good evening';
  }
}

partyButton.addEventListener('click', function () {
     if (partyTime === 0) 
    {
        partyTime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
        partyTime = 0;
    }
  })
  
  
