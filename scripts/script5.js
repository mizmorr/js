candies=[
    "Skittles",
"Jolly Rancher",
"Milk Duds",
"Baby Ruth",
"Starburst",
"SweetTarts",
"Bit o Honey",
"Werther’s Original",
"Riesen",
"Pop Rocks",
"Nestle Crunch Bar"
]
document.getElementById('btn_5').addEventListener("click",(event)=>{
    let div=document.querySelectorAll('.hidden')[4];
    
    
    list='<ul style="list-style-type:none;">'
    for (let i=0; i<candies.length; i++) {
        list += '<li class="li-sweets">'+candies[i]+'</li>'
    }
    let ul = div.getElementsByClassName('li-sweets');
    console.log(ul.length)
    div.innerHTML = list+'</ul>';
    div.addEventListener('mouseenter',(event)=>{
    let num = prompt("Please delete num");
    if (num != null) {
        ul[parseFloat(num)+1].style.display = 'none';
    }
    });
    if (div.style.display == "none"){
        div.style.display = "block";
      }
      else {
        div.style.display = "none";
      }
   
});
