export function menus() 
{
console.log('menuwork');
const currentPage = window.location.pathname;
console.log( "Название страницы" , currentPage);
if (currentPage === "/blog.html") {
  const menu = document.querySelectorAll('.menu__link')[1];
  menu.classList.toggle('_active');
}
}
