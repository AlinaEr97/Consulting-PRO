const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const curentPopup = document.querySelector('.popup__content');

let unlock = true;

if (popupLinks.length > 0) {
	for (let i = 0; i < popupLinks.length; i++) {
		const popupLink = popupLinks[i];
		popupLink.addEventListener("click", function(e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let i = 0; i < popupCloseIcon.length; i++) {
		const el = popupCloseIcon[i];
		el.addEventListener("click", function(e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup-open');
		if (popupActive) {
			popupClose (popupActive, false);
		}
		curentPopup.classList.add('popup-open');
	}
}
function popupClose(popupActive = true) {
	if (unlock) {
		popupActive.classList.remove('popup-open');
	}
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup-open');
		popupClose(popupActive);
	}
});

(function () {
	if (!Element.prototype.closest) {
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parrentElement;
			}
			return null;
		};
	}
})();

(function () {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.matchesSelector ||
		Element.prototype.webkitMatchesSelector ||
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelector;
	}
})();


/* Главное меню */

let burger = document.querySelector(".menu-burger");
let burger_line = document.querySelectorAll(".menu-burger__line")
let main_menu = document.querySelector(".menu");

burger.addEventListener("click", function(e) {
	main_menu.classList.toggle("menu_active");
	for (let i = 0; i < burger_line.length; i++) {
		burger_line[i].classList.toggle("menu-burger__line_active");
	}
	e.preventDefault();
});


/* Меню услуг */

let services = document.querySelector(".menu__link_active");
let services_menu = document.querySelector(".services-menu");
let arrow_menu = document.querySelector(".menu__arrow");

services.addEventListener("click", function(e) {
	services_menu.classList.toggle("services-menu_active");
	arrow_menu.classList.toggle("menu__arrow_active");
	e.preventDefault();
});

document.addEventListener("click", function(e) {
	let target = e.target;
	let aside_menu = target == services_menu || services_menu.contains(target);
	let aside_btnMenu = target == services;
	let services_is_active = services_menu.classList.contains('services-menu_active');

	if (!aside_menu && !aside_btnMenu && services_is_active) {
		services_menu.classList.toggle("services-menu_active");
		arrow_menu.classList.toggle("menu__arrow_active");
	}
})


/* Подподменю в попапе */

let subsubmenu_popup_btn = document.querySelector(".subsubmenu-popup-active");
let subsubmenu_popup = document.querySelector(".subsubmenu-popup2");

subsubmenu_popup_btn.addEventListener("click", function(e) {
	subsubmenu_popup.classList.toggle("subsubmenu-popup2_active");
	document.querySelector(".popup2__arrow-sub").classList.toggle("popup2__arrow-sub_active");
	document.querySelector(".subsubmenu-popup-link").classList.toggle("subsubmenu-popup-link_active");
	e.preventDefault();
});


