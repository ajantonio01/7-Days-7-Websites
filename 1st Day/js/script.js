//Get the id of the box, so that JavaScript can recognize this element
let borderModify = document.getElementById('borderModify');

//Get the id of the input box that displays results after modifying the border-radius values
let resultBorderRadius = document.getElementById('resultCSS');

//Get 4 border-radius 
let inputTopLeft = document.getElementById('top-left');
let inputTopRight = document.getElementById('top-right');
let inputBottomLeft = document.getElementById('bottom-left');
let inputBottomRight = document.getElementById('bottom-right');

//Modify the 4 border-radius values of the box
modifyBorderRadius = () => {
    borderModify.style.borderTopLeftRadius = inputTopLeft.value + 'px';
    borderModify.style.borderTopRightRadius = inputTopRight.value + 'px';
    borderModify.style.borderBottomLeftRadius = inputBottomLeft.value + 'px';
    borderModify.style.borderBottomRightRadius = inputBottomRight.value + 'px';

    resultBorderRadius.value = inputTopLeft.value + ' ' + inputTopRight.value + ' '
        + inputBottomLeft.value + ' ' + inputBottomRight.value;
}

//Copy text to clipboard
copyText = () => {
    resultBorderRadius.select();
    document.execCommand("copy");
}









//borderModify.style.borderTopLeftRadius = '35px';
