let remember = JSON.parse(localStorage.getItem('userInformation'));
console.log(remember)
let atag = document.querySelector('.createCV');
atag.addEventListener('click', function(){
     if(remember){
          if(remember[0].remember){
               atag.href = 'projects.html'
          }
          else{
               atag.href = 'login.html'
         }
     }
     else{
          atag.href = 'login.html'
    }
     
});
