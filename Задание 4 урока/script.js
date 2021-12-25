'use strict'

const Exercise = document.getElementsByClassName('quote');

const textBefore = document.getElementById('quote_text-before'); 
const textAfter = document.getElementById('quote_text-after'); 

const changeText = () => {
    let str = textBefore.textContent;
    console.log(str);

    textAfter.innerText = str.replace(/\B'|'\B/g, '"');
};