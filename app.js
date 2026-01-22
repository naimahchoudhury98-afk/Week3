console.log("Just testing if this is working")

const cookieButton=document.querySelector("#cookieButton");
const cookieCountSpan=document.querySelector("#cookieCount");
const cpsSpan=document.querySelector("#cps");
const resetButton=document.querySelector("#resetButton");


let cookies = 0;
let cps = 1;


cookieCountSpan.textContent=cookies;
cpsSpan.textContent=cps;

cookieButton.addEventListener("click",()=>{
    cookies++;
    cookieCountSpan.textContent= cookies;
    saveGame();
});

setInterval (()=>{
      cookies = cookies + cps;
      cookieCountSpan.textContent = cookies;
      saveGame();
},1000);

function saveGame(){
    localStorage.setItem("cookies", cookies);
    localStorage.setItem("cps",cps);
};

const savedCookies = localStorage.getItem("cookies");
const savedCps = localStorage.getItem("cps");

cookies = Number(savedCookies) || 0;
cps = Number(savedCps) || cps;

cookieCountSpan.textContent = cookies;
cpsSpan.textContent = cps;

resetButton.addEventListener("click", ()=>{
    cookies =0;
    cps= 1;

    cookieCountSpan.textContent=cookies;
    cpsSpan.textContent=cps;
    localStorage.removeItem("cookies");
    localStorage.removeItem("cps");
})

