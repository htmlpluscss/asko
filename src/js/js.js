/*! UTF-8

© kovrigin
Все права разрешены
красивый дизайн должен иметь красивый код®

https://github.com/htmlpluscss/

*/

var CF = {};

(function(){

	CF.body = document.body;
	CF.width = window.innerWidth;
	CF.height = window.innerHeight;

	CF.touchDevice = "ontouchstart" in document.documentElement;

// resize

	var resizeTimeout = null;

	window.addEventListener("resize", function(){

		if (!resizeTimeout) {

			resizeTimeout = setTimeout(function() {

				resizeTimeout = null;
				CF.width = window.innerWidth;
				CF.height = window.innerHeight;

			}, 100);

		}

	});

// href="tel:"

	if(!CF.touchDevice || CF.width > 1200) {

		Array.prototype.forEach.call(document.querySelectorAll('[href^="tel"]'), function (el) {

			el.removeAttribute('href');

		});

	}

// склонение
	CF.declension = function(num, expressions) {
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

// загрузка калькулятора
	if (document.querySelector('.calculator')) {

		var script = document.createElement('script');

		script.type = 'text/javascript';
		script.async = true;
		script.src = SITE_TEMPLATE_PATH + '/js/calculator.all.min.js';

		document.head.appendChild(script);

	}

	// обработчик анимаций
	CF.cssAnimation = function(a){var b,c,d=document.createElement("cssanimation");switch(a){case'animation':b={"animation":"animationend","OAnimation":"oAnimationEnd","MozAnimation":"animationend","WebkitAnimation":"webkitAnimationEnd"};break;case'transition':b={"transition":"transitionend","OTransition":"oTransitionEnd","MozTransition":"transitionend","WebkitTransition":"webkitTransitionEnd"}}for(c in b)if(d.style[c]!==undefined)return b[c]}

	// Determine if an element is in the visible viewport
	CF.isInViewport = function(element) {
		var rect = element.getBoundingClientRect();
		return (rect.top >= 0 && rect.bottom <= CF.height);
	}

})();