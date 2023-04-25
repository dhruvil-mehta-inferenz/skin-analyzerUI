import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../../css/SkinAnalysis.css'


ChartJS.register(ArcElement, Tooltip, Legend);
export default function SkinAnalysis() {


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



  let progStart = 0;
  let progEnd = 85;
  let speed = 10;


  let p1 = setInterval(() => {
    progStart++;
    pv1[0].textContent = `${progStart} %`;
    cp1[0].style.background = `conic-gradient(#00ff00 ${progStart * 3.6}deg, #ededed 0deg)`;


    pv2[0].textContent = `${progStart} %`;
    cp2[0].style.background = `conic-gradient(#2A98DE ${progStart * 3.6}deg, #ededed 0deg)`;

    pv3[0].textContent = `${progStart} %`;
    cp3[0].style.background = `conic-gradient(#D8004F ${progStart * 3.6}deg, #ededed 0deg)`;

    pv4[0].textContent = `${progStart} %`;
    cp4[0].style.background = `conic-gradient(#9500D7 ${progStart * 3.6}deg, #ededed 0deg)`;

    pv5[0].textContent = `${progStart} %`;
    cp5[0].style.background = `conic-gradient(#7367FF ${progStart * 3.6}deg, #ededed 0deg)`;

    pv6[0].textContent = `${progStart} %`;
    cp6[0].style.background = `conic-gradient(#FF7A00 ${progStart * 3.6}deg, #ededed 0deg)`;



    if (progStart === progEnd) {
      clearInterval(p1)
    }
  }, speed);


  return (
    <>
      <h5 className='d-flex justify-content-center'>Your Skin Analysis</h5>
      <div className="container-fluid bor">
        <div className="col-md-12">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 bor w-25 p-1">
              <div className="SA1_CP1">
                <div className="SA1_CP2">
                  <div className="SA1_CP3">
                    <span className="SA1_PV1" >
                      0 %
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 bor w-25">
              <div className="SA2_CP1">
                <div className="SA2_CP2">
                  <div className="SA2_CP3">
                    <span className="SA2_PV1" >
                      0 %
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 bor w-25">
              <div className="SA3_CP1">
                <div className="SA3_CP2">
                  <div className="SA3_CP3">
                    <span className="SA3_PV1" >
                      0 %
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 bor w-25 p-1">
              <div className="SA4_CP1">
                <div className="SA4_CP2">
                  <div className="SA4_CP3">
                    <span className="SA4_PV1" >
                      0 %
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 bor w-25">
              <div className="SA5_CP1">
                <div className="SA5_CP2">
                  <div className="SA5_CP3">
                    <span className="SA5_PV1" >
                      0 %
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 bor w-25">
              <div className="SA6_CP1">
                <div className="SA6_CP2">
                  <div className="SA6_CP3">
                    <span className="SA6_PV1" >
                      0 %
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
