import React, { useContext, useEffect, useRef } from 'react'
import '../../css/Browser/Overview.css'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import mainContext from '../../Utils/States/indexContext';
import ProgressBar from '../../Utils/ProgressBars/ProgressBar';
import { isMobile } from 'react-device-detect';

ChartJS.register(ArcElement, Tooltip, Legend);
export default function Overview() {

  const ref = useRef();
  const getAllContext = useContext(mainContext);


  useEffect(() => {
    //Funciton for overView progress bar
    ref.current.overviewFunction(10)
  }, [])



  return (
    <>
      <ProgressBar ref={ref} />
      <div className="d-flex bor OverViewCards flex-wrap">
        <div className="d-flex col-md-3  col-4 p-1 justify-content-center align-items-center">
          <div className="circular-progress" style={{ background: `conic-gradient(#FFF500 ${getAllContext.getOverviewState[0] * 3.6}deg, #ededed 0deg)` }}>
            <div className="circular-progress2">
              <div className="circular-progress3">
                <span className="progress-value" >
                  {getAllContext.getOverviewState[1]}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex col-md-7 col-8  bor">
          <div className="d-flex col-md-12">
            <div className="flex-row">
              <div className="mt-2">
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
        <div className="col-md-2 justify-content-center bor d-flex p-0">
          <div className={`align-self-center ${isMobile ? "d-flex mx-5 my-1" : ""}`}>
            <div className=" d-flex align-items-center">
              <div className="excellentIcon"></div>
              <div className="excellentText mx-1">Excellent</div>
            </div>
            <div className=" d-flex align-items-center">
              <div className="goodIcon"></div>
              <div className="goodText mx-1">Good</div>
            </div>
            <div className=" d-flex align-items-center">
              <div className="moderateIcon"></div>
              <div className="moderateText mx-1">Moderate</div>
            </div>
            <div className=" d-flex align-items-center">
              <div className="poorIcon"></div>
              <div className="poorText mx-1">Poor</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
