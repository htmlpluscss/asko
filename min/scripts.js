!function(a,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n(require,exports,module):a.CountUp=n()}(this,function(a,n,t){return function(a,n,t,e,i,r){var u=this;if(u.version=function(){return"1.9.3"},u.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(a,n,t,e){return t*(1-Math.pow(2,-10*a/e))*1024/1023+n},formattingFn:function(a){var n,t,e,i,r,o,s=a<0;if(a=Math.abs(a).toFixed(u.decimals),n=(a+="").split("."),t=n[0],e=1<n.length?u.options.decimal+n[1]:"",u.options.useGrouping){for(i="",r=0,o=t.length;r<o;++r)0!==r&&r%3==0&&(i=u.options.separator+i),i=t[o-r-1]+i;t=i}return u.options.numerals.length&&(t=t.replace(/[0-9]/g,function(a){return u.options.numerals[+a]}),e=e.replace(/[0-9]/g,function(a){return u.options.numerals[+a]})),(s?"-":"")+u.options.prefix+t+e+u.options.suffix},prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var o in u.options)r.hasOwnProperty(o)&&null!==r[o]&&(u.options[o]=r[o]);""===u.options.separator?u.options.useGrouping=!1:u.options.separator=""+u.options.separator;for(var s=0,l=["webkit","moz","ms","o"],m=0;m<l.length&&!window.requestAnimationFrame;++m)window.requestAnimationFrame=window[l[m]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[l[m]+"CancelAnimationFrame"]||window[l[m]+"CancelRequestAnimationFrame"];function d(a){return"number"==typeof a&&!isNaN(a)}window.requestAnimationFrame||(window.requestAnimationFrame=function(a,n){var t=(new Date).getTime(),e=Math.max(0,16-(t-s)),i=window.setTimeout(function(){a(t+e)},e);return s=t+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),u.initialize=function(){return!!u.initialized||(u.error="",u.d="string"==typeof a?document.getElementById(a):a,u.d?(u.startVal=Number(n),u.endVal=Number(t),d(u.startVal)&&d(u.endVal)?(u.decimals=Math.max(0,e||0),u.dec=Math.pow(10,u.decimals),u.duration=1e3*Number(i)||2e3,u.countDown=u.startVal>u.endVal,u.frameVal=u.startVal,u.initialized=!0):(u.error="[CountUp] startVal ("+n+") or endVal ("+t+") is not a number",!1)):!(u.error="[CountUp] target is null or undefined"))},u.printValue=function(a){var n=u.options.formattingFn(a);"INPUT"===u.d.tagName?this.d.value=n:"text"===u.d.tagName||"tspan"===u.d.tagName?this.d.textContent=n:this.d.innerHTML=n},u.count=function(a){u.startTime||(u.startTime=a);var n=(u.timestamp=a)-u.startTime;u.remaining=u.duration-n,u.options.useEasing?u.countDown?u.frameVal=u.startVal-u.options.easingFn(n,0,u.startVal-u.endVal,u.duration):u.frameVal=u.options.easingFn(n,u.startVal,u.endVal-u.startVal,u.duration):u.countDown?u.frameVal=u.startVal-(u.startVal-u.endVal)*(n/u.duration):u.frameVal=u.startVal+(u.endVal-u.startVal)*(n/u.duration),u.countDown?u.frameVal=u.frameVal<u.endVal?u.endVal:u.frameVal:u.frameVal=u.frameVal>u.endVal?u.endVal:u.frameVal,u.frameVal=Math.round(u.frameVal*u.dec)/u.dec,u.printValue(u.frameVal),n<u.duration?u.rAF=requestAnimationFrame(u.count):u.callback&&u.callback()},u.start=function(a){u.initialize()&&(u.callback=a,u.rAF=requestAnimationFrame(u.count))},u.pauseResume=function(){u.paused?(u.paused=!1,delete u.startTime,u.duration=u.remaining,u.startVal=u.frameVal,requestAnimationFrame(u.count)):(u.paused=!0,cancelAnimationFrame(u.rAF))},u.reset=function(){u.paused=!1,delete u.startTime,u.initialized=!1,u.initialize()&&(cancelAnimationFrame(u.rAF),u.printValue(u.startVal))},u.update=function(a){u.initialize()&&(d(a=Number(a))?(u.error="",a!==u.frameVal&&(cancelAnimationFrame(u.rAF),u.paused=!1,delete u.startTime,u.startVal=u.frameVal,u.endVal=a,u.countDown=u.startVal>u.endVal,u.rAF=requestAnimationFrame(u.count))):u.error="[CountUp] update() - new endVal is not a number: "+a)},u.initialize()&&u.printValue(u.startVal)}});
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}return function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(e){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var s="";for(var f in i)i[f]&&(s+="; "+f,!0!==i[f]&&(s+="="+i[f]));return document.cookie=n+"="+r+s}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");this.json||'"'!==C.charAt(0)||(C=C.slice(1,-1));try{var g=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(e){}if(n===g){c=C;break}n||(c[g]=C)}catch(e){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}(function(){})});
/* Polyfill service v3.16.0
 * For detailed credits and licence information see https://github.com/financial-times/polyfill-service.
 *
 * UA detected: ie/11.0.0
 * Features requested: default
 *
 * - Array.from, License: CC0 (required by "default")
 * - Array.of, License: MIT (required by "default")
 * - Array.prototype.fill, License: CC0 (required by "default")
 * - Event, License: CC0 (required by "default", "CustomEvent", "Promise")
 * - CustomEvent, License: CC0 (required by "default")
 * - _DOMTokenList, License: CC0 (required by "DOMTokenList", "default")
 * - DOMTokenList, License: CC0 (required by "default")
 * - _mutation, License: CC0 (required by "Element.prototype.after", "default", "Element.prototype.append", "Element.prototype.before", "Element.prototype.prepend", "Element.prototype.remove", "Element.prototype.replaceWith")
 * - Element.prototype.after, License: CC0 (required by "default")
 * - Element.prototype.append, License: CC0 (required by "default")
 * - Element.prototype.before, License: CC0 (required by "default")
 * - Element.prototype.matches, License: CC0 (required by "default", "Element.prototype.closest")
 * - Element.prototype.closest, License: CC0 (required by "default")
 * - Element.prototype.prepend, License: CC0 (required by "default")
 * - Element.prototype.remove, License: CC0 (required by "default")
 * - Element.prototype.replaceWith, License: CC0 (required by "default")
 * - Symbol, License: MIT (required by "Map", "default", "Set", "Symbol.iterator", "Symbol.species")
 * - Symbol.iterator, License: MIT (required by "Map", "default", "Set")
 * - Symbol.species, License: MIT (required by "Map", "default", "Set")
 * - Number.isNaN, License: MIT (required by "default", "Map", "Set")
 * - Map, License: CC0 (required by "default")
 * - Node.prototype.contains, License: CC0 (required by "default")
 * - Object.assign, License: CC0 (required by "default")
 * - Promise, License: MIT (required by "default")
 * - Set, License: CC0 (required by "default")
 * - String.prototype.endsWith, License: CC0 (required by "default")
 * - String.prototype.includes, License: CC0 (required by "default")
 * - String.prototype.startsWith, License: CC0 (required by "default")
 * - URL, License: CC0 (required by "default") */



// Element.prototype.matches
Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || function matches(selector) {

	var element = this;
	var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
	var index = 0;

	while (elements[index] && elements[index] !== element) {
		++index;
	}

	return !!elements[index];
};

// Element.prototype.closest
Element.prototype.closest = function closest(selector) {
	var node = this;

	while (node) {
		if (node.matches(selector)) return node;
		else node = node.parentElement;
	}

	return null;
};



/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||function(a){if("Element"in a){a=a.Element.prototype;var h=Object,l=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},n=Array.prototype.indexOf||function(c){for(var b=0,k=this.length;b<k;b++)if(b in this&&this[b]===c)return b;return-1},f=function(c,b){this.name=c;this.code=DOMException[c];this.message=b},e=function(c,
b){if(""===b)throw new f("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(b))throw new f("INVALID_CHARACTER_ERR","The token must not contain space characters.");return n.call(c,b)},g=function(c){var b=l.call(c.getAttribute("class")||"");b=b?b.split(/\s+/):[];for(var k=0,e=b.length;k<e;k++)this.push(b[k]);this._updateClassName=function(){c.setAttribute("class",this.toString())}},d=g.prototype=[],m=function(){return new g(this)};f.prototype=Error.prototype;d.item=function(c){return this[c]||
null};d.contains=function(c){return!~e(this,c+"")};d.add=function(){var c=arguments,b=0,k=c.length,d=!1;do{var a=c[b]+"";~e(this,a)&&(this.push(a),d=!0)}while(++b<k);d&&this._updateClassName()};d.remove=function(){var c=arguments,b=0,d=c.length,a=!1,f;do{var g=c[b]+"";for(f=e(this,g);~f;)this.splice(f,1),a=!0,f=e(this,g)}while(++b<d);a&&this._updateClassName()};d.toggle=function(c,b){var a=this.contains(c),d=a?!0!==b&&"remove":!1!==b&&"add";if(d)this[d](c);return!0===b||!1===b?b:!a};d.replace=function(c,
b){var a=e(c+"");~a&&(this.splice(a,1,b),this._updateClassName())};d.toString=function(){return this.join(" ")};if(h.defineProperty){d={get:m,enumerable:!0,configurable:!0};try{h.defineProperty(a,"classList",d)}catch(c){if(void 0===c.number||-2146823252===c.number)d.enumerable=!1,h.defineProperty(a,"classList",d)}}else h.prototype.__defineGetter__&&a.__defineGetter__("classList",m)}}(self),function(){var a=document.createElement("_");a.classList.add("c1","c2");if(!a.classList.contains("c2")){var h=
function(a){var f=DOMTokenList.prototype[a];DOMTokenList.prototype[a]=function(a){var e,d=arguments.length;for(e=0;e<d;e++)a=arguments[e],f.call(this,a)}};h("add");h("remove")}a.classList.toggle("c3",!1);if(a.classList.contains("c3")){var l=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(a,f){return 1 in arguments&&!this.contains(a)===!f?f:l.call(this,a)}}"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(a,f){var e=this.toString().split(" "),
g=e.indexOf(a+"");~g&&(e=e.slice(g),this.remove.apply(this,e),this.add(f),this.add.apply(this,e.slice(1)))});a=null}());



