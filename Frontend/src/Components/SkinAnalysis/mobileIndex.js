import React from 'react'
import "../../css/Mobile/SkinAnalysis.css"


export default function mobileIndex() {
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


    let speed = 10;

    function wrinkleProgress(_wrPercentage) {
        let progStart = 0;

        let p1 = setInterval(() => {
            progStart++;
            pv1[0].textContent = `${progStart} %`;
            cp1[0].style.background = `conic-gradient(#00ff00 ${progStart * 3.6}deg, #ededed 0deg)`;
            if (progStart === _wrPercentage) {
                clearInterval(p1)
            }
        }, speed);
    }


    function acneProgress(_aPercentage) {
        let progStart = 0;

        let p2 = setInterval(() => {
            progStart++;
            pv2[0].textContent = `${progStart} %`;
            cp2[0].style.background = `conic-gradient(#2A98DE ${progStart * 3.6}deg, #ededed 0deg)`;
            if (progStart === _aPercentage) {
                clearInterval(p2)
            }
        }, speed);
    }


    function pigmentationProgress(_aPercentage) {
        let progStart = 0;

        let p3 = setInterval(() => {
            progStart++;
            pv3[0].textContent = `${progStart} %`;
            cp3[0].style.background = `conic-gradient(#D8004F ${progStart * 3.6}deg, #ededed 0deg)`;
            if (progStart === _aPercentage) {
                clearInterval(p3)
            }
        }, speed);
    }

    function darkCirclesProgress(_aPercentage) {
        let progStart = 0;

        let p4 = setInterval(() => {
            progStart++;
            pv4[0].textContent = `${progStart} %`;
            cp4[0].style.background = `conic-gradient(#9500D7 ${progStart * 3.6}deg, #ededed 0deg)`;
            if (progStart === _aPercentage) {
                clearInterval(p4)
            }
        }, speed);
    }


    function openPoresProgress(_aPercentage) {
        let progStart = 0;

        let p5 = setInterval(() => {
            progStart++;
            pv5[0].textContent = `${progStart} %`;
            cp5[0].style.background = `conic-gradient(#7367FF ${progStart * 3.6}deg, #ededed 0deg)`;
            if (progStart === _aPercentage) {
                clearInterval(p5)
            }
        }, speed);
    }

    function darkSpotsProgress(_aPercentage) {
        let progStart = 0;

        let p6 = setInterval(() => {
            progStart++;
            pv6[0].textContent = `${progStart} %`;
            cp6[0].style.background = `conic-gradient(#FF7A00 ${progStart * 3.6}deg, #ededed 0deg)`;
            if (progStart === _aPercentage) {
                clearInterval(p6)
            }
        }, speed);
    }




      wrinkleProgress(95);
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