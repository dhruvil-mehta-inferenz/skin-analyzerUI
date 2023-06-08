import React, { useEffect, useState } from 'react'
import '../../css/Browser/Layout.css'
import Overview from '../Overview'
import SkinAge from '../SkinAge'
import AverageSkinScore from '../AverageSkinScore'
import SkinAnalysis from '../SkinAnalysis'
import SkinConcern from '../SkinConcern'
import Summary from '../Summary'
import ResultView from '../ResultView/inedx'
import { useLocation, useNavigate, useNavigationType } from 'react-router-dom'

export default function Layout() {
    const navType = useNavigationType();
    const navigate = useNavigate();
    const [getButtonTextState, setButtonTextState] = useState('Dark Mode');
    const [getModeState, setModeState] = useState({
        color: 'black',
        backgroundColor: '#ECEEF5',
        tileBG: '#FFFFFF',
        tileFont: '#000000',
    })

    function toggleMode() {
        if (getModeState.color == 'black') {
            setModeState({
                color: 'white',
                backgroundColor: '#1E1E1E',
                tileBG: '#1E2029',
                tileFont: '#FFFFFF',
            })
            setButtonTextState('Light Mode')
        }
        else {
            setModeState({
                color: 'black',
                backgroundColor: '#ECEEF5',
                tileBG: '#FFFFFF',
                tileFont: '#000000',
            })
            setButtonTextState('Dark Mode')
        }
    }
    document.body.style.backgroundColor = getModeState.backgroundColor;
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
                <div className="form-check form-switch" style={{ position: 'fixed', right: '10px', top: 0 }}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={toggleMode} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: getModeState.color }}>{getButtonTextState}</label>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="row">
                            <div className=" row">
                                <Overview analyzedData={state?._response} tileBackground={getModeState.tileBG} tileFontColor={getModeState.tileFont} />
                            </div>
                            <div className="mt-2 row">
                                <SkinAge analyzedData={state?._response} tileBackground={getModeState.tileBG} tileFontColor={getModeState.tileFont} />
                            </div>
                            <div className="mt-2 d-flex align-items-end row">
                                <AverageSkinScore analyzedData={state?._response} tileBackground={getModeState.tileBG} tileFontColor={getModeState.tileFont} />
                            </div>
                        </div>
                        <div className="row mt-2 d-flex">
                            <div className="row">
                                <SkinConcern analyzedData={state?._response} tileBackground={getModeState.tileBG} tileFontColor={getModeState.tileFont} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-5 d-flex justify-content-center">
                                <ResultView analyzedData={state?._response} />
                            </div>
                            <div className="col-md-7 bor ">
                                <SkinAnalysis analyzedData={state?._response} bodyBackground={getModeState.backgroundColor} tileBackground={getModeState.tileBG} tileFontColor={getModeState.tileFont} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="container-fluid">
                                <Summary analyzedData={state?._response} tileBackground={getModeState.tileBG} tileFontColor={getModeState.tileFont} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
