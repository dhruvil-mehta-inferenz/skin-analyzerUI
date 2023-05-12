import React from 'react'
import "../../css/Mobile/CameraView.css"

export default function MobileCameraView() {

    return (
        <>
            <div className="container d-flex justify-content-center bor">
                <div className="CameraViewMainMobile mt-1">
                    <canvas className="bor"></canvas>
                    <div className="d-flex justify-content-center bor mt-2 ">
                        <div className="d-flex justify-content-center w-75 btnLightMobile px-2">
                            <p className='p-0 m-0'>Lighting
                                <br />
                                <span className='lightScoreMobile d-flex justify-content-center'><b> Not Good</b></span>
                            </p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center bor mt-2 ">
                        <div className="d-flex justify-content-center w-75 btnLookMobile px-2">
                            <p className='p-0 m-0'>Lighting
                                <br />
                                <span className='lightScoreMobile d-flex justify-content-center'><b> Ok</b></span>
                            </p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center bor mt-2 ">
                        <div className="d-flex justify-content-center w-75 btnFaceMobile px-2">
                            <p className='p-0 m-0'>Face Position
                                <br />
                                <span className='lightScoreMobile d-flex justify-content-center'><b> Good</b></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
