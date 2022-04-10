   const input = document.querySelector('#input-s');
   const buttonclick = document.querySelector('#click');
   const form = document.querySelector('#form');

   window.addEventListener('load', (e) => {
    e.preventDefault();


   buttonclick.addEventListener('click', () => {
     
     const task = input.value;
     const mailform = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     
     if (task == ''){
         alert('please input your email');
         input.value = "";
         return;
     } 

     if (task.match(mailform)){
         alert('you have entered a valid email.');
         input.value = "";
         return;
     } else{
         alert('invalid email');
         input.value = "";
     }

     

   })
   input.value = "";

})
   