(function () {

  if ( typeof window.CustomEvent === "function" ) return false;

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: null };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  window.CustomEvent = CustomEvent;
})();
"use strict";function polyfill(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==o.__forceSmoothScrollPolyfill__)){var l,e=o.HTMLElement||o.Element,r=468,i={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||n,scrollIntoView:e.prototype.scrollIntoView},s=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,c=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?v.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):i.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?i.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):v.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var o=arguments[0].left,t=arguments[0].top;v.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var l=function(o){for(;o!==t.body&&!1===d(o);)o=o.parentNode||o.host;return o}(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(v.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function n(o,t){this.scrollLeft=o,this.scrollTop=t}function f(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(o,t){return"Y"===t?o.clientHeight+c<o.scrollHeight:"X"===t?o.clientWidth+c<o.scrollWidth:void 0}function a(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function d(o){var t=p(o,"Y")&&a(o,"Y"),l=p(o,"X")&&a(o,"X");return t||l}function h(t){var l,e,i,c,n=(s()-t.startTime)/r;c=n=n>1?1:n,l=.5*(1-Math.cos(Math.PI*c)),e=t.startX+(t.x-t.startX)*l,i=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,i),e===t.x&&i===t.y||o.requestAnimationFrame(h.bind(o,t))}function v(l,e,r){var c,f,p,a,d=s();l===t.body?(c=o,f=o.scrollX||o.pageXOffset,p=o.scrollY||o.pageYOffset,a=i.scroll):(c=l,f=l.scrollLeft,p=l.scrollTop,a=n),h({scrollable:c,method:a,startTime:d,startX:f,startY:p,x:e,y:r})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:polyfill}:polyfill();
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
(function(forms){

	if(!forms.length) {

		return;

	}

	const toggleForm = (form, buy) => {

		const btn = form.querySelector('.btn');

		btn.disabled = false;
		btn.classList.toggle('btn--gray', buy);
		btn.textContent = btn.getAttribute('data-' + ( buy ? 'delete' : 'buy' ) );
		form.elements.mode.value = ( buy ? 'del' : 'add' );

	}

	Array.prototype.forEach.call(forms, function(btn){

		const form = btn.closest('form');

		const productScroll = document.querySelector('.product-scroll');

		form.addEventListener('submit',function(e){

			e.preventDefault();

			const buy = !form.classList.contains('in-cart');

			btn.disabled = true;

			// send form

			const formData = new FormData(form),
				xhr = new XMLHttpRequest();

			xhr.open("POST", form.getAttribute('action') + 'ajax/');

			xhr.onreadystatechange = function() {

				if (xhr.readyState !== 4){

					return;

				}

				toggleForm(form, buy);

				if ( productScroll ) {

					if ( form === productScroll ) {

						toggleForm(document.querySelector('.product__cart'), buy);

					}
					else {

						toggleForm(productScroll, buy);

					}

				}

				if(buy) {

					document.querySelector('.modal-product-in-cart').textContent = form.elements.mode.value;

					ASKO.modalShow('product-in-cart');

				}
				else {

					ASKO.headerCart.show();

				}

				var cart = JSON.parse(xhr.response);
				console.log(cart.quantity, cart.sum);

				form.classList.toggle('in-cart', buy);

				if (xhr.status != 200) {

					console.log('ошибка ' + xhr.status);

				}
				else {

					ASKO.headerCart.change(cart.quantity, cart.sum);

				}

			}

			xhr.send(formData);

		});

	});

})(document.querySelectorAll('.product-in-cart'));
/*(function(cookie){

	if(cookie) {

		cookie.addEventListener('submit', function (e) {

			e.preventDefault();

			Cookies.set('cookiesPolicy', 'Accept');

			cookie.classList.add('hide');

		});

	}

})(document.querySelector('.cookie'));*/
( form => {

	if(!form) {

		return;

	}

	const inputRange = form.querySelectorAll('.filter__range');

	if(inputRange.length) {

		[...inputRange].forEach( el => {

			let from = el.querySelector('.filter__range-from'),
				to = el.querySelector('.filter__range-to'),
				inputFrom = el.querySelector('.filter__range-input-from'),
				inputTo = el.querySelector('.filter__range-input-to'),
				slider = el.querySelector('.filter__slider-control'),
				minValue = ASKO.strToNumber(el.querySelector('.filter__range-min').textContent),
				maxValue = ASKO.strToNumber(el.querySelector('.filter__range-max').textContent),
				fromValue = ASKO.strToNumber(from.value),
				toValue = ASKO.strToNumber(to.value);

			inputEvent(inputFrom);
			inputEvent(inputTo);

			inputFrom.value = ASKO.sepNumber(fromValue);
			inputTo.value = ASKO.sepNumber(toValue);

			function inputEvent(input){

				input.value = ASKO.sepNumber(input.value);

				input.addEventListener('focus', function () {

					this.value = ASKO.strToNumber(this.value);

				});

				input.addEventListener('blur', function () {

					var val = ASKO.strToNumber(this.value);

					if(this.classList.contains('filter__range-input-from') && val < minValue){

						val = minValue;

					}
					else if(this.classList.contains('filter__range-input-to') && val > maxValue){

						val = maxValue;

					}

					this.value = ASKO.sepNumber(val);

					updateInput();

				});

				input.addEventListener('keyup', function() {

					var val = this.value.replace(/[\D]/g, '');

					this.value = val;

					updateInput();

				});

			}

			function updateInput(){

				fromValue = ASKO.strToNumber(inputFrom.value);
				toValue = ASKO.strToNumber(inputTo.value);

				from.value = fromValue;
				to.value = toValue;

				slider.noUiSlider.set([fromValue, toValue]);

			}

			function updateSlider(){

				from.value = fromValue;
				to.value = toValue;

				inputFrom.value = ASKO.sepNumber(fromValue);
				inputTo.value = ASKO.sepNumber(toValue);

			}

			var onFulfilled = function(){

				noUiSlider.create(slider, {
					start: [fromValue,toValue],
					connect: true,
					range: {
						'min': minValue,
						'max': maxValue
					},
					margin: parseInt(slider.getAttribute('data-step')),
					step: parseInt(slider.getAttribute('data-step'))
				});

				slider.noUiSlider.on('slide', function(e){

					fromValue = parseInt(e[0]);
					toValue = parseInt(e[1]);
					updateSlider();

				});

				slider.noUiSlider.on('update', function(e){

				//	updateSlider(parseInt(e[0]),parseInt(e[1]))

				});

			}

			const promise = new Promise(function(resolve, reject) {

				window.addEventListener("loadNoUiSlider", resolve);

			});

			promise.then(onFulfilled);

		});

	}

	form.addEventListener('reset', ()=> {

		setTimeout(function(){

			Array.prototype.forEach.call(inputRange, function(el){

				var from = el.querySelector('.filter__range-from'),
					to = el.querySelector('.filter__range-to'),
					inputFrom = el.querySelector('.filter__range-input-from'),
					inputTo = el.querySelector('.filter__range-input-to'),
					slider = el.querySelector('.filter__slider-control'),
					fromValue = ASKO.strToNumber(inputFrom.value),
					toValue = ASKO.strToNumber(inputTo.value);

				from.value = fromValue;
				to.value = toValue;
				slider.noUiSlider.set([fromValue, toValue]);

			});

		},100);

	});

	// load UiSlider

	let loadNoUiSlider = false;

	form.addEventListener('modalShow', () => {

		if(!loadNoUiSlider){

			const script = document.createElement('script');

			script.src = '/js/nouislider.min.js';

			script.onload = ()=> {

				const event = new Event('loadNoUiSlider');
				window.dispatchEvent(event);

			};

			document.head.append(script);
			loadNoUiSlider = true;

		}

	});

})(document.querySelector('.filter-modal'));
(function(forms){

	if(!forms) {

		return;

	}

	Array.prototype.forEach.call(forms, function(form){

		var btn = form.querySelector('.form-my-list__btn'),
			mode = form.querySelector('[name="mode"]'),
			headerCounterValue = document.querySelector('.header__' + form.querySelector('[name="mylist"]').value + '-count');

		form.addEventListener('submit',function(e){

			e.preventDefault();

			var add = mode.value === 'add';

			btn.disabled = true;

			// send form

			var formData = new FormData(form),
				xhr = new XMLHttpRequest();

			xhr.open("POST", form.getAttribute('action') + 'ajax/');

			xhr.onreadystatechange = function() {

				if (xhr.readyState !== 4){

					return;

				}

				btn.disabled = false;
				form.classList.toggle('is-add', add);
				mode.value = ( add ? 'del' : 'add' );

				var response = JSON.parse(xhr.response);
				console.log(response);

				if (xhr.status !== 200) {

					console.log('ошибка ' + xhr.status);

				}
				else {

					headerCounterValue.textContent = response.quantity;
					headerCounterValue.classList.toggle('hide', response.quantity === 0);

				}

			}

			xhr.send(formData);

		});

	});

})(document.querySelectorAll('.form-my-list'));


(function(){

	var forms = document.querySelectorAll('.form');

	Array.prototype.forEach.call(forms, function(form){

		var showMoadalOk = form.getAttribute('data-ok-modal'),
			xhrOff = form.classList.contains('form-zakaz') || form.classList.contains('form-zakaz-details'),
			formRequired = form.querySelectorAll('[required]'),
			formBtnSubmit = form.querySelector('.form__submit'),
			textError = form.querySelector('.form__texterror');

		// отправка формы
		form.addEventListener('submit', function(e) {

			var novalidate = false,
				formData = new FormData(form);

			if(textError) {

				textError.textContent = '';

			}

			Array.prototype.forEach.call(formRequired, function(input){

				if(input.offsetParent === null) {

					return;

				}

				if(input.getAttribute('type') == 'checkbox') {

					if(input.checked){

						input.parentNode.classList.remove('checkbox--error');

					}
					else {

						input.parentNode.classList.add('checkbox--error');
						novalidate = true;

					}

				}

				else if(input.getAttribute('type') == 'radio') {

					var _name = input.getAttribute('name'),
						_checked = false,
						_radioGroup = document.querySelectorAll('[name="'+_name+'"]');

					Array.prototype.forEach.call(_radioGroup, function(el) {

						if(el.checked){

							_checked = true;

						}

					});

					if(!_checked){

						novalidate = true;
						input.closest('.input-row__input').classList.add('input-row__input--error');

					}

				}

				else {

					errorInput(input);

					if(!input.value){

						novalidate = true;

					}

				}

			});

			if(!novalidate){

				if(xhrOff) {

					ASKO.sendBeacon = false;
					return true;

				}

				// проверка на бота

				if(form.offsetParent === null) {

					e.preventDefault();
					return;

				}

				if(form.classList.contains('modal__item--callback')) {

					var phone = form.querySelector('.input[type="tel"]');

					if(phone && phone.value.replace(/[^+\d]/g, '') === ''){

						e.preventDefault();
						return;

					}

				}

				var xhr = new XMLHttpRequest();

				xhr.open("POST", form.getAttribute('action'));
				xhr.send(formData);

				if(formBtnSubmit) {

					formBtnSubmit.disabled = true;

				}

				xhr.onreadystatechange = function() {

					if (xhr.readyState != 4){

						return;

					}

					if (xhr.status == 200) {

						if(showMoadalOk) {

							document.querySelector('.modal__item--thanks .modal__text').textContent = showMoadalOk;

							ASKO.modalShow('thanks');

							form.reset();

						}

					} else {

						alert('ошибка ' + xhr.status);

					}

					if(formBtnSubmit) {

						formBtnSubmit.disabled = false;

					}

				}

			}
			else {

				var checkboxError = form.querySelector('.checkbox--error');

				if ( checkboxError ) {

					if(!ASKO.isInViewport(checkboxError)){

						checkboxError.closest('.input-row').scrollIntoView("smooth");

					}

				}
				else {

					var inputError = form.querySelector('.input-row__input--error');

					if(textError && inputError.getAttribute('data-error')) {

						textError.textContent = inputError.getAttribute('data-error');

					}

					if(!ASKO.isInViewport(inputError)){

						inputError.closest('.input-row').scrollIntoView("smooth");

					}

					if(inputError && inputError.querySelector('.input--error') && inputError.querySelector('.input--error').type === 'text'){

						inputError.querySelector('.input--error').focus();

					}

				}

			}

			e.preventDefault();

		});

		// изменение формы
		form.addEventListener('change', function(e) {

			var _target = e.target;

			if(_target.required) {

				if(_target.type === 'radio') {

					_target.closest('.input-row__input').classList.remove('input-row__input--error');
					textError.textContent = '';

				}

				if(_target.type === 'checkbox' && _target.checked) {

					_target.closest('.checkbox').classList.remove('checkbox--error');

				}

			}

		});

	});

// input

	var inputRequired = document.querySelectorAll('.input[required]');

	function errorInput(el){

		if(el.value) {
			el.classList.remove('input--error');
			el.parentNode.classList.remove('input-row__input--error');
		}
		else {
			el.classList.add('input--error');
			el.parentNode.classList.add('input-row__input--error');
		}

	}

	Array.prototype.forEach.call(inputRequired, function(el){

		el.addEventListener('keyup', function(e) {

			if(e.code !== "Tab") {

				errorInput(el);

			}

		});

		el.addEventListener('blur', function() {

			errorInput(el);

		});

	});

})();
(function(gallery){

	if(gallery) {

		ASKO.gallerySwiper = '<div class="swiper-container swiper-container--gallery"><ul class="notsel swiper-wrapper">';

		Array.prototype.forEach.call(gallery.querySelectorAll('.product__img-small a'), function(link){

			// если ютуб в слайдере
			if(link.classList.contains('product__img-youtube')){

				ASKO.gallerySwiper += '<li class="swiper-slide swiper-slide--youtube"><div class="youtube-modal-gallery" data-id="' + link.getAttribute('data-id') + '"><img src="https://i.ytimg.com/vi/' + link.getAttribute('data-id') + '/maxresdefault.jpg"></div></li>';

			}
			else {

				ASKO.gallerySwiper += '<li class="swiper-slide"><img src="' + link.getAttribute('href') + '"></li>';

			}

		});

		ASKO.gallerySwiper += '</ul><span class="swiper-count"></span></div>';

		gallery.addEventListener('click', function(e) {

			if(e.target.closest('.product__energ')) {

				return;

			}

			if(e.target.closest('a')) {

				e.preventDefault();

			}
			else {

				return;

			}

			if(window.innerWidth < 768) {

				return;

			}

			document.querySelector('#modal-gallery').innerHTML = ASKO.gallerySwiper;

			ASKO.modalShow('gallery');

			var galleryModal = document.querySelector('#modal-gallery .swiper-container--gallery'),
				slide = e.target.closest('.swiper-slide'),
				index = slide ? slide.getAttribute('data-swiper-slide-index') : 0;

			ASKO.swiper(galleryModal, index);

		});

	}

})(document.querySelector('.product__img'));
(function () {

	var yaCounterId = '26526729',
		goals = [

		// переходы по статьям из меню
			{
				selector: '.link-article-in-catalog-menu',
				event: 'click',
				yandex: {
					target: 'LINK_ARTICLE_IN_CATALOG_MENU'
				}
			},

		// Телефон
			{
				selector: 'a[href^="tel"]',
				event: 'click',
				yandex: {
					target: 'PHONE'
				}
			},

		// Фильтр
			{
				selector: '.filter__btn-toggle .btn',
				event: 'click',
				yandex: {
					target: 'FILTER_OPEN'
				}
			},
			{
				selector: '.filter',
				event: 'submit',
				yandex: {
					target: 'FILTER_SUBMIT'
				}
			},

		// Покупка
			{
				selector: '.catalog-list__cart, .product__cart',
				event: 'submit',
				yandex: {
					target: 'CLICK_BUY'
				}
			},
			{
				selector: '.form-zakaz',
				event: 'submit',
				yandex: {
					target: 'SUBMIT_ORDER_CREATE'
				}
			},
			{
				selector: '.form-zakaz-details',
				event: 'submit',
				yandex: {
					target: 'SUBMIT_ORDER_DETAILS'
				}
			},

		// Заказать звонок
			{
				selector: '.modal__item--callback',
				event: 'modalShow',
				yandex: {
					target: 'CALLBACK_OPEN'
				}
			},
			{
				selector: '.modal__item--callback',
				event: 'submit',
				yandex: {
					target: 'CALLBACK_SEND'
				}
			},
			{
				selector: '.modal__item--thanks',
				event: 'modalShow',
				yandex: {
					target: 'THANKS_OPEN'
				}
			},

		];


	goals.forEach(function (goal) {
		if (goal.page && goal.page !== location.pathname)
			return;

		if (goal.skipPages && goal.skipPages.indexOf(location.pathname) !== -1)
			return;

		var elements = document.querySelectorAll(goal.selector);

		[].forEach.call(elements, function (element) {
			element.addEventListener(goal.event, function () {
				console.log(goal.yandex.target)
				if (goal.yandex && window['yaCounter' + yaCounterId]) {
					window['yaCounter' + yaCounterId].reachGoal(goal.yandex.target);
				}
			});
		});
	});

})();
(function(headerCart){

	if(headerCart) {

		var clearTimeoutID = null;

		ASKO.headerCart = {

			change : function(quantity, sum) {

				headerCart.querySelector('.header__cart-count').textContent = quantity;
				headerCart.querySelector('.header__cart-value').textContent = ASKO.sepNumber(sum);
				headerCart.classList.toggle('header__cart--empty', quantity == '0');

			},

			show : function() {

				headerCart.classList.add('header__cart--show');

				clearTimeout(clearTimeoutID);

				clearTimeoutID = setTimeout(function(){

					headerCart.classList.remove('header__cart--show');

				}, 3000);

			}

		}

	}

})(document.querySelector('.header__cart'));
(function(nav){

	if(!nav) {

		return;

	}

	var level1 = nav.querySelectorAll('.nav__item'),
		level2Parent = nav.querySelectorAll('.nav__level2-item--parent'),
		level2Back = nav.querySelectorAll('.nav__level2-btn-back'),
		level3Back = nav.querySelectorAll('.nav__level3-btn-back'),
		wrapper = document.querySelector('.wrapper');

	// открыть|закрыть меню

	document.addEventListener('click', function (e) {

		if(e.target.closest('.header__btn-toggle') || e.target.classList.contains('nav')) {

			if(ASKO.body.classList.contains('menu-open')){

				nav.classList.remove('is-level2');
				nav.classList.remove('is-level3');

				Array.prototype.forEach.call(level1, function(el){

					el.classList.remove('is-hover');

				});

				Array.prototype.forEach.call(level2Parent, function(el){

					el.classList.remove('is-hover');

				});

				setTimeout(function(){

					window.scrollTo(0,ASKO.windowScrollOld);
					wrapper.style.top = 0;

				});

			}
			else {

				ASKO.windowScrollOld = window.pageYOffset;
				window.scrollTo(0,0);
				wrapper.style.top = -ASKO.windowScrollOld + 'px';

			}

			ASKO.body.classList.toggle('menu-open');
			nav.classList.toggle('visuallyhidden');

		}

	});


	// наведение на первый уровень

	Array.prototype.forEach.call(level1, function(el){

		if(!el.classList.contains('nav__item--parent')) {

			el.addEventListener('mouseleave', function () {

				if(ASKO.width >= 768) {

					el.classList.remove('is-hover');
					nav.classList.remove('is-level2');

				}

			});

			el.addEventListener('mouseenter', function () {

				if(ASKO.width >= 768) {

					el.classList.remove('is-hover');
					nav.classList.remove('is-level2');

					Array.prototype.forEach.call(level1, function(elem){

						elem.classList.remove('is-hover');

					});

				}

			});

		}
		else {

			el.addEventListener('mouseenter', function () {

				if(ASKO.width >= 768) {

					nav.classList.add('is-level2');

					Array.prototype.forEach.call(level1, function(elem){

						elem.classList.toggle('is-hover', elem === el);

					});

				}

			});

			el.querySelector('.nav__head').addEventListener('click', function (e) {

				if(ASKO.width < 768) {

					e.preventDefault();

					nav.style.minHeight = el.querySelector('.nav__level2').scrollHeight + "px";

					nav.classList.add('is-level2');

					Array.prototype.forEach.call(level1, function(elem){

						elem.classList.toggle('is-hover', elem === el);

					});

				}

			});

		}

	});

	// ховер/клик второй уровень

	Array.prototype.forEach.call(level2Parent, function(el){

		el.parentNode.addEventListener('mouseenter', function () {

			if(ASKO.width >= 768) {

				nav.classList.add('is-level3');

				Array.prototype.forEach.call(level2Parent, function(elem){

					elem.classList.toggle('is-hover', elem === el);

				});

			}

		});

		el.parentNode.addEventListener('mouseleave', function () {

			if(ASKO.width >= 768) {

				nav.classList.remove('is-level3');

				Array.prototype.forEach.call(level2Parent, function(elem){

					elem.classList.remove('is-hover');

				});

			}

		});

		el.querySelector('.nav__level2-link').addEventListener('click', function (e) {

			if(ASKO.width < 768) {

				e.preventDefault();

				nav.classList.add('is-level3');

				Array.prototype.forEach.call(level2Parent, function(elem){

					elem.classList.toggle('is-hover', elem === el);

				});

			}

		});

	});

	// клик по кнопке назад

	Array.prototype.forEach.call(level2Back, function(el){

		el.addEventListener('click', function () {

			nav.style.minHeight = nav.querySelector('.nav__inner').clientHeight + "px";

			nav.classList.remove('is-level2');

			Array.prototype.forEach.call(level1, function(el){

				el.classList.remove('is-hover');

			});

		});

	});

	Array.prototype.forEach.call(level3Back, function(el){

		el.addEventListener('click', function () {

			nav.classList.remove('is-level3');

			Array.prototype.forEach.call(level2Parent, function(elem){

				elem.classList.remove('is-hover');

			});

		});

	});

})(document.querySelector('.nav'));

(function(){

	var modal = document.querySelector('.modal'),
		items = modal.querySelectorAll('.modal__item'),
		close = document.querySelectorAll('.modal__close'),
		wrapper = document.querySelector('.wrapper');

	Array.prototype.forEach.call(close, function(el){

		el.addEventListener('click', function () {

			ASKO.closeModal();

		});

	});

	modal.addEventListener('click', function (e) {

		if(e.target.classList.contains('modal')) {

			ASKO.closeModal();

		}

	});

	ASKO.closeModal = function() {

		ASKO.activeModal.classList.remove('modal__item--active');
		ASKO.body.classList.remove('modal-show');
		wrapper.style.top = 0;
		window.scrollTo(0,ASKO.windowScrollOld);

		// покажем корзину

		if(ASKO.activeModal.classList.contains('modal__item--product-in-cart') && !ASKO.activeModal.classList.contains('modal__item--active')) {

			setTimeout(function(){

				ASKO.headerCart.show();

			}, 200);

		}

		// остановить видео

		if(document.querySelector('#modal-gallery .youtube-modal-gallery.is-active')) {

			document.querySelector('#modal-gallery .youtube-modal-gallery.is-active iframe').remove();

		}

		// удалить видео

		document.querySelector('#modal-video').innerHTML = '';

	};

	ASKO.modalShow = function (selector) {

		ASKO.activeModal = modal.querySelector('.modal__item--' + selector);

		Array.prototype.forEach.call(items, function(el){

			el.classList.toggle('modal__item--active', ASKO.activeModal == el);

		});

		modal.classList.toggle('is-full', selector === 'gallery' || selector === 'video');

		ASKO.windowScrollOld = window.pageYOffset;

		wrapper.style.top = -ASKO.windowScrollOld + 'px';

		ASKO.body.classList.add('modal-show');
		window.scrollTo(0,0);

		ASKO.activeModal.focus();

		// вызывыем событие на активном окне
		ASKO.activeModal.dispatchEvent(new Event('modalShow'));

	}

	document.addEventListener('keydown',function(e) {

		var keyCode = e.keyCode || e.which;

		if(keyCode === 27){

			e.preventDefault();
			var event = new Event('click');
			modal.dispatchEvent(event);

		}

	});

	document.addEventListener('click', function (e) {

		let target = e.target;

		while (target !== this) {

			if (target.hasAttribute('data-modal')) {

				ASKO.modalShow(target.getAttribute('data-modal'));

			}

			target = target.parentNode;

		}

	});

})();
( form => {

	if(form) {

		const productForm = document.querySelector('.product__cart'),
			  footer = document.querySelector('.footer');

		window.addEventListener("scroll", () => {

			window.requestAnimationFrame( () => {

				const rect = footer.getBoundingClientRect();

				form.classList.toggle('is-show', ASKO.isInViewport(productForm) === false && rect.top > ASKO.height);

			});

		});

	}

})(document.querySelector('.product-scroll'));


(function(form){

	if(form) {

		var input = form.querySelector('.header__search-input');

		// отправка формы
		form.addEventListener('submit', function(e) {

			if(input.value === '') {

				e.preventDefault();
				input.focus();

			}

		});

	}

})(document.querySelector('.header__search'));
(function(gallery){

	if(gallery) {

		var galleryItem = gallery.querySelectorAll('.show-room-gallery__item');

		ASKO.gallerySwiper = '<div class="swiper-container swiper-container--gallery"><ul class="notsel swiper-wrapper">';

		Array.prototype.forEach.call(galleryItem, function(link, index){

			ASKO.gallerySwiper += '<li class="swiper-slide"><img src="' + link.getAttribute('href') + '"></li>';

			link.addEventListener('click', function(e) {

				e.preventDefault();

				document.querySelector('#modal-gallery').innerHTML = ASKO.gallerySwiper;

				ASKO.modalShow('gallery');

				var galleryModal = document.querySelector('#modal-gallery .swiper-container--gallery');

				ASKO.swiper(galleryModal, index);

			});

		});

		ASKO.gallerySwiper += '</ul><span class="swiper-count"></span></div>';

		setTimeout(function(){

			var script = document.createElement('script');

			script.type = 'text/javascript';
			script.async = true;
			script.src = '/js/swiper.min.js';

			document.head.appendChild(script);

		}, ASKO.settimeout);

	}

})(document.querySelector('.show-room-gallery'));
ASKO.swiper = function(swipe, initialSlide){

	if(swipe.querySelector('.swiper-pagination')){

		return;

	}

	var mySwipe = null,
		resizeTimeout = null,
		windowWidthOLd = null,
		toggleSwipe = null,
		resetSwipe = null,
		swipeNav = document.createElement('div'),
		swipeNext = document.createElement('button'),
		swipePrev = document.createElement('button'),
		initialSlide = initialSlide ? parseInt(initialSlide) : 0,
		count = swipe.querySelectorAll('.swiper-slide').length,
		big = swipe.classList.contains('swiper-container--big'),
		product = swipe.classList.contains('swiper-container--product'),
		gallery = swipe.classList.contains('swiper-container--gallery');

	swipeNav.className = 'swiper-pagination hide';
	swipePrev.className = 'swiper-button-prev button hide';
	swipeNext.className = 'swiper-button-next button hide';

	swipePrev.innerHTML = '<svg viewBox="0 0 1000 1000"><path d="M990 10H10v980h980V10zm-91.4 416.5v147H394.4l215.3 215.3-114.3 114.4L92.2 500 495.4 96.8l114.4 114.4-215.4 215.3h504.2z"/></svg>';

	swipeNext.innerHTML = '<svg viewBox="0 0 1000 1000"><path d="M990 10H10v980h980V10zm-91.4 416.5v147H394.4l215.3 215.3-114.3 114.4L92.2 500 495.4 96.8l114.4 114.4-215.4 215.3h504.2z"/></svg>';

	swipe.appendChild(swipeNav);
	swipe.parentNode.appendChild(swipeNext);
	swipe.parentNode.appendChild(swipePrev);

	resetSwipe = function(){

		if(mySwipe) {

			mySwipe.destroy(false,true);
			mySwipe = undefined;

		}

		swipeNav.classList.remove('hide');
		swipeNext.classList.add('hide');
		swipePrev.classList.add('hide');

		if (ASKO.width < 768) {


		}
		else {

			swipeNext.classList.remove('hide');
			swipePrev.classList.remove('hide');

		}

	}

	if (big) {

		resetSwipe();

		toggleSwipe = function() {

			toggleSwipe = false;

			new Swiper(swipe, {
				loop: true,
				pagination: {
					el: swipeNav
				},
				navigation: {
					nextEl: swipeNext,
					prevEl: swipePrev
				}
			});

		}

	}

	if (product) {

		if(ASKO.width < 768) {

			swipeNav.classList.remove('hide');

		}
		else if((count > 3 || (count > 2 && ASKO.width < 1000))) {

			swipeNext.classList.remove('hide');
			swipePrev.classList.remove('hide');

		}
		else {

			swipe.classList.add('swiper-container--off');

		}

		toggleSwipe = function() {

			swipeNav.classList.add('hide');
			swipeNext.classList.add('hide');
			swipePrev.classList.add('hide');
			swipe.classList.remove('swiper-container--off');


			if(mySwipe) {

				console.log(mySwipe)

				mySwipe.destroy(false,true);
				mySwipe = undefined;

				// удалчем ютуб в маленьком слайдере, при ресайсе или еще как
				if(swipe.querySelector('.product__img-youtube.is-active')){

					swipe.querySelector('.product__img-youtube.is-active').classList.remove('is-active');

					if(swipe.querySelector('iframe')){

						swipe.querySelector('iframe').remove();

					}

				}

			}

			if(ASKO.width < 768) {

				swipeNav.classList.remove('hide');

				if(count > 1) {

					mySwipe = new Swiper(swipe, {
						loop: true,
						preloadImages: false,
						pagination: {
							el: swipeNav,
							clickable: true
						},
						on: {

							slideChangeTransitionStart: function() {

								if(mySwipe){

									// останавливаем ютуб в маленьком слайдере

									if(mySwipe.slides[mySwipe.previousIndex].classList.contains('swiper-slide--youtube')){

										mySwipe.slides[mySwipe.previousIndex].querySelector('.product__img-youtube').classList.remove('is-active');

										if(mySwipe.slides[mySwipe.previousIndex].querySelector('iframe')){

											mySwipe.slides[mySwipe.previousIndex].querySelector('iframe').remove();

										}

									}

								}

							}

						}
					});

				}

			}
			else if((count > 3 || (count > 2 && ASKO.width < 1000))) {

				swipeNext.classList.remove('hide');
				swipePrev.classList.remove('hide');

				mySwipe = new Swiper(swipe, {
					loop: true,
					slidesPerView: 'auto',
					preloadImages: false,
					navigation: {
						nextEl: swipeNext,
						prevEl: swipePrev
					}
				});

			}
			else {

				swipe.classList.add('swiper-container--off');

			}

		}

	}

	if (gallery) {

		toggleSwipe = function() {

			var countCurrent = swipe.querySelector('.swiper-count');

			if(count > 1) {

				swipeNext.classList.remove('hide');
				swipePrev.classList.remove('hide');
				countCurrent.textContent = (initialSlide + 1) + '/' + count;

				if(!mySwipe) {

					console.log('gallery')

					mySwipe = new Swiper(swipe, {
						loop: true,
						initialSlide: initialSlide,
						navigation: {
							nextEl: swipeNext,
							prevEl: swipePrev
						},
						on: {

							slideChangeTransitionStart: function() {

								if(mySwipe){

									countCurrent.textContent =
										mySwipe.activeIndex === 0 || mySwipe.activeIndex === count ?
											count :
											mySwipe.activeIndex % count;

									countCurrent.textContent += '/' + count;

									// удалчем ютуб в модальном окне (остановка)
									if(mySwipe.slides[mySwipe.previousIndex].classList.contains('swiper-slide--youtube')){

										mySwipe.slides[mySwipe.previousIndex].querySelector('.youtube-modal-gallery').classList.remove('is-active');

										if(mySwipe.slides[mySwipe.previousIndex].querySelector('iframe')){

											mySwipe.slides[mySwipe.previousIndex].querySelector('iframe').remove();

										}

									}

								}

							}

						}

					});

				}

			}
			else {

				swipeNext.classList.add('hide');
				swipePrev.classList.add('hide');
				countCurrent.textContent = '';

			}

		}

		window.Swiper && toggleSwipe();

	}

	window.addEventListener("resize", function(){

		window.requestAnimationFrame(function(){

			if (window.Swiper && !resizeTimeout) {

				resizeTimeout = setTimeout(function() {

					resizeTimeout = null;

					if(ASKO.width != windowWidthOLd){

						windowWidthOLd = ASKO.width;

						toggleSwipe && toggleSwipe();

					}

				}, 1000);

			}

		});

	});

};


(function(item){

	if(item.length) {

		setTimeout(function(){

			var script = document.createElement('script');

			script.src = '/js/swiper.min.js';

			script.onload = function () {

				window.dispatchEvent(new Event('resize'));

			};

			document.head.appendChild(script);

		}, ASKO.settimeout);

		Array.prototype.forEach.call(item, function(el){

			ASKO.swiper(el);

		});

	}

})(document.querySelectorAll('.swiper-container'));
ASKO.tabs = function(elems){

	Array.prototype.forEach.call(elems, function(tab){

		var btn = tab.querySelectorAll('.tabs__btn'),
			item = tab.querySelectorAll('.tabs__item'),
			nav = document.createElement('div');

		Array.prototype.forEach.call(btn, function(el,index){

			var _btn = document.createElement('button'),
				_pattern = document.createElement('span');

			_btn.setAttribute('type','button');

			_btn.className = 'button tabs__nav-btn';
			_pattern.className = 'pattern';

			_btn.innerHTML = el.innerHTML;
			_btn.appendChild(_pattern);

			nav.appendChild(_btn);

			el.classList.add('h2');

			_btn.addEventListener('click',function(){

				Array.prototype.forEach.call(item, function(elem,inx){

					btn[inx].classList.toggle('tabs__nav-btn--active', inx == index);
					elem.classList.toggle('tabs__item--active', inx == index);

				});

			});

		});

		nav.classList.add('tabs__nav');

		tab.insertBefore(nav, item[0]);

		btn = nav.querySelectorAll('.tabs__nav-btn');

		item[0].classList.add('tabs__item--active');
		btn[0].classList.add('tabs__nav-btn--active');

	});

};


if(document.querySelectorAll('.tabs').length) {

	ASKO.tabs(document.querySelectorAll('.tabs'));

}

(function(items){

	if(items.length === 0) {

		return;

	}

	Array.prototype.forEach.call(items, function(el){

		var btn = document.createElement('button');

		btn.className = 'btn btn--link';

		btn.textContent = el.getAttribute('data-btn');

		el.appendChild(btn);

		btn.addEventListener('click', function () {

			el.classList.add('is-open');

		});

	});

})(document.querySelectorAll('.text-hidden'));

( tooltips => {

	if(tooltips.length){

		const ico = document.createElement('span');

		ico.innerHTML = '<svg viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12a8 8 0 11-16 0 8 8 0 0116 0zm-5.74-3.87a3.18 3.18 0 01.56 3.78c-.38.7-1 1.22-1.74 1.49a.4.4 0 00-.28.38v.62a.8.8 0 01-1.6 0V12.8A.8.8 0 0112 12c.88 0 1.6-.72 1.6-1.6a1.6 1.6 0 00-3.2 0 .8.8 0 01-1.59.08l-.01-.12c.01-2 1.86-3.55 3.95-3.07.57.13 1.1.42 1.51.84zM12.8 16.8a.8.8 0 11-1.6 0 .8.8 0 011.6 0z"/></svg>';

		let observer = new MutationObserver(mutationRecords => {

			const t = mutationRecords[0].target.querySelector('div'),
				  rect = t.getBoundingClientRect();

			if(document.documentElement.clientWidth < rect.right) {

				// левее

				t.style.marginLeft = document.documentElement.clientWidth - rect.right + 'px';

			} else if(rect.left < 0) {

				// правее

				t.style.marginLeft = -rect.left + 'px';

			}

		});

		Array.from(tooltips, tooltip => {

			const btn = tooltip.querySelector('summary');

			if ( tooltip.className.length === 0 ) {

				btn.appendChild(ico.cloneNode(true));

			}

			observer.observe(tooltip, {

				attributes : true

			});

		});

		window.addEventListener("click", event => {

			const target = event.target.closest('details');

			Array.from(tooltips, tooltip => {

				if(target !== tooltip) {

					tooltip.open = false;

				}

			});

		});

	}

})(document.querySelectorAll('details'));

( videos => {

	if(videos.length) {

		[...videos].forEach( video => {

			video.addEventListener('click', ()=> {

				if ( video.classList.contains('is-play') === false ) {

					video.classList.add('is-play');

					video.querySelector('video').play();
					video.querySelector('video').controls = true;

				}

			});

		});

	}

})(document.querySelectorAll('.video'));
// видео иконкой, запус в попап

(function(youtube){

	if(youtube.length) {

		[...youtube].forEach( link => {

			const id = link.getAttribute('data-id');

			link.addEventListener('click', event => {

				event.preventDefault();

				const iframe = document.createElement('iframe');

				iframe.setAttribute('allowfullscreen', '');
				iframe.setAttribute('allow', 'autoplay');
				iframe.setAttribute('src', 'https://www.youtube.com/embed/' + id + '?rel=0&showinfo=0&autoplay=1');

				document.querySelector('#modal-video').appendChild(iframe);

				ASKO.modalShow("video");

			});

		});

	}

})(document.querySelectorAll('.youtube-ico'));

// видео в описании

(function(youtube){

	if(youtube.length) {

		Array.prototype.forEach.call(youtube, function(video){

			var link = video.querySelector('.youtube__link'),
				id = link.getAttribute('data-id');

			link.addEventListener('click', function(e) {

				e.preventDefault();

				if(video.classList.contains('is-active')){

					return;

				}

				video.classList.add('is-active');
				var iframe = document.createElement('iframe');
				iframe.setAttribute('controlsList','nodownload');
				iframe.setAttribute('disablePictureInPicture','true');
				iframe.setAttribute('allowfullscreen','allowfullscreen');
				iframe.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1&controls=0';
				video.appendChild(iframe);

			});

		});

	}

})(document.querySelectorAll('.youtube'));

(function(youtube){

	if(youtube) {

	// This code loads the IFrame Player API code asynchronously.
/*		var tag = document.createElement('script');
		tag.src = "http://www.youtube.com/player_api";
		document.head.appendChild(tag);
*/
		window.addEventListener('click', function(e) {

			var youtube = null;

		// слушаем видео в слайдере адаптив
			if(window.innerWidth < 768) {

				youtube = e.target.closest('.product__img-youtube');

			}
			else {

		// если видео в модалке
				youtube = e.target.closest('.youtube-modal-gallery');

			}

		// создаем и вставляем видео
			if(youtube && !youtube.classList.contains('is-active')){

				youtube.classList.add('is-active');

				var id = youtube.getAttribute('data-id');

				var iframe = document.createElement('iframe');
				iframe.setAttribute('id','player-' + id);
				iframe.setAttribute('controlsList','nodownload');
				iframe.setAttribute('disablePictureInPicture','true');
				iframe.setAttribute('allowfullscreen','allowfullscreen');
				iframe.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1&controls=0';
				youtube.appendChild(iframe);

			}

		});

	}

})(document.querySelector('.product__img-youtube'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50VXAubWluLmpzIiwianMuY29va2llLm1pbi5qcyIsInBvbHlmaWxsLmpzIiwic21vb3Roc2Nyb2xsLm1pbi5qcyIsImpzLmpzIiwiYnV5LmpzIiwiY29va2llLmpzIiwiZmlsdGVyLmpzIiwiZm9ybS1teS1saXN0LmpzIiwiZm9ybS5qcyIsImdhbGxlcnkuanMiLCJnb2Fscy5qcyIsImhlYWRlckNhcnQuanMiLCJtZW51LmpzIiwibW9kYWwuanMiLCJwcm9kdWN0LmpzIiwic2VhcmNoLmpzIiwic2hvdy1yb29tLmpzIiwic3dpcGVyLmpzIiwidGFicy5qcyIsInRleHQtaGlkZGVuLmpzIiwidG9vbHRpcC5qcyIsInZpZGVvLmpzIiwieW91dHViZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEZBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1VUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGEsbil7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShuKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1uKHJlcXVpcmUsZXhwb3J0cyxtb2R1bGUpOmEuQ291bnRVcD1uKCl9KHRoaXMsZnVuY3Rpb24oYSxuLHQpe3JldHVybiBmdW5jdGlvbihhLG4sdCxlLGkscil7dmFyIHU9dGhpcztpZih1LnZlcnNpb249ZnVuY3Rpb24oKXtyZXR1cm5cIjEuOS4zXCJ9LHUub3B0aW9ucz17dXNlRWFzaW5nOiEwLHVzZUdyb3VwaW5nOiEwLHNlcGFyYXRvcjpcIixcIixkZWNpbWFsOlwiLlwiLGVhc2luZ0ZuOmZ1bmN0aW9uKGEsbix0LGUpe3JldHVybiB0KigxLU1hdGgucG93KDIsLTEwKmEvZSkpKjEwMjQvMTAyMytufSxmb3JtYXR0aW5nRm46ZnVuY3Rpb24oYSl7dmFyIG4sdCxlLGkscixvLHM9YTwwO2lmKGE9TWF0aC5hYnMoYSkudG9GaXhlZCh1LmRlY2ltYWxzKSxuPShhKz1cIlwiKS5zcGxpdChcIi5cIiksdD1uWzBdLGU9MTxuLmxlbmd0aD91Lm9wdGlvbnMuZGVjaW1hbCtuWzFdOlwiXCIsdS5vcHRpb25zLnVzZUdyb3VwaW5nKXtmb3IoaT1cIlwiLHI9MCxvPXQubGVuZ3RoO3I8bzsrK3IpMCE9PXImJnIlMz09MCYmKGk9dS5vcHRpb25zLnNlcGFyYXRvcitpKSxpPXRbby1yLTFdK2k7dD1pfXJldHVybiB1Lm9wdGlvbnMubnVtZXJhbHMubGVuZ3RoJiYodD10LnJlcGxhY2UoL1swLTldL2csZnVuY3Rpb24oYSl7cmV0dXJuIHUub3B0aW9ucy5udW1lcmFsc1srYV19KSxlPWUucmVwbGFjZSgvWzAtOV0vZyxmdW5jdGlvbihhKXtyZXR1cm4gdS5vcHRpb25zLm51bWVyYWxzWythXX0pKSwocz9cIi1cIjpcIlwiKSt1Lm9wdGlvbnMucHJlZml4K3QrZSt1Lm9wdGlvbnMuc3VmZml4fSxwcmVmaXg6XCJcIixzdWZmaXg6XCJcIixudW1lcmFsczpbXX0sciYmXCJvYmplY3RcIj09dHlwZW9mIHIpZm9yKHZhciBvIGluIHUub3B0aW9ucylyLmhhc093blByb3BlcnR5KG8pJiZudWxsIT09cltvXSYmKHUub3B0aW9uc1tvXT1yW29dKTtcIlwiPT09dS5vcHRpb25zLnNlcGFyYXRvcj91Lm9wdGlvbnMudXNlR3JvdXBpbmc9ITE6dS5vcHRpb25zLnNlcGFyYXRvcj1cIlwiK3Uub3B0aW9ucy5zZXBhcmF0b3I7Zm9yKHZhciBzPTAsbD1bXCJ3ZWJraXRcIixcIm1velwiLFwibXNcIixcIm9cIl0sbT0wO208bC5sZW5ndGgmJiF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOysrbSl3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lPXdpbmRvd1tsW21dK1wiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdLHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZT13aW5kb3dbbFttXStcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdfHx3aW5kb3dbbFttXStcIkNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtmdW5jdGlvbiBkKGEpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBhJiYhaXNOYU4oYSl9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oYSxuKXt2YXIgdD0obmV3IERhdGUpLmdldFRpbWUoKSxlPU1hdGgubWF4KDAsMTYtKHQtcykpLGk9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXthKHQrZSl9LGUpO3JldHVybiBzPXQrZSxpfSksd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lfHwod2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKGEpe2NsZWFyVGltZW91dChhKX0pLHUuaW5pdGlhbGl6ZT1mdW5jdGlvbigpe3JldHVybiEhdS5pbml0aWFsaXplZHx8KHUuZXJyb3I9XCJcIix1LmQ9XCJzdHJpbmdcIj09dHlwZW9mIGE/ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYSk6YSx1LmQ/KHUuc3RhcnRWYWw9TnVtYmVyKG4pLHUuZW5kVmFsPU51bWJlcih0KSxkKHUuc3RhcnRWYWwpJiZkKHUuZW5kVmFsKT8odS5kZWNpbWFscz1NYXRoLm1heCgwLGV8fDApLHUuZGVjPU1hdGgucG93KDEwLHUuZGVjaW1hbHMpLHUuZHVyYXRpb249MWUzKk51bWJlcihpKXx8MmUzLHUuY291bnREb3duPXUuc3RhcnRWYWw+dS5lbmRWYWwsdS5mcmFtZVZhbD11LnN0YXJ0VmFsLHUuaW5pdGlhbGl6ZWQ9ITApOih1LmVycm9yPVwiW0NvdW50VXBdIHN0YXJ0VmFsIChcIituK1wiKSBvciBlbmRWYWwgKFwiK3QrXCIpIGlzIG5vdCBhIG51bWJlclwiLCExKSk6ISh1LmVycm9yPVwiW0NvdW50VXBdIHRhcmdldCBpcyBudWxsIG9yIHVuZGVmaW5lZFwiKSl9LHUucHJpbnRWYWx1ZT1mdW5jdGlvbihhKXt2YXIgbj11Lm9wdGlvbnMuZm9ybWF0dGluZ0ZuKGEpO1wiSU5QVVRcIj09PXUuZC50YWdOYW1lP3RoaXMuZC52YWx1ZT1uOlwidGV4dFwiPT09dS5kLnRhZ05hbWV8fFwidHNwYW5cIj09PXUuZC50YWdOYW1lP3RoaXMuZC50ZXh0Q29udGVudD1uOnRoaXMuZC5pbm5lckhUTUw9bn0sdS5jb3VudD1mdW5jdGlvbihhKXt1LnN0YXJ0VGltZXx8KHUuc3RhcnRUaW1lPWEpO3ZhciBuPSh1LnRpbWVzdGFtcD1hKS11LnN0YXJ0VGltZTt1LnJlbWFpbmluZz11LmR1cmF0aW9uLW4sdS5vcHRpb25zLnVzZUVhc2luZz91LmNvdW50RG93bj91LmZyYW1lVmFsPXUuc3RhcnRWYWwtdS5vcHRpb25zLmVhc2luZ0ZuKG4sMCx1LnN0YXJ0VmFsLXUuZW5kVmFsLHUuZHVyYXRpb24pOnUuZnJhbWVWYWw9dS5vcHRpb25zLmVhc2luZ0ZuKG4sdS5zdGFydFZhbCx1LmVuZFZhbC11LnN0YXJ0VmFsLHUuZHVyYXRpb24pOnUuY291bnREb3duP3UuZnJhbWVWYWw9dS5zdGFydFZhbC0odS5zdGFydFZhbC11LmVuZFZhbCkqKG4vdS5kdXJhdGlvbik6dS5mcmFtZVZhbD11LnN0YXJ0VmFsKyh1LmVuZFZhbC11LnN0YXJ0VmFsKSoobi91LmR1cmF0aW9uKSx1LmNvdW50RG93bj91LmZyYW1lVmFsPXUuZnJhbWVWYWw8dS5lbmRWYWw/dS5lbmRWYWw6dS5mcmFtZVZhbDp1LmZyYW1lVmFsPXUuZnJhbWVWYWw+dS5lbmRWYWw/dS5lbmRWYWw6dS5mcmFtZVZhbCx1LmZyYW1lVmFsPU1hdGgucm91bmQodS5mcmFtZVZhbCp1LmRlYykvdS5kZWMsdS5wcmludFZhbHVlKHUuZnJhbWVWYWwpLG48dS5kdXJhdGlvbj91LnJBRj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodS5jb3VudCk6dS5jYWxsYmFjayYmdS5jYWxsYmFjaygpfSx1LnN0YXJ0PWZ1bmN0aW9uKGEpe3UuaW5pdGlhbGl6ZSgpJiYodS5jYWxsYmFjaz1hLHUuckFGPXJlcXVlc3RBbmltYXRpb25GcmFtZSh1LmNvdW50KSl9LHUucGF1c2VSZXN1bWU9ZnVuY3Rpb24oKXt1LnBhdXNlZD8odS5wYXVzZWQ9ITEsZGVsZXRlIHUuc3RhcnRUaW1lLHUuZHVyYXRpb249dS5yZW1haW5pbmcsdS5zdGFydFZhbD11LmZyYW1lVmFsLHJlcXVlc3RBbmltYXRpb25GcmFtZSh1LmNvdW50KSk6KHUucGF1c2VkPSEwLGNhbmNlbEFuaW1hdGlvbkZyYW1lKHUuckFGKSl9LHUucmVzZXQ9ZnVuY3Rpb24oKXt1LnBhdXNlZD0hMSxkZWxldGUgdS5zdGFydFRpbWUsdS5pbml0aWFsaXplZD0hMSx1LmluaXRpYWxpemUoKSYmKGNhbmNlbEFuaW1hdGlvbkZyYW1lKHUuckFGKSx1LnByaW50VmFsdWUodS5zdGFydFZhbCkpfSx1LnVwZGF0ZT1mdW5jdGlvbihhKXt1LmluaXRpYWxpemUoKSYmKGQoYT1OdW1iZXIoYSkpPyh1LmVycm9yPVwiXCIsYSE9PXUuZnJhbWVWYWwmJihjYW5jZWxBbmltYXRpb25GcmFtZSh1LnJBRiksdS5wYXVzZWQ9ITEsZGVsZXRlIHUuc3RhcnRUaW1lLHUuc3RhcnRWYWw9dS5mcmFtZVZhbCx1LmVuZFZhbD1hLHUuY291bnREb3duPXUuc3RhcnRWYWw+dS5lbmRWYWwsdS5yQUY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUuY291bnQpKSk6dS5lcnJvcj1cIltDb3VudFVwXSB1cGRhdGUoKSAtIG5ldyBlbmRWYWwgaXMgbm90IGEgbnVtYmVyOiBcIithKX0sdS5pbml0aWFsaXplKCkmJnUucHJpbnRWYWx1ZSh1LnN0YXJ0VmFsKX19KTsiLCIvKiFcclxuICogSmF2YVNjcmlwdCBDb29raWUgdjIuMi4wXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDA2LCAyMDE1IEtsYXVzIEhhcnRsICYgRmFnbmVyIEJyYWNrXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxyXG4gKi9cclxuIWZ1bmN0aW9uKGUpe3ZhciBuPSExO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmKGRlZmluZShlKSxuPSEwKSxcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmKG1vZHVsZS5leHBvcnRzPWUoKSxuPSEwKSwhbil7dmFyIG89d2luZG93LkNvb2tpZXMsdD13aW5kb3cuQ29va2llcz1lKCk7dC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy5Db29raWVzPW8sdH19fShmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtmb3IodmFyIGU9MCxuPXt9O2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciBvPWFyZ3VtZW50c1tlXTtmb3IodmFyIHQgaW4gbyluW3RdPW9bdF19cmV0dXJuIG59cmV0dXJuIGZ1bmN0aW9uIG4obyl7ZnVuY3Rpb24gdChuLHIsaSl7dmFyIGM7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50KXtpZihhcmd1bWVudHMubGVuZ3RoPjEpe2lmKFwibnVtYmVyXCI9PXR5cGVvZihpPWUoe3BhdGg6XCIvXCJ9LHQuZGVmYXVsdHMsaSkpLmV4cGlyZXMpe3ZhciBhPW5ldyBEYXRlO2Euc2V0TWlsbGlzZWNvbmRzKGEuZ2V0TWlsbGlzZWNvbmRzKCkrODY0ZTUqaS5leHBpcmVzKSxpLmV4cGlyZXM9YX1pLmV4cGlyZXM9aS5leHBpcmVzP2kuZXhwaXJlcy50b1VUQ1N0cmluZygpOlwiXCI7dHJ5e2M9SlNPTi5zdHJpbmdpZnkociksL15bXFx7XFxbXS8udGVzdChjKSYmKHI9Yyl9Y2F0Y2goZSl7fXI9by53cml0ZT9vLndyaXRlKHIsbik6ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhyKSkucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnwzQXwzQ3wzRXwzRHwyRnwzRnw0MHw1Qnw1RHw1RXw2MHw3Qnw3RHw3QykvZyxkZWNvZGVVUklDb21wb25lbnQpLG49KG49KG49ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhuKSkpLnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8NUV8NjB8N0MpL2csZGVjb2RlVVJJQ29tcG9uZW50KSkucmVwbGFjZSgvW1xcKFxcKV0vZyxlc2NhcGUpO3ZhciBzPVwiXCI7Zm9yKHZhciBmIGluIGkpaVtmXSYmKHMrPVwiOyBcIitmLCEwIT09aVtmXSYmKHMrPVwiPVwiK2lbZl0pKTtyZXR1cm4gZG9jdW1lbnQuY29va2llPW4rXCI9XCIrcitzfW58fChjPXt9KTtmb3IodmFyIHA9ZG9jdW1lbnQuY29va2llP2RvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpOltdLGQ9LyglWzAtOUEtWl17Mn0pKy9nLHU9MDt1PHAubGVuZ3RoO3UrKyl7dmFyIGw9cFt1XS5zcGxpdChcIj1cIiksQz1sLnNsaWNlKDEpLmpvaW4oXCI9XCIpO3RoaXMuanNvbnx8J1wiJyE9PUMuY2hhckF0KDApfHwoQz1DLnNsaWNlKDEsLTEpKTt0cnl7dmFyIGc9bFswXS5yZXBsYWNlKGQsZGVjb2RlVVJJQ29tcG9uZW50KTtpZihDPW8ucmVhZD9vLnJlYWQoQyxnKTpvKEMsZyl8fEMucmVwbGFjZShkLGRlY29kZVVSSUNvbXBvbmVudCksdGhpcy5qc29uKXRyeXtDPUpTT04ucGFyc2UoQyl9Y2F0Y2goZSl7fWlmKG49PT1nKXtjPUM7YnJlYWt9bnx8KGNbZ109Qyl9Y2F0Y2goZSl7fX1yZXR1cm4gY319cmV0dXJuIHQuc2V0PXQsdC5nZXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHQuY2FsbCh0LGUpfSx0LmdldEpTT049ZnVuY3Rpb24oKXtyZXR1cm4gdC5hcHBseSh7anNvbjohMH0sW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKX0sdC5kZWZhdWx0cz17fSx0LnJlbW92ZT1mdW5jdGlvbihuLG8pe3QobixcIlwiLGUobyx7ZXhwaXJlczotMX0pKX0sdC53aXRoQ29udmVydGVyPW4sdH0oZnVuY3Rpb24oKXt9KX0pOyIsIi8qIFBvbHlmaWxsIHNlcnZpY2UgdjMuMTYuMFxyXG4gKiBGb3IgZGV0YWlsZWQgY3JlZGl0cyBhbmQgbGljZW5jZSBpbmZvcm1hdGlvbiBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZpbmFuY2lhbC10aW1lcy9wb2x5ZmlsbC1zZXJ2aWNlLlxyXG4gKlxyXG4gKiBVQSBkZXRlY3RlZDogaWUvMTEuMC4wXHJcbiAqIEZlYXR1cmVzIHJlcXVlc3RlZDogZGVmYXVsdFxyXG4gKlxyXG4gKiAtIEFycmF5LmZyb20sIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gQXJyYXkub2YsIExpY2Vuc2U6IE1JVCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gQXJyYXkucHJvdG90eXBlLmZpbGwsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gRXZlbnQsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIsIFwiQ3VzdG9tRXZlbnRcIiwgXCJQcm9taXNlXCIpXHJcbiAqIC0gQ3VzdG9tRXZlbnQsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gX0RPTVRva2VuTGlzdCwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcIkRPTVRva2VuTGlzdFwiLCBcImRlZmF1bHRcIilcclxuICogLSBET01Ub2tlbkxpc3QsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gX211dGF0aW9uLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiRWxlbWVudC5wcm90b3R5cGUuYWZ0ZXJcIiwgXCJkZWZhdWx0XCIsIFwiRWxlbWVudC5wcm90b3R5cGUuYXBwZW5kXCIsIFwiRWxlbWVudC5wcm90b3R5cGUuYmVmb3JlXCIsIFwiRWxlbWVudC5wcm90b3R5cGUucHJlcGVuZFwiLCBcIkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZVwiLCBcIkVsZW1lbnQucHJvdG90eXBlLnJlcGxhY2VXaXRoXCIpXHJcbiAqIC0gRWxlbWVudC5wcm90b3R5cGUuYWZ0ZXIsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gRWxlbWVudC5wcm90b3R5cGUuYXBwZW5kLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIEVsZW1lbnQucHJvdG90eXBlLmJlZm9yZSwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiLCBcIkVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3RcIilcclxuICogLSBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0LCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIEVsZW1lbnQucHJvdG90eXBlLnByZXBlbmQsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIEVsZW1lbnQucHJvdG90eXBlLnJlcGxhY2VXaXRoLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIFN5bWJvbCwgTGljZW5zZTogTUlUIChyZXF1aXJlZCBieSBcIk1hcFwiLCBcImRlZmF1bHRcIiwgXCJTZXRcIiwgXCJTeW1ib2wuaXRlcmF0b3JcIiwgXCJTeW1ib2wuc3BlY2llc1wiKVxyXG4gKiAtIFN5bWJvbC5pdGVyYXRvciwgTGljZW5zZTogTUlUIChyZXF1aXJlZCBieSBcIk1hcFwiLCBcImRlZmF1bHRcIiwgXCJTZXRcIilcclxuICogLSBTeW1ib2wuc3BlY2llcywgTGljZW5zZTogTUlUIChyZXF1aXJlZCBieSBcIk1hcFwiLCBcImRlZmF1bHRcIiwgXCJTZXRcIilcclxuICogLSBOdW1iZXIuaXNOYU4sIExpY2Vuc2U6IE1JVCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIsIFwiTWFwXCIsIFwiU2V0XCIpXHJcbiAqIC0gTWFwLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIE5vZGUucHJvdG90eXBlLmNvbnRhaW5zLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIE9iamVjdC5hc3NpZ24sIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gUHJvbWlzZSwgTGljZW5zZTogTUlUIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBTZXQsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aCwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBVUkwsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpICovXHJcblxyXG5cclxuXHJcbi8vIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXNcclxuRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS5vTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3RvciB8fCBmdW5jdGlvbiBtYXRjaGVzKHNlbGVjdG9yKSB7XHJcblxyXG5cdHZhciBlbGVtZW50ID0gdGhpcztcclxuXHR2YXIgZWxlbWVudHMgPSAoZWxlbWVudC5kb2N1bWVudCB8fCBlbGVtZW50Lm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cdHZhciBpbmRleCA9IDA7XHJcblxyXG5cdHdoaWxlIChlbGVtZW50c1tpbmRleF0gJiYgZWxlbWVudHNbaW5kZXhdICE9PSBlbGVtZW50KSB7XHJcblx0XHQrK2luZGV4O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuICEhZWxlbWVudHNbaW5kZXhdO1xyXG59O1xyXG5cclxuLy8gRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdFxyXG5FbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24gY2xvc2VzdChzZWxlY3Rvcikge1xyXG5cdHZhciBub2RlID0gdGhpcztcclxuXHJcblx0d2hpbGUgKG5vZGUpIHtcclxuXHRcdGlmIChub2RlLm1hdGNoZXMoc2VsZWN0b3IpKSByZXR1cm4gbm9kZTtcclxuXHRcdGVsc2Ugbm9kZSA9IG5vZGUucGFyZW50RWxlbWVudDtcclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuXHJcblxyXG4vKiEgQHNvdXJjZSBodHRwOi8vcHVybC5lbGlncmV5LmNvbS9naXRodWIvY2xhc3NMaXN0LmpzL2Jsb2IvbWFzdGVyL2NsYXNzTGlzdC5qcyAqL1xyXG5cImRvY3VtZW50XCJpbiBzZWxmJiYoXCJjbGFzc0xpc3RcImluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJfXCIpJiYoIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROU3x8XCJjbGFzc0xpc3RcImluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJnXCIpKXx8ZnVuY3Rpb24oYSl7aWYoXCJFbGVtZW50XCJpbiBhKXthPWEuRWxlbWVudC5wcm90b3R5cGU7dmFyIGg9T2JqZWN0LGw9U3RyaW5nLnByb3RvdHlwZS50cmltfHxmdW5jdGlvbigpe3JldHVybiB0aGlzLnJlcGxhY2UoL15cXHMrfFxccyskL2csXCJcIil9LG49QXJyYXkucHJvdG90eXBlLmluZGV4T2Z8fGZ1bmN0aW9uKGMpe2Zvcih2YXIgYj0wLGs9dGhpcy5sZW5ndGg7YjxrO2IrKylpZihiIGluIHRoaXMmJnRoaXNbYl09PT1jKXJldHVybiBiO3JldHVybi0xfSxmPWZ1bmN0aW9uKGMsYil7dGhpcy5uYW1lPWM7dGhpcy5jb2RlPURPTUV4Y2VwdGlvbltjXTt0aGlzLm1lc3NhZ2U9Yn0sZT1mdW5jdGlvbihjLFxyXG5iKXtpZihcIlwiPT09Yil0aHJvdyBuZXcgZihcIlNZTlRBWF9FUlJcIixcIlRoZSB0b2tlbiBtdXN0IG5vdCBiZSBlbXB0eS5cIik7aWYoL1xccy8udGVzdChiKSl0aHJvdyBuZXcgZihcIklOVkFMSURfQ0hBUkFDVEVSX0VSUlwiLFwiVGhlIHRva2VuIG11c3Qgbm90IGNvbnRhaW4gc3BhY2UgY2hhcmFjdGVycy5cIik7cmV0dXJuIG4uY2FsbChjLGIpfSxnPWZ1bmN0aW9uKGMpe3ZhciBiPWwuY2FsbChjLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKTtiPWI/Yi5zcGxpdCgvXFxzKy8pOltdO2Zvcih2YXIgaz0wLGU9Yi5sZW5ndGg7azxlO2srKyl0aGlzLnB1c2goYltrXSk7dGhpcy5fdXBkYXRlQ2xhc3NOYW1lPWZ1bmN0aW9uKCl7Yy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHRoaXMudG9TdHJpbmcoKSl9fSxkPWcucHJvdG90eXBlPVtdLG09ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGcodGhpcyl9O2YucHJvdG90eXBlPUVycm9yLnByb3RvdHlwZTtkLml0ZW09ZnVuY3Rpb24oYyl7cmV0dXJuIHRoaXNbY118fFxyXG5udWxsfTtkLmNvbnRhaW5zPWZ1bmN0aW9uKGMpe3JldHVybiF+ZSh0aGlzLGMrXCJcIil9O2QuYWRkPWZ1bmN0aW9uKCl7dmFyIGM9YXJndW1lbnRzLGI9MCxrPWMubGVuZ3RoLGQ9ITE7ZG97dmFyIGE9Y1tiXStcIlwiO35lKHRoaXMsYSkmJih0aGlzLnB1c2goYSksZD0hMCl9d2hpbGUoKytiPGspO2QmJnRoaXMuX3VwZGF0ZUNsYXNzTmFtZSgpfTtkLnJlbW92ZT1mdW5jdGlvbigpe3ZhciBjPWFyZ3VtZW50cyxiPTAsZD1jLmxlbmd0aCxhPSExLGY7ZG97dmFyIGc9Y1tiXStcIlwiO2ZvcihmPWUodGhpcyxnKTt+ZjspdGhpcy5zcGxpY2UoZiwxKSxhPSEwLGY9ZSh0aGlzLGcpfXdoaWxlKCsrYjxkKTthJiZ0aGlzLl91cGRhdGVDbGFzc05hbWUoKX07ZC50b2dnbGU9ZnVuY3Rpb24oYyxiKXt2YXIgYT10aGlzLmNvbnRhaW5zKGMpLGQ9YT8hMCE9PWImJlwicmVtb3ZlXCI6ITEhPT1iJiZcImFkZFwiO2lmKGQpdGhpc1tkXShjKTtyZXR1cm4hMD09PWJ8fCExPT09Yj9iOiFhfTtkLnJlcGxhY2U9ZnVuY3Rpb24oYyxcclxuYil7dmFyIGE9ZShjK1wiXCIpO35hJiYodGhpcy5zcGxpY2UoYSwxLGIpLHRoaXMuX3VwZGF0ZUNsYXNzTmFtZSgpKX07ZC50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmpvaW4oXCIgXCIpfTtpZihoLmRlZmluZVByb3BlcnR5KXtkPXtnZXQ6bSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH07dHJ5e2guZGVmaW5lUHJvcGVydHkoYSxcImNsYXNzTGlzdFwiLGQpfWNhdGNoKGMpe2lmKHZvaWQgMD09PWMubnVtYmVyfHwtMjE0NjgyMzI1Mj09PWMubnVtYmVyKWQuZW51bWVyYWJsZT0hMSxoLmRlZmluZVByb3BlcnR5KGEsXCJjbGFzc0xpc3RcIixkKX19ZWxzZSBoLnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fJiZhLl9fZGVmaW5lR2V0dGVyX18oXCJjbGFzc0xpc3RcIixtKX19KHNlbGYpLGZ1bmN0aW9uKCl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIl9cIik7YS5jbGFzc0xpc3QuYWRkKFwiYzFcIixcImMyXCIpO2lmKCFhLmNsYXNzTGlzdC5jb250YWlucyhcImMyXCIpKXt2YXIgaD1cclxuZnVuY3Rpb24oYSl7dmFyIGY9RE9NVG9rZW5MaXN0LnByb3RvdHlwZVthXTtET01Ub2tlbkxpc3QucHJvdG90eXBlW2FdPWZ1bmN0aW9uKGEpe3ZhciBlLGQ9YXJndW1lbnRzLmxlbmd0aDtmb3IoZT0wO2U8ZDtlKyspYT1hcmd1bWVudHNbZV0sZi5jYWxsKHRoaXMsYSl9fTtoKFwiYWRkXCIpO2goXCJyZW1vdmVcIil9YS5jbGFzc0xpc3QudG9nZ2xlKFwiYzNcIiwhMSk7aWYoYS5jbGFzc0xpc3QuY29udGFpbnMoXCJjM1wiKSl7dmFyIGw9RE9NVG9rZW5MaXN0LnByb3RvdHlwZS50b2dnbGU7RE9NVG9rZW5MaXN0LnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oYSxmKXtyZXR1cm4gMSBpbiBhcmd1bWVudHMmJiF0aGlzLmNvbnRhaW5zKGEpPT09IWY/ZjpsLmNhbGwodGhpcyxhKX19XCJyZXBsYWNlXCJpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKS5jbGFzc0xpc3R8fChET01Ub2tlbkxpc3QucHJvdG90eXBlLnJlcGxhY2U9ZnVuY3Rpb24oYSxmKXt2YXIgZT10aGlzLnRvU3RyaW5nKCkuc3BsaXQoXCIgXCIpLFxyXG5nPWUuaW5kZXhPZihhK1wiXCIpO35nJiYoZT1lLnNsaWNlKGcpLHRoaXMucmVtb3ZlLmFwcGx5KHRoaXMsZSksdGhpcy5hZGQoZiksdGhpcy5hZGQuYXBwbHkodGhpcyxlLnNsaWNlKDEpKSl9KTthPW51bGx9KCkpO1xyXG5cclxuXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICBpZiAoIHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09IFwiZnVuY3Rpb25cIiApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgZnVuY3Rpb24gQ3VzdG9tRXZlbnQgKCBldmVudCwgcGFyYW1zICkge1xyXG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHsgYnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlLCBkZXRhaWw6IG51bGwgfTtcclxuICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCggJ0N1c3RvbUV2ZW50JyApO1xyXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudCggZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCApO1xyXG4gICAgcmV0dXJuIGV2dDtcclxuICAgfVxyXG5cclxuICB3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudDtcclxufSkoKTsiLCJcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBwb2x5ZmlsbCgpe3ZhciBvPXdpbmRvdyx0PWRvY3VtZW50O2lmKCEoXCJzY3JvbGxCZWhhdmlvclwiaW4gdC5kb2N1bWVudEVsZW1lbnQuc3R5bGUmJiEwIT09by5fX2ZvcmNlU21vb3RoU2Nyb2xsUG9seWZpbGxfXykpe3ZhciBsLGU9by5IVE1MRWxlbWVudHx8by5FbGVtZW50LHI9NDY4LGk9e3Njcm9sbDpvLnNjcm9sbHx8by5zY3JvbGxUbyxzY3JvbGxCeTpvLnNjcm9sbEJ5LGVsZW1lbnRTY3JvbGw6ZS5wcm90b3R5cGUuc2Nyb2xsfHxuLHNjcm9sbEludG9WaWV3OmUucHJvdG90eXBlLnNjcm9sbEludG9WaWV3fSxzPW8ucGVyZm9ybWFuY2UmJm8ucGVyZm9ybWFuY2Uubm93P28ucGVyZm9ybWFuY2Uubm93LmJpbmQoby5wZXJmb3JtYW5jZSk6RGF0ZS5ub3csYz0obD1vLm5hdmlnYXRvci51c2VyQWdlbnQsbmV3IFJlZ0V4cChbXCJNU0lFIFwiLFwiVHJpZGVudC9cIixcIkVkZ2UvXCJdLmpvaW4oXCJ8XCIpKS50ZXN0KGwpPzE6MCk7by5zY3JvbGw9by5zY3JvbGxUbz1mdW5jdGlvbigpe3ZvaWQgMCE9PWFyZ3VtZW50c1swXSYmKCEwIT09Zihhcmd1bWVudHNbMF0pP3YuY2FsbChvLHQuYm9keSx2b2lkIDAhPT1hcmd1bWVudHNbMF0ubGVmdD9+fmFyZ3VtZW50c1swXS5sZWZ0Om8uc2Nyb2xsWHx8by5wYWdlWE9mZnNldCx2b2lkIDAhPT1hcmd1bWVudHNbMF0udG9wP35+YXJndW1lbnRzWzBdLnRvcDpvLnNjcm9sbFl8fG8ucGFnZVlPZmZzZXQpOmkuc2Nyb2xsLmNhbGwobyx2b2lkIDAhPT1hcmd1bWVudHNbMF0ubGVmdD9hcmd1bWVudHNbMF0ubGVmdDpcIm9iamVjdFwiIT10eXBlb2YgYXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpvLnNjcm9sbFh8fG8ucGFnZVhPZmZzZXQsdm9pZCAwIT09YXJndW1lbnRzWzBdLnRvcD9hcmd1bWVudHNbMF0udG9wOnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06by5zY3JvbGxZfHxvLnBhZ2VZT2Zmc2V0KSl9LG8uc2Nyb2xsQnk9ZnVuY3Rpb24oKXt2b2lkIDAhPT1hcmd1bWVudHNbMF0mJihmKGFyZ3VtZW50c1swXSk/aS5zY3JvbGxCeS5jYWxsKG8sdm9pZCAwIT09YXJndW1lbnRzWzBdLmxlZnQ/YXJndW1lbnRzWzBdLmxlZnQ6XCJvYmplY3RcIiE9dHlwZW9mIGFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MCx2b2lkIDAhPT1hcmd1bWVudHNbMF0udG9wP2FyZ3VtZW50c1swXS50b3A6dm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTowKTp2LmNhbGwobyx0LmJvZHksfn5hcmd1bWVudHNbMF0ubGVmdCsoby5zY3JvbGxYfHxvLnBhZ2VYT2Zmc2V0KSx+fmFyZ3VtZW50c1swXS50b3ArKG8uc2Nyb2xsWXx8by5wYWdlWU9mZnNldCkpKX0sZS5wcm90b3R5cGUuc2Nyb2xsPWUucHJvdG90eXBlLnNjcm9sbFRvPWZ1bmN0aW9uKCl7aWYodm9pZCAwIT09YXJndW1lbnRzWzBdKWlmKCEwIT09Zihhcmd1bWVudHNbMF0pKXt2YXIgbz1hcmd1bWVudHNbMF0ubGVmdCx0PWFyZ3VtZW50c1swXS50b3A7di5jYWxsKHRoaXMsdGhpcyx2b2lkIDA9PT1vP3RoaXMuc2Nyb2xsTGVmdDp+fm8sdm9pZCAwPT09dD90aGlzLnNjcm9sbFRvcDp+fnQpfWVsc2V7aWYoXCJudW1iZXJcIj09dHlwZW9mIGFyZ3VtZW50c1swXSYmdm9pZCAwPT09YXJndW1lbnRzWzFdKXRocm93IG5ldyBTeW50YXhFcnJvcihcIlZhbHVlIGNvdWxkIG5vdCBiZSBjb252ZXJ0ZWRcIik7aS5lbGVtZW50U2Nyb2xsLmNhbGwodGhpcyx2b2lkIDAhPT1hcmd1bWVudHNbMF0ubGVmdD9+fmFyZ3VtZW50c1swXS5sZWZ0Olwib2JqZWN0XCIhPXR5cGVvZiBhcmd1bWVudHNbMF0/fn5hcmd1bWVudHNbMF06dGhpcy5zY3JvbGxMZWZ0LHZvaWQgMCE9PWFyZ3VtZW50c1swXS50b3A/fn5hcmd1bWVudHNbMF0udG9wOnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9+fmFyZ3VtZW50c1sxXTp0aGlzLnNjcm9sbFRvcCl9fSxlLnByb3RvdHlwZS5zY3JvbGxCeT1mdW5jdGlvbigpe3ZvaWQgMCE9PWFyZ3VtZW50c1swXSYmKCEwIT09Zihhcmd1bWVudHNbMF0pP3RoaXMuc2Nyb2xsKHtsZWZ0On5+YXJndW1lbnRzWzBdLmxlZnQrdGhpcy5zY3JvbGxMZWZ0LHRvcDp+fmFyZ3VtZW50c1swXS50b3ArdGhpcy5zY3JvbGxUb3AsYmVoYXZpb3I6YXJndW1lbnRzWzBdLmJlaGF2aW9yfSk6aS5lbGVtZW50U2Nyb2xsLmNhbGwodGhpcyx2b2lkIDAhPT1hcmd1bWVudHNbMF0ubGVmdD9+fmFyZ3VtZW50c1swXS5sZWZ0K3RoaXMuc2Nyb2xsTGVmdDp+fmFyZ3VtZW50c1swXSt0aGlzLnNjcm9sbExlZnQsdm9pZCAwIT09YXJndW1lbnRzWzBdLnRvcD9+fmFyZ3VtZW50c1swXS50b3ArdGhpcy5zY3JvbGxUb3A6fn5hcmd1bWVudHNbMV0rdGhpcy5zY3JvbGxUb3ApKX0sZS5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXc9ZnVuY3Rpb24oKXtpZighMCE9PWYoYXJndW1lbnRzWzBdKSl7dmFyIGw9ZnVuY3Rpb24obyl7Zm9yKDtvIT09dC5ib2R5JiYhMT09PWQobyk7KW89by5wYXJlbnROb2RlfHxvLmhvc3Q7cmV0dXJuIG99KHRoaXMpLGU9bC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxyPXRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7bCE9PXQuYm9keT8odi5jYWxsKHRoaXMsbCxsLnNjcm9sbExlZnQrci5sZWZ0LWUubGVmdCxsLnNjcm9sbFRvcCtyLnRvcC1lLnRvcCksXCJmaXhlZFwiIT09by5nZXRDb21wdXRlZFN0eWxlKGwpLnBvc2l0aW9uJiZvLnNjcm9sbEJ5KHtsZWZ0OmUubGVmdCx0b3A6ZS50b3AsYmVoYXZpb3I6XCJzbW9vdGhcIn0pKTpvLnNjcm9sbEJ5KHtsZWZ0OnIubGVmdCx0b3A6ci50b3AsYmVoYXZpb3I6XCJzbW9vdGhcIn0pfWVsc2UgaS5zY3JvbGxJbnRvVmlldy5jYWxsKHRoaXMsdm9pZCAwPT09YXJndW1lbnRzWzBdfHxhcmd1bWVudHNbMF0pfX1mdW5jdGlvbiBuKG8sdCl7dGhpcy5zY3JvbGxMZWZ0PW8sdGhpcy5zY3JvbGxUb3A9dH1mdW5jdGlvbiBmKG8pe2lmKG51bGw9PT1vfHxcIm9iamVjdFwiIT10eXBlb2Ygb3x8dm9pZCAwPT09by5iZWhhdmlvcnx8XCJhdXRvXCI9PT1vLmJlaGF2aW9yfHxcImluc3RhbnRcIj09PW8uYmVoYXZpb3IpcmV0dXJuITA7aWYoXCJvYmplY3RcIj09dHlwZW9mIG8mJlwic21vb3RoXCI9PT1vLmJlaGF2aW9yKXJldHVybiExO3Rocm93IG5ldyBUeXBlRXJyb3IoXCJiZWhhdmlvciBtZW1iZXIgb2YgU2Nyb2xsT3B0aW9ucyBcIitvLmJlaGF2aW9yK1wiIGlzIG5vdCBhIHZhbGlkIHZhbHVlIGZvciBlbnVtZXJhdGlvbiBTY3JvbGxCZWhhdmlvci5cIil9ZnVuY3Rpb24gcChvLHQpe3JldHVyblwiWVwiPT09dD9vLmNsaWVudEhlaWdodCtjPG8uc2Nyb2xsSGVpZ2h0OlwiWFwiPT09dD9vLmNsaWVudFdpZHRoK2M8by5zY3JvbGxXaWR0aDp2b2lkIDB9ZnVuY3Rpb24gYSh0LGwpe3ZhciBlPW8uZ2V0Q29tcHV0ZWRTdHlsZSh0LG51bGwpW1wib3ZlcmZsb3dcIitsXTtyZXR1cm5cImF1dG9cIj09PWV8fFwic2Nyb2xsXCI9PT1lfWZ1bmN0aW9uIGQobyl7dmFyIHQ9cChvLFwiWVwiKSYmYShvLFwiWVwiKSxsPXAobyxcIlhcIikmJmEobyxcIlhcIik7cmV0dXJuIHR8fGx9ZnVuY3Rpb24gaCh0KXt2YXIgbCxlLGksYyxuPShzKCktdC5zdGFydFRpbWUpL3I7Yz1uPW4+MT8xOm4sbD0uNSooMS1NYXRoLmNvcyhNYXRoLlBJKmMpKSxlPXQuc3RhcnRYKyh0LngtdC5zdGFydFgpKmwsaT10LnN0YXJ0WSsodC55LXQuc3RhcnRZKSpsLHQubWV0aG9kLmNhbGwodC5zY3JvbGxhYmxlLGUsaSksZT09PXQueCYmaT09PXQueXx8by5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaC5iaW5kKG8sdCkpfWZ1bmN0aW9uIHYobCxlLHIpe3ZhciBjLGYscCxhLGQ9cygpO2w9PT10LmJvZHk/KGM9byxmPW8uc2Nyb2xsWHx8by5wYWdlWE9mZnNldCxwPW8uc2Nyb2xsWXx8by5wYWdlWU9mZnNldCxhPWkuc2Nyb2xsKTooYz1sLGY9bC5zY3JvbGxMZWZ0LHA9bC5zY3JvbGxUb3AsYT1uKSxoKHtzY3JvbGxhYmxlOmMsbWV0aG9kOmEsc3RhcnRUaW1lOmQsc3RhcnRYOmYsc3RhcnRZOnAseDplLHk6cn0pfX1cIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz17cG9seWZpbGw6cG9seWZpbGx9OnBvbHlmaWxsKCk7IiwiLyohIFVURi04XHJcblxyXG7CqSBrb3ZyaWdpblxyXG7QktGB0LUg0L/RgNCw0LLQsCDRgNCw0LfRgNC10YjQtdC90Ytcclxu0LrRgNCw0YHQuNCy0YvQuSDQtNC40LfQsNC50L0g0LTQvtC70LbQtdC9INC40LzQtdGC0Ywg0LrRgNCw0YHQuNCy0YvQuSDQutC+0LTCrlxyXG5cclxuaHR0cHM6Ly9naXRodWIuY29tL2h0bWxwbHVzY3NzL1xyXG5cclxuKi9cclxuXHJcbmlmKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3Ipe1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcclxuXHRcdG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcvc3cuanMnKTtcclxuXHR9KTtcclxufVxyXG5cclxudmFyIEFTS08gPSBBU0tPIHx8IHt9O1xyXG5cclxuKGZ1bmN0aW9uKCl7XHJcblxyXG5cdEFTS08uYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblx0QVNLTy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdEFTS08uaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cdEFTS08uc2V0dGltZW91dCA9IENvb2tpZXMuZ2V0KCdjb29raWVzUG9saWN5JykgPyAwIDogMTAwMDA7XHJcblxyXG5cdEFTS08uYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1qcycpO1xyXG5cclxuLy8gcmVzaXplXHJcblxyXG5cdHZhciByZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKXtcclxuXHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHRpZiAoIXJlc2l6ZVRpbWVvdXQpIHtcclxuXHJcblx0XHRcdFx0cmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0cmVzaXplVGltZW91dCA9IG51bGw7XHJcblx0XHRcdFx0XHRBU0tPLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRcdFx0XHRBU0tPLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcblx0XHRcdFx0fSwgMTAwKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG4vLyBocmVmPVwidGVsOlwiXHJcblxyXG5cdGlmKEFTS08ud2lkdGggPiAxMjAwKSB7XHJcblxyXG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaHJlZl49XCJ0ZWxcIl0nKSwgZnVuY3Rpb24gKGVsKSB7XHJcblxyXG5cdFx0XHRlbC5yZW1vdmVBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuLy8g0YHQutC70L7QvdC10L3QuNC1XHJcblx0QVNLTy5kZWNsZW5zaW9uID0gZnVuY3Rpb24obnVtLCBleHByZXNzaW9ucykge1xyXG5cdFx0dmFyIHI7XHJcblx0XHR2YXIgY291bnQgPSBudW0gJSAxMDA7XHJcblx0XHRpZiAoY291bnQgPiA0ICYmIGNvdW50IDwgMjEpXHJcblx0XHRcdHIgPSBleHByZXNzaW9uc1snMiddO1xyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGNvdW50ID0gY291bnQgJSAxMDtcclxuXHRcdFx0aWYgKGNvdW50ID09IDEpXHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycwJ107XHJcblx0XHRcdGVsc2UgaWYgKGNvdW50ID4gMSAmJiBjb3VudCA8IDUpXHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycxJ107XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzInXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByO1xyXG5cdH1cclxuXHJcblx0Ly8g0L7QsdGA0LDQsdC+0YLRh9C40Log0LDQvdC40LzQsNGG0LjQuVxyXG5cdEFTS08uY3NzQW5pbWF0aW9uID0gZnVuY3Rpb24oYSl7dmFyIGIsYyxkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjc3NhbmltYXRpb25cIik7c3dpdGNoKGEpe2Nhc2UnYW5pbWF0aW9uJzpiPXtcImFuaW1hdGlvblwiOlwiYW5pbWF0aW9uZW5kXCIsXCJPQW5pbWF0aW9uXCI6XCJvQW5pbWF0aW9uRW5kXCIsXCJNb3pBbmltYXRpb25cIjpcImFuaW1hdGlvbmVuZFwiLFwiV2Via2l0QW5pbWF0aW9uXCI6XCJ3ZWJraXRBbmltYXRpb25FbmRcIn07YnJlYWs7Y2FzZSd0cmFuc2l0aW9uJzpiPXtcInRyYW5zaXRpb25cIjpcInRyYW5zaXRpb25lbmRcIixcIk9UcmFuc2l0aW9uXCI6XCJvVHJhbnNpdGlvbkVuZFwiLFwiTW96VHJhbnNpdGlvblwiOlwidHJhbnNpdGlvbmVuZFwiLFwiV2Via2l0VHJhbnNpdGlvblwiOlwid2Via2l0VHJhbnNpdGlvbkVuZFwifX1mb3IoYyBpbiBiKWlmKGQuc3R5bGVbY10hPT11bmRlZmluZWQpcmV0dXJuIGJbY119XHJcblxyXG5cdC8vIERldGVybWluZSBpZiBhbiBlbGVtZW50IGlzIGluIHRoZSB2aXNpYmxlIHZpZXdwb3J0XHJcblx0QVNLTy5pc0luVmlld3BvcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHR2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRyZXR1cm4gKHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gQVNLTy5oZWlnaHQpO1xyXG5cdH1cclxuXHJcblx0Ly8g0L7RgtC00LXQu9GP0LXQvCDRgtGL0YHRj9GH0LhcclxuXHRBU0tPLnNlcE51bWJlciA9IGZ1bmN0aW9uKHN0cil7XHJcblx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcclxuXHRcdHN0ciA9IHN0ci5yZXBsYWNlKC9cXHMrL2csJycpO1xyXG5cdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyhbXlxcZF18JCkpL2csICckMSAnKTtcclxuXHR9XHJcblxyXG5cdC8vINGB0LrQu9C10LjQstCw0LXQvCDRgtGL0YHRj9GH0LhcclxuXHRBU0tPLnN0clRvTnVtYmVyID0gZnVuY3Rpb24obil7XHJcblx0XHRyZXR1cm4gcGFyc2VJbnQobi5yZXBsYWNlKC9cXHMrL2csJycpLCAxMCk7XHJcblx0fVxyXG5cclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0Ly8gZWFnZXJcclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2xvYWRpbmc9XCJsYXp5XCJdJyksIGZ1bmN0aW9uKGltZyl7XHJcblxyXG5cdFx0XHRpbWcuc2V0QXR0cmlidXRlKCdsb2FkaW5nJywnZWFnZXInKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSwgQVNLTy5zZXR0aW1lb3V0KTtcclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uKGZvcm1zKXtcclxuXHJcblx0aWYoIWZvcm1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCB0b2dnbGVGb3JtID0gKGZvcm0sIGJ1eSkgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGJ0biA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmJ0bicpO1xyXG5cclxuXHRcdGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoJ2J0bi0tZ3JheScsIGJ1eSk7XHJcblx0XHRidG4udGV4dENvbnRlbnQgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyAoIGJ1eSA/ICdkZWxldGUnIDogJ2J1eScgKSApO1xyXG5cdFx0Zm9ybS5lbGVtZW50cy5tb2RlLnZhbHVlID0gKCBidXkgPyAnZGVsJyA6ICdhZGQnICk7XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChmb3JtcywgZnVuY3Rpb24oYnRuKXtcclxuXHJcblx0XHRjb25zdCBmb3JtID0gYnRuLmNsb3Nlc3QoJ2Zvcm0nKTtcclxuXHJcblx0XHRjb25zdCBwcm9kdWN0U2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc2Nyb2xsJyk7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLGZ1bmN0aW9uKGUpe1xyXG5cclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Y29uc3QgYnV5ID0gIWZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbi1jYXJ0Jyk7XHJcblxyXG5cdFx0XHRidG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0Ly8gc2VuZCBmb3JtXHJcblxyXG5cdFx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKSxcclxuXHRcdFx0XHR4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0XHRcdHhoci5vcGVuKFwiUE9TVFwiLCBmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJykgKyAnYWpheC8nKTtcclxuXHJcblx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0aWYgKHhoci5yZWFkeVN0YXRlICE9PSA0KXtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dG9nZ2xlRm9ybShmb3JtLCBidXkpO1xyXG5cclxuXHRcdFx0XHRpZiAoIHByb2R1Y3RTY3JvbGwgKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBmb3JtID09PSBwcm9kdWN0U2Nyb2xsICkge1xyXG5cclxuXHRcdFx0XHRcdFx0dG9nZ2xlRm9ybShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9fY2FydCcpLCBidXkpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0dG9nZ2xlRm9ybShwcm9kdWN0U2Nyb2xsLCBidXkpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZihidXkpIHtcclxuXHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcHJvZHVjdC1pbi1jYXJ0JykudGV4dENvbnRlbnQgPSBmb3JtLmVsZW1lbnRzLm1vZGUudmFsdWU7XHJcblxyXG5cdFx0XHRcdFx0QVNLTy5tb2RhbFNob3coJ3Byb2R1Y3QtaW4tY2FydCcpO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0QVNLTy5oZWFkZXJDYXJ0LnNob3coKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgY2FydCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhjYXJ0LnF1YW50aXR5LCBjYXJ0LnN1bSk7XHJcblxyXG5cdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaW4tY2FydCcsIGJ1eSk7XHJcblxyXG5cdFx0XHRcdGlmICh4aHIuc3RhdHVzICE9IDIwMCkge1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfQvtGI0LjQsdC60LAgJyArIHhoci5zdGF0dXMpO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0QVNLTy5oZWFkZXJDYXJ0LmNoYW5nZShjYXJ0LnF1YW50aXR5LCBjYXJ0LnN1bSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHhoci5zZW5kKGZvcm1EYXRhKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1pbi1jYXJ0JykpOyIsIi8qKGZ1bmN0aW9uKGNvb2tpZSl7XHJcblxyXG5cdGlmKGNvb2tpZSkge1xyXG5cclxuXHRcdGNvb2tpZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Q29va2llcy5zZXQoJ2Nvb2tpZXNQb2xpY3knLCAnQWNjZXB0Jyk7XHJcblxyXG5cdFx0XHRjb29raWUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29va2llJykpOyovIiwiKCBmb3JtID0+IHtcclxuXHJcblx0aWYoIWZvcm0pIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgaW5wdXRSYW5nZSA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9fcmFuZ2UnKTtcclxuXHJcblx0aWYoaW5wdXRSYW5nZS5sZW5ndGgpIHtcclxuXHJcblx0XHRbLi4uaW5wdXRSYW5nZV0uZm9yRWFjaCggZWwgPT4ge1xyXG5cclxuXHRcdFx0bGV0IGZyb20gPSBlbC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19yYW5nZS1mcm9tJyksXHJcblx0XHRcdFx0dG8gPSBlbC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19yYW5nZS10bycpLFxyXG5cdFx0XHRcdGlucHV0RnJvbSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX3JhbmdlLWlucHV0LWZyb20nKSxcclxuXHRcdFx0XHRpbnB1dFRvID0gZWwucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fcmFuZ2UtaW5wdXQtdG8nKSxcclxuXHRcdFx0XHRzbGlkZXIgPSBlbC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19zbGlkZXItY29udHJvbCcpLFxyXG5cdFx0XHRcdG1pblZhbHVlID0gQVNLTy5zdHJUb051bWJlcihlbC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19yYW5nZS1taW4nKS50ZXh0Q29udGVudCksXHJcblx0XHRcdFx0bWF4VmFsdWUgPSBBU0tPLnN0clRvTnVtYmVyKGVsLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX3JhbmdlLW1heCcpLnRleHRDb250ZW50KSxcclxuXHRcdFx0XHRmcm9tVmFsdWUgPSBBU0tPLnN0clRvTnVtYmVyKGZyb20udmFsdWUpLFxyXG5cdFx0XHRcdHRvVmFsdWUgPSBBU0tPLnN0clRvTnVtYmVyKHRvLnZhbHVlKTtcclxuXHJcblx0XHRcdGlucHV0RXZlbnQoaW5wdXRGcm9tKTtcclxuXHRcdFx0aW5wdXRFdmVudChpbnB1dFRvKTtcclxuXHJcblx0XHRcdGlucHV0RnJvbS52YWx1ZSA9IEFTS08uc2VwTnVtYmVyKGZyb21WYWx1ZSk7XHJcblx0XHRcdGlucHV0VG8udmFsdWUgPSBBU0tPLnNlcE51bWJlcih0b1ZhbHVlKTtcclxuXHJcblx0XHRcdGZ1bmN0aW9uIGlucHV0RXZlbnQoaW5wdXQpe1xyXG5cclxuXHRcdFx0XHRpbnB1dC52YWx1ZSA9IEFTS08uc2VwTnVtYmVyKGlucHV0LnZhbHVlKTtcclxuXHJcblx0XHRcdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9IEFTS08uc3RyVG9OdW1iZXIodGhpcy52YWx1ZSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0XHRcdHZhciB2YWwgPSBBU0tPLnN0clRvTnVtYmVyKHRoaXMudmFsdWUpO1xyXG5cclxuXHRcdFx0XHRcdGlmKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaWx0ZXJfX3JhbmdlLWlucHV0LWZyb20nKSAmJiB2YWwgPCBtaW5WYWx1ZSl7XHJcblxyXG5cdFx0XHRcdFx0XHR2YWwgPSBtaW5WYWx1ZTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaWx0ZXJfX3JhbmdlLWlucHV0LXRvJykgJiYgdmFsID4gbWF4VmFsdWUpe1xyXG5cclxuXHRcdFx0XHRcdFx0dmFsID0gbWF4VmFsdWU7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSBBU0tPLnNlcE51bWJlcih2YWwpO1xyXG5cclxuXHRcdFx0XHRcdHVwZGF0ZUlucHV0KCk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdHZhciB2YWwgPSB0aGlzLnZhbHVlLnJlcGxhY2UoL1tcXERdL2csICcnKTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gdmFsO1xyXG5cclxuXHRcdFx0XHRcdHVwZGF0ZUlucHV0KCk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gdXBkYXRlSW5wdXQoKXtcclxuXHJcblx0XHRcdFx0ZnJvbVZhbHVlID0gQVNLTy5zdHJUb051bWJlcihpbnB1dEZyb20udmFsdWUpO1xyXG5cdFx0XHRcdHRvVmFsdWUgPSBBU0tPLnN0clRvTnVtYmVyKGlucHV0VG8udmFsdWUpO1xyXG5cclxuXHRcdFx0XHRmcm9tLnZhbHVlID0gZnJvbVZhbHVlO1xyXG5cdFx0XHRcdHRvLnZhbHVlID0gdG9WYWx1ZTtcclxuXHJcblx0XHRcdFx0c2xpZGVyLm5vVWlTbGlkZXIuc2V0KFtmcm9tVmFsdWUsIHRvVmFsdWVdKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIHVwZGF0ZVNsaWRlcigpe1xyXG5cclxuXHRcdFx0XHRmcm9tLnZhbHVlID0gZnJvbVZhbHVlO1xyXG5cdFx0XHRcdHRvLnZhbHVlID0gdG9WYWx1ZTtcclxuXHJcblx0XHRcdFx0aW5wdXRGcm9tLnZhbHVlID0gQVNLTy5zZXBOdW1iZXIoZnJvbVZhbHVlKTtcclxuXHRcdFx0XHRpbnB1dFRvLnZhbHVlID0gQVNLTy5zZXBOdW1iZXIodG9WYWx1ZSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgb25GdWxmaWxsZWQgPSBmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0XHRub1VpU2xpZGVyLmNyZWF0ZShzbGlkZXIsIHtcclxuXHRcdFx0XHRcdHN0YXJ0OiBbZnJvbVZhbHVlLHRvVmFsdWVdLFxyXG5cdFx0XHRcdFx0Y29ubmVjdDogdHJ1ZSxcclxuXHRcdFx0XHRcdHJhbmdlOiB7XHJcblx0XHRcdFx0XHRcdCdtaW4nOiBtaW5WYWx1ZSxcclxuXHRcdFx0XHRcdFx0J21heCc6IG1heFZhbHVlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0bWFyZ2luOiBwYXJzZUludChzbGlkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXN0ZXAnKSksXHJcblx0XHRcdFx0XHRzdGVwOiBwYXJzZUludChzbGlkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXN0ZXAnKSlcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0c2xpZGVyLm5vVWlTbGlkZXIub24oJ3NsaWRlJywgZnVuY3Rpb24oZSl7XHJcblxyXG5cdFx0XHRcdFx0ZnJvbVZhbHVlID0gcGFyc2VJbnQoZVswXSk7XHJcblx0XHRcdFx0XHR0b1ZhbHVlID0gcGFyc2VJbnQoZVsxXSk7XHJcblx0XHRcdFx0XHR1cGRhdGVTbGlkZXIoKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHNsaWRlci5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCBmdW5jdGlvbihlKXtcclxuXHJcblx0XHRcdFx0Ly9cdHVwZGF0ZVNsaWRlcihwYXJzZUludChlWzBdKSxwYXJzZUludChlWzFdKSlcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZE5vVWlTbGlkZXJcIiwgcmVzb2x2ZSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHByb21pc2UudGhlbihvbkZ1bGZpbGxlZCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsICgpPT4ge1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoaW5wdXRSYW5nZSwgZnVuY3Rpb24oZWwpe1xyXG5cclxuXHRcdFx0XHR2YXIgZnJvbSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX3JhbmdlLWZyb20nKSxcclxuXHRcdFx0XHRcdHRvID0gZWwucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fcmFuZ2UtdG8nKSxcclxuXHRcdFx0XHRcdGlucHV0RnJvbSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX3JhbmdlLWlucHV0LWZyb20nKSxcclxuXHRcdFx0XHRcdGlucHV0VG8gPSBlbC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19yYW5nZS1pbnB1dC10bycpLFxyXG5cdFx0XHRcdFx0c2xpZGVyID0gZWwucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fc2xpZGVyLWNvbnRyb2wnKSxcclxuXHRcdFx0XHRcdGZyb21WYWx1ZSA9IEFTS08uc3RyVG9OdW1iZXIoaW5wdXRGcm9tLnZhbHVlKSxcclxuXHRcdFx0XHRcdHRvVmFsdWUgPSBBU0tPLnN0clRvTnVtYmVyKGlucHV0VG8udmFsdWUpO1xyXG5cclxuXHRcdFx0XHRmcm9tLnZhbHVlID0gZnJvbVZhbHVlO1xyXG5cdFx0XHRcdHRvLnZhbHVlID0gdG9WYWx1ZTtcclxuXHRcdFx0XHRzbGlkZXIubm9VaVNsaWRlci5zZXQoW2Zyb21WYWx1ZSwgdG9WYWx1ZV0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSwxMDApO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8gbG9hZCBVaVNsaWRlclxyXG5cclxuXHRsZXQgbG9hZE5vVWlTbGlkZXIgPSBmYWxzZTtcclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdtb2RhbFNob3cnLCAoKSA9PiB7XHJcblxyXG5cdFx0aWYoIWxvYWROb1VpU2xpZGVyKXtcclxuXHJcblx0XHRcdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuXHRcdFx0c2NyaXB0LnNyYyA9ICcvanMvbm91aXNsaWRlci5taW4uanMnO1xyXG5cclxuXHRcdFx0c2NyaXB0Lm9ubG9hZCA9ICgpPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zdCBldmVudCA9IG5ldyBFdmVudCgnbG9hZE5vVWlTbGlkZXInKTtcclxuXHRcdFx0XHR3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmQoc2NyaXB0KTtcclxuXHRcdFx0bG9hZE5vVWlTbGlkZXIgPSB0cnVlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLW1vZGFsJykpOyIsIihmdW5jdGlvbihmb3Jtcyl7XHJcblxyXG5cdGlmKCFmb3Jtcykge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGZvcm1zLCBmdW5jdGlvbihmb3JtKXtcclxuXHJcblx0XHR2YXIgYnRuID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1teS1saXN0X19idG4nKSxcclxuXHRcdFx0bW9kZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJtb2RlXCJdJyksXHJcblx0XHRcdGhlYWRlckNvdW50ZXJWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfXycgKyBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwibXlsaXN0XCJdJykudmFsdWUgKyAnLWNvdW50Jyk7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLGZ1bmN0aW9uKGUpe1xyXG5cclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0dmFyIGFkZCA9IG1vZGUudmFsdWUgPT09ICdhZGQnO1xyXG5cclxuXHRcdFx0YnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdC8vIHNlbmQgZm9ybVxyXG5cclxuXHRcdFx0dmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pLFxyXG5cdFx0XHRcdHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHRcdFx0eGhyLm9wZW4oXCJQT1NUXCIsIGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSArICdhamF4LycpO1xyXG5cclxuXHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT09IDQpe1xyXG5cclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFkZCcsIGFkZCk7XHJcblx0XHRcdFx0bW9kZS52YWx1ZSA9ICggYWRkID8gJ2RlbCcgOiAnYWRkJyApO1xyXG5cclxuXHRcdFx0XHR2YXIgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuXHRcdFx0XHRpZiAoeGhyLnN0YXR1cyAhPT0gMjAwKSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ9C+0YjQuNCx0LrQsCAnICsgeGhyLnN0YXR1cyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRoZWFkZXJDb3VudGVyVmFsdWUudGV4dENvbnRlbnQgPSByZXNwb25zZS5xdWFudGl0eTtcclxuXHRcdFx0XHRcdGhlYWRlckNvdW50ZXJWYWx1ZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgcmVzcG9uc2UucXVhbnRpdHkgPT09IDApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR4aHIuc2VuZChmb3JtRGF0YSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tbXktbGlzdCcpKTsiLCJcclxuXHJcbihmdW5jdGlvbigpe1xyXG5cclxuXHR2YXIgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybScpO1xyXG5cclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGZvcm1zLCBmdW5jdGlvbihmb3JtKXtcclxuXHJcblx0XHR2YXIgc2hvd01vYWRhbE9rID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2stbW9kYWwnKSxcclxuXHRcdFx0eGhyT2ZmID0gZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0temFrYXonKSB8fCBmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS16YWthei1kZXRhaWxzJyksXHJcblx0XHRcdGZvcm1SZXF1aXJlZCA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnW3JlcXVpcmVkXScpLFxyXG5cdFx0XHRmb3JtQnRuU3VibWl0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fc3VibWl0JyksXHJcblx0XHRcdHRleHRFcnJvciA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm1fX3RleHRlcnJvcicpO1xyXG5cclxuXHRcdC8vINC+0YLQv9GA0LDQstC60LAg0YTQvtGA0LzRi1xyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cdFx0XHR2YXIgbm92YWxpZGF0ZSA9IGZhbHNlLFxyXG5cdFx0XHRcdGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG5cclxuXHRcdFx0aWYodGV4dEVycm9yKSB7XHJcblxyXG5cdFx0XHRcdHRleHRFcnJvci50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChmb3JtUmVxdWlyZWQsIGZ1bmN0aW9uKGlucHV0KXtcclxuXHJcblx0XHRcdFx0aWYoaW5wdXQub2Zmc2V0UGFyZW50ID09PSBudWxsKSB7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKGlucHV0LmdldEF0dHJpYnV0ZSgndHlwZScpID09ICdjaGVja2JveCcpIHtcclxuXHJcblx0XHRcdFx0XHRpZihpbnB1dC5jaGVja2VkKXtcclxuXHJcblx0XHRcdFx0XHRcdGlucHV0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tib3gtLWVycm9yJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpbnB1dC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LS1lcnJvcicpO1xyXG5cdFx0XHRcdFx0XHRub3ZhbGlkYXRlID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0ZWxzZSBpZihpbnB1dC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PSAncmFkaW8nKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIF9uYW1lID0gaW5wdXQuZ2V0QXR0cmlidXRlKCduYW1lJyksXHJcblx0XHRcdFx0XHRcdF9jaGVja2VkID0gZmFsc2UsXHJcblx0XHRcdFx0XHRcdF9yYWRpb0dyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCInK19uYW1lKydcIl0nKTtcclxuXHJcblx0XHRcdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKF9yYWRpb0dyb3VwLCBmdW5jdGlvbihlbCkge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYoZWwuY2hlY2tlZCl7XHJcblxyXG5cdFx0XHRcdFx0XHRcdF9jaGVja2VkID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRpZighX2NoZWNrZWQpe1xyXG5cclxuXHRcdFx0XHRcdFx0bm92YWxpZGF0ZSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdGlucHV0LmNsb3Nlc3QoJy5pbnB1dC1yb3dfX2lucHV0JykuY2xhc3NMaXN0LmFkZCgnaW5wdXQtcm93X19pbnB1dC0tZXJyb3InKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0ZXJyb3JJbnB1dChpbnB1dCk7XHJcblxyXG5cdFx0XHRcdFx0aWYoIWlucHV0LnZhbHVlKXtcclxuXHJcblx0XHRcdFx0XHRcdG5vdmFsaWRhdGUgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZighbm92YWxpZGF0ZSl7XHJcblxyXG5cdFx0XHRcdGlmKHhock9mZikge1xyXG5cclxuXHRcdFx0XHRcdEFTS08uc2VuZEJlYWNvbiA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8g0L/RgNC+0LLQtdGA0LrQsCDQvdCwINCx0L7RgtCwXHJcblxyXG5cdFx0XHRcdGlmKGZvcm0ub2Zmc2V0UGFyZW50ID09PSBudWxsKSB7XHJcblxyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbF9faXRlbS0tY2FsbGJhY2snKSkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBwaG9uZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmlucHV0W3R5cGU9XCJ0ZWxcIl0nKTtcclxuXHJcblx0XHRcdFx0XHRpZihwaG9uZSAmJiBwaG9uZS52YWx1ZS5yZXBsYWNlKC9bXitcXGRdL2csICcnKSA9PT0gJycpe1xyXG5cclxuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0XHRcdFx0eGhyLm9wZW4oXCJQT1NUXCIsIGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSk7XHJcblx0XHRcdFx0eGhyLnNlbmQoZm9ybURhdGEpO1xyXG5cclxuXHRcdFx0XHRpZihmb3JtQnRuU3VibWl0KSB7XHJcblxyXG5cdFx0XHRcdFx0Zm9ybUJ0blN1Ym1pdC5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSAhPSA0KXtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZihzaG93TW9hZGFsT2spIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS10aGFua3MgLm1vZGFsX190ZXh0JykudGV4dENvbnRlbnQgPSBzaG93TW9hZGFsT2s7XHJcblxyXG5cdFx0XHRcdFx0XHRcdEFTS08ubW9kYWxTaG93KCd0aGFua3MnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Zm9ybS5yZXNldCgpO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRhbGVydCgn0L7RiNC40LHQutCwICcgKyB4aHIuc3RhdHVzKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYoZm9ybUJ0blN1Ym1pdCkge1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9ybUJ0blN1Ym1pdC5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0dmFyIGNoZWNrYm94RXJyb3IgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC0tZXJyb3InKTtcclxuXHJcblx0XHRcdFx0aWYgKCBjaGVja2JveEVycm9yICkge1xyXG5cclxuXHRcdFx0XHRcdGlmKCFBU0tPLmlzSW5WaWV3cG9ydChjaGVja2JveEVycm9yKSl7XHJcblxyXG5cdFx0XHRcdFx0XHRjaGVja2JveEVycm9yLmNsb3Nlc3QoJy5pbnB1dC1yb3cnKS5zY3JvbGxJbnRvVmlldyhcInNtb290aFwiKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgaW5wdXRFcnJvciA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmlucHV0LXJvd19faW5wdXQtLWVycm9yJyk7XHJcblxyXG5cdFx0XHRcdFx0aWYodGV4dEVycm9yICYmIGlucHV0RXJyb3IuZ2V0QXR0cmlidXRlKCdkYXRhLWVycm9yJykpIHtcclxuXHJcblx0XHRcdFx0XHRcdHRleHRFcnJvci50ZXh0Q29udGVudCA9IGlucHV0RXJyb3IuZ2V0QXR0cmlidXRlKCdkYXRhLWVycm9yJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmKCFBU0tPLmlzSW5WaWV3cG9ydChpbnB1dEVycm9yKSl7XHJcblxyXG5cdFx0XHRcdFx0XHRpbnB1dEVycm9yLmNsb3Nlc3QoJy5pbnB1dC1yb3cnKS5zY3JvbGxJbnRvVmlldyhcInNtb290aFwiKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYoaW5wdXRFcnJvciAmJiBpbnB1dEVycm9yLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC0tZXJyb3InKSAmJiBpbnB1dEVycm9yLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC0tZXJyb3InKS50eXBlID09PSAndGV4dCcpe1xyXG5cclxuXHRcdFx0XHRcdFx0aW5wdXRFcnJvci5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtLWVycm9yJykuZm9jdXMoKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyDQuNC30LzQtdC90LXQvdC40LUg0YTQvtGA0LzRi1xyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cdFx0XHR2YXIgX3RhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuXHRcdFx0aWYoX3RhcmdldC5yZXF1aXJlZCkge1xyXG5cclxuXHRcdFx0XHRpZihfdGFyZ2V0LnR5cGUgPT09ICdyYWRpbycpIHtcclxuXHJcblx0XHRcdFx0XHRfdGFyZ2V0LmNsb3Nlc3QoJy5pbnB1dC1yb3dfX2lucHV0JykuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtcm93X19pbnB1dC0tZXJyb3InKTtcclxuXHRcdFx0XHRcdHRleHRFcnJvci50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKF90YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyAmJiBfdGFyZ2V0LmNoZWNrZWQpIHtcclxuXHJcblx0XHRcdFx0XHRfdGFyZ2V0LmNsb3Nlc3QoJy5jaGVja2JveCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrYm94LS1lcnJvcicpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuLy8gaW5wdXRcclxuXHJcblx0dmFyIGlucHV0UmVxdWlyZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXRbcmVxdWlyZWRdJyk7XHJcblxyXG5cdGZ1bmN0aW9uIGVycm9ySW5wdXQoZWwpe1xyXG5cclxuXHRcdGlmKGVsLnZhbHVlKSB7XHJcblx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LS1lcnJvcicpO1xyXG5cdFx0XHRlbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LXJvd19faW5wdXQtLWVycm9yJyk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnaW5wdXQtLWVycm9yJyk7XHJcblx0XHRcdGVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnaW5wdXQtcm93X19pbnB1dC0tZXJyb3InKTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGlucHV0UmVxdWlyZWQsIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRcdGlmKGUuY29kZSAhPT0gXCJUYWJcIikge1xyXG5cclxuXHRcdFx0XHRlcnJvcklucHV0KGVsKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRlcnJvcklucHV0KGVsKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbihnYWxsZXJ5KXtcclxuXHJcblx0aWYoZ2FsbGVyeSkge1xyXG5cclxuXHRcdEFTS08uZ2FsbGVyeVN3aXBlciA9ICc8ZGl2IGNsYXNzPVwic3dpcGVyLWNvbnRhaW5lciBzd2lwZXItY29udGFpbmVyLS1nYWxsZXJ5XCI+PHVsIGNsYXNzPVwibm90c2VsIHN3aXBlci13cmFwcGVyXCI+JztcclxuXHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGdhbGxlcnkucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RfX2ltZy1zbWFsbCBhJyksIGZ1bmN0aW9uKGxpbmspe1xyXG5cclxuXHRcdFx0Ly8g0LXRgdC70Lgg0Y7RgtGD0LEg0LIg0YHQu9Cw0LnQtNC10YDQtVxyXG5cdFx0XHRpZihsaW5rLmNsYXNzTGlzdC5jb250YWlucygncHJvZHVjdF9faW1nLXlvdXR1YmUnKSl7XHJcblxyXG5cdFx0XHRcdEFTS08uZ2FsbGVyeVN3aXBlciArPSAnPGxpIGNsYXNzPVwic3dpcGVyLXNsaWRlIHN3aXBlci1zbGlkZS0teW91dHViZVwiPjxkaXYgY2xhc3M9XCJ5b3V0dWJlLW1vZGFsLWdhbGxlcnlcIiBkYXRhLWlkPVwiJyArIGxpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgKyAnXCI+PGltZyBzcmM9XCJodHRwczovL2kueXRpbWcuY29tL3ZpLycgKyBsaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpICsgJy9tYXhyZXNkZWZhdWx0LmpwZ1wiPjwvZGl2PjwvbGk+JztcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdEFTS08uZ2FsbGVyeVN3aXBlciArPSAnPGxpIGNsYXNzPVwic3dpcGVyLXNsaWRlXCI+PGltZyBzcmM9XCInICsgbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSArICdcIj48L2xpPic7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0QVNLTy5nYWxsZXJ5U3dpcGVyICs9ICc8L3VsPjxzcGFuIGNsYXNzPVwic3dpcGVyLWNvdW50XCI+PC9zcGFuPjwvZGl2Pic7XHJcblxyXG5cdFx0Z2FsbGVyeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRcdGlmKGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9kdWN0X19lbmVyZycpKSB7XHJcblxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKGUudGFyZ2V0LmNsb3Nlc3QoJ2EnKSkge1xyXG5cclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xyXG5cclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZ2FsbGVyeScpLmlubmVySFRNTCA9IEFTS08uZ2FsbGVyeVN3aXBlcjtcclxuXHJcblx0XHRcdEFTS08ubW9kYWxTaG93KCdnYWxsZXJ5Jyk7XHJcblxyXG5cdFx0XHR2YXIgZ2FsbGVyeU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWdhbGxlcnkgLnN3aXBlci1jb250YWluZXItLWdhbGxlcnknKSxcclxuXHRcdFx0XHRzbGlkZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5zd2lwZXItc2xpZGUnKSxcclxuXHRcdFx0XHRpbmRleCA9IHNsaWRlID8gc2xpZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpIDogMDtcclxuXHJcblx0XHRcdEFTS08uc3dpcGVyKGdhbGxlcnlNb2RhbCwgaW5kZXgpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9faW1nJykpOyIsIihmdW5jdGlvbiAoKSB7XHJcblxyXG5cdHZhciB5YUNvdW50ZXJJZCA9ICcyNjUyNjcyOScsXHJcblx0XHRnb2FscyA9IFtcclxuXHJcblx0XHQvLyDQv9C10YDQtdGF0L7QtNGLINC/0L4g0YHRgtCw0YLRjNGP0Lwg0LjQtyDQvNC10L3RjlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c2VsZWN0b3I6ICcubGluay1hcnRpY2xlLWluLWNhdGFsb2ctbWVudScsXHJcblx0XHRcdFx0ZXZlbnQ6ICdjbGljaycsXHJcblx0XHRcdFx0eWFuZGV4OiB7XHJcblx0XHRcdFx0XHR0YXJnZXQ6ICdMSU5LX0FSVElDTEVfSU5fQ0FUQUxPR19NRU5VJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHQvLyDQotC10LvQtdGE0L7QvVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c2VsZWN0b3I6ICdhW2hyZWZePVwidGVsXCJdJyxcclxuXHRcdFx0XHRldmVudDogJ2NsaWNrJyxcclxuXHRcdFx0XHR5YW5kZXg6IHtcclxuXHRcdFx0XHRcdHRhcmdldDogJ1BIT05FJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHQvLyDQpNC40LvRjNGC0YBcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNlbGVjdG9yOiAnLmZpbHRlcl9fYnRuLXRvZ2dsZSAuYnRuJyxcclxuXHRcdFx0XHRldmVudDogJ2NsaWNrJyxcclxuXHRcdFx0XHR5YW5kZXg6IHtcclxuXHRcdFx0XHRcdHRhcmdldDogJ0ZJTFRFUl9PUEVOJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNlbGVjdG9yOiAnLmZpbHRlcicsXHJcblx0XHRcdFx0ZXZlbnQ6ICdzdWJtaXQnLFxyXG5cdFx0XHRcdHlhbmRleDoge1xyXG5cdFx0XHRcdFx0dGFyZ2V0OiAnRklMVEVSX1NVQk1JVCdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0Ly8g0J/QvtC60YPQv9C60LBcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNlbGVjdG9yOiAnLmNhdGFsb2ctbGlzdF9fY2FydCwgLnByb2R1Y3RfX2NhcnQnLFxyXG5cdFx0XHRcdGV2ZW50OiAnc3VibWl0JyxcclxuXHRcdFx0XHR5YW5kZXg6IHtcclxuXHRcdFx0XHRcdHRhcmdldDogJ0NMSUNLX0JVWSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzZWxlY3RvcjogJy5mb3JtLXpha2F6JyxcclxuXHRcdFx0XHRldmVudDogJ3N1Ym1pdCcsXHJcblx0XHRcdFx0eWFuZGV4OiB7XHJcblx0XHRcdFx0XHR0YXJnZXQ6ICdTVUJNSVRfT1JERVJfQ1JFQVRFJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNlbGVjdG9yOiAnLmZvcm0temFrYXotZGV0YWlscycsXHJcblx0XHRcdFx0ZXZlbnQ6ICdzdWJtaXQnLFxyXG5cdFx0XHRcdHlhbmRleDoge1xyXG5cdFx0XHRcdFx0dGFyZ2V0OiAnU1VCTUlUX09SREVSX0RFVEFJTFMnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdC8vINCX0LDQutCw0LfQsNGC0Ywg0LfQstC+0L3QvtC6XHJcblx0XHRcdHtcclxuXHRcdFx0XHRzZWxlY3RvcjogJy5tb2RhbF9faXRlbS0tY2FsbGJhY2snLFxyXG5cdFx0XHRcdGV2ZW50OiAnbW9kYWxTaG93JyxcclxuXHRcdFx0XHR5YW5kZXg6IHtcclxuXHRcdFx0XHRcdHRhcmdldDogJ0NBTExCQUNLX09QRU4nXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c2VsZWN0b3I6ICcubW9kYWxfX2l0ZW0tLWNhbGxiYWNrJyxcclxuXHRcdFx0XHRldmVudDogJ3N1Ym1pdCcsXHJcblx0XHRcdFx0eWFuZGV4OiB7XHJcblx0XHRcdFx0XHR0YXJnZXQ6ICdDQUxMQkFDS19TRU5EJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNlbGVjdG9yOiAnLm1vZGFsX19pdGVtLS10aGFua3MnLFxyXG5cdFx0XHRcdGV2ZW50OiAnbW9kYWxTaG93JyxcclxuXHRcdFx0XHR5YW5kZXg6IHtcclxuXHRcdFx0XHRcdHRhcmdldDogJ1RIQU5LU19PUEVOJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRdO1xyXG5cclxuXHJcblx0Z29hbHMuZm9yRWFjaChmdW5jdGlvbiAoZ29hbCkge1xyXG5cdFx0aWYgKGdvYWwucGFnZSAmJiBnb2FsLnBhZ2UgIT09IGxvY2F0aW9uLnBhdGhuYW1lKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKGdvYWwuc2tpcFBhZ2VzICYmIGdvYWwuc2tpcFBhZ2VzLmluZGV4T2YobG9jYXRpb24ucGF0aG5hbWUpICE9PSAtMSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZ29hbC5zZWxlY3Rvcik7XHJcblxyXG5cdFx0W10uZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZ29hbC5ldmVudCwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGdvYWwueWFuZGV4LnRhcmdldClcclxuXHRcdFx0XHRpZiAoZ29hbC55YW5kZXggJiYgd2luZG93Wyd5YUNvdW50ZXInICsgeWFDb3VudGVySWRdKSB7XHJcblx0XHRcdFx0XHR3aW5kb3dbJ3lhQ291bnRlcicgKyB5YUNvdW50ZXJJZF0ucmVhY2hHb2FsKGdvYWwueWFuZGV4LnRhcmdldCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24oaGVhZGVyQ2FydCl7XHJcblxyXG5cdGlmKGhlYWRlckNhcnQpIHtcclxuXHJcblx0XHR2YXIgY2xlYXJUaW1lb3V0SUQgPSBudWxsO1xyXG5cclxuXHRcdEFTS08uaGVhZGVyQ2FydCA9IHtcclxuXHJcblx0XHRcdGNoYW5nZSA6IGZ1bmN0aW9uKHF1YW50aXR5LCBzdW0pIHtcclxuXHJcblx0XHRcdFx0aGVhZGVyQ2FydC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jYXJ0LWNvdW50JykudGV4dENvbnRlbnQgPSBxdWFudGl0eTtcclxuXHRcdFx0XHRoZWFkZXJDYXJ0LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NhcnQtdmFsdWUnKS50ZXh0Q29udGVudCA9IEFTS08uc2VwTnVtYmVyKHN1bSk7XHJcblx0XHRcdFx0aGVhZGVyQ2FydC5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX2NhcnQtLWVtcHR5JywgcXVhbnRpdHkgPT0gJzAnKTtcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRzaG93IDogZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdGhlYWRlckNhcnQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19jYXJ0LS1zaG93Jyk7XHJcblxyXG5cdFx0XHRcdGNsZWFyVGltZW91dChjbGVhclRpbWVvdXRJRCk7XHJcblxyXG5cdFx0XHRcdGNsZWFyVGltZW91dElEID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0XHRcdGhlYWRlckNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19jYXJ0LS1zaG93Jyk7XHJcblxyXG5cdFx0XHRcdH0sIDMwMDApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY2FydCcpKTsiLCIoZnVuY3Rpb24obmF2KXtcclxuXHJcblx0aWYoIW5hdikge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHR2YXIgbGV2ZWwxID0gbmF2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2l0ZW0nKSxcclxuXHRcdGxldmVsMlBhcmVudCA9IG5hdi5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19sZXZlbDItaXRlbS0tcGFyZW50JyksXHJcblx0XHRsZXZlbDJCYWNrID0gbmF2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2xldmVsMi1idG4tYmFjaycpLFxyXG5cdFx0bGV2ZWwzQmFjayA9IG5hdi5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19sZXZlbDMtYnRuLWJhY2snKSxcclxuXHRcdHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xyXG5cclxuXHQvLyDQvtGC0LrRgNGL0YLRjHzQt9Cw0LrRgNGL0YLRjCDQvNC10L3RjlxyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG5cdFx0aWYoZS50YXJnZXQuY2xvc2VzdCgnLmhlYWRlcl9fYnRuLXRvZ2dsZScpIHx8IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmF2JykpIHtcclxuXHJcblx0XHRcdGlmKEFTS08uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtb3BlbicpKXtcclxuXHJcblx0XHRcdFx0bmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxldmVsMicpO1xyXG5cdFx0XHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sZXZlbDMnKTtcclxuXHJcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsZXZlbDEsIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRcdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1ob3ZlcicpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsZXZlbDJQYXJlbnQsIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRcdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1ob3ZlcicpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLEFTS08ud2luZG93U2Nyb2xsT2xkKTtcclxuXHRcdFx0XHRcdHdyYXBwZXIuc3R5bGUudG9wID0gMDtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRBU0tPLndpbmRvd1Njcm9sbE9sZCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuXHRcdFx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IC1BU0tPLndpbmRvd1Njcm9sbE9sZCArICdweCc7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRBU0tPLmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1vcGVuJyk7XHJcblx0XHRcdG5hdi5jbGFzc0xpc3QudG9nZ2xlKCd2aXN1YWxseWhpZGRlbicpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cclxuXHQvLyDQvdCw0LLQtdC00LXQvdC40LUg0L3QsCDQv9C10YDQstGL0Lkg0YPRgNC+0LLQtdC90YxcclxuXHJcblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsZXZlbDEsIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRpZighZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZfX2l0ZW0tLXBhcmVudCcpKSB7XHJcblxyXG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0XHRpZihBU0tPLndpZHRoID49IDc2OCkge1xyXG5cclxuXHRcdFx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhvdmVyJyk7XHJcblx0XHRcdFx0XHRuYXYuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbGV2ZWwyJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdFx0aWYoQVNLTy53aWR0aCA+PSA3NjgpIHtcclxuXHJcblx0XHRcdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1ob3ZlcicpO1xyXG5cdFx0XHRcdFx0bmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxldmVsMicpO1xyXG5cclxuXHRcdFx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGV2ZWwxLCBmdW5jdGlvbihlbGVtKXtcclxuXHJcblx0XHRcdFx0XHRcdGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaG92ZXInKTtcclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0XHRpZihBU0tPLndpZHRoID49IDc2OCkge1xyXG5cclxuXHRcdFx0XHRcdG5hdi5jbGFzc0xpc3QuYWRkKCdpcy1sZXZlbDInKTtcclxuXHJcblx0XHRcdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxldmVsMSwgZnVuY3Rpb24oZWxlbSl7XHJcblxyXG5cdFx0XHRcdFx0XHRlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWhvdmVyJywgZWxlbSA9PT0gZWwpO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGVsLnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2hlYWQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG5cdFx0XHRcdGlmKEFTS08ud2lkdGggPCA3NjgpIHtcclxuXHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdFx0bmF2LnN0eWxlLm1pbkhlaWdodCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2xldmVsMicpLnNjcm9sbEhlaWdodCArIFwicHhcIjtcclxuXHJcblx0XHRcdFx0XHRuYXYuY2xhc3NMaXN0LmFkZCgnaXMtbGV2ZWwyJyk7XHJcblxyXG5cdFx0XHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsZXZlbDEsIGZ1bmN0aW9uKGVsZW0pe1xyXG5cclxuXHRcdFx0XHRcdFx0ZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1ob3ZlcicsIGVsZW0gPT09IGVsKTtcclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0YXQvtCy0LXRgC/QutC70LjQuiDQstGC0L7RgNC+0Lkg0YPRgNC+0LLQtdC90YxcclxuXHJcblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsZXZlbDJQYXJlbnQsIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRlbC5wYXJlbnROb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRpZihBU0tPLndpZHRoID49IDc2OCkge1xyXG5cclxuXHRcdFx0XHRuYXYuY2xhc3NMaXN0LmFkZCgnaXMtbGV2ZWwzJyk7XHJcblxyXG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGV2ZWwyUGFyZW50LCBmdW5jdGlvbihlbGVtKXtcclxuXHJcblx0XHRcdFx0XHRlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWhvdmVyJywgZWxlbSA9PT0gZWwpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRlbC5wYXJlbnROb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRpZihBU0tPLndpZHRoID49IDc2OCkge1xyXG5cclxuXHRcdFx0XHRuYXYuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbGV2ZWwzJyk7XHJcblxyXG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGV2ZWwyUGFyZW50LCBmdW5jdGlvbihlbGVtKXtcclxuXHJcblx0XHRcdFx0XHRlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhvdmVyJyk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGVsLnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2xldmVsMi1saW5rJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuXHRcdFx0aWYoQVNLTy53aWR0aCA8IDc2OCkge1xyXG5cclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdG5hdi5jbGFzc0xpc3QuYWRkKCdpcy1sZXZlbDMnKTtcclxuXHJcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsZXZlbDJQYXJlbnQsIGZ1bmN0aW9uKGVsZW0pe1xyXG5cclxuXHRcdFx0XHRcdGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtaG92ZXInLCBlbGVtID09PSBlbCk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0LrQu9C40Log0L/QviDQutC90L7Qv9C60LUg0L3QsNC30LDQtFxyXG5cclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxldmVsMkJhY2ssIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdG5hdi5zdHlsZS5taW5IZWlnaHQgPSBuYXYucXVlcnlTZWxlY3RvcignLm5hdl9faW5uZXInKS5jbGllbnRIZWlnaHQgKyBcInB4XCI7XHJcblxyXG5cdFx0XHRuYXYuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbGV2ZWwyJyk7XHJcblxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxldmVsMSwgZnVuY3Rpb24oZWwpe1xyXG5cclxuXHRcdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1ob3ZlcicpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxldmVsM0JhY2ssIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sZXZlbDMnKTtcclxuXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGV2ZWwyUGFyZW50LCBmdW5jdGlvbihlbGVtKXtcclxuXHJcblx0XHRcdFx0ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1ob3ZlcicpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpKTsiLCJcclxuKGZ1bmN0aW9uKCl7XHJcblxyXG5cdHZhciBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpLFxyXG5cdFx0aXRlbXMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxfX2l0ZW0nKSxcclxuXHRcdGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19jbG9zZScpLFxyXG5cdFx0d3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XHJcblxyXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoY2xvc2UsIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdEFTS08uY2xvc2VNb2RhbCgpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuXHRcdGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSkge1xyXG5cclxuXHRcdFx0QVNLTy5jbG9zZU1vZGFsKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0QVNLTy5jbG9zZU1vZGFsID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0QVNLTy5hY3RpdmVNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF9faXRlbS0tYWN0aXZlJyk7XHJcblx0XHRBU0tPLmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtc2hvdycpO1xyXG5cdFx0d3JhcHBlci5zdHlsZS50b3AgPSAwO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsQVNLTy53aW5kb3dTY3JvbGxPbGQpO1xyXG5cclxuXHRcdC8vINC/0L7QutCw0LbQtdC8INC60L7RgNC30LjQvdGDXHJcblxyXG5cdFx0aWYoQVNLTy5hY3RpdmVNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsX19pdGVtLS1wcm9kdWN0LWluLWNhcnQnKSAmJiAhQVNLTy5hY3RpdmVNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsX19pdGVtLS1hY3RpdmUnKSkge1xyXG5cclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0XHRBU0tPLmhlYWRlckNhcnQuc2hvdygpO1xyXG5cclxuXHRcdFx0fSwgMjAwKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g0L7RgdGC0LDQvdC+0LLQuNGC0Ywg0LLQuNC00LXQvlxyXG5cclxuXHRcdGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1nYWxsZXJ5IC55b3V0dWJlLW1vZGFsLWdhbGxlcnkuaXMtYWN0aXZlJykpIHtcclxuXHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1nYWxsZXJ5IC55b3V0dWJlLW1vZGFsLWdhbGxlcnkuaXMtYWN0aXZlIGlmcmFtZScpLnJlbW92ZSgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyDRg9C00LDQu9C40YLRjCDQstC40LTQtdC+XHJcblxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXZpZGVvJykuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cdH07XHJcblxyXG5cdEFTS08ubW9kYWxTaG93ID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG5cdFx0QVNLTy5hY3RpdmVNb2RhbCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tJyArIHNlbGVjdG9yKTtcclxuXHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGl0ZW1zLCBmdW5jdGlvbihlbCl7XHJcblxyXG5cdFx0XHRlbC5jbGFzc0xpc3QudG9nZ2xlKCdtb2RhbF9faXRlbS0tYWN0aXZlJywgQVNLTy5hY3RpdmVNb2RhbCA9PSBlbCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZnVsbCcsIHNlbGVjdG9yID09PSAnZ2FsbGVyeScgfHwgc2VsZWN0b3IgPT09ICd2aWRlbycpO1xyXG5cclxuXHRcdEFTS08ud2luZG93U2Nyb2xsT2xkID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdHdyYXBwZXIuc3R5bGUudG9wID0gLUFTS08ud2luZG93U2Nyb2xsT2xkICsgJ3B4JztcclxuXHJcblx0XHRBU0tPLmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtc2hvdycpO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsMCk7XHJcblxyXG5cdFx0QVNLTy5hY3RpdmVNb2RhbC5mb2N1cygpO1xyXG5cclxuXHRcdC8vINCy0YvQt9GL0LLRi9C10Lwg0YHQvtCx0YvRgtC40LUg0L3QsCDQsNC60YLQuNCy0L3QvtC8INC+0LrQvdC1XHJcblx0XHRBU0tPLmFjdGl2ZU1vZGFsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdtb2RhbFNob3cnKSk7XHJcblxyXG5cdH1cclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsZnVuY3Rpb24oZSkge1xyXG5cclxuXHRcdHZhciBrZXlDb2RlID0gZS5rZXlDb2RlIHx8IGUud2hpY2g7XHJcblxyXG5cdFx0aWYoa2V5Q29kZSA9PT0gMjcpe1xyXG5cclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ2NsaWNrJyk7XHJcblx0XHRcdG1vZGFsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcblx0XHRsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG5cdFx0d2hpbGUgKHRhcmdldCAhPT0gdGhpcykge1xyXG5cclxuXHRcdFx0aWYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnKSkge1xyXG5cclxuXHRcdFx0XHRBU0tPLm1vZGFsU2hvdyh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsJykpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbn0pKCk7IiwiKCBmb3JtID0+IHtcclxuXHJcblx0aWYoZm9ybSkge1xyXG5cclxuXHRcdGNvbnN0IHByb2R1Y3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RfX2NhcnQnKSxcclxuXHRcdFx0ICBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyk7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zdCByZWN0ID0gZm9vdGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLXNob3cnLCBBU0tPLmlzSW5WaWV3cG9ydChwcm9kdWN0Rm9ybSkgPT09IGZhbHNlICYmIHJlY3QudG9wID4gQVNLTy5oZWlnaHQpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXNjcm9sbCcpKTtcclxuIiwiXHJcbihmdW5jdGlvbihmb3JtKXtcclxuXHJcblx0aWYoZm9ybSkge1xyXG5cclxuXHRcdHZhciBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoLWlucHV0Jyk7XHJcblxyXG5cdFx0Ly8g0L7RgtC/0YDQsNCy0LrQsCDRhNC+0YDQvNGLXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRcdGlmKGlucHV0LnZhbHVlID09PSAnJykge1xyXG5cclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0aW5wdXQuZm9jdXMoKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoJykpOyIsIihmdW5jdGlvbihnYWxsZXJ5KXtcclxuXHJcblx0aWYoZ2FsbGVyeSkge1xyXG5cclxuXHRcdHZhciBnYWxsZXJ5SXRlbSA9IGdhbGxlcnkucXVlcnlTZWxlY3RvckFsbCgnLnNob3ctcm9vbS1nYWxsZXJ5X19pdGVtJyk7XHJcblxyXG5cdFx0QVNLTy5nYWxsZXJ5U3dpcGVyID0gJzxkaXYgY2xhc3M9XCJzd2lwZXItY29udGFpbmVyIHN3aXBlci1jb250YWluZXItLWdhbGxlcnlcIj48dWwgY2xhc3M9XCJub3RzZWwgc3dpcGVyLXdyYXBwZXJcIj4nO1xyXG5cclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZ2FsbGVyeUl0ZW0sIGZ1bmN0aW9uKGxpbmssIGluZGV4KXtcclxuXHJcblx0XHRcdEFTS08uZ2FsbGVyeVN3aXBlciArPSAnPGxpIGNsYXNzPVwic3dpcGVyLXNsaWRlXCI+PGltZyBzcmM9XCInICsgbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSArICdcIj48L2xpPic7XHJcblxyXG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1nYWxsZXJ5JykuaW5uZXJIVE1MID0gQVNLTy5nYWxsZXJ5U3dpcGVyO1xyXG5cclxuXHRcdFx0XHRBU0tPLm1vZGFsU2hvdygnZ2FsbGVyeScpO1xyXG5cclxuXHRcdFx0XHR2YXIgZ2FsbGVyeU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWdhbGxlcnkgLnN3aXBlci1jb250YWluZXItLWdhbGxlcnknKTtcclxuXHJcblx0XHRcdFx0QVNLTy5zd2lwZXIoZ2FsbGVyeU1vZGFsLCBpbmRleCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRBU0tPLmdhbGxlcnlTd2lwZXIgKz0gJzwvdWw+PHNwYW4gY2xhc3M9XCJzd2lwZXItY291bnRcIj48L3NwYW4+PC9kaXY+JztcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG5cdFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG5cdFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG5cdFx0XHRzY3JpcHQuc3JjID0gJy9qcy9zd2lwZXIubWluLmpzJztcclxuXHJcblx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuXHJcblx0XHR9LCBBU0tPLnNldHRpbWVvdXQpO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvdy1yb29tLWdhbGxlcnknKSk7IiwiQVNLTy5zd2lwZXIgPSBmdW5jdGlvbihzd2lwZSwgaW5pdGlhbFNsaWRlKXtcclxuXHJcblx0aWYoc3dpcGUucXVlcnlTZWxlY3RvcignLnN3aXBlci1wYWdpbmF0aW9uJykpe1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHR2YXIgbXlTd2lwZSA9IG51bGwsXHJcblx0XHRyZXNpemVUaW1lb3V0ID0gbnVsbCxcclxuXHRcdHdpbmRvd1dpZHRoT0xkID0gbnVsbCxcclxuXHRcdHRvZ2dsZVN3aXBlID0gbnVsbCxcclxuXHRcdHJlc2V0U3dpcGUgPSBudWxsLFxyXG5cdFx0c3dpcGVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdHN3aXBlTmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG5cdFx0c3dpcGVQcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcblx0XHRpbml0aWFsU2xpZGUgPSBpbml0aWFsU2xpZGUgPyBwYXJzZUludChpbml0aWFsU2xpZGUpIDogMCxcclxuXHRcdGNvdW50ID0gc3dpcGUucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1zbGlkZScpLmxlbmd0aCxcclxuXHRcdGJpZyA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tYmlnJyksXHJcblx0XHRwcm9kdWN0ID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1wcm9kdWN0JyksXHJcblx0XHRnYWxsZXJ5ID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1nYWxsZXJ5Jyk7XHJcblxyXG5cdHN3aXBlTmF2LmNsYXNzTmFtZSA9ICdzd2lwZXItcGFnaW5hdGlvbiBoaWRlJztcclxuXHRzd2lwZVByZXYuY2xhc3NOYW1lID0gJ3N3aXBlci1idXR0b24tcHJldiBidXR0b24gaGlkZSc7XHJcblx0c3dpcGVOZXh0LmNsYXNzTmFtZSA9ICdzd2lwZXItYnV0dG9uLW5leHQgYnV0dG9uIGhpZGUnO1xyXG5cclxuXHRzd2lwZVByZXYuaW5uZXJIVE1MID0gJzxzdmcgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIj48cGF0aCBkPVwiTTk5MCAxMEgxMHY5ODBoOTgwVjEwem0tOTEuNCA0MTYuNXYxNDdIMzk0LjRsMjE1LjMgMjE1LjMtMTE0LjMgMTE0LjRMOTIuMiA1MDAgNDk1LjQgOTYuOGwxMTQuNCAxMTQuNC0yMTUuNCAyMTUuM2g1MDQuMnpcIi8+PC9zdmc+JztcclxuXHJcblx0c3dpcGVOZXh0LmlubmVySFRNTCA9ICc8c3ZnIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCI+PHBhdGggZD1cIk05OTAgMTBIMTB2OTgwaDk4MFYxMHptLTkxLjQgNDE2LjV2MTQ3SDM5NC40bDIxNS4zIDIxNS4zLTExNC4zIDExNC40TDkyLjIgNTAwIDQ5NS40IDk2LjhsMTE0LjQgMTE0LjQtMjE1LjQgMjE1LjNoNTA0LjJ6XCIvPjwvc3ZnPic7XHJcblxyXG5cdHN3aXBlLmFwcGVuZENoaWxkKHN3aXBlTmF2KTtcclxuXHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHN3aXBlTmV4dCk7XHJcblx0c3dpcGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzd2lwZVByZXYpO1xyXG5cclxuXHRyZXNldFN3aXBlID0gZnVuY3Rpb24oKXtcclxuXHJcblx0XHRpZihteVN3aXBlKSB7XHJcblxyXG5cdFx0XHRteVN3aXBlLmRlc3Ryb3koZmFsc2UsdHJ1ZSk7XHJcblx0XHRcdG15U3dpcGUgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdHN3aXBlTmV4dC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRzd2lwZVByZXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdGlmIChBU0tPLndpZHRoIDwgNzY4KSB7XHJcblxyXG5cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0c3dpcGVOZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGVQcmV2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKGJpZykge1xyXG5cclxuXHRcdHJlc2V0U3dpcGUoKTtcclxuXHJcblx0XHR0b2dnbGVTd2lwZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSBmYWxzZTtcclxuXHJcblx0XHRcdG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRcdGVsOiBzd2lwZU5hdlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGlmIChwcm9kdWN0KSB7XHJcblxyXG5cdFx0aWYoQVNLTy53aWR0aCA8IDc2OCkge1xyXG5cclxuXHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYoKGNvdW50ID4gMyB8fCAoY291bnQgPiAyICYmIEFTS08ud2lkdGggPCAxMDAwKSkpIHtcclxuXHJcblx0XHRcdHN3aXBlTmV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlUHJldi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRzd2lwZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLS1vZmYnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dG9nZ2xlU3dpcGUgPSBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGVOZXh0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGVQcmV2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGUuY2xhc3NMaXN0LnJlbW92ZSgnc3dpcGVyLWNvbnRhaW5lci0tb2ZmJyk7XHJcblxyXG5cclxuXHRcdFx0aWYobXlTd2lwZSkge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhteVN3aXBlKVxyXG5cclxuXHRcdFx0XHRteVN3aXBlLmRlc3Ryb3koZmFsc2UsdHJ1ZSk7XHJcblx0XHRcdFx0bXlTd2lwZSA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHRcdFx0Ly8g0YPQtNCw0LvRh9C10Lwg0Y7RgtGD0LEg0LIg0LzQsNC70LXQvdGM0LrQvtC8INGB0LvQsNC50LTQtdGA0LUsINC/0YDQuCDRgNC10YHQsNC50YHQtSDQuNC70Lgg0LXRidC1INC60LDQulxyXG5cdFx0XHRcdGlmKHN3aXBlLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0X19pbWcteW91dHViZS5pcy1hY3RpdmUnKSl7XHJcblxyXG5cdFx0XHRcdFx0c3dpcGUucXVlcnlTZWxlY3RvcignLnByb2R1Y3RfX2ltZy15b3V0dWJlLmlzLWFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRcdGlmKHN3aXBlLnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpKXtcclxuXHJcblx0XHRcdFx0XHRcdHN3aXBlLnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoQVNLTy53aWR0aCA8IDc2OCkge1xyXG5cclxuXHRcdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdGlmKGNvdW50ID4gMSkge1xyXG5cclxuXHRcdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0XHRcdHByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0XHRcdFx0ZWw6IHN3aXBlTmF2LFxyXG5cdFx0XHRcdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRvbjoge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydDogZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYobXlTd2lwZSl7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyDQvtGB0YLQsNC90LDQstC70LjQstCw0LXQvCDRjtGC0YPQsSDQsiDQvNCw0LvQtdC90YzQutC+0Lwg0YHQu9Cw0LnQtNC10YDQtVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYobXlTd2lwZS5zbGlkZXNbbXlTd2lwZS5wcmV2aW91c0luZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1zbGlkZS0teW91dHViZScpKXtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bXlTd2lwZS5zbGlkZXNbbXlTd2lwZS5wcmV2aW91c0luZGV4XS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9faW1nLXlvdXR1YmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYobXlTd2lwZS5zbGlkZXNbbXlTd2lwZS5wcmV2aW91c0luZGV4XS5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKSl7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bXlTd2lwZS5zbGlkZXNbbXlTd2lwZS5wcmV2aW91c0luZGV4XS5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZigoY291bnQgPiAzIHx8IChjb3VudCA+IDIgJiYgQVNLTy53aWR0aCA8IDEwMDApKSkge1xyXG5cclxuXHRcdFx0XHRzd2lwZU5leHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdHN3aXBlUHJldi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0cHJlbG9hZEltYWdlczogZmFsc2UsXHJcblx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRcdG5leHRFbDogc3dpcGVOZXh0LFxyXG5cdFx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0c3dpcGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci0tb2ZmJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGlmIChnYWxsZXJ5KSB7XHJcblxyXG5cdFx0dG9nZ2xlU3dpcGUgPSBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdHZhciBjb3VudEN1cnJlbnQgPSBzd2lwZS5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLWNvdW50Jyk7XHJcblxyXG5cdFx0XHRpZihjb3VudCA+IDEpIHtcclxuXHJcblx0XHRcdFx0c3dpcGVOZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRzd2lwZVByZXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdGNvdW50Q3VycmVudC50ZXh0Q29udGVudCA9IChpbml0aWFsU2xpZGUgKyAxKSArICcvJyArIGNvdW50O1xyXG5cclxuXHRcdFx0XHRpZighbXlTd2lwZSkge1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdnYWxsZXJ5JylcclxuXHJcblx0XHRcdFx0XHRteVN3aXBlID0gbmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRpbml0aWFsU2xpZGU6IGluaXRpYWxTbGlkZSxcclxuXHRcdFx0XHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRcdG5leHRFbDogc3dpcGVOZXh0LFxyXG5cdFx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdG9uOiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHNsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0OiBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZihteVN3aXBlKXtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvdW50Q3VycmVudC50ZXh0Q29udGVudCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bXlTd2lwZS5hY3RpdmVJbmRleCA9PT0gMCB8fCBteVN3aXBlLmFjdGl2ZUluZGV4ID09PSBjb3VudCA/XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb3VudCA6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRteVN3aXBlLmFjdGl2ZUluZGV4ICUgY291bnQ7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb3VudEN1cnJlbnQudGV4dENvbnRlbnQgKz0gJy8nICsgY291bnQ7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyDRg9C00LDQu9GH0LXQvCDRjtGC0YPQsSDQsiDQvNC+0LTQsNC70YzQvdC+0Lwg0L7QutC90LUgKNC+0YHRgtCw0L3QvtCy0LrQsClcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYobXlTd2lwZS5zbGlkZXNbbXlTd2lwZS5wcmV2aW91c0luZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1zbGlkZS0teW91dHViZScpKXtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bXlTd2lwZS5zbGlkZXNbbXlTd2lwZS5wcmV2aW91c0luZGV4XS5xdWVyeVNlbGVjdG9yKCcueW91dHViZS1tb2RhbC1nYWxsZXJ5JykuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmKG15U3dpcGUuc2xpZGVzW215U3dpcGUucHJldmlvdXNJbmRleF0ucXVlcnlTZWxlY3RvcignaWZyYW1lJykpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG15U3dpcGUuc2xpZGVzW215U3dpcGUucHJldmlvdXNJbmRleF0ucXVlcnlTZWxlY3RvcignaWZyYW1lJykucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0c3dpcGVOZXh0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRzd2lwZVByZXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRcdGNvdW50Q3VycmVudC50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3cuU3dpcGVyICYmIHRvZ2dsZVN3aXBlKCk7XHJcblxyXG5cdH1cclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKXtcclxuXHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHRpZiAod2luZG93LlN3aXBlciAmJiAhcmVzaXplVGltZW91dCkge1xyXG5cclxuXHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHJcblx0XHRcdFx0XHRpZihBU0tPLndpZHRoICE9IHdpbmRvd1dpZHRoT0xkKXtcclxuXHJcblx0XHRcdFx0XHRcdHdpbmRvd1dpZHRoT0xkID0gQVNLTy53aWR0aDtcclxuXHJcblx0XHRcdFx0XHRcdHRvZ2dsZVN3aXBlICYmIHRvZ2dsZVN3aXBlKCk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9LCAxMDAwKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59O1xyXG5cclxuXHJcbihmdW5jdGlvbihpdGVtKXtcclxuXHJcblx0aWYoaXRlbS5sZW5ndGgpIHtcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG5cdFx0XHRzY3JpcHQuc3JjID0gJy9qcy9zd2lwZXIubWluLmpzJztcclxuXHJcblx0XHRcdHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzaXplJykpO1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuXHJcblx0XHR9LCBBU0tPLnNldHRpbWVvdXQpO1xyXG5cclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoaXRlbSwgZnVuY3Rpb24oZWwpe1xyXG5cclxuXHRcdFx0QVNLTy5zd2lwZXIoZWwpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLWNvbnRhaW5lcicpKTsiLCJBU0tPLnRhYnMgPSBmdW5jdGlvbihlbGVtcyl7XHJcblxyXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxlbXMsIGZ1bmN0aW9uKHRhYil7XHJcblxyXG5cdFx0dmFyIGJ0biA9IHRhYi5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19fYnRuJyksXHJcblx0XHRcdGl0ZW0gPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2l0ZW0nKSxcclxuXHRcdFx0bmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChidG4sIGZ1bmN0aW9uKGVsLGluZGV4KXtcclxuXHJcblx0XHRcdHZhciBfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcblx0XHRcdFx0X3BhdHRlcm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG5cdFx0XHRfYnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xyXG5cclxuXHRcdFx0X2J0bi5jbGFzc05hbWUgPSAnYnV0dG9uIHRhYnNfX25hdi1idG4nO1xyXG5cdFx0XHRfcGF0dGVybi5jbGFzc05hbWUgPSAncGF0dGVybic7XHJcblxyXG5cdFx0XHRfYnRuLmlubmVySFRNTCA9IGVsLmlubmVySFRNTDtcclxuXHRcdFx0X2J0bi5hcHBlbmRDaGlsZChfcGF0dGVybik7XHJcblxyXG5cdFx0XHRuYXYuYXBwZW5kQ2hpbGQoX2J0bik7XHJcblxyXG5cdFx0XHRlbC5jbGFzc0xpc3QuYWRkKCdoMicpO1xyXG5cclxuXHRcdFx0X2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChpdGVtLCBmdW5jdGlvbihlbGVtLGlueCl7XHJcblxyXG5cdFx0XHRcdFx0YnRuW2lueF0uY2xhc3NMaXN0LnRvZ2dsZSgndGFic19fbmF2LWJ0bi0tYWN0aXZlJywgaW54ID09IGluZGV4KTtcclxuXHRcdFx0XHRcdGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgndGFic19faXRlbS0tYWN0aXZlJywgaW54ID09IGluZGV4KTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRuYXYuY2xhc3NMaXN0LmFkZCgndGFic19fbmF2Jyk7XHJcblxyXG5cdFx0dGFiLmluc2VydEJlZm9yZShuYXYsIGl0ZW1bMF0pO1xyXG5cclxuXHRcdGJ0biA9IG5hdi5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19fbmF2LWJ0bicpO1xyXG5cclxuXHRcdGl0ZW1bMF0uY2xhc3NMaXN0LmFkZCgndGFic19faXRlbS0tYWN0aXZlJyk7XHJcblx0XHRidG5bMF0uY2xhc3NMaXN0LmFkZCgndGFic19fbmF2LWJ0bi0tYWN0aXZlJyk7XHJcblxyXG5cdH0pO1xyXG5cclxufTtcclxuXHJcblxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicycpLmxlbmd0aCkge1xyXG5cclxuXHRBU0tPLnRhYnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMnKSk7XHJcblxyXG59IiwiXHJcbihmdW5jdGlvbihpdGVtcyl7XHJcblxyXG5cdGlmKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGl0ZW1zLCBmdW5jdGlvbihlbCl7XHJcblxyXG5cdFx0dmFyIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuXHRcdGJ0bi5jbGFzc05hbWUgPSAnYnRuIGJ0bi0tbGluayc7XHJcblxyXG5cdFx0YnRuLnRleHRDb250ZW50ID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWJ0bicpO1xyXG5cclxuXHRcdGVsLmFwcGVuZENoaWxkKGJ0bik7XHJcblxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0LWhpZGRlbicpKTsiLCJcclxuKCB0b29sdGlwcyA9PiB7XHJcblxyXG5cdGlmKHRvb2x0aXBzLmxlbmd0aCl7XHJcblxyXG5cdFx0Y29uc3QgaWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuXHRcdGljby5pbm5lckhUTUwgPSAnPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIwIDEyYTggOCAwIDExLTE2IDAgOCA4IDAgMDExNiAwem0tNS43NC0zLjg3YTMuMTggMy4xOCAwIDAxLjU2IDMuNzhjLS4zOC43LTEgMS4yMi0xLjc0IDEuNDlhLjQuNCAwIDAwLS4yOC4zOHYuNjJhLjguOCAwIDAxLTEuNiAwVjEyLjhBLjguOCAwIDAxMTIgMTJjLjg4IDAgMS42LS43MiAxLjYtMS42YTEuNiAxLjYgMCAwMC0zLjIgMCAuOC44IDAgMDEtMS41OS4wOGwtLjAxLS4xMmMuMDEtMiAxLjg2LTMuNTUgMy45NS0zLjA3LjU3LjEzIDEuMS40MiAxLjUxLjg0ek0xMi44IDE2LjhhLjguOCAwIDExLTEuNiAwIC44LjggMCAwMTEuNiAwelwiLz48L3N2Zz4nO1xyXG5cclxuXHRcdGxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9uUmVjb3JkcyA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0ID0gbXV0YXRpb25SZWNvcmRzWzBdLnRhcmdldC5xdWVyeVNlbGVjdG9yKCdkaXYnKSxcclxuXHRcdFx0XHQgIHJlY3QgPSB0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdFx0aWYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDwgcmVjdC5yaWdodCkge1xyXG5cclxuXHRcdFx0XHQvLyDQu9C10LLQtdC1XHJcblxyXG5cdFx0XHRcdHQuc3R5bGUubWFyZ2luTGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIHJlY3QucmlnaHQgKyAncHgnO1xyXG5cclxuXHRcdFx0fSBlbHNlIGlmKHJlY3QubGVmdCA8IDApIHtcclxuXHJcblx0XHRcdFx0Ly8g0L/RgNCw0LLQtdC1XHJcblxyXG5cdFx0XHRcdHQuc3R5bGUubWFyZ2luTGVmdCA9IC1yZWN0LmxlZnQgKyAncHgnO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdEFycmF5LmZyb20odG9vbHRpcHMsIHRvb2x0aXAgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgYnRuID0gdG9vbHRpcC5xdWVyeVNlbGVjdG9yKCdzdW1tYXJ5Jyk7XHJcblxyXG5cdFx0XHRpZiAoIHRvb2x0aXAuY2xhc3NOYW1lLmxlbmd0aCA9PT0gMCApIHtcclxuXHJcblx0XHRcdFx0YnRuLmFwcGVuZENoaWxkKGljby5jbG9uZU5vZGUodHJ1ZSkpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0b2JzZXJ2ZXIub2JzZXJ2ZSh0b29sdGlwLCB7XHJcblxyXG5cdFx0XHRcdGF0dHJpYnV0ZXMgOiB0cnVlXHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdkZXRhaWxzJyk7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKHRvb2x0aXBzLCB0b29sdGlwID0+IHtcclxuXHJcblx0XHRcdFx0aWYodGFyZ2V0ICE9PSB0b29sdGlwKSB7XHJcblxyXG5cdFx0XHRcdFx0dG9vbHRpcC5vcGVuID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkZXRhaWxzJykpOyIsIlxyXG4oIHZpZGVvcyA9PiB7XHJcblxyXG5cdGlmKHZpZGVvcy5sZW5ndGgpIHtcclxuXHJcblx0XHRbLi4udmlkZW9zXS5mb3JFYWNoKCB2aWRlbyA9PiB7XHJcblxyXG5cdFx0XHR2aWRlby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoIHZpZGVvLmNsYXNzTGlzdC5jb250YWlucygnaXMtcGxheScpID09PSBmYWxzZSApIHtcclxuXHJcblx0XHRcdFx0XHR2aWRlby5jbGFzc0xpc3QuYWRkKCdpcy1wbGF5Jyk7XHJcblxyXG5cdFx0XHRcdFx0dmlkZW8ucXVlcnlTZWxlY3RvcigndmlkZW8nKS5wbGF5KCk7XHJcblx0XHRcdFx0XHR2aWRlby5xdWVyeVNlbGVjdG9yKCd2aWRlbycpLmNvbnRyb2xzID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52aWRlbycpKTsiLCIvLyDQstC40LTQtdC+INC40LrQvtC90LrQvtC5LCDQt9Cw0L/Rg9GBINCyINC/0L7Qv9Cw0L9cclxuXHJcbihmdW5jdGlvbih5b3V0dWJlKXtcclxuXHJcblx0aWYoeW91dHViZS5sZW5ndGgpIHtcclxuXHJcblx0XHRbLi4ueW91dHViZV0uZm9yRWFjaCggbGluayA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBpZCA9IGxpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblxyXG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuXHJcblx0XHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnYWxsb3dmdWxsc2NyZWVuJywgJycpO1xyXG5cdFx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FsbG93JywgJ2F1dG9wbGF5Jyk7XHJcblx0XHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyBpZCArICc/cmVsPTAmc2hvd2luZm89MCZhdXRvcGxheT0xJyk7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC12aWRlbycpLmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcblxyXG5cdFx0XHRcdEFTS08ubW9kYWxTaG93KFwidmlkZW9cIik7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnlvdXR1YmUtaWNvJykpO1xyXG5cclxuLy8g0LLQuNC00LXQviDQsiDQvtC/0LjRgdCw0L3QuNC4XHJcblxyXG4oZnVuY3Rpb24oeW91dHViZSl7XHJcblxyXG5cdGlmKHlvdXR1YmUubGVuZ3RoKSB7XHJcblxyXG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh5b3V0dWJlLCBmdW5jdGlvbih2aWRlbyl7XHJcblxyXG5cdFx0XHR2YXIgbGluayA9IHZpZGVvLnF1ZXJ5U2VsZWN0b3IoJy55b3V0dWJlX19saW5rJyksXHJcblx0XHRcdFx0aWQgPSBsaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG5cclxuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRpZih2aWRlby5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKXtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmlkZW8uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XHJcblx0XHRcdFx0dmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG5cdFx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzTGlzdCcsJ25vZG93bmxvYWQnKTtcclxuXHRcdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdkaXNhYmxlUGljdHVyZUluUGljdHVyZScsJ3RydWUnKTtcclxuXHRcdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdhbGxvd2Z1bGxzY3JlZW4nLCdhbGxvd2Z1bGxzY3JlZW4nKTtcclxuXHRcdFx0XHRpZnJhbWUuc3JjID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyBpZCArICc/YXV0b3BsYXk9MSZjb250cm9scz0wJztcclxuXHRcdFx0XHR2aWRlby5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy55b3V0dWJlJykpO1xyXG5cclxuKGZ1bmN0aW9uKHlvdXR1YmUpe1xyXG5cclxuXHRpZih5b3V0dWJlKSB7XHJcblxyXG5cdC8vIFRoaXMgY29kZSBsb2FkcyB0aGUgSUZyYW1lIFBsYXllciBBUEkgY29kZSBhc3luY2hyb25vdXNseS5cclxuLypcdFx0dmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cdFx0dGFnLnNyYyA9IFwiaHR0cDovL3d3dy55b3V0dWJlLmNvbS9wbGF5ZXJfYXBpXCI7XHJcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRhZyk7XHJcbiovXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cdFx0XHR2YXIgeW91dHViZSA9IG51bGw7XHJcblxyXG5cdFx0Ly8g0YHQu9GD0YjQsNC10Lwg0LLQuNC00LXQviDQsiDRgdC70LDQudC00LXRgNC1INCw0LTQsNC/0YLQuNCyXHJcblx0XHRcdGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XHJcblxyXG5cdFx0XHRcdHlvdXR1YmUgPSBlLnRhcmdldC5jbG9zZXN0KCcucHJvZHVjdF9faW1nLXlvdXR1YmUnKTtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0Ly8g0LXRgdC70Lgg0LLQuNC00LXQviDQsiDQvNC+0LTQsNC70LrQtVxyXG5cdFx0XHRcdHlvdXR1YmUgPSBlLnRhcmdldC5jbG9zZXN0KCcueW91dHViZS1tb2RhbC1nYWxsZXJ5Jyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0Ly8g0YHQvtC30LTQsNC10Lwg0Lgg0LLRgdGC0LDQstC70Y/QtdC8INCy0LjQtNC10L5cclxuXHRcdFx0aWYoeW91dHViZSAmJiAheW91dHViZS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKXtcclxuXHJcblx0XHRcdFx0eW91dHViZS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0dmFyIGlkID0geW91dHViZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuXHJcblx0XHRcdFx0dmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG5cdFx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywncGxheWVyLScgKyBpZCk7XHJcblx0XHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnY29udHJvbHNMaXN0Jywnbm9kb3dubG9hZCcpO1xyXG5cdFx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVQaWN0dXJlSW5QaWN0dXJlJywndHJ1ZScpO1xyXG5cdFx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FsbG93ZnVsbHNjcmVlbicsJ2FsbG93ZnVsbHNjcmVlbicpO1xyXG5cdFx0XHRcdGlmcmFtZS5zcmMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIGlkICsgJz9hdXRvcGxheT0xJmNvbnRyb2xzPTAnO1xyXG5cdFx0XHRcdHlvdXR1YmUuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RfX2ltZy15b3V0dWJlJykpOyJdfQ==
