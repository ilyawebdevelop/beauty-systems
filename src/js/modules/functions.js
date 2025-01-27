/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

// Подключение анимаций по скроллу
import AOS from 'aos';
AOS.init();


// Реализация табов
let tabsSection = document.querySelector('.tabs');

import GraphTabs from 'graph-tabs';


	const tabs = new GraphTabs('popup');
	const tabs_2 = new GraphTabs('popup_2');
	const tabs_3 = new GraphTabs('popup_3');
	const tabs_4 = new GraphTabs('popup_4');

