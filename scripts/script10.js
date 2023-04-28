document.getElementById('btn_10').addEventListener("click",(event)=>{
    let div=document.querySelectorAll('.hidden')[9];

    if (div.style.display == "none"){
        div.style.display = "block";
      }
      else {
        div.style.display = "none";
      }
});
let name_focus=false;
first_name=document.getElementById('first_name_2')
first_name.addEventListener('focus',()=>{
  first_name.style.textDecoration="none";
  name_focus=true;
  console.log('focus')

});

first_name.addEventListener('blur',()=>{

  if (name_focus&&!/^[A-Z]{1}[a-z]+$/.test(first_name.value)){
    // alert("Please enter correct name");
    first_name.style.textDecoration="red wavy underline";
  }
  name_focus=false;
});
let last_name_focus=false;
last_name2=document.getElementById('last_name_2')
last_name2.addEventListener('focus',()=>{
  last_name2.style.textDecoration="none";
  last_name_focus=true;
  console.log('focus')
});

last_name2.addEventListener('blur',()=>{
  console.log(last_name2.value)
  if (last_name_focus&&!/^[A-Z]{1}[a-z]+$/.test(last_name2.value)){
    // alert("Please enter correct name");
    last_name2.style.textDecoration="red wavy underline";
  }
  last_name_focus=false;
});
let phone_focus=false;
phone=document.getElementById('phone_2')

phone.addEventListener('focus',()=>{
  phone.style.textDecoration="none";
  phone_focus=true;
  console.log('focus')
});

last_name.addEventListener('blur',()=>{

  if (phone_focus&&!/^\+{1}[0-9]{11}$/.test(phone.value)){
    // alert("Please enter correct name");
    phone.style.textDecoration="red wavy underline";
  }
  phone_focus=false;
});

let email_focus=false;
email=document.getElementById('email_2')

email.addEventListener('focus',()=>{
  email.style.textDecoration="none";
  email_focus=true;
  console.log('focus')
});

email.addEventListener('blur',()=>{

  if (email_focus&&!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
    // alert("Please enter correct name");
    email.style.textDecoration="red wavy underline";
  }
  email_focus=false;
});

let passwd_focus,passwd_rep_focus=false
let paswd=document.getElementById('pswrd_2');
let rep_paswd=document.getElementById('pswrd_rep_2');

rep_paswd.addEventListener('focus',()=>{
  rep_passwd_focus=true;
});

rep_paswd.addEventListener('blur',()=>{
  if (paswd.value!=rep_paswd.value)
    alert("passwords are not the same");
  rep_passwd_focus=false;
});

document.getElementById('btn-clear').addEventListener('click',()=>{
  var elements=document.querySelector('.form-2').children;
  console.log(elements[0])
});