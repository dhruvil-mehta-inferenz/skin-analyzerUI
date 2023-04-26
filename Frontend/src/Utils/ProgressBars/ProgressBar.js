import React, { forwardRef, useContext, useImperativeHandle } from 'react'
import mainContext from '../States/indexContext';

export default forwardRef(function ProgressBar(props, ref) {
    useImperativeHandle(ref, () => {
        return {
            wrinkleFunction: (_value) => WrinkleProgress(_value),
            overviewFunction: (_value) => overviewHealthProgress(_value),
            acneFunction: (_value) => acneProgress(_value),
            pigmentationFunction: (_value) => pigmentationProgress(_value),
            darkCirclesFunction: (_value) => darkCirclesProgress(_value),
            spotsFunction: (_value) => darkSpotsProgress(_value),
            openPoresFunction: (_value) => openPoresProgress(_value),
        }
    });
    const getAllContext = useContext(mainContext);

    function overviewHealthProgress(_ovPercentage) {
        let progStart = 0;

        let progress = setInterval(() => {
            progStart++;
            getAllContext.setOverviewState([Math.round(progStart), (progStart + "%"), '']);
            if (progStart === _ovPercentage) {
                clearInterval(progress)
            }
        }, 10);
    }

    function WrinkleProgress(_wrPercentage) {

        let progStart = 0;

        let p1 = setInterval(() => {
            progStart++;
            getAllContext.setWrinkleState([Math.round(progStart), (progStart + "%"), '']);
            if (progStart === _wrPercentage) {
                clearInterval(p1)
            }
        }, 10);
        return;
    }

    function acneProgress(_aPercentage) {
        let progStart = 0;

        let p2 = setInterval(() => {
            progStart++;
            getAllContext.setAcneSate([Math.round(progStart), (progStart + "%"), '']);
            if (progStart === _aPercentage) {
                clearInterval(p2)
            }
        }, 10);
    }
    function pigmentationProgress(_aPercentage) {
        let progStart = 0;

        let p3 = setInterval(() => {
            progStart++;
            getAllContext.setPigmentationState([Math.round(progStart), (progStart + "%"), '']);
            if (progStart === _aPercentage) {
                clearInterval(p3)
            }
        }, 10);
    }

    function darkCirclesProgress(_aPercentage) {
        let progStart = 0;

        let p4 = setInterval(() => {
            progStart++;
            getAllContext.setDarkCircleState([Math.round(progStart), (progStart + "%"), '']);
            if (progStart === _aPercentage) {
                clearInterval(p4)
            }
        }, 10);
    }


    function openPoresProgress(_aPercentage) {
        let progStart = 0;

        let p5 = setInterval(() => {
            progStart++;
            getAllContext.setOpenporesState([Math.round(progStart), (progStart + "%"), '']);
            if (progStart === _aPercentage) {
                clearInterval(p5)
            }
        }, 10);
    }

    function darkSpotsProgress(_aPercentage) {
        let progStart = 0;

        let p6 = setInterval(() => {
            progStart++;
            getAllContext.setDarkspotState([Math.round(progStart), (progStart + "%"), '']);
            if (progStart === _aPercentage) {
                clearInterval(p6)
            }
        }, 10);
    }
    return (
        <>
        </>
    )
}
)