import React from 'react'
import ResultView from './ResultView/mobileIndex'
import Overview from './Overview/mobileIndex'
import SkinAge from './SkinAge/mobileIndex'
import SkinAnalysis from './SkinAnalysis/mobileIndex'
import SkinConcern from './SkinConcern/mobileIndex'
import Summary from './Summary/mobileIndex'
import AverageSkinScore from './AverageSkinScore/mobileIndex'

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
