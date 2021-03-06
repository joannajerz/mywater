"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);
const water_glass = document.querySelector('.water-glass__number--js')
water_glass.innerHTML=0;

const button_add=document.querySelector('.water-button__add--js');
const button_remove=document.querySelector('.water-button_remove--js');
const key = new Date().toISOString().slice(0, 10) 

let glass_value=localStorage.getItem(key);
if (glass_value != null){
  water_glass.innerHTML=glass_value;
}else{
  water_glass.innerHTML=0;
}

button_add.addEventListener('click', (e)=>{
  e.preventDefault();
  water_glass.innerHTML=parseInt(water_glass.innerHTML)+1;
  updateStorage();
})

button_remove.addEventListener('click', (e)=>{
  e.preventDefault();
  if(parseInt(water_glass.innerHTML)>0){
  water_glass.innerHTML=parseInt(water_glass.innerHTML)-1;
  updateStorage();

}})

function updateStorage(){
  localStorage.setItem(key,parseInt(water_glass.innerHTML));
}
