import React, { useState } from 'react'
import ImageUploading from 'react-images-uploading';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { baseURL } from '../../Utils/Config'
import pre_Loader from '../../Images/Preloader.gif';
import LiveTryOnIcon from '../../Images/LiveTryOn.svg'
import PhotoUploadIcon from '../../Images/PhotoUpload.svg'
import "../../css/Browser/LaunchPage.css"

export default function LaunchPage() {
    const [getDisplayLoaderState, setDisplayLoaderState] = useState(['none', 'blur(0px)']);
    const navigate = useNavigate();

    async function sendImages(_base64) {
        // const data = {
        //     user_uuid: "9ff2004d-544c-46e5-8032-2c9290b7012b",
        //     image: _base64,
        //     source: "WEB_PORTAL"
        // }
        // const headers = {
        //     'Content-Type': 'application/json',
        // }
        setDisplayLoaderState(['flex', 'blur(8px)']);
        // await axios.post(`${baseURL}/api/v1/analysis/`, data, {
        //     headers: headers
        // }
        // )
        //     .then((_response) => {
        //         setDisplayLoaderState(['none', 'blur(0px)']);
                navigate("/Layout", { replace: true, state: JSON.stringify({ _base64 }) });
        //     })
        //     .catch((error) => {
        //         console.log(error, "error")
        //     })
    }
    function handlePhotoUpload(_event) {
        sendImages(_event[0].data_url);
    }

    function handleLive() {
        navigate('/Webcam');
    }
    return (
        <>
            <div className="mainLaunchPage d-flex justify-content-center align-items-center bor">
                <img src={pre_Loader} alt='' style={{ display: `${getDisplayLoaderState[0]}`, position: 'absolute', height: '100%', width: '50%' }} className="justify-content-center" />
                <div className="row centerDiv bor" style={{ filter: `${getDisplayLoaderState[1]}` }}>
                    <div className='bor d-flex justify-content-center align-items-center flex-row' onClick={handleLive}>
                        <button className='LiveTryON' >
                            <img src={LiveTryOnIcon} className="btn_icon_btn" alt="camera" style={{ background: 'transparent' }} />
                            <p> Live </p>
                        </button>
                    </div>
                    <div className='bor d-flex justify-content-center align-items-center flex-row' >
                        <ImageUploading multiple onChange={handlePhotoUpload} dataURLKey="data_url">
                            {({ onImageUpload }) => (
                                <>
                                    <button className='photoUpload' onClick={onImageUpload}>
                                        <img src={PhotoUploadIcon} className="btn_icon_btn" alt="camera" style={{ background: 'transparent' }} />
                                        <p> Upload Photo </p>
                                    </button>
                                </>
                            )}
                        </ImageUploading>
                    </div>
                </div>
            </div >
        </>
    )
}
