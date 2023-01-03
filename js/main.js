// import { handleScrolls } from "./handleScrolls.js";
// import { settings } from "./settings.js";
// import { search } from "./search.js";
// import { theme } from "./theme.js";
// import { responsive } from "./responsive.js";
// import { slideShowPhone } from "./SlideShowPhone.js";

// ;(function(){
//     handleScrolls(window.scrollY);
//     slideShowPhone(
//         null,
//         document.querySelectorAll("header .slider .slides .slide"),
//         100,
//         null,
//         null,
//         null,
//         document.querySelectorAll("header .slider .slide-controls .navigations .slide-nav-btn")
//     );

//     search(
//         document.querySelector("header nav #search-icon"), 
//         document.querySelector(".search .close"),
//         document.querySelector(".search")
//     );

    
//     settings(
//         document.querySelector(".settings .icons .open"),
//         document.querySelector(".settings .icons .close"),
//         document.querySelector(".settings"));


//     theme();

//     responsive();

//     window.onscroll = () => {
//         handleScrolls(window.scrollY); 
//     }
// })();



let progress = 75;


const pr = document.querySelector(".today-progress-chart .value");
const prValue = document.querySelector(".percent");
let i = 1;
setInterval(function(){
    if(i == progress){
        return;
    }
    pr.style.width = i+1 + "%";
    i++;
    prValue.innerText = i + "%";
}, 5);
prValue.style.animationPlayState = "running";


// for(let i = 0; i < 1000; i++){
// }
