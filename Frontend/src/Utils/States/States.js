import React, { useState } from 'react'
import MainContext from './indexContext';

const CheckState = (props) => {
    const [getBrightnessState, setBrightnessState] = useState([0, 'Not Good', '#FF0000']);
    const [getLookStraightState, setLookStraightState] = useState([50, 'Ok', '#FFF500']);
    const [getFacePositionState, setFacePositionState] = useState([100, 'Good', '#38D800']);
    const [getRejectedState, setRejectedState] = useState(false);
    const [getConfirmState, setConfirmState] = useState('none');
    const [getConfirmStateInverse, setConfirmStateInverse] = useState('');
    const [getCapturedImage, setCapturedImage] = useState('');
    const [counter, setCounter] = useState(4);
    const [getAllFlag, setAllFlag] = useState(false)
    const [getZState, setZState] = useState(0);
    const [getDisplayLoaderState, setDisplayLoaderState] = useState(['none', 'blur(0px)']);
    const [check, setCheck] = useState('');
    const [getWrinkleState, setWrinkleState] = useState([30, '30%', '#888888']);
    const [getAcneState, setAcneSate] = useState([0, ' 0%', '#888888']);
    const [getPigmentationState, setPigmentationState] = useState([0, ' 0%', '#888888']);
    const [getDarkCircleState, setDarkCircleState] = useState([0, ' 0%', '#888888']);
    const [getOpenporesState, setOpenporesState] = useState([0, ' 0%', '#888888']);
    const [getDarkspotState, setDarkspotState] = useState([0, ' 0%', '#888888']);
    const [getOverviewState, setOverviewState] = useState([0, '0%', "#888888"]);
    const [getCompState, setCompState] = useState('Remedies');
    const [getTipsActiveState, setTipsActiveState] = useState('');
    const [getRemActiveState, setRemActiveState] = useState('activeClass');
    const [getShowState, setShowState] = useState(false);





    return (
        <MainContext.Provider value={{
            getBrightnessState, setBrightnessState,
            getLookStraightState, setLookStraightState,
            getFacePositionState, setFacePositionState,
            getRejectedState, setRejectedState,
            getConfirmStateInverse, setConfirmStateInverse,
            getConfirmState, setConfirmState,
            getCapturedImage, setCapturedImage,
            counter, setCounter,
            getAllFlag, setAllFlag,
            getZState, setZState,
            getDisplayLoaderState, setDisplayLoaderState,
            check, setCheck,
            getWrinkleState, setWrinkleState,
            getAcneState, setAcneSate,
            getPigmentationState, setPigmentationState,
            getDarkCircleState, setDarkCircleState,
            getOpenporesState, setOpenporesState,
            getDarkspotState, setDarkspotState,
            getOverviewState, setOverviewState,
            getCompState, setCompState,
            getTipsActiveState, setTipsActiveState,
            getRemActiveState, setRemActiveState,
            getShowState, setShowState,

        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export default CheckState;