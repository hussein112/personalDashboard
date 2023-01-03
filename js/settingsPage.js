import { renderColors } from "./settings.js";


const customColors = document.querySelectorAll("input[type='color']");
const colorsCombination = document.querySelector(".combination");
const resetDefaults = document.getElementById("default");
const defaultColors = ["#f1f5f9", "#ffffff", "rgb(60, 138, 255)", "#292929"];

const currentColors = [
    localStorage.getItem("--primary"),
    localStorage.getItem("--secondary"),
    localStorage.getItem("--tertiary"),
    localStorage.getItem("--fourth"),
];





window.onload = function(){
    renderColors();


    setColors();

    colorsCombination.addEventListener("click", () =>{
        let colors = changeColors(colorsCombination);
        updateColorStorage(colors);
    });
    
    
    resetDefaults.addEventListener("click", (e) => {
        e.stopPropagation();
        localStorage.setItem("--primary", defaultColors[0]);
        localStorage.setItem("--secondary", defaultColors[1]);
        localStorage.setItem("--tertiary", defaultColors[2]);
        localStorage.setItem("--fourth", defaultColors[3]);
        renderColors();
    });
}



/**
 * change color on demand
 * 
 * @param {Array} combination 
 * @returns {Array}
 */
function changeColors(combination){
    let colors = [];
    Array.from(combination.children).forEach((color) => {
        colors.push(color.dataset.color);
    });
    return colors;
}



/**
 * Add the new colors in the local storage
 * 
 * @param {Array} colors 
 * @return {void}
 */
function updateColorStorage(colors){
    localStorage.setItem("--primary", colors[0]);
    localStorage.setItem("--secondary", colors[1]);
    localStorage.setItem("--tertiary", colors[2]);
    localStorage.setItem("--fourth", colors[3]);
    renderColors();
}


Array.from(customColors).forEach(color => {
    color.addEventListener("input", () => {
        testColor(color.value, color.dataset.n);
    });
});



/**
 * Save button click for the custom color
 */
const saveColors = document.getElementById("save-colors");
let colors = [];
saveColors.addEventListener("click", () => {
    Array.from(customColors).forEach(color => {
        colors.push(color.value);    
    });
    updateColorStorage(colors);
});





/**
 * Set the current colors in the custom colors inputs.
 * 
 * @returns void
 */
function setColors(){
    let _customColors = Array.from(customColors); 
    for(let i = 0; i < _customColors.length; i++){
        _customColors[i].value = currentColors[i];
    }
}







/**
 * let the user choose custom color combination
 * --------------------------------------------
 * 
 */



/**
 * Live embedding of the color chosen by the user.
 * 
 * @param {String} color 
 * @param {String} number 
 */
function testColor(color, number){
    document.documentElement.style.setProperty("--" + number, color);
}
