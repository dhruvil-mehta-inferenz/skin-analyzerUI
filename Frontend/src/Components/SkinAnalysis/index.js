import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../../css/Browser/SkinAnalysis.css'
import { acneProgress, darkCirclesProgress, darkSpotsProgress, openPoresProgress, pigmentationProgress, wrinkleProgress } from '../../Utils/ProgressBars/progressData';


ChartJS.register(ArcElement, Tooltip, Legend);
export default function SkinAnalysis() {

  //Functions For Progress Bars 
  wrinkleProgress(95);
  acneProgress(35);
  pigmentationProgress(55);
  darkCirclesProgress(45);
  openPoresProgress(25);
  darkSpotsProgress(65);
  return (
    <>
      <h5 className='row d-flex justify-content-center'>Your Skin Analysis</h5>
      <div className="row container-fluid bor">
        <div className="col-md-12">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 bor w-25">
              <div className="SA1_CP1">
                <div className="SA1_CP2">
                  <div className="SA1_CP3">
                    <span className="SA1_PV1" >
                      0 %
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center SA_texts">
                Wrinkles
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
              <div className="d-flex justify-content-center SA_texts">
                Acne
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
              <div className="d-flex justify-content-center SA_texts">
                Pigmentation
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row d-flex justify-content-center SA_texts">
            <div className="col-md-4 bor w-25">
              <div className="SA4_CP1">
                <div className="SA4_CP2">
                  <div className="SA4_CP3">
                    <span className="SA4_PV1" >
                      0 %
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center SA_texts">
                Dark Circles
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
              <div className="d-flex justify-content-center SA_texts">
                Open Pores
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
              <div className="d-flex justify-content-center SA_texts">
                Dark Spots
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
