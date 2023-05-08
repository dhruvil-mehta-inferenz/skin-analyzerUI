
//Brightness Calculation
function calculateBrightness(_imageData) {
    let sum = 0;
    for (let i = 0; i < _imageData.length; i += 4) {
        const r = _imageData[i];
        const g = _imageData[i + 1];
        const b = _imageData[i + 2];
        sum += 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }
    const brightness = sum / (_imageData.length / 4);
    return brightness; //160-170 (Range of Lightening)
}


//Look Straight Calculation
function calculateLookStraight(_landmarks, _canvasElement) {
    let lookStraightValue;
    lookStraightValue = Math.abs(((_landmarks[123].x * _canvasElement.width) - (_landmarks[352].x * _canvasElement.width)));
    return lookStraightValue;//170 - 190 (Range of Look Straight)
}


//Face Position Calculation
function calculateFacePosition(_landmarks, _results,_FACEMESH_LEFT_IRIS) {
    var irisLeftMinX = -1;
    var irisLeftMaxX = -1;
    var width = _results.image.width;
    var height = _results.image.height;
    for (const point of _FACEMESH_LEFT_IRIS) {
        var point0 = _landmarks[point[0]];
        if (irisLeftMinX === -1 || point0.x * width < irisLeftMinX) {
            irisLeftMinX = point0.x * width;
        }
        if (irisLeftMaxX === -1 || point0.x * width > irisLeftMaxX) {
            irisLeftMaxX = point0.x * width;
        }
    }
    var dx = irisLeftMaxX - irisLeftMinX;
    var dX = 11.7;
    var normalizedFocaleX = 1.40625;
    var fx = Math.min(width, height) * normalizedFocaleX;
    var dZ = (fx * (dX / dx)) / 10.0;
    dZ = dZ.toFixed(2);
    return dZ; //43-46 (Range of Face Position)
}


export {
    calculateBrightness,
    calculateLookStraight,
    calculateFacePosition,
}