const btnE1 =document.getElementById("btn");
const animeContainerE1 =document.querySelector(
".anime-container");
const animeimgE1 =document.querySelector(".img-page");
const animenameE1 =document.querySelector(".anime-name");
btnE1.addEventListener("click", async function(){
  try{
    btnE1.disabled=true;
    btnE1.innerText="Loading..."
    const response =await fetch("https://api.catboys.com/img");
    
  const data= await response.json();
  display="block";
  animeimgE1.src = data.url;
  animenameE1.innerText=data.artist;
  } catch (error) {}
})