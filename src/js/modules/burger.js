//import { Controller } from "swiper";

export function burgers() 
{
console.log('burggerwork');

const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon.icon-menu')

//const body = document.body;

if (menu && menuBtn){
  menuBtn.addEventListener('click',() => {
    menuBtn.classList.toggle('_active')
    menu.classList.toggle('_active')
  })
}
}

