console.log("Just testing if this is working")

const cookieButton=document.querySelector("#cookieButton");
const cookieCountSpan=document.querySelector("#cookieCount");
const cpsSpan=document.querySelector("#cps");
const resetButton=document.querySelector("#resetButton");
const shopDiv=document.querySelector("#shop");
const ClickSound=document.querySelector("#clickSound");
const purchaseSound=document.querySelector("#purchaseSound")


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



async function fetchUpgrades() {
    const response =await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
    const upgrades=await response.json();

    console.log("upgrades from API",upgrades);

    shopDiv.innerHTML="";

    upgrades.forEach((upgrade) => { 

    const upgradeContainer=document.createElement("div");
    upgradeContainer.classList.add("upgradeCard");
    const upgradeName=document.createElement("p");
    const upgradeCost=document.createElement("p");
    const upgradeIncrease=document.createElement("p");
    const buyButton=document.createElement("button");

    upgradeName.textContent= upgrade.name;
    upgradeCost.textContent="Cost: " + upgrade.cost;
    upgradeIncrease.textContent= "Increase: +" + upgrade.increase + " CPS";
    buyButton.textContent="Buy";
    buyButton.disabled=cookies< upgrade.cost;

    setInterval(() => {
        buyButton.disabled=cookies<upgrade.cost;
    }, 1000);

    buyButton.addEventListener("click", ()=> {
        if (cookies < upgrade.cost) {
            alert("Not Enough Cookies!");
            return;
        }
        cookies= cookies - upgrade.cost;
        cps= cps + upgrade.increase;

        cookieCountSpan.textContent=cookies;
        cpsSpan.textContent=cps;

        purchaseSound.currentTime=0;
        purchaseSound.play();
        
        saveGame();
    });

    upgradeContainer.appendChild(upgradeName);
    upgradeContainer.appendChild(upgradeCost);
    upgradeContainer.appendChild(upgradeIncrease);
    upgradeContainer.appendChild(buyButton);

    shopDiv.appendChild(upgradeContainer);
});
}
 fetchUpgrades();

cookieButton.addEventListener("click", ()=>{
    cookies++;
    cookieCountSpan.textContent=cookies;

    clickSound.currentTime=0;
    clickSound.play();

    saveGame();
});