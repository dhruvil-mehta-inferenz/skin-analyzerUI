import React, { useEffect } from 'react'
import Overview from '../Overview'
import SkinAge from '../SkinAge'
import AverageSkinScore from '../AverageSkinScore'
import SkinAnalysis from '../SkinAnalysis'
import SkinConcern from '../SkinConcern'
import Summary from '../Summary'
import ResultView from '../ResultView/inedx'
import { useLocation, useNavigate, useNavigationType } from 'react-router-dom'

export default function MobileLayout() {
  const navType = useNavigationType();
    const navigate = useNavigate();
    useEffect(() => {
        if (navType === 'POP') {
            navigate('/');
        }
    }, [])

    let { state } = useLocation();
    if (state) {
        state = JSON.parse(state);
    }
  return (
    <>
      <div className="container mt-4 bor">
        <div className="">
          <ResultView resultedImage = {state._response}/>
        </div>
        <div className="mt-2 bor">
          <SkinAnalysis resultedImage = {state._response}/>
        </div>
        <div className="mt-2 bor">
          <SkinAge resultedImage = {state._response}/>
        </div>
        <div className="mt-2 bor">
          <Overview analyzedData={ state._response}/>
        </div>
        <div className="mt-2 bor">
          <SkinConcern resultedImage = {state._response}/>
        </div>
        <div className="mt-2 bor">
          <Summary resultedImage = {state._response}/>
        </div>
        <div className="mt-2 bor">
          <AverageSkinScore resultedImage = {state._response}/>
        </div>
      </div>
    </>
  )
}
