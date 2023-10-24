import React, { useContext, useEffect, useRef } from 'react'
import "../../css/Mobile/CameraView.css"
import { useNavigate } from 'react-router-dom';
import { FaceMesh, FACEMESH_LEFT_IRIS } from '@mediapipe/face_mesh'
import * as cam from '@mediapipe/camera_utils'
import { GrStatusGood } from 'react-icons/gr';
import { GiCancel } from 'react-icons/gi';
import mainContext from '../../Utils/States/indexContext';
import faceBoxReference from '../../Images/Face_reference.png';
import pre_Loader from '../../Images/Preloader.gif';
import { calculateBrightness, calculateFacePosition, calculateLookStraight } from '../../Utils/ImageProcess/faceParameters';
import Webcam from 'react-webcam';

export default function MobileCameraView() {
    let getResults, getLandmarks, setBrightness, setLookStraight, setFacePosition, lightFlag = 0, lookFlag = 0, faceFlag = 0, canvasElement, canvasWithImgElement, canvasWithImgCtx, canvasCtx, loaderHeight = '100%';
    // eslint-disable-next-line 
    var isClicked = false;
    let imageFrame = document.getElementsByClassName('output_canvasMobile');


    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const canvasWithImage = useRef(null);
    const A_name = useRef('');
    const navigate = useNavigate();
    const getAllContext = useContext(mainContext);

    //Image Tag for Face reference image to be drawn on canvas
    const Imagetag = document.createElement('img');
    Imagetag.height = 100;
    Imagetag.width = 100;
    Imagetag.src = faceBoxReference;


    function initState() {
        getAllContext.setBrightnessState([0, 'Not Good', '#FF0000']);
        getAllContext.setLookStraightState([50, 'Ok', '#FFF500']);
        getAllContext.setFacePositionState([100, 'Good', '#38D800']);
        getAllContext.setCapturedImage('');
        getAllContext.setCounter(4);
        getAllContext.setAllFlag(false);
        getAllContext.setRejectedState(false);
        getAllContext.setZState(0);
        getAllContext.setConfirmState('none');
        getAllContext.setConfirmStateInverse('');
        getAllContext.setDisplayLoaderState(['none', 'blur(0px)']);
    }

    async function HandleProcced(_confirmedImage) {
        getAllContext.setDisplayLoaderState(['flex', 'blur(8px)']);
        navigate("/Layout", { replace: true, state: JSON.stringify('{ _response }') });
    }

    function handleReject() {
        getAllContext.setRejectedState(true);
    }
    // Stop the camera stream
    function stopCamera() {
        const video = document.getElementById("reactWebcam")
        const stream = video.srcObject
        stream.getTracks().forEach(function (track) {
            track.stop();
        });
    }
    const getImageBase64 = (_canvasCtx, _canvasWithImgCtx, _canvasElement, _canvasWithImgElement, _getResults) => {
        _canvasWithImgCtx.clearRect(0, 0, _canvasWithImgElement.width, _canvasWithImgElement.height);
        _canvasCtx.drawImage(_getResults.image, 0, 0, _canvasElement.width, _canvasElement.height);
        const canvas = imageFrame[0];
        const link = document.createElement('a');
        link.download = 'canvas.jpg';
        link.href = canvas.toDataURL('image/jpeg', 0.8);
        isClicked = true
        getAllContext.setZState(0);
        getAllContext.setConfirmState('flex');
        getAllContext.setConfirmStateInverse('none');
        getAllContext.setCapturedImage('' + link.href);
        stopCamera();
        _canvasCtx.drawImage(link.href, 0, 0, _canvasElement.width, _canvasElement.height);
        return link.href;
    };
    function onResults(_results) {
        getResults = _results;

        //Set the height and width of canvas
        canvasRef.current.width = webcamRef.current.video.videoWidth;
        canvasRef.current.height = webcamRef.current.video.videoHeight;
        canvasWithImage.current.width = webcamRef.current.video.videoWidth;
        canvasWithImage.current.height = webcamRef.current.video.videoHeight;

        canvasElement = canvasRef.current;
        canvasWithImgElement = canvasRef.current;
        canvasWithImgCtx = canvasWithImgElement.getContext('2d');
        canvasCtx = canvasElement.getContext('2d');

        canvasCtx.save();
        canvasWithImgCtx.save();

        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        canvasWithImgCtx.clearRect(0, 0, canvasWithImgElement.width, canvasWithImgElement.height);

        canvasCtx.drawImage(_results.image, 0, 0, canvasElement.width, canvasElement.height);
        canvasWithImgCtx.drawImage(Imagetag, 0, 0, canvasWithImgElement.width, canvasWithImgElement.height);

        const imageData = canvasCtx.getImageData(0, 0, canvasElement.width, canvasElement.height);

        if (_results.multiFaceLandmarks && _results.multiFaceLandmarks.length > 0) {
            for (const landmarks of _results.multiFaceLandmarks) {
                getLandmarks = landmarks;
            }

            if ((lightFlag === 1) && (lookFlag === 1) && (faceFlag === 1)) {
                getAllContext.setZState(1);
                getAllContext.setAllFlag(true);
            }

            setBrightness = calculateBrightness(imageData.data);//Getting Brightness
            setLookStraight = calculateLookStraight(getLandmarks, canvasElement);//Getting Straight Look
            setFacePosition = calculateFacePosition(getLandmarks, getResults, FACEMESH_LEFT_IRIS);//Getting Face Position

            //Lighting Check
            if (setBrightness > 150 && setBrightness < 165) {
                getAllContext.setBrightnessState([50, 'Ok', '#FFF500']);
                lightFlag = 1;
            }
            else if (setBrightness > 165 && setBrightness < 215) {
                getAllContext.setBrightnessState([100, 'Good', '#38D800']);
                lightFlag = 1;
            }
            else if (setBrightness > 215 || setBrightness < 150) {
                getAllContext.setBrightnessState([0, 'Not Good', '#FF0000']);
                lightFlag = -1;
                A_name.current = ""
                getAllContext.setZState(0);
                getAllContext.setCounter(3);
                getAllContext.setAllFlag(false);
            }


            //Look Straight Check
            if (setLookStraight > 160 && setLookStraight < 170) {
                getAllContext.setLookStraightState([50, 'Ok', '#FFF500']);
                lookFlag = 1;
            }
            else if (setLookStraight > 170 && setLookStraight < 190) {
                getAllContext.setLookStraightState([100, 'Good', '#38D800']);
                lookFlag = 1;
            }
            else if (setLookStraight > 190 || setLookStraight < 165) {
                getAllContext.setLookStraightState([0, 'Not Good', '#FF0000']);
                lookFlag = -1
                A_name.current = ""
                getAllContext.setZState(0);
                getAllContext.setCounter(3);
                getAllContext.setAllFlag(false);
            }


            //Face Position Check
            if (setFacePosition > 42 && setFacePosition < 47) {
                getAllContext.setFacePositionState([100, 'Good', '#38D800']);
                faceFlag = 1;
            }
            else if (setFacePosition > 47 || setFacePosition < 42) {
                getAllContext.setFacePositionState([0, 'Not Good', '#FF0000']);
                faceFlag = -1;
                A_name.current = ""
                getAllContext.setZState(0);
                getAllContext.setCounter(3);
                getAllContext.setAllFlag(false);
            }


            if (A_name.current === "1") {
                getImageBase64(canvasCtx, canvasWithImgCtx, canvasElement, canvasWithImgElement, getResults);
                lightFlag = 0;
                lookFlag = 0;
                faceFlag = 0;
            }
        }
        else {
            console.log("Face Not found");
        }
    }





    useEffect(() => {
        initState();
        var camera = null
        const faceMesh = new FaceMesh({
            locateFile: file => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
            }
        })

        faceMesh.setOptions({
            selfieMode: true,
            maxNumFaces: 1,
            refineLandmarks: true,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        })
        faceMesh.onResults(onResults)
        if (
            typeof webcamRef.current !== 'undefined' &&
            webcamRef.current !== null
        ) {
            camera = new cam.Camera(webcamRef.current.video, {
                onFrame: async () => {
                    await faceMesh.send({ image: webcamRef.current.video })
                },
                width: 640,
                height: 480
            })
            camera.start()
        }
        // eslint-disable-next-line
    }, [getAllContext.getRejectedState])

    useEffect(() => {
        getAllContext.counter > 0 && setTimeout(() => {
            getAllContext.setCounter(getAllContext.counter - 1);
            if (getAllContext.counter === 1) {
                A_name.current = "1"
              }
        }, 1000);
        // eslint-disable-next-line
    }, [getAllContext.getAllFlag && getAllContext.counter]);

    return (
        <>
            <Webcam
                ref={webcamRef}
                id="reactWebcam"
                style={{
                    display: 'none',
                }}
            />
            <div className="container d-flex justify-content-center bor">
                <div style={{ zIndex: `${getAllContext.getZState}` }} className="countDownTimer d-flex justify-content-center" >{getAllContext.counter}</div>
                <div className="CameraViewMainMobile mt-1">
                    <canvas ref={canvasRef} className='output_canvasMobile' style={{ filter: `${getAllContext.getDisplayLoaderState[1]}` }}  ></canvas>
                    <canvas ref={canvasWithImage} className='gl_Canvas'></canvas>
                    <img src={pre_Loader} id='loaderId'alt='loader' style={{ display: `${getAllContext.getDisplayLoaderState[0]}`, position: 'absolute', height: loaderHeight, width: '50%'  }} className="justify-content-center" />
                    <div className="justify-content-center bor" style={{ display: `${getAllContext.getConfirmState}` }}>
                        <div className='col-md-6 mx-' >
                            <div className="d-flex justify-content-center align-items-center confirmationDiv bor" onClick={handleReject} style={{ cursor: 'pointer' }}>
                                <span className='bor mx-1 my-3'><GiCancel /><br />
                                </span>
                                <span className='styleScore mx-1'>Retake</span>
                            </div>
                        </div>
                        <div className='col-md-6 mx-' >
                            <div className="d-flex justify-content-center align-items-center confirmationDiv bor" onClick={() => { HandleProcced(getAllContext.getCapturedImage) }} style={{ cursor: 'pointer' }}>
                                <span className='bor mx-1 my-3'><GrStatusGood /><br />
                                </span>
                                <span className='styleScore mx-1'>Proceed</span>
                            </div>
                        </div>
                    </div>
                    <div className="" style={{ display: `${getAllContext.getConfirmStateInverse}` }}>
                        <div className="d-flex justify-content-center bor mt-2 " >
                            <div className="d-flex justify-content-center w-75 btnLightMobile px-2" style={{ backgroundColor: `${getAllContext.getBrightnessState[2]} ` }}>
                                <p className='p-0 m-0'>Lighting
                                    <br />
                                    <span className='lightScoreMobile d-flex justify-content-center'><b> {getAllContext.getBrightnessState[1]}</b></span>
                                </p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center bor mt-2 ">
                            <div className="d-flex justify-content-center w-75 btnLookMobile px-2" style={{ backgroundColor: `${getAllContext.getLookStraightState[2]} ` }}>
                                <p className='p-0 m-0'>Look Straight
                                    <br />
                                    <span className='lightScoreMobile d-flex justify-content-center'><b> {getAllContext.getLookStraightState[1]}</b></span>
                                </p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center bor mt-2 ">
                            <div className="d-flex justify-content-center w-75 btnFaceMobile px-2" style={{ backgroundColor: `${getAllContext.getFacePositionState[2]} ` }}>
                                <p className='p-0 m-0'>Face Position
                                    <br />
                                    <span className='lightScoreMobile d-flex justify-content-center'><b> {getAllContext.getFacePositionState[1]}</b></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
