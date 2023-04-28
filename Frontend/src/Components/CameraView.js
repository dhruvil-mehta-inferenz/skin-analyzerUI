import React from 'react'
import "../css/Browser/CameraView.css"
import { facePositionProgress, lightingProgress, lookStraightProgress } from '../Utils/ProgressBars/progressData';

export default function CameraView() {

    //Lighting Progress
    lightingProgress(25);
    lookStraightProgress(50);
    facePositionProgress(100);

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center bor CameraViewMain">
                <div className="d-flex justify-content-center align-items-start row w-75 h-100 px-3">
                    <canvas className='output_canvas'></canvas>
                    <div className="d-flex justify-content-evenly" style={{ position: "absolute", top: '80%' }}>
                        <div className="row w-50 ">
                            <div className="col-4 ">
                                <div className="d-flex justify-content-between align-items-center featuresDiv">
                                    <div className="col-md-4 bor px-1">
                                        <div className="CV1_CP1">
                                            <div className="CV1_CP2">
                                                <div className="CV1_CP3">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 bor">
                                        <p className='p-0 m-0 bor'>Lighting<br />
                                            <span className='lightScore'><b> Not Good</b></span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 ">
                                <div className="d-flex justify-content-center align-items-center featuresDiv">
                                    <div className="col-md-4 bor">
                                        <div className="CV2_CP1">
                                            <div className="CV2_CP2">
                                                <div className="CV2_CP3">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 bor">
                                        <p className='p-0 m-0 bor'>Look Straight<br />
                                            <span className='lightScore'><b> Ok</b></span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 ">
                                <div className="d-flex justify-content-center align-items-center featuresDiv">
                                <div className="col-md-4 bor">
                                        <div className="CV3_CP1">
                                            <div className="CV3_CP2">
                                                <div className="CV3_CP3">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 bor">
                                        <p className='p-0 m-0 bor'>Face Position<br />
                                            <span className='lightScore'><b> Good</b></span></p>
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
