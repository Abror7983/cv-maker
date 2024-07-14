
let login = JSON.parse(localStorage.getItem("userInformation"));
let usernameLogin = document.querySelector('.usernameLogin');
let userpasswordLogin = document.querySelector('.userpasswordLogin');
let ptag = document.querySelector('.ptag');
let error = document.querySelector('.error');
let Remember = document.getElementById('Remember');
// Remember.addEventListener('click', ()=>{
//      console.log(Remember.checked)
// })


function checkInputName(){
     usernameLogin.style.borderBottom = '2px solid red'
     usernameLogin.addEventListener('input', ()=>{
          usernameLogin.style.borderBottom = '';
          error.style.display = 'none'
     });
}

function checkInputPassword(){
     userpasswordLogin.style.borderBottom = '2px solid red'
          userpasswordLogin.addEventListener('input', ()=>{
               userpasswordLogin.style.borderBottom = '';
               error.style.display = 'none'
          })
}

function remember(){
     const sa = login.map((item, index) => {
          if(Remember.checked){
          return {...item, remember: item.remember = true}
          }
          else{
               return {...item}
          }
     })
     login = sa;
     localStorage.setItem('userInformation', JSON.stringify(login))
}
     


function checkLogin(){
     let atag = document.querySelector('.atag');
     if(login){
          if(login[0].name == usernameLogin.value && login[0].password == userpasswordLogin.value){
               atag.href = `projects.html`
               error.style.display = 'none'
               usernameLogin.value = ''
           }
           remember()
            if(usernameLogin.value == ''){
               usernameLogin.style.borderBottom = '2px solid red';
               checkInputName()
          }
          else if(userpasswordLogin.value == ''){
               userpasswordLogin.style.borderBottom = '2px solid red'
               checkInputPassword()
          }
          else{
               error.style.display = 'block'
               checkInputName()
               checkInputPassword()
          }
     }
     else{
          error.style.display = 'block'
          checkInputName()
          checkInputPassword()
     }
     

    

}