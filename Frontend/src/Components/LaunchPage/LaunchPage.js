import React, { useEffect, useState } from 'react'
import ImageUploading from 'react-images-uploading';
import { isMobile } from 'react-device-detect';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { baseURL } from '../../Utils/Config'
import pre_Loader from '../../Images/Preloader.gif';
import LiveTryOnIcon from '../../Images/LiveTryOn.svg'
import PhotoUploadIcon from '../../Images/PhotoUpload.svg'
import "../../css/Browser/LaunchPage.css"
import { ListCategories, ListSkinIssues } from '../../Utils/API';

export default function LaunchPage() {
    const [getDisplayLoaderState, setDisplayLoaderState] = useState(['flex', 'blur(8px)']);
    const [getAllIssuesState, setAllIssuesState] = useState([]);
    const [getAllScoreCategoriesState, setAllScoreCategoriesState] = useState([]);
    let loaderHeight = '100%'
    const navigate = useNavigate();

    async function loadData() {
        ListSkinIssues().then((_resp) => {
            setAllIssuesState(_resp);
        });
        ListCategories().then((_resp) => {
            setAllScoreCategoriesState(_resp);
        })
    }

    async function sendImages(_base64) {
        _base64 = _base64.split(",")[1];
        setDisplayLoaderState(['flex', 'blur(8px)']);
        setTimeout(() => {
            setDisplayLoaderState(['none', 'blur(0px)']);
            navigate("/Layout", { replace: true, state: JSON.stringify({ _base64, getAllIssuesState, getAllScoreCategoriesState }) });
        }, 1500);
    }
    
    function handlePhotoUpload(_event) {
        sendImages(_event[0].data_url);
    }

    function handleLive() {
        navigate('/Webcam');
    }
    if (isMobile) {
        loaderHeight = ''
    }
    useEffect(() => {
        if (getAllIssuesState.length > 0 && getAllScoreCategoriesState.length > 0) {
            setDisplayLoaderState(['none', 'blur(0px)']);
        }
    }, [getAllIssuesState, getAllScoreCategoriesState])


    useEffect(() => {
        if (getAllIssuesState.length === 0) {
            loadData();
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="mainLaunchPage d-flex justify-content-center align-items-center bor">
                <img src={pre_Loader} alt='' style={{ display: `${getDisplayLoaderState[0]}`, position: 'absolute', height: loaderHeight, width: '50%', zIndex: "1" }} className="justify-content-center" />
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
