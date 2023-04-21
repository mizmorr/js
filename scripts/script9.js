
document.getElementById('btn_9').addEventListener("click",(event)=>{
    let div=document.querySelectorAll('.hidden')[8];

    if (div.style.display == "none"){
        div.style.display = "block";
      }
      else {
        div.style.display = "none";
      }
});
document.getElementById('form-subm').addEventListener("click",()=>{
  let email=document.getElementById('email');
  let name=document.getElementById('name');
  let last_name=document.getElementById('last_name');
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    alert('bad email!');
  };
  if (name==""||last_name==""){
    alert('bad name!');
  }
});