import React from 'react'
import "../../css/Mobile/Overview.css"

export default function mobileIndex() {
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
            <div className="d-flex bor OverViewCards">
                <div className="d-flex align-items-center col-md-3 bor p-2">
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
                <div className="col-md-9 bor">
                    <div className="flex-row">
                        <div className="mt-2 flex-row">
                            <p className='myH3 mb-0'>
                                Overview
                            </p>
                            <p className='mb-1 overViewDate'>Date</p>
                        </div>
                        <div className="myH3 flex-row">Skin Health Is <span className="OV_skinType"> Average</span></div>
                        <div className="myH4 d-flex align-items-evenly flex-row">
                            <p>
                                <span className="OV_darkSpot">Dark Spot </span>
                                <span className="OV_wrinlkes">Wrinkles </span>
                                <span className="OV_openPores">Open Pores </span>
                                <span className="OV_darkCircles">Dark Circles </span>
                                <span className="OV_pigmentation">Pigmentation </span>
                                <span className="OV_acne">Acene </span>
                            </p>
                        </div>
                        <div className="d-flex justify-content-evenly bor m-0 mb-2">

                            <div className="d-flex align-items-center severeText"><span className="severeIcon mx-1" ></span>Severe</div>
                            <div className="d-flex align-items-center moderateText"><span className="moderateIcon mx-1" ></span>Moderate</div>
                            <div className="d-flex align-items-center mildText"><span className="mildIcon mx-1" ></span>Mild</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
