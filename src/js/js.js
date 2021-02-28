/*! UTF-8

© kovrigin
Все права разрешены
красивый дизайн должен иметь красивый код®

https://github.com/htmlpluscss/

*/

if('serviceWorker' in navigator){
	window.addEventListener('load', function(){
		navigator.serviceWorker.register('/sw.js');
	});
}

var ASKO = ASKO || {};

(function(){

	ASKO.body = document.body;
	ASKO.width = window.innerWidth;
	ASKO.height = window.innerHeight;
	ASKO.settimeout = Cookies.get('cookiesPolicy') ? 0 : 10000;

	ASKO.body.classList.remove('no-js');

// resize

	var resizeTimeout = null;

	window.addEventListener("resize", function(){

		window.requestAnimationFrame(function(){

			if (!resizeTimeout) {

				resizeTimeout = setTimeout(function() {

					resizeTimeout = null;
					ASKO.width = window.innerWidth;
					ASKO.height = window.innerHeight;

				}, 100);

			}

		});

	});

// href="tel:"

	if(ASKO.width > 1200) {

		Array.prototype.forEach.call(document.querySelectorAll('[href^="tel"]'), function (el) {

			el.removeAttribute('href');

		});

	}

// склонение
	ASKO.declension = function(num, expressions) {
		var r;
		var count = num % 100;
		if (count > 4 && count < 21)
			r = expressions['2'];
		else {
			count = count % 10;
			if (count == 1)
				r = expressions['0'];
			else if (count > 1 && count < 5)
				r = expressions['1'];
			else
				r = expressions['2'];
		}
		return r;
	}

	// обработчик анимаций
	ASKO.cssAnimation = function(a){var b,c,d=document.createElement("cssanimation");switch(a){case'animation':b={"animation":"animationend","OAnimation":"oAnimationEnd","MozAnimation":"animationend","WebkitAnimation":"webkitAnimationEnd"};break;case'transition':b={"transition":"transitionend","OTransition":"oTransitionEnd","MozTransition":"transitionend","WebkitTransition":"webkitTransitionEnd"}}for(c in b)if(d.style[c]!==undefined)return b[c]}

	// Determine if an element is in the visible viewport
	ASKO.isInViewport = function(element) {
		var rect = element.getBoundingClientRect();
		return (rect.top >= 0 && rect.bottom <= ASKO.height);
	}

	// отделяем тысячи
	ASKO.sepNumber = function(str){
		str = str.toString();
		str = str.replace(/\s+/g,'');
		return str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	}

	// склеиваем тысячи
	ASKO.strToNumber = function(n){
		return parseInt(n.replace(/\s+/g,''), 10);
	}

	setTimeout(function(){

		// eager
		Array.prototype.forEach.call(document.querySelectorAll('[loading="lazy"]'), function(img){

			img.setAttribute('loading','eager');

		});

	}, ASKO.settimeout);

})();