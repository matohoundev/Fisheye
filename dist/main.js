!function(){"use strict";const e=document.querySelector(".bloc-links"),t=document.querySelector(".btn-top"),r=document.querySelectorAll(".dropdown li"),o=document.querySelector("#Layer_1");let c;function n(){if(!c)return e.style.height=`${e.scrollHeight}px`,o.style.transform="rotate(180deg)",void(c=!0);o.style.transform="rotate(0deg)",e.style.height=0,c=!1}t.addEventListener("click",n),r.forEach((e=>e.addEventListener("click",n))),n()}();