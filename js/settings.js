/**
 * Render the colors
 * 
 * @return {void}
 */
function renderColors(){
    document.documentElement.style.setProperty("--primary", localStorage.getItem("--primary"));
    document.documentElement.style.setProperty("--secondary", localStorage.getItem("--secondary"));
    document.documentElement.style.setProperty("--tertiary", localStorage.getItem("--tertiary"));
    document.documentElement.style.setProperty("--fourth", localStorage.getItem("--fourth"));
}
renderColors();


export {renderColors};