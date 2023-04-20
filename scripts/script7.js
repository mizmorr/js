sweets = ["Strawberries",
"Cheesecake",
"Chocolate",
"Jelly",
"Jam"];
document.getElementById('btn_7').addEventListener("click",(event)=>{
    let div = document.querySelector('.list')
    list='<ul class="ul-sweets">'
    for (let i=0; i<sweets.length; i++) {
        list += '<li class="li-sweets">'+sweets[i]+'</li>'
    }
    div.innerHTML = list+'</ul>';

    let sweets_li=document.querySelectorAll('.li-sweets')
    sweets_li.forEach(sweet => {
        sweet.addEventListener('click', function () {
            this.style.display="none";
            if (div.offsetHeight==0){
                div.innerHTML='<p class="text">lack of sweets....</p>'
            }
    });
    });
    if (div.style.display == "none"){
        div.style.display = "block";
      }
      else {
        div.style.display = "none";
      }
});
