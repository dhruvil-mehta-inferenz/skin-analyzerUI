import React from 'react'
import '../../css/Overview.css'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
export default function Overview() {

  let circularProgress = document.getElementsByClassName('circular-progress');
  let progressValue = document.getElementsByClassName('progress-value');
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
    

  overviewHealthProgress(43);

  
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
        <div className="d-flex col-md-7 bor">
          <div className="d-flex col-md-12 row">
            <div className="flex-row">
              <div className="mt-2 flex-row">
                <p className='myH3 mb-0'>
                  Overview
                </p>
                <p className='mb-1 overViewDate'>Date</p>
              </div>
              <div className="myH3 flex-row">Skin Health Is <span className="OV_skinType"> Average</span></div>
              <div className="mt-2 myH4 d-flex align-items-end flex-row">
                <p>
                  <span className="OV_darkSpot">Dark Spot </span>
                  <span className="OV_wrinlkes">Wrinkles </span>
                  <span className="OV_openPores">Open Pores </span>
                  <span className="OV_darkCircles">Dark Circles </span>
                  <span className="OV_pigmentation">Pigmentation </span>
                  <span className="OV_acne">Acene </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 bor d-flex">
          <div className="align-self-center bor" >
            <div className="bor d-flex align-items-center">
              <div className="severeIcon"></div>
              <div className="severeText mx-1">Severe</div>
            </div>
            <div className="bor d-flex align-items-center">
              <div className="moderateIcon"></div>
              <div className="moderateText mx-1">Moderate</div>
            </div>
            <div className="bor d-flex align-items-center">
              <div className="mildIcon"></div>
              <div className="mildText mx-1">Mild</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
