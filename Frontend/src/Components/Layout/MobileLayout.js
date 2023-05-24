import React from 'react'
import Overview from '../Overview'
import SkinAge from '../SkinAge'
import AverageSkinScore from '../AverageSkinScore'
import SkinAnalysis from '../SkinAnalysis'
import SkinConcern from '../SkinConcern'
import Summary from '../Summary'
import ResultView from '../ResultView/inedx'

export default function MobileLayout() {
  return (
    <>
      <div className="container mt-4 bor">
        <div className="">
          <ResultView />
        </div>
        <div className="mt-2 bor">
          <Overview/>
        </div>
        <div className="mt-2 bor">
          <SkinAge/>
        </div>
        <div className="mt-2 bor">
          <SkinAnalysis/>
        </div>
        <div className="mt-2 bor">
          <SkinConcern/>
        </div>
        <div className="mt-2 bor">
          <Summary/>
        </div>
        <div className="mt-2 bor">
          <AverageSkinScore/>
        </div>
      </div>
    </>
  )
}
