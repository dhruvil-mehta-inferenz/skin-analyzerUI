import React, { useContext, useEffect, useRef } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import mainContext from '../../Utils/States/indexContext';
import '../../css/Browser/SkinAnalysis.css'
import ProgressBar from '../../Utils/ProgressBars/ProgressBar';


ChartJS.register(ArcElement, Tooltip, Legend);
export default function SkinAnalysis() {
  const ref = useRef();
  
  const getAllContext = useContext(mainContext);
  useEffect(() => {
    ref.current.wrinkleFunction(77)
    ref.current.acneFunction(66)
    ref.current.openPoresFunction(55)
    ref.current.pigmentationFunction(44)
    ref.current.darkCirclesFunction(33)
    ref.current.spotsFunction(22)
  }, [])
  
  return (
    <>
      <ProgressBar ref={ref} />
      <h5 className='row d-flex justify-content-center'>Your Skin Analysis</h5>
      <div className="row container-fluid bor">
        <div className="col-md-12">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 bor w-25">
              <div className="SA1_CP1" style={{ background: `conic-gradient(#00ff00 ${getAllContext.getWrinkleState[0] * 3.6}deg, #ededed 0deg)` }}>
                <div className="SA1_CP2">
                  <div className="SA1_CP3">
                    <span className="SA1_PV1"  >
                    {getAllContext.getWrinkleState[1]}
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center SA_texts">
                Wrinkles
              </div>
            </div>
            <div className="col-md-4 bor w-25">
              <div className="SA2_CP1"  style={{ background: `conic-gradient(#2A98DE ${getAllContext.getAcneState[0] * 3.6}deg, #ededed 0deg)` }}>
                <div className="SA2_CP2">
                  <div className="SA2_CP3">
                    <span className="SA2_PV1" >
                      {getAllContext.getAcneState[1]}
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center SA_texts">
                Acne
              </div>
            </div>
            <div className="col-md-4 bor w-25">
              <div className="SA3_CP1"  style={{ background: `conic-gradient(#D8004F ${getAllContext.getPigmentationState[0] * 3.6}deg, #ededed 0deg)` }}>
                <div className="SA3_CP2">
                  <div className="SA3_CP3">
                    <span className="SA3_PV1" >
                      {getAllContext.getPigmentationState[1]}
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
              <div className="SA4_CP1"  style={{ background: `conic-gradient(#9500D7 ${getAllContext.getDarkCircleState[0] * 3.6}deg, #ededed 0deg)` }}>
                <div className="SA4_CP2">
                  <div className="SA4_CP3">
                    <span className="SA4_PV1" >
                      {getAllContext.getDarkCircleState[1]}
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center SA_texts">
                Dark Circles
              </div>
            </div>
            <div className="col-md-4 bor w-25">
              <div className="SA5_CP1"  style={{ background: `conic-gradient(#7367FF ${getAllContext.getOpenporesState[0] * 3.6}deg, #ededed 0deg)` }}>
                <div className="SA5_CP2">
                  <div className="SA5_CP3">
                    <span className="SA5_PV1" >
                      {getAllContext.getOpenporesState[1]}
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center SA_texts">
                Open Pores
              </div>
            </div>
            <div className="col-md-4 bor w-25">
              <div className="SA6_CP1"  style={{ background: `conic-gradient(#FF7A00 ${getAllContext.getDarkspotState[0] * 3.6}deg, #ededed 0deg)` }}>
                <div className="SA6_CP2">
                  <div className="SA6_CP3">
                    <span className="SA6_PV1" >
                      {getAllContext.getDarkspotState[1]}
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
