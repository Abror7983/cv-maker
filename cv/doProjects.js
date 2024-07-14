let userURL = document.getElementById('userURL');
let username = document.getElementById('username');
let userjob = document.getElementById('userjob');
let userDatee = document.getElementById('userDate');
let about = document.getElementById('about');
let NAME = document.querySelector('.NAME');
let JOB = document.querySelector('.JOB');
let DATE = document.querySelector('.DATE');
let aboutMe = document.querySelector('.aboutMe');
let USERIMAGE = document.querySelector('.USERIMAGE');
let atag = document.querySelector('.atag');

let data = JSON.parse(localStorage.getItem('arr')) 
? JSON.parse(localStorage.getItem('arr')) : [];
let s = JSON.parse(localStorage.getItem('userInformation'));
document.querySelector('.doUserName').textContent = `${s[0].name}`
function salom(wherel, name){
     wherel.addEventListener('input', function(e){
           name.innerHTML = `${e.target.value}`
     })
}

function salomImage(Url, name){
     Url.addEventListener('input', function(e){
          name.src = `${e.target.value}`
     })
}

function checkfield(whe){
     whe.style.borderBottom = '2px solid red'
     whe.addEventListener('input', ()=>{
          whe.style.borderBottom = '';
     });
}

salomImage(userURL,  USERIMAGE);
salom(username, NAME);
salom(userjob, JOB);
salom(userDatee, DATE);
salom(about, aboutMe);


function userData(){
     if(userURL.value !== '' && username.value !== '' && userDatee.value !== '' && userjob.value !== ''){
          data.push({
               URL: `${userURL.value}`,
               name: `${username.value}`,
          })
          localStorage.setItem('arr', JSON.stringify(data));
          userURL.value = '';
          userjob.value = '';
          userDatee.value = '';
          about.value = '';
          atag.href = `projects.html`
     }
     else if(userURL.value == ''){
          checkfield(userURL)
     }
     else if(username.value == ''){
          checkfield(username)
     }
     else if(userjob.value == ''){
          checkfield(userjob)
     }
     else if(userDatee.value == ''){
          checkfield(userDatee)
     }
     else if(about.value == ''){
          checkfield(about)
     }   
     
}


