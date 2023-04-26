import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom';
import "../../css/Browser/ResultView.css"

export default function ResultView(props) {
    const canvasRef = useRef();
    const imageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            let resultedCanvasElement = ReactDOM.findDOMNode(canvasRef.current);
            if (resultedCanvasElement) {
                let reCanContext = resultedCanvasElement.getContext('2d');
                let resultedImageTag = ReactDOM.findDOMNode(imageRef.current)
                reCanContext.drawImage(resultedImageTag, 0, 0, resultedCanvasElement.width, resultedCanvasElement.height);
            }
        }, 500);
    }, [])
    return (
        <>
            <div className="container-fluid resultViewMain m-0 p-0">
                <div className="container-fluid d-flex justify-content-center bor " style={{ position: 'relative' }}>
                    <canvas id='resultedCanvas' ref={canvasRef} className='resultedCanvas'></canvas>
                </div>
                <img src='' alt="" ref={imageRef} id="resultedImageId" style={{ display: 'none' }} />
                {/* <img src={'data:image/png;base64,' + props.resultedImage.data.data.analyzed_images['combined_image']} alt="" ref={imageRef} id="resultedImageId" style={{ display: 'none' }} /> */}
            </div>
        </>
    )
}
