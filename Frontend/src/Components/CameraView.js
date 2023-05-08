import React, { useEffect, useRef } from 'react'
import { FaceMesh, FACEMESH_LEFT_IRIS } from '@mediapipe/face_mesh'
import "../css/Browser/CameraView.css"
import * as cam from '@mediapipe/camera_utils'
import Webcam from 'react-webcam'
import { facePositionProgress, lightingProgress, lookStraightProgress } from '../Utils/ProgressBars/progressData';
import faceBoxReference from '../Images/Face_reference.png';
import { calculateBrightness, calculateFacePosition, calculateLookStraight } from '../Utils/ImageProcess/faceParameters'
import { sendImages } from '../Utils/API'
import {useNavigate} from 'react-router-dom'


export default function CameraView() {
    let getResults, getLandmarks, setBrightness, setLookStraight, setFacePosition, lightFlag = 0, lookFlag = 0, faceFlag = 0, isClicked = false;
    let imageFrame = document.getElementsByClassName('output_canvas');


    const webcamRef = useRef(null)
    const canvasRef = useRef(null)
    const canvasWithImage = useRef(null)
    const navigate = useNavigate();


    //Image Tag for Face reference image to be drawn on canvas
    const Imagetag = document.createElement('img');
    Imagetag.height = 100;
    Imagetag.width = 100;
    Imagetag.src = faceBoxReference;



    function onResults(_results) {
        getResults = _results;

        //Set the height and width of canvas
        canvasRef.current.width = webcamRef.current.video.videoWidth;
        canvasRef.current.height = webcamRef.current.video.videoHeight;
        canvasWithImage.current.width = webcamRef.current.video.videoWidth;
        canvasWithImage.current.height = webcamRef.current.video.videoHeight;

        const canvasElement = canvasRef.current;
        const canvasWithImgElement = canvasRef.current;
        const canvasWithImgCtx = canvasWithImgElement.getContext('2d');
        const canvasCtx = canvasElement.getContext('2d');

        canvasCtx.save();
        canvasWithImgCtx.save();

        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        canvasWithImgCtx.clearRect(0, 0, canvasWithImgElement.width, canvasWithImgElement.height);

        canvasCtx.drawImage(_results.image, 0, 0, canvasElement.width, canvasElement.height);
        canvasWithImgCtx.drawImage(Imagetag, 0, 0, canvasWithImgElement.width, canvasWithImgElement.height);

        const imageData = canvasCtx.getImageData(0, 0, canvasElement.width, canvasElement.height);


        const video = document.getElementById("reactWebcam")
        const stream = video.srcObject

        // Stop the camera stream
        function stopCamera() {
            stream.getTracks().forEach(function (track) {
                track.stop();
            });
        }

        const getImageBase64 = () => {
            canvasWithImgCtx.clearRect(0, 0, canvasWithImgElement.width, canvasWithImgElement.height);
            canvasCtx.drawImage(_results.image, 0, 0, canvasElement.width, canvasElement.height);
            const canvas = imageFrame[0];
            const link = document.createElement('a');
            link.download = 'canvas.jpg';
            link.href = canvas.toDataURL('image/jpeg', 0.8);
            isClicked = true
            stopCamera();
            return link.href;
        };

        if (_results.multiFaceLandmarks && _results.multiFaceLandmarks.length > 0) {
            for (const landmarks of _results.multiFaceLandmarks) {
                getLandmarks = landmarks;
            }

            if ((lightFlag === 1) && (lookFlag === 1) && (faceFlag === 1)) {
                if (!isClicked) {
                    const capturedImage = getImageBase64();
                    const responseData = sendImages(capturedImage);
                    if (responseData) {
                        navigate("/Layout", { replace: true, state: JSON.stringify({ responseData }) });
                    }
                    lightFlag = 0;
                    lookFlag = 0;
                    faceFlag = 0;
                }
                return;
            }
            else {
                //Getting Brightness
                setBrightness = calculateBrightness(imageData.data);

                //Getting Straight Look
                setLookStraight = calculateLookStraight(getLandmarks, canvasElement);

                //Getting Face Position
                setFacePosition = calculateFacePosition(getLandmarks, getResults, FACEMESH_LEFT_IRIS);
            }


            //Lighting Check
            if (setBrightness > 150 && setBrightness < 165) {
                lightingProgress(50, 'OK', '#FFF500');
                lightFlag = 1;
            }
            else if (setBrightness > 165 && setBrightness < 215) {
                lightingProgress(100, 'Good', '#38D800');
                lightFlag = 1;
            }
            else if (setBrightness > 215 || setBrightness < 150) {
                lightingProgress(25, 'Not Good', '#FF0000');
                lightFlag = -1;
            }

            //Look Straight Check
            if (setLookStraight > 160 && setLookStraight < 170) {
                lookStraightProgress(50, 'Look Straight', '#FFF500');
                lookFlag = 1;
            }
            else if (setLookStraight > 170 && setLookStraight < 190) {
                lookStraightProgress(100, 'Good', '#38D800');
                lookFlag = 1;
            }
            else if (setLookStraight > 190 || setLookStraight < 165) {
                lookStraightProgress(25, 'Not Good', '#FF0000');
                lookFlag = -1
            }


            //Face Position Check
            if (setFacePosition > 42 && setFacePosition < 47) {
                facePositionProgress(100, 'Good', '#38D800');
                faceFlag = 1;
            }
            else if (setFacePosition > 47 || setFacePosition < 42) {
                facePositionProgress(25, 'Not Good', '#FF0000');
                faceFlag = -1;
            }

        }
        else {
            console.log("Face Not found");
        }
    }





    useEffect(() => {
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
    })

    return (
        <>
            <Webcam
                ref={webcamRef}
                id="reactWebcam"
                style={{
                    display: 'none',
                }}
            />
            <div className="container d-flex justify-content-center align-items-center bor CameraViewMain">
                <div className="d-flex justify-content-center align-items-start row w-75 h-100 px-3">
                    <canvas ref={canvasRef} className='output_canvas' ></canvas>
                    <canvas ref={canvasWithImage} className='gl_Canvas'></canvas>
                    <div className="d-flex justify-content-evenly" style={{ position: "absolute", top: '80%' }}>
                        <div className="row w-50 ">
                            <div className="col-4 ">
                                <div className="d-flex justify-content-between align-items-center featuresDiv p-2">
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
                                            <span className='lightningScore styleScore'>Not Good</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 ">
                                <div className="d-flex justify-content-between align-items-center featuresDiv p-2">
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
                                            <span className='lookstraightScore styleScore'><b> Ok</b></span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 ">
                                <div className="d-flex justify-content-between align-items-center featuresDiv p-2">
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
                                            <span className='facepositionScore styleScore'><b> Good</b></span></p>
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
