import React, { useContext, useEffect, useRef } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { isMobile } from 'react-device-detect';
import { AiOutlineArrowRight } from 'react-icons/ai';
import mainContext from '../../Utils/States/indexContext';
import '../../css/Browser/SkinAnalysis.css'
import ProgressBar from '../../Utils/ProgressBars/ProgressBar';
import Solutions from '../../Components/Solutions';


ChartJS.register(ArcElement, Tooltip, Legend);
export default function SkinAnalysis() {
  const WrinkleNameRef = useRef("Wrinkles");
  const AcneNameRef = useRef("Acne");
  const PigmentationNameRef = useRef("Pigmentation");
  const DarkCirclesNameRef = useRef("Dark Circles");
  const OpenPoresNameRef = useRef("Open Pores");
  const SpotssNameRef = useRef("Spots");
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
  function handleFeatureDetailClick(_featureaName, _a, _b, _c) {
    getAllContext.setShowState(true);
    // setFeatureNameState([_featureaName, [_a, _b, _c]])
  }
  return (
    <>
      <ProgressBar ref={ref} />
      <h5 className='d-flex justify-content-center'>Your Skin Analysis</h5>
      <div className="container-fluid bor">
        <div className={isMobile ? '' : 'row'}>
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 col-6 py-1">
              <div className=" bor d-flex justify-content-center flex-wrap featDiv">
                <div className="SA1_CP1" style={{ background: `conic-gradient(#00ff00 ${getAllContext.getWrinkleState[0] * 3.6}deg, #ededed 0deg)` }} /*onClick={handleWrinkleClick}*/ onClick={() => handleFeatureDetailClick(WrinkleNameRef.current, getAllContext.getWrinkleState[0], getAllContext.getWrinkleState[1], '#00ff00')}>
                  <div className="SA1_CP2">
                    <div className="SA1_CP3">
                      <span className="SA1_PV1"  >
                        {getAllContext.getWrinkleState[1]}
                      </span>
                    </div>
                  </div>
                </div>
                <span className='mx-4 SA_texts'>{WrinkleNameRef.current}</span>
                <div className={`tipRem mt-1 my-1 mx-1 `} data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <div className="d-flex mx-2 my-1">
                    <div className='col-md-8 tipRem' >
                      Tips & Remedies
                    </div>
                    <div className='col-md-3 align-self-center'>
                      <div className="d-flex justify-content-center align-items-center remArrow ">
                        <AiOutlineArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6 py-1">
              <div className=" bor d-flex justify-content-center flex-wrap featDiv">
                <div className="SA2_CP1" style={{ background: `conic-gradient(#2A98DE ${getAllContext.getAcneState[0] * 3.6}deg, #ededed 0deg)` }} /*onClick={handleAcneClick}*/ onClick={() => handleFeatureDetailClick(AcneNameRef.current, getAllContext.getAcneState[0], getAllContext.getAcneState[1], '#2A98DE')}>
                  <div className="SA2_CP2">
                    <div className="SA2_CP3">
                      <span className="SA2_PV1" >
                        {getAllContext.getAcneState[1]}
                      </span>
                    </div>
                  </div>
                </div>
                <span className='mx-4 SA_texts'>{AcneNameRef.current}</span>
                <div className={`tipRem mt-1 my-1 mx-1 `} data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <div className="d-flex mx-2 my-1">
                    <div className='col-md-8 tipRem' >
                      Tips & Remedies
                    </div>
                    <div className='col-md-3 align-self-center'>
                      <div className="d-flex justify-content-center align-items-center remArrow ">
                        <AiOutlineArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6 py-1">
              <div className=" bor d-flex justify-content-center flex-wrap featDiv">
                <div className="SA3_CP1" style={{ background: `conic-gradient(#D8004F ${getAllContext.getPigmentationState[0] * 3.6}deg, #ededed 0deg)` }} /*onClick={handlePigmentationClick}*/ onClick={() => handleFeatureDetailClick(PigmentationNameRef.current, getAllContext.etPigmentationState[0], getAllContext.getPigmentationState[1], '#D8004F')}>
                  <div className="SA3_CP2">
                    <div className="SA3_CP3">
                      <span className="SA3_PV1" >
                        {getAllContext.getPigmentationState[1]}
                      </span>
                    </div>
                  </div>
                </div>
                <span className='mx-4 SA_texts'>{PigmentationNameRef.current}</span>
                <div className={`tipRem mt-1 my-1 mx-1 `} data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <div className="d-flex mx-2 my-1">
                    <div className='col-md-8 tipRem' >
                      Tips & Remedies
                    </div>
                    <div className='col-md-3 align-self-center'>
                      <div className="d-flex justify-content-center align-items-center remArrow ">
                        <AiOutlineArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6 py-1">
              <div className=" bor d-flex justify-content-center flex-wrap featDiv">
                <div className="SA4_CP1" style={{ background: `conic-gradient(#9500D7 ${getAllContext.getDarkCircleState[0] * 3.6}deg, #ededed 0deg)` }} /*onClick={handleDarkCircleClick}*/ onClick={() => handleFeatureDetailClick(DarkCirclesNameRef.current, getAllContext.etDarkCircleState[0], getAllContext.getDarkCircleState[1], '#9500D7')}>
                  <div className="SA4_CP2">
                    <div className="SA4_CP3">
                      <span className="SA4_PV1" >
                        {getAllContext.getDarkCircleState[1]}
                      </span>
                    </div>
                  </div>
                </div>
                <span className='mx-4 SA_texts'> {DarkCirclesNameRef.current}</span>
                <div className={`tipRem mt-1 my-1 mx-1 `} data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <div className="d-flex mx-2 my-1">
                    <div className='col-md-8 tipRem' >
                      Tips & Remedies
                    </div>
                    <div className='col-md-3 align-self-center'>
                      <div className="d-flex justify-content-center align-items-center remArrow ">
                        <AiOutlineArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6 py-1">
              <div className=" bor d-flex justify-content-center flex-wrap featDiv">
                <div className="SA5_CP1" style={{ background: `conic-gradient(#7367FF ${getAllContext.getOpenporesState[0] * 3.6}deg, #ededed 0deg)` }} /*onClick={handleOpenPoresClick}*/ onClick={() => handleFeatureDetailClick(OpenPoresNameRef.current, getAllContext.etOpenporesState[0], getAllContext.getOpenporesState[1], '#7367FF')}>
                  <div className="SA5_CP2">
                    <div className="SA5_CP3">
                      <span className="SA5_PV1" >
                        {getAllContext.getOpenporesState[1]}
                      </span>
                    </div>
                  </div>
                </div>
                <span className='mx-4 SA_texts'>{OpenPoresNameRef.current}</span>
                <div className={`tipRem mt-1 my-1 mx-1 `} data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <div className="d-flex mx-2 my-1">
                    <div className='col-md-8 tipRem' >
                      Tips & Remedies
                    </div>
                    <div className='col-md-3 align-self-center'>
                      <div className="d-flex justify-content-center align-items-center remArrow ">
                        <AiOutlineArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6 py-1">
              <div className=" bor d-flex justify-content-center flex-wrap featDiv">
                <div className="SA6_CP1" style={{ background: `conic-gradient(#FF7A00 ${getAllContext.getDarkspotState[0] * 3.6}deg, #ededed 0deg)` }} /*onClick={handleDarkSpotsClick}*/ onClick={() => handleFeatureDetailClick(SpotssNameRef.current, getAllContext.etDarkspotState[0], getAllContext.getDarkspotState[1], '#FF7A00')}>
                  <div className="SA6_CP2">
                    <div className="SA6_CP3">
                      <span className="SA6_PV1" >
                        {getAllContext.getDarkspotState[1]}
                      </span>
                    </div>
                  </div>
                </div>
                <span className='mx-4 SA_texts'>{SpotssNameRef.current}</span>
                <div className={`tipRem mt-1 my-1 mx-1 `} data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <div className="d-flex mx-2 my-1">
                    <div className='col-md-8 tipRem' >
                      Tips & Remedies
                    </div>
                    <div className='col-md-3 align-self-center'>
                      <div className="d-flex justify-content-center align-items-center remArrow ">
                        <AiOutlineArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal" id="exampleModal" tabIndex="-1" >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-body">
                <Solutions/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
