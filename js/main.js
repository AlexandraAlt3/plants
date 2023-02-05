(function () {
   const burgerItem = document.querySelector('.burger');
   const menu = document.querySelector('.nav');
   const menuLink = document.querySelectorAll('.nav-list');
   const menuCloseItem = document.querySelector('.header__nav-close');
   burgerItem.addEventListener('click', () => {
    menu.classList.add('nav_active');
   });
   menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('nav_active');
   });
   if (window.innerWidth <= 450){
      for(let i=0; i<menuLink.length; i++){
         menuLink[i].addEventListener('click', () =>{
            menu.classList.remove('nav_active');
         });
      }
   }

}());

/********Service    Button********/

const buttonGardens = document.querySelector('.gardens');
const buttonLawn = document.querySelector('.lawn');
const buttonPlanting = document.querySelector('.planting');
const blurCarden = document.querySelectorAll('.carden_care');
const blurPlanting = document.querySelectorAll('.planting_img');
const blurLawn = document.querySelectorAll('.lawn_care');
const serviceButtons = document.querySelectorAll('.buttonS');
var count = 0;
var count1 = 0;
var count2 = 0;


for (let serviceButton of serviceButtons){
   serviceButton.addEventListener('click' , (event) => {
      if (event.target.classList.contains('gardens')){
         if(buttonGardens.classList.contains('buttonActive')){
            buttonGardens.classList.remove('buttonActive');
            for (let elemCarden of blurCarden){
               elemCarden.classList.add('carden_care_on'); 
            } 
            --count;
         } else {
            buttonGardens.classList.add('buttonActive'); 
            for (let elemCarden of blurCarden){
               elemCarden.classList.remove('carden_care_on'); 
            }
            count++;
         }
         if ((count == 1) &&(count1 == 0) && (count2 == 0)){
         buttonGardens.classList.add('buttonActive');
         for (let elemLawn of blurLawn){
            elemLawn.classList.add('lawn_care_on');
         }
         for (let elemPlanting of blurPlanting){
            elemPlanting.classList.add('planting_img_on');
         }

         }else if ((count == 1) &&(count1 == 1) && (count2 == 1)){
            buttonGardens.classList.remove('buttonActive');
            buttonLawn.classList.remove('buttonActive');
            buttonPlanting.classList.remove('buttonActive');
            for (let elemLawn of blurLawn){
               elemLawn.classList.remove('lawn_care_on'); 
            }  
            for (let elemCarden of blurCarden){
               elemCarden.classList.remove('carden_care_on'); 
            }
            for (let elemPlanting of blurPlanting){
               elemPlanting.classList.remove('planting_img_on');
            }
            --count 
            --count1
            --count2 
         }
      } else if (event.target.classList.contains('lawn')){
         if(buttonLawn.classList.contains('buttonActive')){
            buttonLawn.classList.remove('buttonActive');
            for (let elemLawn of blurLawn){
               elemLawn.classList.add('lawn_care_on'); 
            } 
            --count1;
         } else {
            buttonLawn.classList.add('buttonActive'); 
            for (let elemLawn of blurLawn){
               elemLawn.classList.remove('lawn_care_on'); 
            }
            count1++;
         }
      if ((count == 1) &&(count1 == 1) && (count2 == 0)){
         for (let elemPlanting of blurPlanting){
            elemPlanting.classList.add('planting_img_on');
         }
      } else if ((count == 0) &&(count1 == 1) && (count2 == 0)){
         for (let elemPlanting of blurPlanting){
            elemPlanting.classList.add('planting_img_on');
         }
         for (let elemCarden of blurCarden){
            elemCarden.classList.add('carden_care_on'); 
         } 
      }else if ((count == 1) &&(count1 == 1) && (count2 == 1)){
         buttonGardens.classList.remove('buttonActive');
         buttonLawn.classList.remove('buttonActive');
         buttonPlanting.classList.remove('buttonActive');
         for (let elemLawn of blurLawn){
            elemLawn.classList.remove('lawn_care_on'); 
         }  
         for (let elemCarden of blurCarden){
            elemCarden.classList.remove('carden_care_on'); 
         }
         for (let elemPlanting of blurPlanting){
            elemPlanting.classList.remove('planting_img_on');
         }
         --count 
         --count1
         --count2 
      }
      }else if (event.target.classList.contains('planting')){
         if(buttonPlanting.classList.contains('buttonActive')){
            buttonPlanting.classList.remove('buttonActive');
            for (let elemPlanting of blurPlanting){
               elemPlanting.classList.add('planting_img_on');
            }
            --count2;
         } else {
            buttonPlanting.classList.add('buttonActive');
            for (let elemPlanting of blurPlanting){
               elemPlanting.classList.remove('planting_img_on');
            }
            count2++;
         }
         if((count == 0) &&(count1 == 0) && (count2 == 1)){
            for (let elemCarden of blurCarden){
               elemCarden.classList.add('carden_care_on'); 
            }
            for (let elemLawn of blurLawn){
               elemLawn.classList.add('lawn_care_on'); 
            }
         } else if ((count == 1) &&(count1 == 0) && (count2 == 1)){
            for (let elemCarden of blurCarden){
               elemCarden.classList.remove('carden_care_on'); 
            }
         }else if ((count == 0) &&(count1 == 1) && (count2 == 1)){
            for (let elemLawn of blurLawn){
               elemLawn.classList.remove('lawn_care_on'); 
            } 
         } else if ((count == 1) &&(count1 == 1) && (count2 == 1)){
            buttonGardens.classList.remove('buttonActive');
            buttonLawn.classList.remove('buttonActive');
            buttonPlanting.classList.remove('buttonActive');
            for (let elemLawn of blurLawn){
               elemLawn.classList.remove('lawn_care_on'); 
            }  
            for (let elemCarden of blurCarden){
               elemCarden.classList.remove('carden_care_on'); 
            }
            for (let elemPlanting of blurPlanting){
               elemPlanting.classList.remove('planting_img_on');
            }
            --count 
            --count1
            --count2 
         }
         
      }
})}




/********Service    Button********/

