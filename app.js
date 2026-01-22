console.log("Just testing if this is working")

const cookieButton=document.querySelector("#cookieButton");
const cookieCountSpan=document.querySelector("#cookieCount");
const cpsSpan=document.querySelector("#cps");

let cookies = 0;
let cps = 0;


cookieCountSpan.textContent=cookies;
cpsSpan.textContent=cps;

cookieButton.addEventListener("click",()=>{
    cookies++;
    cookieCountSpan.textContent= cookies;
});

setInterval (()=>{
      cookies = cookies + cps;
      cookieCountSpan.textContent = cookies;
},1000);