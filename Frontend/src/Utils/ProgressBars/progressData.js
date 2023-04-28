let circularProgress = document.getElementsByClassName('circular-progress');
let progressValue = document.getElementsByClassName('progress-value');

let cp1 = document.getElementsByClassName('SA1_CP1');
let pv1 = document.getElementsByClassName('SA1_PV1');

let cp2 = document.getElementsByClassName('SA2_CP1');
let pv2 = document.getElementsByClassName('SA2_PV1');

let cp3 = document.getElementsByClassName('SA3_CP1');
let pv3 = document.getElementsByClassName('SA3_PV1');

let cp4 = document.getElementsByClassName('SA4_CP1');
let pv4 = document.getElementsByClassName('SA4_PV1');

let cp5 = document.getElementsByClassName('SA5_CP1');
let pv5 = document.getElementsByClassName('SA5_PV1');

let cp6 = document.getElementsByClassName('SA6_CP1');
let pv6 = document.getElementsByClassName('SA6_PV1');

let cpCV1 = document.getElementsByClassName('CV1_CP1');

let cpCV2 = document.getElementsByClassName('CV2_CP1');

let cpCV3 = document.getElementsByClassName('CV3_CP1');

let speed = 10;


function overviewHealthProgress(_ovPercentage) {
  let progStart = 0;

  let progress = setInterval(() => {
    progStart++;
    progressValue[0].textContent = `${progStart} %`;
    circularProgress[0].style.background = `conic-gradient(#FFF500 ${progStart * 3.6}deg, #ededed 0deg)`;
    circularProgress[0].style.boxShadow = `0px 0px 35px -13px rgba(255, 245, 0, 0.75) `;
    if (progStart === _ovPercentage) {
      clearInterval(progress)
    }
  }, speed);
}


function wrinkleProgress(_wrPercentage) {
  let progStart = 0;

  let p1 = setInterval(() => {
    progStart++;
    pv1[0].textContent = `${progStart} %`;
    cp1[0].style.background = `conic-gradient(#00ff00 ${progStart * 3.6}deg, #ededed 0deg)`;
    if (progStart === _wrPercentage) {
      clearInterval(p1)
    }
  }, speed);
}


function acneProgress(_aPercentage) {
  let progStart = 0;

  let p2 = setInterval(() => {
    progStart++;
    pv2[0].textContent = `${progStart} %`;
    cp2[0].style.background = `conic-gradient(#2A98DE ${progStart * 3.6}deg, #ededed 0deg)`;
    if (progStart === _aPercentage) {
      clearInterval(p2)
    }
  }, speed);
}


function pigmentationProgress(_aPercentage) {
  let progStart = 0;

  let p3 = setInterval(() => {
    progStart++;
    pv3[0].textContent = `${progStart} %`;
    cp3[0].style.background = `conic-gradient(#D8004F ${progStart * 3.6}deg, #ededed 0deg)`;
    if (progStart === _aPercentage) {
      clearInterval(p3)
    }
  }, speed);
}

function darkCirclesProgress(_aPercentage) {
  let progStart = 0;

  let p4 = setInterval(() => {
    progStart++;
    pv4[0].textContent = `${progStart} %`;
    cp4[0].style.background = `conic-gradient(#9500D7 ${progStart * 3.6}deg, #ededed 0deg)`;
    if (progStart === _aPercentage) {
      clearInterval(p4)
    }
  }, speed);
}


function openPoresProgress(_aPercentage) {
  let progStart = 0;

  let p5 = setInterval(() => {
    progStart++;
    pv5[0].textContent = `${progStart} %`;
    cp5[0].style.background = `conic-gradient(#7367FF ${progStart * 3.6}deg, #ededed 0deg)`;
    if (progStart === _aPercentage) {
      clearInterval(p5)
    }
  }, speed);
}

function darkSpotsProgress(_aPercentage) {
  let progStart = 0;

  let p6 = setInterval(() => {
    progStart++;
    pv6[0].textContent = `${progStart} %`;
    cp6[0].style.background = `conic-gradient(#FF7A00 ${progStart * 3.6}deg, #ededed 0deg)`;
    if (progStart === _aPercentage) {
      clearInterval(p6)
    }
  }, speed);
}

function lightingProgress(_aPercentage) {
  setTimeout(() => {
    
    let progStart = 0;
    let cvP = setInterval(() => {
      progStart++;
      cpCV1[0].style.background = `conic-gradient(#FF0000 ${progStart * 3.6}deg, #ededed 0deg)`;
      if (progStart === _aPercentage) {
        clearInterval(cvP)
      }
    }, speed);
  }, 20);
}

function lookStraightProgress(_aPercentage) {
  setTimeout(() => {
    
    let progStart = 0;
    let cvP1 = setInterval(() => {
      progStart++;
      cpCV2[0].style.background = `conic-gradient(#FFF500 ${progStart * 3.6}deg, #ededed 0deg)`;
      if (progStart === _aPercentage) {
        clearInterval(cvP1)
      }
    }, speed);
  }, 20);
}

function facePositionProgress(_aPercentage) {
  setTimeout(() => {
    
    let progStart = 0;
    let cvP2 = setInterval(() => {
      progStart++;
      cpCV3[0].style.background = `conic-gradient(#38D800 ${progStart * 3.6}deg, #ededed 0deg)`;
      if (progStart === _aPercentage) {
        clearInterval(cvP2)
      }
    }, speed);
  }, 20);
}

export {
  overviewHealthProgress,
  wrinkleProgress,
  acneProgress,
  pigmentationProgress,
  darkCirclesProgress,
  openPoresProgress,
  darkSpotsProgress,
  lightingProgress,
  lookStraightProgress,
  facePositionProgress
}