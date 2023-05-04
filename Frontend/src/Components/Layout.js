import React from 'react'
import '../css/Browser/Layout.css'
import Overview from './Overview'
import SkinAge from './SkinAge'
import AverageSkinScore from './AverageSkinScore'
import SkinAnalysis from './SkinAnalysis'
import SkinConcern from './SkinConcern'
import Summary from './Summary'
import ResultView from './ResultView/inedx'

export default function Layout() {
    return (
        <>
            <div className="container mt-4 bor">
                <div className="row">
                    <div className="col-md-5">
                        <div className="row">
                            <div className=" row">
                                <Overview/>
                            </div>
                            <div className="mt-2 row">
                                <SkinAge/>
                            </div>
                            <div className="mt-2 d-flex align-items-end row">
                                <AverageSkinScore/>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <SkinAnalysis/>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-7 bor ">
                                <SkinConcern/>
                            </div>
                            <div className="col-md-5 d-flex justify-content-center">
                                <ResultView/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container-fluid">
                               <Summary/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
