document.getElementById('btn_3').addEventListener("click",(event)=>{
    let div_u = document.querySelector('.under-hidden');
    let div = document.querySelectorAll('.hidden')[2];
    const selectForm = document.forms[0];
    let text='<p class="text">count - '+selectForm.length+'</p>';
    for (let i=0; i<selectForm.length; i++) {
        text+='<p class="text">element['+i+'] - '+selectForm.elements[i]+'</p>';
    }
    div_u.innerHTML=text;
    if (div.style.display == "none"){
        div.style.display = "block";
      }
      else {
        div.style.display = "none";
      }
});
