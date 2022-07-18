'use script';



// header при скролле
(function() {
	const header = document.querySelector('.header');
	window.onscroll = () => {
		if (window.pageYOffset > 50) {
			header.classList.add('header_active');
		} else {
			header.classList.remove('header_active');
		}
	};
} ());


// Меню бургер 

const menuBody = document.querySelector('.menu__body');
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
   iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
};

// Плавная прокрутка

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

if(iconMenu.classList.contains('_active')) {
   iconMenu.classList.remove('_active');
   menuBody.classList.remove('_active');
}

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth",
         });
         e.preventDefault();
      }
   }
}

