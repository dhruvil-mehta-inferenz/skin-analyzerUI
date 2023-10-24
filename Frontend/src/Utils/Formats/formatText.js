//Returns Formated Text
function textFormating(_data) {
    let value = _data.split('_').map((_element) => _element.charAt(0).toUpperCase() + _element.slice(1)).join(' ');
    return value;
}

export { textFormating }