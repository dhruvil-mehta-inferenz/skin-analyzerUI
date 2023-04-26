import React from 'react'
import "../../css/Mobile/SkinAnalysis.css"
import { acneProgress, darkCirclesProgress, darkSpotsProgress, openPoresProgress, pigmentationProgress, WrinkleProgress } from '../../Utils/ProgressBars/progressData';


export default function mobileIndex() {

    //Functions For Progress Bars 
    WrinkleProgress(95);
    acneProgress(35);
    pigmentationProgress(55);
    darkCirclesProgress(45);
    openPoresProgress(25);
    darkSpotsProgress(65);
    return (
        <>
            <h5 className='d-flex justify-content-center'>Your Skin Analysis</h5>
            <div className="container-fluid bor">
                <div className="row m-0">
                    <div className="d-flex justify-content-center">
                        <div className="col-6 bor">
                            <div className="d-flex bor justify-content-center">
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
                            <div className="d-flex bor justify-content-center">
                                <span className="SA_texts">
                                    Wrinkles
                                </span>
                            </div>
                        </div>
                        <div className=" col-6 bor">
                            <div className="d-flex bor justify-content-center">
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
                            <div className="d-flex bor justify-content-center">
                                <span className="SA_texts">
                                    Acne
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="col-6 bor">
                            <div className="d-flex bor justify-content-center">
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
                            <div className="d-flex bor justify-content-center">
                                <span className="SA_texts">
                                    Pigmentation
                                </span>
                            </div>
                        </div>
                        <div className=" col-6 bor">
                            <div className="d-flex bor justify-content-center">
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
                            <div className="d-flex bor justify-content-center">
                                <span className="SA_texts">
                                    Dark Circles
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="col-6 bor">
                            <div className="d-flex bor justify-content-center">
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
                            <div className="d-flex bor justify-content-center">
                                <span className="SA_texts">
                                    Open Pores
                                </span>
                            </div>
                        </div>
                        <div className=" col-6 bor">
                            <div className="d-flex bor justify-content-center">
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
                            <div className="d-flex bor justify-content-center">
                                <span className="SA_texts">
                                    Dark Spots
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
