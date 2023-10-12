let arr = [
    {
        dp:"/img/subham.jpg",
        story:"/img/Dark_knight_rises_poster.jpg",
        name:"subham Kundu"
    },
    {
        dp:"/img/koustav.jpg",
        story:"/img/08cc4e757e72f5480bcb5002b1d531a99b239b0ba4a5cb3cc9143ae08108e751._RI_TTW_.jpg",
        name:"Koustav Das"
    },
    {
        dp:"/img/atanu.jpg",
        story:"/img/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
        name:"Atanu"
    },
    {
        dp:"/img/mriganka.jpg",
        story:"/img/vuri.jpg",
        name:"Mriganka Sarkar"
    },
    {
        dp:"/img/bdSoham.jpg",
        story:"/img/soham.jpg",
        name:"Soham Saha"
    }
];
let growth = 0;
let clutter = "";
let i = 0;
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img src="${elem.story}" class="stry" id="${idx}">
    <div class="profile"> 
    <img src="${elem.dp}" class="dp" id="${idx}">
    </div> </div>`
});
let storys = document.querySelector("#stories");
storys.innerHTML = clutter;
storys.addEventListener("click",(dets)=>{
   let clickStoryVal = arr[dets.target.id].story;
   let dpFlex = arr[dets.target.id].dp;
   let nameIs = arr[dets.target.id].name;

   let fullScreen = document.getElementById("fullscreen");
   let dpShow = document.getElementById("dpShow");
   let dpShowp = document.querySelector("p");
   let cross = document.getElementById("cross");
   let pogress = document.getElementById("growth");

   fullScreen.style.display = "inline";
   fullScreen.style.backgroundImage = `url(${clickStoryVal})`;
   dpShow.style.display = "inline";
   dpShow.style.backgroundImage = `url(${dpFlex})`;
   dpShowp.innerHTML = nameIs;

   let time = 5000;
   let timeOut = setTimeout(function(){
    fullScreen.style.display = "none";
    dpShow.style.display = "none";
    dpShowp.innerHTML = "";
   },time);
   if(time>5000){
    clearTimeout(timeOut);
   }
   

   if(i == 0){
     i=1;
    let pogressBarSpeed = setInterval(()=>{
        if(growth>=100){
            clearInterval(pogressBarSpeed);
            growth = 0;
            i=0;
        }else{
            pogress.style.width = `${growth++}%`;  
        }
    },50);
   }
   

   cross.addEventListener("click",()=>{
    fullScreen.style.display = "none";
    dpShow.style.display = "none";
    dpShowp.innerHTML = "";
    clearTimeout(timeOut);
    growth = 0;
   
   })
})
