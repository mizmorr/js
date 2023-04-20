const div_rand = document.querySelectorAll('.hidden')[5];

document.getElementById('btn_6').addEventListener("click",(event)=>{
  let table ='<table class="random">'
  for (let i=0; i<=9;i++){
        table+=('<tr class="random">');
      for (let j=0; j<10;j++) {
        table+=('<td class="lightned onclick="fun()"><\/td>');
      }
      table+=('<\/tr>');
  }
  table+=('<\/table>');
  div_rand.innerHTML = table
    if (div_rand.style.display == "none"){
        div_rand.style.display = "block";
      }
      else {
        div_rand.style.display = "none";
      }

      let table_ds= document.querySelectorAll('.lightned');

// 2. loop through the options and add the event listener to each element
table_ds.forEach(td => {
    td.addEventListener('dblclick', function(){
      this.innerHTML=getRandomInt(1000);  /* add colour to clicked element only */
   } );
});
  
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}