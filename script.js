// script.js

const themeBtn =
document.querySelector(".theme-btn");

let darkMode = false;

themeBtn.addEventListener("click",()=>{

if(!darkMode){

document.body.style.background =
"linear-gradient(135deg,#1E1E2F,#2A2A45,#111827)";

document.body.style.color = "white";

themeBtn.innerHTML="☀️";

darkMode=true;

}else{

document.body.style.background =
"linear-gradient(135deg,#F4F0FF,#DDE8FF,#FFFDF8)";

themeBtn.innerHTML="🌙";

darkMode=false;

}

});
