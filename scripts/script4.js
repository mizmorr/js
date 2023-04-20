setInterval(disco,1000);

let div = document.querySelector('.picture');

function disco(){

    if (div.style.backgroundSize=="25%") {div.style.backgroundSize="75%"; div.style.transform="rotate(180deg)";}
    else {div.style.backgroundSize="25%"; div.style.transform="rotate(0deg)";}
}
const button=document.getElementById("btn_4");
button.addEventListener("click",(event)=>{
    if (div.style.display == "none"){
        div.style.display = "block";
      }
      else {
        div.style.display = "none";
      }
});
disco();