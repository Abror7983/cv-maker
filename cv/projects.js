let s = JSON.parse(localStorage.getItem('userInformation'));
let sm = JSON.parse(localStorage.getItem('arr'));
let flexContainer = document.querySelector('.flex-container');
let userImage2 = document.querySelector('.userImage2');
document.querySelector('.registrationName').textContent = `${s[0].name}`
function chiq(){
     const  chiqRemember = s.map((item, index) =>{
          return{...item, remember: item.remember = false}
     })
     s = chiqRemember;
     localStorage.setItem('userInformation', JSON.stringify(s))
}

function clearqq(){
     localStorage.clear()
}
function finish(){
 if(sm){
     sm.forEach((element,index) => {
          flexContainer.innerHTML += `<div class="flex-item"><div><div class="userImage2" style="background-image: url(${element.URL});"><p class="name2">${element.name}</p></div></div></div>`
       });
 }
  
}

finish()