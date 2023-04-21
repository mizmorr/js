let img =document.getElementById('transp-pict');

document.getElementById('btn_8').addEventListener("click",(event)=>{

    let div=document.querySelectorAll('.hidden')[7];
    if (div.style.display == "none"){
        div.style.display = "block";
      }
      else {
        div.style.display = "none";
      }


const autoPlay = false;

let timer_decr,timer_incr;

img.onmouseover = () => {

  autoplay = true;
  if (!autoPlay) {
    autoplay = true;
    clearInterval(timer_incr);
    timer_decr = setInterval(function() {
        img.style.opacity=window.getComputedStyle(img).getPropertyValue("opacity")-0.1;
    }, 100);
  }
}
img.onmouseout = () => {

  autoplay = false;
  clearInterval(timer_decr);
  timer_incr = setInterval(function() {
    let val = parseFloat(window.getComputedStyle(img).getPropertyValue("opacity"))+0.1;    
    img.style.opacity=val;
}, 100);
}
});
// let is_decr= false;
// function get_transparent() {
// var decrID=setInterval(()=>
//   {
//   // {    if (is_decr== false) {
//   //       clearInterval(decrID);
//   //   }
//    console.log('decreasing');
//   },
//     1000
//   );
//   console.log('in area')
  
// }

// function incr_transp() {
//   clearInterval(get_transparent);
//   var incrID = setInterval(()=>
//   { 
//     // if (is_decr) {
//     //     clearInterval(incrID);
//     // }
//     img.style.opacity=window.getComputedStyle(img).getPropertyValue("opacity")+0.05; 
//     console.log('increasing');
//   },
//   1000
//   );
//   console.log('out of area');
// }
