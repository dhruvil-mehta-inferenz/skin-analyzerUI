import React from 'react'
import '../../css/Overview.css'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
export default function Overview() {

  let circularProgress = document.getElementsByClassName('circular-progress');
  let progressValue = document.getElementsByClassName('progress-value');
  let progStart = 0;
  let progEnd = 85;
  let speed = 10;


  let progress = setInterval(() => {
    progStart++;
    progressValue[0].textContent = `${progStart} %`;
    circularProgress[0].style.background = `conic-gradient(#FFF500 ${progStart * 3.6}deg, #ededed 0deg)`;
    if (progStart === progEnd) {
      clearInterval(progress)
    }
  }, speed);
  
  return (
    <>
      <div className="row bor OverViewCards">
        <div className="d-flex col-md-3 p-1 justify-content-center align-items-center">
          <div className="circular-progress">
            <div className="circular-progress2">
              <div className="circular-progress3">
                <span className="progress-value" >
                  0 %
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex col-md-9 bor">
          <div className="d-flex col-md-12 row">
            <div className="flex-row">
              <div className="mt-2 flex-row">
                <p className='myH3 mb-0'>
                  Overview
                </p>
                <p className='mb-1 overViewDate'>Date</p>
              </div>
              <div className="myH3 flex-row">Skin Health Is Average</div>
              <div className="mt-2 myH4 d-flex align-items-end flex-row">
                <p>
                  Dark Spot, Wrinkles, Open Pores, Dark Circles, Pigmentation, Acene
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
