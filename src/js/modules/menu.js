export function menus() 
{
console.log('menuwork');
const currentPage = window.location.pathname;
console.log( "Название страницы" , currentPage);

if (currentPage === "/works.html") {
  const menu = document.querySelectorAll('.menu__link')[0];
  menu.classList.toggle('_active');
}
if (currentPage === "/article.html") {
  const menu = document.querySelectorAll('.menu__link')[0];
  menu.classList.toggle('_active');
}

if (currentPage === "/blog.html") {
  const menu = document.querySelectorAll('.menu__link')[1];
  menu.classList.toggle('_active');
}

if (currentPage === "/index.html") {
  const menu = document.querySelectorAll('.menu__link')[2];
  menu.classList.toggle('_active');
}

}
