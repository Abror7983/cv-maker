let assa = JSON.parse(localStorage.getItem("userInformation"))
? JSON.parse(localStorage.getItem("userInformation")) : [];
let username  = document.querySelector('.username');
let userEmail  = document.querySelector('.useremail');
let userPassword  = document.querySelector('.userpassword');
let atag = document.querySelector('.atag');

function checkfield(whe){
  whe.style.borderBottom = '2px solid red'
  whe.addEventListener('input', ()=>{
       whe.style.borderBottom = '';
  });
}


function setTodo(){
  localStorage.setItem('userInformation', JSON.stringify(assa));
}


let registration =  function(e){ 
  if(userEmail.value !== '' && username.value !== '' && userPassword.value !== '') {
  assa.push({name: `${username.value}`, email: `${userEmail.value}`,password: `${userPassword.value}`, remember: false });
  setTodo();    
  username.value = '';
  userEmail.value = '';
  userPassword.value = '';
  atag.href = 'projects.html'
  }
  else if(username.value == ''){
    checkfield(username)
  }
  else if(userEmail.value == ''){
    checkfield(userEmail)
  }
  else if(userPassword.value == ''){
    checkfield(userPassword)
  }

}