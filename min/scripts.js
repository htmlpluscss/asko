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

	Array.prototype.forEach.call(forms, function(btn){

		var form = btn.closest('form');

		form.addEventListener('submit',function(e){

			e.preventDefault();

			var buy = !form.classList.contains('in-cart');

			btn.disabled = true;

			// send form

			var formData = new FormData(form),
				xhr = new XMLHttpRequest();

			xhr.open("POST", form.getAttribute('action') + 'ajax/');

			xhr.onreadystatechange = function() {

				if (xhr.readyState != 4){

					return;

				}

				btn.disabled = false;
				btn.classList.toggle('btn--gray', buy);
				btn.textContent = btn.getAttribute('data-' + ( buy ? 'delete' : 'buy' ) );
				form.querySelector('input[name="mode"]').value = ( buy ? 'del' : 'add' );

				if(buy) {

					document.querySelector('.modal-product-in-cart').textContent = form.querySelector('input[name="product-name"]').value;

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
(function(form){

	if(!form) {

		return;

	}

	var inputRange = form.querySelectorAll('.filter__range');

	if(inputRange.length) {

		Array.prototype.forEach.call(inputRange, function(el){

			var from = el.querySelector('.filter__range-from'),
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

			var promise = new Promise(function(resolve, reject) {

				window.addEventListener("loadNoUiSlider", resolve);

			});

			promise.then(onFulfilled);

		});

	}

	form.addEventListener('reset', function() {

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

	var loadNoUiSlider = false;

	var script = document.createElement('script');

	script.type = 'text/javascript';
	script.async = true;
	script.src = '/js/nouislider.min.js';

	script.onload = function () {

		var event = new Event('loadNoUiSlider');
		window.dispatchEvent(event);

	};

	setTimeout(function(){

		if(!loadNoUiSlider){

			document.head.appendChild(script);
			loadNoUiSlider = true;

		}

	}, 8000);

	document.querySelector('.filter__btn-toggle .btn').addEventListener('click', function () {

		if(!loadNoUiSlider){

			document.head.appendChild(script);
			loadNoUiSlider = true;

		}

		form.classList.toggle('is-open');

	});

})(document.querySelector('.filter'));
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

		var target = e.target;

		while (target !== this) {

			if (target.hasAttribute('data-modal')) {

				ASKO.modalShow(target.getAttribute('data-modal'));

			}

			target = target.parentNode;

		}

	});

})();

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

			el.classList.add('hide');

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50VXAubWluLmpzIiwianMuY29va2llLm1pbi5qcyIsInBvbHlmaWxsLmpzIiwic21vb3Roc2Nyb2xsLm1pbi5qcyIsImpzLmpzIiwiYnV5LmpzIiwiY29va2llLmpzIiwiZmlsdGVyLmpzIiwiZm9ybS1teS1saXN0LmpzIiwiZm9ybS5qcyIsImdhbGxlcnkuanMiLCJnb2Fscy5qcyIsImhlYWRlckNhcnQuanMiLCJtZW51LmpzIiwibW9kYWwuanMiLCJzZWFyY2guanMiLCJzaG93LXJvb20uanMiLCJzd2lwZXIuanMiLCJ0YWJzLmpzIiwidGV4dC1oaWRkZW4uanMiLCJ0b29sdGlwLmpzIiwieW91dHViZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEZBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDek1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24oYSxuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKG4pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPW4ocmVxdWlyZSxleHBvcnRzLG1vZHVsZSk6YS5Db3VudFVwPW4oKX0odGhpcyxmdW5jdGlvbihhLG4sdCl7cmV0dXJuIGZ1bmN0aW9uKGEsbix0LGUsaSxyKXt2YXIgdT10aGlzO2lmKHUudmVyc2lvbj1mdW5jdGlvbigpe3JldHVyblwiMS45LjNcIn0sdS5vcHRpb25zPXt1c2VFYXNpbmc6ITAsdXNlR3JvdXBpbmc6ITAsc2VwYXJhdG9yOlwiLFwiLGRlY2ltYWw6XCIuXCIsZWFzaW5nRm46ZnVuY3Rpb24oYSxuLHQsZSl7cmV0dXJuIHQqKDEtTWF0aC5wb3coMiwtMTAqYS9lKSkqMTAyNC8xMDIzK259LGZvcm1hdHRpbmdGbjpmdW5jdGlvbihhKXt2YXIgbix0LGUsaSxyLG8scz1hPDA7aWYoYT1NYXRoLmFicyhhKS50b0ZpeGVkKHUuZGVjaW1hbHMpLG49KGErPVwiXCIpLnNwbGl0KFwiLlwiKSx0PW5bMF0sZT0xPG4ubGVuZ3RoP3Uub3B0aW9ucy5kZWNpbWFsK25bMV06XCJcIix1Lm9wdGlvbnMudXNlR3JvdXBpbmcpe2ZvcihpPVwiXCIscj0wLG89dC5sZW5ndGg7cjxvOysrcikwIT09ciYmciUzPT0wJiYoaT11Lm9wdGlvbnMuc2VwYXJhdG9yK2kpLGk9dFtvLXItMV0raTt0PWl9cmV0dXJuIHUub3B0aW9ucy5udW1lcmFscy5sZW5ndGgmJih0PXQucmVwbGFjZSgvWzAtOV0vZyxmdW5jdGlvbihhKXtyZXR1cm4gdS5vcHRpb25zLm51bWVyYWxzWythXX0pLGU9ZS5yZXBsYWNlKC9bMC05XS9nLGZ1bmN0aW9uKGEpe3JldHVybiB1Lm9wdGlvbnMubnVtZXJhbHNbK2FdfSkpLChzP1wiLVwiOlwiXCIpK3Uub3B0aW9ucy5wcmVmaXgrdCtlK3Uub3B0aW9ucy5zdWZmaXh9LHByZWZpeDpcIlwiLHN1ZmZpeDpcIlwiLG51bWVyYWxzOltdfSxyJiZcIm9iamVjdFwiPT10eXBlb2Ygcilmb3IodmFyIG8gaW4gdS5vcHRpb25zKXIuaGFzT3duUHJvcGVydHkobykmJm51bGwhPT1yW29dJiYodS5vcHRpb25zW29dPXJbb10pO1wiXCI9PT11Lm9wdGlvbnMuc2VwYXJhdG9yP3Uub3B0aW9ucy51c2VHcm91cGluZz0hMTp1Lm9wdGlvbnMuc2VwYXJhdG9yPVwiXCIrdS5vcHRpb25zLnNlcGFyYXRvcjtmb3IodmFyIHM9MCxsPVtcIndlYmtpdFwiLFwibW96XCIsXCJtc1wiLFwib1wiXSxtPTA7bTxsLmxlbmd0aCYmIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7KyttKXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9d2luZG93W2xbbV0rXCJSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl0sd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lPXdpbmRvd1tsW21dK1wiQ2FuY2VsQW5pbWF0aW9uRnJhbWVcIl18fHdpbmRvd1tsW21dK1wiQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO2Z1bmN0aW9uIGQoYSl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIGEmJiFpc05hTihhKX13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT1mdW5jdGlvbihhLG4pe3ZhciB0PShuZXcgRGF0ZSkuZ2V0VGltZSgpLGU9TWF0aC5tYXgoMCwxNi0odC1zKSksaT13aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe2EodCtlKX0sZSk7cmV0dXJuIHM9dCtlLGl9KSx3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fCh3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oYSl7Y2xlYXJUaW1lb3V0KGEpfSksdS5pbml0aWFsaXplPWZ1bmN0aW9uKCl7cmV0dXJuISF1LmluaXRpYWxpemVkfHwodS5lcnJvcj1cIlwiLHUuZD1cInN0cmluZ1wiPT10eXBlb2YgYT9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChhKTphLHUuZD8odS5zdGFydFZhbD1OdW1iZXIobiksdS5lbmRWYWw9TnVtYmVyKHQpLGQodS5zdGFydFZhbCkmJmQodS5lbmRWYWwpPyh1LmRlY2ltYWxzPU1hdGgubWF4KDAsZXx8MCksdS5kZWM9TWF0aC5wb3coMTAsdS5kZWNpbWFscyksdS5kdXJhdGlvbj0xZTMqTnVtYmVyKGkpfHwyZTMsdS5jb3VudERvd249dS5zdGFydFZhbD51LmVuZFZhbCx1LmZyYW1lVmFsPXUuc3RhcnRWYWwsdS5pbml0aWFsaXplZD0hMCk6KHUuZXJyb3I9XCJbQ291bnRVcF0gc3RhcnRWYWwgKFwiK24rXCIpIG9yIGVuZFZhbCAoXCIrdCtcIikgaXMgbm90IGEgbnVtYmVyXCIsITEpKTohKHUuZXJyb3I9XCJbQ291bnRVcF0gdGFyZ2V0IGlzIG51bGwgb3IgdW5kZWZpbmVkXCIpKX0sdS5wcmludFZhbHVlPWZ1bmN0aW9uKGEpe3ZhciBuPXUub3B0aW9ucy5mb3JtYXR0aW5nRm4oYSk7XCJJTlBVVFwiPT09dS5kLnRhZ05hbWU/dGhpcy5kLnZhbHVlPW46XCJ0ZXh0XCI9PT11LmQudGFnTmFtZXx8XCJ0c3BhblwiPT09dS5kLnRhZ05hbWU/dGhpcy5kLnRleHRDb250ZW50PW46dGhpcy5kLmlubmVySFRNTD1ufSx1LmNvdW50PWZ1bmN0aW9uKGEpe3Uuc3RhcnRUaW1lfHwodS5zdGFydFRpbWU9YSk7dmFyIG49KHUudGltZXN0YW1wPWEpLXUuc3RhcnRUaW1lO3UucmVtYWluaW5nPXUuZHVyYXRpb24tbix1Lm9wdGlvbnMudXNlRWFzaW5nP3UuY291bnREb3duP3UuZnJhbWVWYWw9dS5zdGFydFZhbC11Lm9wdGlvbnMuZWFzaW5nRm4obiwwLHUuc3RhcnRWYWwtdS5lbmRWYWwsdS5kdXJhdGlvbik6dS5mcmFtZVZhbD11Lm9wdGlvbnMuZWFzaW5nRm4obix1LnN0YXJ0VmFsLHUuZW5kVmFsLXUuc3RhcnRWYWwsdS5kdXJhdGlvbik6dS5jb3VudERvd24/dS5mcmFtZVZhbD11LnN0YXJ0VmFsLSh1LnN0YXJ0VmFsLXUuZW5kVmFsKSoobi91LmR1cmF0aW9uKTp1LmZyYW1lVmFsPXUuc3RhcnRWYWwrKHUuZW5kVmFsLXUuc3RhcnRWYWwpKihuL3UuZHVyYXRpb24pLHUuY291bnREb3duP3UuZnJhbWVWYWw9dS5mcmFtZVZhbDx1LmVuZFZhbD91LmVuZFZhbDp1LmZyYW1lVmFsOnUuZnJhbWVWYWw9dS5mcmFtZVZhbD51LmVuZFZhbD91LmVuZFZhbDp1LmZyYW1lVmFsLHUuZnJhbWVWYWw9TWF0aC5yb3VuZCh1LmZyYW1lVmFsKnUuZGVjKS91LmRlYyx1LnByaW50VmFsdWUodS5mcmFtZVZhbCksbjx1LmR1cmF0aW9uP3UuckFGPXJlcXVlc3RBbmltYXRpb25GcmFtZSh1LmNvdW50KTp1LmNhbGxiYWNrJiZ1LmNhbGxiYWNrKCl9LHUuc3RhcnQ9ZnVuY3Rpb24oYSl7dS5pbml0aWFsaXplKCkmJih1LmNhbGxiYWNrPWEsdS5yQUY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUuY291bnQpKX0sdS5wYXVzZVJlc3VtZT1mdW5jdGlvbigpe3UucGF1c2VkPyh1LnBhdXNlZD0hMSxkZWxldGUgdS5zdGFydFRpbWUsdS5kdXJhdGlvbj11LnJlbWFpbmluZyx1LnN0YXJ0VmFsPXUuZnJhbWVWYWwscmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUuY291bnQpKToodS5wYXVzZWQ9ITAsY2FuY2VsQW5pbWF0aW9uRnJhbWUodS5yQUYpKX0sdS5yZXNldD1mdW5jdGlvbigpe3UucGF1c2VkPSExLGRlbGV0ZSB1LnN0YXJ0VGltZSx1LmluaXRpYWxpemVkPSExLHUuaW5pdGlhbGl6ZSgpJiYoY2FuY2VsQW5pbWF0aW9uRnJhbWUodS5yQUYpLHUucHJpbnRWYWx1ZSh1LnN0YXJ0VmFsKSl9LHUudXBkYXRlPWZ1bmN0aW9uKGEpe3UuaW5pdGlhbGl6ZSgpJiYoZChhPU51bWJlcihhKSk/KHUuZXJyb3I9XCJcIixhIT09dS5mcmFtZVZhbCYmKGNhbmNlbEFuaW1hdGlvbkZyYW1lKHUuckFGKSx1LnBhdXNlZD0hMSxkZWxldGUgdS5zdGFydFRpbWUsdS5zdGFydFZhbD11LmZyYW1lVmFsLHUuZW5kVmFsPWEsdS5jb3VudERvd249dS5zdGFydFZhbD51LmVuZFZhbCx1LnJBRj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodS5jb3VudCkpKTp1LmVycm9yPVwiW0NvdW50VXBdIHVwZGF0ZSgpIC0gbmV3IGVuZFZhbCBpcyBub3QgYSBudW1iZXI6IFwiK2EpfSx1LmluaXRpYWxpemUoKSYmdS5wcmludFZhbHVlKHUuc3RhcnRWYWwpfX0pOyIsIi8qIVxyXG4gKiBKYXZhU2NyaXB0IENvb2tpZSB2Mi4yLjBcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2pzLWNvb2tpZS9qcy1jb29raWVcclxuICpcclxuICogQ29weXJpZ2h0IDIwMDYsIDIwMTUgS2xhdXMgSGFydGwgJiBGYWduZXIgQnJhY2tcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXHJcbiAqL1xyXG4hZnVuY3Rpb24oZSl7dmFyIG49ITE7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiYoZGVmaW5lKGUpLG49ITApLFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiYobW9kdWxlLmV4cG9ydHM9ZSgpLG49ITApLCFuKXt2YXIgbz13aW5kb3cuQ29va2llcyx0PXdpbmRvdy5Db29raWVzPWUoKTt0Lm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LkNvb2tpZXM9byx0fX19KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe2Zvcih2YXIgZT0wLG49e307ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG89YXJndW1lbnRzW2VdO2Zvcih2YXIgdCBpbiBvKW5bdF09b1t0XX1yZXR1cm4gbn1yZXR1cm4gZnVuY3Rpb24gbihvKXtmdW5jdGlvbiB0KG4scixpKXt2YXIgYztpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQpe2lmKGFyZ3VtZW50cy5sZW5ndGg+MSl7aWYoXCJudW1iZXJcIj09dHlwZW9mKGk9ZSh7cGF0aDpcIi9cIn0sdC5kZWZhdWx0cyxpKSkuZXhwaXJlcyl7dmFyIGE9bmV3IERhdGU7YS5zZXRNaWxsaXNlY29uZHMoYS5nZXRNaWxsaXNlY29uZHMoKSs4NjRlNSppLmV4cGlyZXMpLGkuZXhwaXJlcz1hfWkuZXhwaXJlcz1pLmV4cGlyZXM/aS5leHBpcmVzLnRvVVRDU3RyaW5nKCk6XCJcIjt0cnl7Yz1KU09OLnN0cmluZ2lmeShyKSwvXltcXHtcXFtdLy50ZXN0KGMpJiYocj1jKX1jYXRjaChlKXt9cj1vLndyaXRlP28ud3JpdGUocixuKTplbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHIpKS5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLGRlY29kZVVSSUNvbXBvbmVudCksbj0obj0obj1lbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKG4pKSkucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnw1RXw2MHw3QykvZyxkZWNvZGVVUklDb21wb25lbnQpKS5yZXBsYWNlKC9bXFwoXFwpXS9nLGVzY2FwZSk7dmFyIHM9XCJcIjtmb3IodmFyIGYgaW4gaSlpW2ZdJiYocys9XCI7IFwiK2YsITAhPT1pW2ZdJiYocys9XCI9XCIraVtmXSkpO3JldHVybiBkb2N1bWVudC5jb29raWU9bitcIj1cIityK3N9bnx8KGM9e30pO2Zvcih2YXIgcD1kb2N1bWVudC5jb29raWU/ZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik6W10sZD0vKCVbMC05QS1aXXsyfSkrL2csdT0wO3U8cC5sZW5ndGg7dSsrKXt2YXIgbD1wW3VdLnNwbGl0KFwiPVwiKSxDPWwuc2xpY2UoMSkuam9pbihcIj1cIik7dGhpcy5qc29ufHwnXCInIT09Qy5jaGFyQXQoMCl8fChDPUMuc2xpY2UoMSwtMSkpO3RyeXt2YXIgZz1sWzBdLnJlcGxhY2UoZCxkZWNvZGVVUklDb21wb25lbnQpO2lmKEM9by5yZWFkP28ucmVhZChDLGcpOm8oQyxnKXx8Qy5yZXBsYWNlKGQsZGVjb2RlVVJJQ29tcG9uZW50KSx0aGlzLmpzb24pdHJ5e0M9SlNPTi5wYXJzZShDKX1jYXRjaChlKXt9aWYobj09PWcpe2M9QzticmVha31ufHwoY1tnXT1DKX1jYXRjaChlKXt9fXJldHVybiBjfX1yZXR1cm4gdC5zZXQ9dCx0LmdldD1mdW5jdGlvbihlKXtyZXR1cm4gdC5jYWxsKHQsZSl9LHQuZ2V0SlNPTj1mdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KHtqc29uOiEwfSxbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpfSx0LmRlZmF1bHRzPXt9LHQucmVtb3ZlPWZ1bmN0aW9uKG4sbyl7dChuLFwiXCIsZShvLHtleHBpcmVzOi0xfSkpfSx0LndpdGhDb252ZXJ0ZXI9bix0fShmdW5jdGlvbigpe30pfSk7IiwiLyogUG9seWZpbGwgc2VydmljZSB2My4xNi4wXHJcbiAqIEZvciBkZXRhaWxlZCBjcmVkaXRzIGFuZCBsaWNlbmNlIGluZm9ybWF0aW9uIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmluYW5jaWFsLXRpbWVzL3BvbHlmaWxsLXNlcnZpY2UuXHJcbiAqXHJcbiAqIFVBIGRldGVjdGVkOiBpZS8xMS4wLjBcclxuICogRmVhdHVyZXMgcmVxdWVzdGVkOiBkZWZhdWx0XHJcbiAqXHJcbiAqIC0gQXJyYXkuZnJvbSwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBBcnJheS5vZiwgTGljZW5zZTogTUlUIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBBcnJheS5wcm90b3R5cGUuZmlsbCwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBFdmVudCwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIiwgXCJDdXN0b21FdmVudFwiLCBcIlByb21pc2VcIilcclxuICogLSBDdXN0b21FdmVudCwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBfRE9NVG9rZW5MaXN0LCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiRE9NVG9rZW5MaXN0XCIsIFwiZGVmYXVsdFwiKVxyXG4gKiAtIERPTVRva2VuTGlzdCwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBfbXV0YXRpb24sIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJFbGVtZW50LnByb3RvdHlwZS5hZnRlclwiLCBcImRlZmF1bHRcIiwgXCJFbGVtZW50LnByb3RvdHlwZS5hcHBlbmRcIiwgXCJFbGVtZW50LnByb3RvdHlwZS5iZWZvcmVcIiwgXCJFbGVtZW50LnByb3RvdHlwZS5wcmVwZW5kXCIsIFwiRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlXCIsIFwiRWxlbWVudC5wcm90b3R5cGUucmVwbGFjZVdpdGhcIilcclxuICogLSBFbGVtZW50LnByb3RvdHlwZS5hZnRlciwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBFbGVtZW50LnByb3RvdHlwZS5hcHBlbmQsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gRWxlbWVudC5wcm90b3R5cGUuYmVmb3JlLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIsIFwiRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdFwiKVxyXG4gKiAtIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gRWxlbWVudC5wcm90b3R5cGUucHJlcGVuZCwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gRWxlbWVudC5wcm90b3R5cGUucmVwbGFjZVdpdGgsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gU3ltYm9sLCBMaWNlbnNlOiBNSVQgKHJlcXVpcmVkIGJ5IFwiTWFwXCIsIFwiZGVmYXVsdFwiLCBcIlNldFwiLCBcIlN5bWJvbC5pdGVyYXRvclwiLCBcIlN5bWJvbC5zcGVjaWVzXCIpXHJcbiAqIC0gU3ltYm9sLml0ZXJhdG9yLCBMaWNlbnNlOiBNSVQgKHJlcXVpcmVkIGJ5IFwiTWFwXCIsIFwiZGVmYXVsdFwiLCBcIlNldFwiKVxyXG4gKiAtIFN5bWJvbC5zcGVjaWVzLCBMaWNlbnNlOiBNSVQgKHJlcXVpcmVkIGJ5IFwiTWFwXCIsIFwiZGVmYXVsdFwiLCBcIlNldFwiKVxyXG4gKiAtIE51bWJlci5pc05hTiwgTGljZW5zZTogTUlUIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIiwgXCJNYXBcIiwgXCJTZXRcIilcclxuICogLSBNYXAsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gTm9kZS5wcm90b3R5cGUuY29udGFpbnMsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gT2JqZWN0LmFzc2lnbiwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBQcm9taXNlLCBMaWNlbnNlOiBNSVQgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIFNldCwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIFVSTCwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIikgKi9cclxuXHJcblxyXG5cclxuLy8gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc1xyXG5FbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGZ1bmN0aW9uIG1hdGNoZXMoc2VsZWN0b3IpIHtcclxuXHJcblx0dmFyIGVsZW1lbnQgPSB0aGlzO1xyXG5cdHZhciBlbGVtZW50cyA9IChlbGVtZW50LmRvY3VtZW50IHx8IGVsZW1lbnQub3duZXJEb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblx0dmFyIGluZGV4ID0gMDtcclxuXHJcblx0d2hpbGUgKGVsZW1lbnRzW2luZGV4XSAmJiBlbGVtZW50c1tpbmRleF0gIT09IGVsZW1lbnQpIHtcclxuXHRcdCsraW5kZXg7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gISFlbGVtZW50c1tpbmRleF07XHJcbn07XHJcblxyXG4vLyBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0XHJcbkVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbiBjbG9zZXN0KHNlbGVjdG9yKSB7XHJcblx0dmFyIG5vZGUgPSB0aGlzO1xyXG5cclxuXHR3aGlsZSAobm9kZSkge1xyXG5cdFx0aWYgKG5vZGUubWF0Y2hlcyhzZWxlY3RvcikpIHJldHVybiBub2RlO1xyXG5cdFx0ZWxzZSBub2RlID0gbm9kZS5wYXJlbnRFbGVtZW50O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5cclxuXHJcbi8qISBAc291cmNlIGh0dHA6Ly9wdXJsLmVsaWdyZXkuY29tL2dpdGh1Yi9jbGFzc0xpc3QuanMvYmxvYi9tYXN0ZXIvY2xhc3NMaXN0LmpzICovXHJcblwiZG9jdW1lbnRcImluIHNlbGYmJihcImNsYXNzTGlzdFwiaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIl9cIikmJighZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TfHxcImNsYXNzTGlzdFwiaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcImdcIikpfHxmdW5jdGlvbihhKXtpZihcIkVsZW1lbnRcImluIGEpe2E9YS5FbGVtZW50LnByb3RvdHlwZTt2YXIgaD1PYmplY3QsbD1TdHJpbmcucHJvdG90eXBlLnRyaW18fGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucmVwbGFjZSgvXlxccyt8XFxzKyQvZyxcIlwiKX0sbj1BcnJheS5wcm90b3R5cGUuaW5kZXhPZnx8ZnVuY3Rpb24oYyl7Zm9yKHZhciBiPTAsaz10aGlzLmxlbmd0aDtiPGs7YisrKWlmKGIgaW4gdGhpcyYmdGhpc1tiXT09PWMpcmV0dXJuIGI7cmV0dXJuLTF9LGY9ZnVuY3Rpb24oYyxiKXt0aGlzLm5hbWU9Yzt0aGlzLmNvZGU9RE9NRXhjZXB0aW9uW2NdO3RoaXMubWVzc2FnZT1ifSxlPWZ1bmN0aW9uKGMsXHJcbmIpe2lmKFwiXCI9PT1iKXRocm93IG5ldyBmKFwiU1lOVEFYX0VSUlwiLFwiVGhlIHRva2VuIG11c3Qgbm90IGJlIGVtcHR5LlwiKTtpZigvXFxzLy50ZXN0KGIpKXRocm93IG5ldyBmKFwiSU5WQUxJRF9DSEFSQUNURVJfRVJSXCIsXCJUaGUgdG9rZW4gbXVzdCBub3QgY29udGFpbiBzcGFjZSBjaGFyYWN0ZXJzLlwiKTtyZXR1cm4gbi5jYWxsKGMsYil9LGc9ZnVuY3Rpb24oYyl7dmFyIGI9bC5jYWxsKGMuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpO2I9Yj9iLnNwbGl0KC9cXHMrLyk6W107Zm9yKHZhciBrPTAsZT1iLmxlbmd0aDtrPGU7aysrKXRoaXMucHVzaChiW2tdKTt0aGlzLl91cGRhdGVDbGFzc05hbWU9ZnVuY3Rpb24oKXtjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsdGhpcy50b1N0cmluZygpKX19LGQ9Zy5wcm90b3R5cGU9W10sbT1mdW5jdGlvbigpe3JldHVybiBuZXcgZyh0aGlzKX07Zi5wcm90b3R5cGU9RXJyb3IucHJvdG90eXBlO2QuaXRlbT1mdW5jdGlvbihjKXtyZXR1cm4gdGhpc1tjXXx8XHJcbm51bGx9O2QuY29udGFpbnM9ZnVuY3Rpb24oYyl7cmV0dXJuIX5lKHRoaXMsYytcIlwiKX07ZC5hZGQ9ZnVuY3Rpb24oKXt2YXIgYz1hcmd1bWVudHMsYj0wLGs9Yy5sZW5ndGgsZD0hMTtkb3t2YXIgYT1jW2JdK1wiXCI7fmUodGhpcyxhKSYmKHRoaXMucHVzaChhKSxkPSEwKX13aGlsZSgrK2I8ayk7ZCYmdGhpcy5fdXBkYXRlQ2xhc3NOYW1lKCl9O2QucmVtb3ZlPWZ1bmN0aW9uKCl7dmFyIGM9YXJndW1lbnRzLGI9MCxkPWMubGVuZ3RoLGE9ITEsZjtkb3t2YXIgZz1jW2JdK1wiXCI7Zm9yKGY9ZSh0aGlzLGcpO35mOyl0aGlzLnNwbGljZShmLDEpLGE9ITAsZj1lKHRoaXMsZyl9d2hpbGUoKytiPGQpO2EmJnRoaXMuX3VwZGF0ZUNsYXNzTmFtZSgpfTtkLnRvZ2dsZT1mdW5jdGlvbihjLGIpe3ZhciBhPXRoaXMuY29udGFpbnMoYyksZD1hPyEwIT09YiYmXCJyZW1vdmVcIjohMSE9PWImJlwiYWRkXCI7aWYoZCl0aGlzW2RdKGMpO3JldHVybiEwPT09Ynx8ITE9PT1iP2I6IWF9O2QucmVwbGFjZT1mdW5jdGlvbihjLFxyXG5iKXt2YXIgYT1lKGMrXCJcIik7fmEmJih0aGlzLnNwbGljZShhLDEsYiksdGhpcy5fdXBkYXRlQ2xhc3NOYW1lKCkpfTtkLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuam9pbihcIiBcIil9O2lmKGguZGVmaW5lUHJvcGVydHkpe2Q9e2dldDptLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfTt0cnl7aC5kZWZpbmVQcm9wZXJ0eShhLFwiY2xhc3NMaXN0XCIsZCl9Y2F0Y2goYyl7aWYodm9pZCAwPT09Yy5udW1iZXJ8fC0yMTQ2ODIzMjUyPT09Yy5udW1iZXIpZC5lbnVtZXJhYmxlPSExLGguZGVmaW5lUHJvcGVydHkoYSxcImNsYXNzTGlzdFwiLGQpfX1lbHNlIGgucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX18mJmEuX19kZWZpbmVHZXR0ZXJfXyhcImNsYXNzTGlzdFwiLG0pfX0oc2VsZiksZnVuY3Rpb24oKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKTthLmNsYXNzTGlzdC5hZGQoXCJjMVwiLFwiYzJcIik7aWYoIWEuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYzJcIikpe3ZhciBoPVxyXG5mdW5jdGlvbihhKXt2YXIgZj1ET01Ub2tlbkxpc3QucHJvdG90eXBlW2FdO0RPTVRva2VuTGlzdC5wcm90b3R5cGVbYV09ZnVuY3Rpb24oYSl7dmFyIGUsZD1hcmd1bWVudHMubGVuZ3RoO2ZvcihlPTA7ZTxkO2UrKylhPWFyZ3VtZW50c1tlXSxmLmNhbGwodGhpcyxhKX19O2goXCJhZGRcIik7aChcInJlbW92ZVwiKX1hLmNsYXNzTGlzdC50b2dnbGUoXCJjM1wiLCExKTtpZihhLmNsYXNzTGlzdC5jb250YWlucyhcImMzXCIpKXt2YXIgbD1ET01Ub2tlbkxpc3QucHJvdG90eXBlLnRvZ2dsZTtET01Ub2tlbkxpc3QucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbihhLGYpe3JldHVybiAxIGluIGFyZ3VtZW50cyYmIXRoaXMuY29udGFpbnMoYSk9PT0hZj9mOmwuY2FsbCh0aGlzLGEpfX1cInJlcGxhY2VcImluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJfXCIpLmNsYXNzTGlzdHx8KERPTVRva2VuTGlzdC5wcm90b3R5cGUucmVwbGFjZT1mdW5jdGlvbihhLGYpe3ZhciBlPXRoaXMudG9TdHJpbmcoKS5zcGxpdChcIiBcIiksXHJcbmc9ZS5pbmRleE9mKGErXCJcIik7fmcmJihlPWUuc2xpY2UoZyksdGhpcy5yZW1vdmUuYXBwbHkodGhpcyxlKSx0aGlzLmFkZChmKSx0aGlzLmFkZC5hcHBseSh0aGlzLGUuc2xpY2UoMSkpKX0pO2E9bnVsbH0oKSk7XHJcblxyXG5cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGlmICggdHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gXCJmdW5jdGlvblwiICkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICBmdW5jdGlvbiBDdXN0b21FdmVudCAoIGV2ZW50LCBwYXJhbXMgKSB7XHJcbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwgeyBidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogbnVsbCB9O1xyXG4gICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCAnQ3VzdG9tRXZlbnQnICk7XHJcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KCBldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsICk7XHJcbiAgICByZXR1cm4gZXZ0O1xyXG4gICB9XHJcblxyXG4gIHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50O1xyXG59KSgpOyIsIlwidXNlIHN0cmljdFwiO2Z1bmN0aW9uIHBvbHlmaWxsKCl7dmFyIG89d2luZG93LHQ9ZG9jdW1lbnQ7aWYoIShcInNjcm9sbEJlaGF2aW9yXCJpbiB0LmRvY3VtZW50RWxlbWVudC5zdHlsZSYmITAhPT1vLl9fZm9yY2VTbW9vdGhTY3JvbGxQb2x5ZmlsbF9fKSl7dmFyIGwsZT1vLkhUTUxFbGVtZW50fHxvLkVsZW1lbnQscj00NjgsaT17c2Nyb2xsOm8uc2Nyb2xsfHxvLnNjcm9sbFRvLHNjcm9sbEJ5Om8uc2Nyb2xsQnksZWxlbWVudFNjcm9sbDplLnByb3RvdHlwZS5zY3JvbGx8fG4sc2Nyb2xsSW50b1ZpZXc6ZS5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXd9LHM9by5wZXJmb3JtYW5jZSYmby5wZXJmb3JtYW5jZS5ub3c/by5wZXJmb3JtYW5jZS5ub3cuYmluZChvLnBlcmZvcm1hbmNlKTpEYXRlLm5vdyxjPShsPW8ubmF2aWdhdG9yLnVzZXJBZ2VudCxuZXcgUmVnRXhwKFtcIk1TSUUgXCIsXCJUcmlkZW50L1wiLFwiRWRnZS9cIl0uam9pbihcInxcIikpLnRlc3QobCk/MTowKTtvLnNjcm9sbD1vLnNjcm9sbFRvPWZ1bmN0aW9uKCl7dm9pZCAwIT09YXJndW1lbnRzWzBdJiYoITAhPT1mKGFyZ3VtZW50c1swXSk/di5jYWxsKG8sdC5ib2R5LHZvaWQgMCE9PWFyZ3VtZW50c1swXS5sZWZ0P35+YXJndW1lbnRzWzBdLmxlZnQ6by5zY3JvbGxYfHxvLnBhZ2VYT2Zmc2V0LHZvaWQgMCE9PWFyZ3VtZW50c1swXS50b3A/fn5hcmd1bWVudHNbMF0udG9wOm8uc2Nyb2xsWXx8by5wYWdlWU9mZnNldCk6aS5zY3JvbGwuY2FsbChvLHZvaWQgMCE9PWFyZ3VtZW50c1swXS5sZWZ0P2FyZ3VtZW50c1swXS5sZWZ0Olwib2JqZWN0XCIhPXR5cGVvZiBhcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOm8uc2Nyb2xsWHx8by5wYWdlWE9mZnNldCx2b2lkIDAhPT1hcmd1bWVudHNbMF0udG9wP2FyZ3VtZW50c1swXS50b3A6dm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpvLnNjcm9sbFl8fG8ucGFnZVlPZmZzZXQpKX0sby5zY3JvbGxCeT1mdW5jdGlvbigpe3ZvaWQgMCE9PWFyZ3VtZW50c1swXSYmKGYoYXJndW1lbnRzWzBdKT9pLnNjcm9sbEJ5LmNhbGwobyx2b2lkIDAhPT1hcmd1bWVudHNbMF0ubGVmdD9hcmd1bWVudHNbMF0ubGVmdDpcIm9iamVjdFwiIT10eXBlb2YgYXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTowLHZvaWQgMCE9PWFyZ3VtZW50c1swXS50b3A/YXJndW1lbnRzWzBdLnRvcDp2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOjApOnYuY2FsbChvLHQuYm9keSx+fmFyZ3VtZW50c1swXS5sZWZ0KyhvLnNjcm9sbFh8fG8ucGFnZVhPZmZzZXQpLH5+YXJndW1lbnRzWzBdLnRvcCsoby5zY3JvbGxZfHxvLnBhZ2VZT2Zmc2V0KSkpfSxlLnByb3RvdHlwZS5zY3JvbGw9ZS5wcm90b3R5cGUuc2Nyb2xsVG89ZnVuY3Rpb24oKXtpZih2b2lkIDAhPT1hcmd1bWVudHNbMF0paWYoITAhPT1mKGFyZ3VtZW50c1swXSkpe3ZhciBvPWFyZ3VtZW50c1swXS5sZWZ0LHQ9YXJndW1lbnRzWzBdLnRvcDt2LmNhbGwodGhpcyx0aGlzLHZvaWQgMD09PW8/dGhpcy5zY3JvbGxMZWZ0On5+byx2b2lkIDA9PT10P3RoaXMuc2Nyb2xsVG9wOn5+dCl9ZWxzZXtpZihcIm51bWJlclwiPT10eXBlb2YgYXJndW1lbnRzWzBdJiZ2b2lkIDA9PT1hcmd1bWVudHNbMV0pdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVmFsdWUgY291bGQgbm90IGJlIGNvbnZlcnRlZFwiKTtpLmVsZW1lbnRTY3JvbGwuY2FsbCh0aGlzLHZvaWQgMCE9PWFyZ3VtZW50c1swXS5sZWZ0P35+YXJndW1lbnRzWzBdLmxlZnQ6XCJvYmplY3RcIiE9dHlwZW9mIGFyZ3VtZW50c1swXT9+fmFyZ3VtZW50c1swXTp0aGlzLnNjcm9sbExlZnQsdm9pZCAwIT09YXJndW1lbnRzWzBdLnRvcD9+fmFyZ3VtZW50c1swXS50b3A6dm9pZCAwIT09YXJndW1lbnRzWzFdP35+YXJndW1lbnRzWzFdOnRoaXMuc2Nyb2xsVG9wKX19LGUucHJvdG90eXBlLnNjcm9sbEJ5PWZ1bmN0aW9uKCl7dm9pZCAwIT09YXJndW1lbnRzWzBdJiYoITAhPT1mKGFyZ3VtZW50c1swXSk/dGhpcy5zY3JvbGwoe2xlZnQ6fn5hcmd1bWVudHNbMF0ubGVmdCt0aGlzLnNjcm9sbExlZnQsdG9wOn5+YXJndW1lbnRzWzBdLnRvcCt0aGlzLnNjcm9sbFRvcCxiZWhhdmlvcjphcmd1bWVudHNbMF0uYmVoYXZpb3J9KTppLmVsZW1lbnRTY3JvbGwuY2FsbCh0aGlzLHZvaWQgMCE9PWFyZ3VtZW50c1swXS5sZWZ0P35+YXJndW1lbnRzWzBdLmxlZnQrdGhpcy5zY3JvbGxMZWZ0On5+YXJndW1lbnRzWzBdK3RoaXMuc2Nyb2xsTGVmdCx2b2lkIDAhPT1hcmd1bWVudHNbMF0udG9wP35+YXJndW1lbnRzWzBdLnRvcCt0aGlzLnNjcm9sbFRvcDp+fmFyZ3VtZW50c1sxXSt0aGlzLnNjcm9sbFRvcCkpfSxlLnByb3RvdHlwZS5zY3JvbGxJbnRvVmlldz1mdW5jdGlvbigpe2lmKCEwIT09Zihhcmd1bWVudHNbMF0pKXt2YXIgbD1mdW5jdGlvbihvKXtmb3IoO28hPT10LmJvZHkmJiExPT09ZChvKTspbz1vLnBhcmVudE5vZGV8fG8uaG9zdDtyZXR1cm4gb30odGhpcyksZT1sLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHI9dGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtsIT09dC5ib2R5Pyh2LmNhbGwodGhpcyxsLGwuc2Nyb2xsTGVmdCtyLmxlZnQtZS5sZWZ0LGwuc2Nyb2xsVG9wK3IudG9wLWUudG9wKSxcImZpeGVkXCIhPT1vLmdldENvbXB1dGVkU3R5bGUobCkucG9zaXRpb24mJm8uc2Nyb2xsQnkoe2xlZnQ6ZS5sZWZ0LHRvcDplLnRvcCxiZWhhdmlvcjpcInNtb290aFwifSkpOm8uc2Nyb2xsQnkoe2xlZnQ6ci5sZWZ0LHRvcDpyLnRvcCxiZWhhdmlvcjpcInNtb290aFwifSl9ZWxzZSBpLnNjcm9sbEludG9WaWV3LmNhbGwodGhpcyx2b2lkIDA9PT1hcmd1bWVudHNbMF18fGFyZ3VtZW50c1swXSl9fWZ1bmN0aW9uIG4obyx0KXt0aGlzLnNjcm9sbExlZnQ9byx0aGlzLnNjcm9sbFRvcD10fWZ1bmN0aW9uIGYobyl7aWYobnVsbD09PW98fFwib2JqZWN0XCIhPXR5cGVvZiBvfHx2b2lkIDA9PT1vLmJlaGF2aW9yfHxcImF1dG9cIj09PW8uYmVoYXZpb3J8fFwiaW5zdGFudFwiPT09by5iZWhhdmlvcilyZXR1cm4hMDtpZihcIm9iamVjdFwiPT10eXBlb2YgbyYmXCJzbW9vdGhcIj09PW8uYmVoYXZpb3IpcmV0dXJuITE7dGhyb3cgbmV3IFR5cGVFcnJvcihcImJlaGF2aW9yIG1lbWJlciBvZiBTY3JvbGxPcHRpb25zIFwiK28uYmVoYXZpb3IrXCIgaXMgbm90IGEgdmFsaWQgdmFsdWUgZm9yIGVudW1lcmF0aW9uIFNjcm9sbEJlaGF2aW9yLlwiKX1mdW5jdGlvbiBwKG8sdCl7cmV0dXJuXCJZXCI9PT10P28uY2xpZW50SGVpZ2h0K2M8by5zY3JvbGxIZWlnaHQ6XCJYXCI9PT10P28uY2xpZW50V2lkdGgrYzxvLnNjcm9sbFdpZHRoOnZvaWQgMH1mdW5jdGlvbiBhKHQsbCl7dmFyIGU9by5nZXRDb21wdXRlZFN0eWxlKHQsbnVsbClbXCJvdmVyZmxvd1wiK2xdO3JldHVyblwiYXV0b1wiPT09ZXx8XCJzY3JvbGxcIj09PWV9ZnVuY3Rpb24gZChvKXt2YXIgdD1wKG8sXCJZXCIpJiZhKG8sXCJZXCIpLGw9cChvLFwiWFwiKSYmYShvLFwiWFwiKTtyZXR1cm4gdHx8bH1mdW5jdGlvbiBoKHQpe3ZhciBsLGUsaSxjLG49KHMoKS10LnN0YXJ0VGltZSkvcjtjPW49bj4xPzE6bixsPS41KigxLU1hdGguY29zKE1hdGguUEkqYykpLGU9dC5zdGFydFgrKHQueC10LnN0YXJ0WCkqbCxpPXQuc3RhcnRZKyh0LnktdC5zdGFydFkpKmwsdC5tZXRob2QuY2FsbCh0LnNjcm9sbGFibGUsZSxpKSxlPT09dC54JiZpPT09dC55fHxvLnJlcXVlc3RBbmltYXRpb25GcmFtZShoLmJpbmQobyx0KSl9ZnVuY3Rpb24gdihsLGUscil7dmFyIGMsZixwLGEsZD1zKCk7bD09PXQuYm9keT8oYz1vLGY9by5zY3JvbGxYfHxvLnBhZ2VYT2Zmc2V0LHA9by5zY3JvbGxZfHxvLnBhZ2VZT2Zmc2V0LGE9aS5zY3JvbGwpOihjPWwsZj1sLnNjcm9sbExlZnQscD1sLnNjcm9sbFRvcCxhPW4pLGgoe3Njcm9sbGFibGU6YyxtZXRob2Q6YSxzdGFydFRpbWU6ZCxzdGFydFg6ZixzdGFydFk6cCx4OmUseTpyfSl9fVwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXtwb2x5ZmlsbDpwb2x5ZmlsbH06cG9seWZpbGwoKTsiLCIvKiEgVVRGLThcclxuXHJcbsKpIGtvdnJpZ2luXHJcbtCS0YHQtSDQv9GA0LDQstCwINGA0LDQt9GA0LXRiNC10L3Ri1xyXG7QutGA0LDRgdC40LLRi9C5INC00LjQt9Cw0LnQvSDQtNC+0LvQttC10L0g0LjQvNC10YLRjCDQutGA0LDRgdC40LLRi9C5INC60L7QtMKuXHJcblxyXG5odHRwczovL2dpdGh1Yi5jb20vaHRtbHBsdXNjc3MvXHJcblxyXG4qL1xyXG5cclxuaWYoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcil7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xyXG5cdFx0bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy9zdy5qcycpO1xyXG5cdH0pO1xyXG59XHJcblxyXG52YXIgQVNLTyA9IEFTS08gfHwge307XHJcblxyXG4oZnVuY3Rpb24oKXtcclxuXHJcblx0QVNLTy5ib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHRBU0tPLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0QVNLTy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblx0QVNLTy5zZXR0aW1lb3V0ID0gQ29va2llcy5nZXQoJ2Nvb2tpZXNQb2xpY3knKSA/IDAgOiAxMDAwMDtcclxuXHJcblx0QVNLTy5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLWpzJyk7XHJcblxyXG4vLyByZXNpemVcclxuXHJcblx0dmFyIHJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpe1xyXG5cclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdGlmICghcmVzaXplVGltZW91dCkge1xyXG5cclxuXHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHRcdFx0XHRcdEFTS08ud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdFx0XHRcdEFTS08uaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuXHRcdFx0XHR9LCAxMDApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbi8vIGhyZWY9XCJ0ZWw6XCJcclxuXHJcblx0aWYoQVNLTy53aWR0aCA+IDEyMDApIHtcclxuXHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tocmVmXj1cInRlbFwiXScpLCBmdW5jdGlvbiAoZWwpIHtcclxuXHJcblx0XHRcdGVsLnJlbW92ZUF0dHJpYnV0ZSgnaHJlZicpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG4vLyDRgdC60LvQvtC90LXQvdC40LVcclxuXHRBU0tPLmRlY2xlbnNpb24gPSBmdW5jdGlvbihudW0sIGV4cHJlc3Npb25zKSB7XHJcblx0XHR2YXIgcjtcclxuXHRcdHZhciBjb3VudCA9IG51bSAlIDEwMDtcclxuXHRcdGlmIChjb3VudCA+IDQgJiYgY291bnQgPCAyMSlcclxuXHRcdFx0ciA9IGV4cHJlc3Npb25zWycyJ107XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Y291bnQgPSBjb3VudCAlIDEwO1xyXG5cdFx0XHRpZiAoY291bnQgPT0gMSlcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzAnXTtcclxuXHRcdFx0ZWxzZSBpZiAoY291bnQgPiAxICYmIGNvdW50IDwgNSlcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzEnXTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHIgPSBleHByZXNzaW9uc1snMiddO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHI7XHJcblx0fVxyXG5cclxuXHQvLyDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQsNC90LjQvNCw0YbQuNC5XHJcblx0QVNLTy5jc3NBbmltYXRpb24gPSBmdW5jdGlvbihhKXt2YXIgYixjLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNzc2FuaW1hdGlvblwiKTtzd2l0Y2goYSl7Y2FzZSdhbmltYXRpb24nOmI9e1wiYW5pbWF0aW9uXCI6XCJhbmltYXRpb25lbmRcIixcIk9BbmltYXRpb25cIjpcIm9BbmltYXRpb25FbmRcIixcIk1vekFuaW1hdGlvblwiOlwiYW5pbWF0aW9uZW5kXCIsXCJXZWJraXRBbmltYXRpb25cIjpcIndlYmtpdEFuaW1hdGlvbkVuZFwifTticmVhaztjYXNlJ3RyYW5zaXRpb24nOmI9e1widHJhbnNpdGlvblwiOlwidHJhbnNpdGlvbmVuZFwiLFwiT1RyYW5zaXRpb25cIjpcIm9UcmFuc2l0aW9uRW5kXCIsXCJNb3pUcmFuc2l0aW9uXCI6XCJ0cmFuc2l0aW9uZW5kXCIsXCJXZWJraXRUcmFuc2l0aW9uXCI6XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCJ9fWZvcihjIGluIGIpaWYoZC5zdHlsZVtjXSE9PXVuZGVmaW5lZClyZXR1cm4gYltjXX1cclxuXHJcblx0Ly8gRGV0ZXJtaW5lIGlmIGFuIGVsZW1lbnQgaXMgaW4gdGhlIHZpc2libGUgdmlld3BvcnRcclxuXHRBU0tPLmlzSW5WaWV3cG9ydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHJldHVybiAocmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSBBU0tPLmhlaWdodCk7XHJcblx0fVxyXG5cclxuXHQvLyDQvtGC0LTQtdC70Y/QtdC8INGC0YvRgdGP0YfQuFxyXG5cdEFTS08uc2VwTnVtYmVyID0gZnVuY3Rpb24oc3RyKXtcclxuXHRcdHN0ciA9IHN0ci50b1N0cmluZygpO1xyXG5cdFx0c3RyID0gc3RyLnJlcGxhY2UoL1xccysvZywnJyk7XHJcblx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKFteXFxkXXwkKSkvZywgJyQxICcpO1xyXG5cdH1cclxuXHJcblx0Ly8g0YHQutC70LXQuNCy0LDQtdC8INGC0YvRgdGP0YfQuFxyXG5cdEFTS08uc3RyVG9OdW1iZXIgPSBmdW5jdGlvbihuKXtcclxuXHRcdHJldHVybiBwYXJzZUludChuLnJlcGxhY2UoL1xccysvZywnJyksIDEwKTtcclxuXHR9XHJcblxyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcblx0XHQvLyBlYWdlclxyXG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbG9hZGluZz1cImxhenlcIl0nKSwgZnVuY3Rpb24oaW1nKXtcclxuXHJcblx0XHRcdGltZy5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCdlYWdlcicpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9LCBBU0tPLnNldHRpbWVvdXQpO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24oZm9ybXMpe1xyXG5cclxuXHRpZighZm9ybXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZm9ybXMsIGZ1bmN0aW9uKGJ0bil7XHJcblxyXG5cdFx0dmFyIGZvcm0gPSBidG4uY2xvc2VzdCgnZm9ybScpO1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JyxmdW5jdGlvbihlKXtcclxuXHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdHZhciBidXkgPSAhZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2luLWNhcnQnKTtcclxuXHJcblx0XHRcdGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0XHQvLyBzZW5kIGZvcm1cclxuXHJcblx0XHRcdHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKSxcclxuXHRcdFx0XHR4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0XHRcdHhoci5vcGVuKFwiUE9TVFwiLCBmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJykgKyAnYWpheC8nKTtcclxuXHJcblx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0aWYgKHhoci5yZWFkeVN0YXRlICE9IDQpe1xyXG5cclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnYnRuLS1ncmF5JywgYnV5KTtcclxuXHRcdFx0XHRidG4udGV4dENvbnRlbnQgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLScgKyAoIGJ1eSA/ICdkZWxldGUnIDogJ2J1eScgKSApO1xyXG5cdFx0XHRcdGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm1vZGVcIl0nKS52YWx1ZSA9ICggYnV5ID8gJ2RlbCcgOiAnYWRkJyApO1xyXG5cclxuXHRcdFx0XHRpZihidXkpIHtcclxuXHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcHJvZHVjdC1pbi1jYXJ0JykudGV4dENvbnRlbnQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcm9kdWN0LW5hbWVcIl0nKS52YWx1ZTtcclxuXHJcblx0XHRcdFx0XHRBU0tPLm1vZGFsU2hvdygncHJvZHVjdC1pbi1jYXJ0Jyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRBU0tPLmhlYWRlckNhcnQuc2hvdygpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciBjYXJ0ID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGNhcnQucXVhbnRpdHksIGNhcnQuc3VtKTtcclxuXHJcblx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdpbi1jYXJ0JywgYnV5KTtcclxuXHJcblx0XHRcdFx0aWYgKHhoci5zdGF0dXMgIT0gMjAwKSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ9C+0YjQuNCx0LrQsCAnICsgeGhyLnN0YXR1cyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRBU0tPLmhlYWRlckNhcnQuY2hhbmdlKGNhcnQucXVhbnRpdHksIGNhcnQuc3VtKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0eGhyLnNlbmQoZm9ybURhdGEpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWluLWNhcnQnKSk7IiwiLyooZnVuY3Rpb24oY29va2llKXtcclxuXHJcblx0aWYoY29va2llKSB7XHJcblxyXG5cdFx0Y29va2llLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRDb29raWVzLnNldCgnY29va2llc1BvbGljeScsICdBY2NlcHQnKTtcclxuXHJcblx0XHRcdGNvb2tpZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb29raWUnKSk7Ki8iLCIoZnVuY3Rpb24oZm9ybSl7XHJcblxyXG5cdGlmKCFmb3JtKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdHZhciBpbnB1dFJhbmdlID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19yYW5nZScpO1xyXG5cclxuXHRpZihpbnB1dFJhbmdlLmxlbmd0aCkge1xyXG5cclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoaW5wdXRSYW5nZSwgZnVuY3Rpb24oZWwpe1xyXG5cclxuXHRcdFx0dmFyIGZyb20gPSBlbC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19yYW5nZS1mcm9tJyksXHJcblx0XHRcdFx0dG8gPSBlbC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19yYW5nZS10bycpLFxyXG5cdFx0XHRcdGlucHV0RnJvbSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX3JhbmdlLWlucHV0LWZyb20nKSxcclxuXHRcdFx0XHRpbnB1dFRvID0gZWwucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fcmFuZ2UtaW5wdXQtdG8nKSxcclxuXHRcdFx0XHRzbGlkZXIgPSBlbC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19zbGlkZXItY29udHJvbCcpLFxyXG5cdFx0XHRcdG1pblZhbHVlID0gQVNLTy5zdHJUb051bWJlcihlbC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19yYW5nZS1taW4nKS50ZXh0Q29udGVudCksXHJcblx0XHRcdFx0bWF4VmFsdWUgPSBBU0tPLnN0clRvTnVtYmVyKGVsLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX3JhbmdlLW1heCcpLnRleHRDb250ZW50KSxcclxuXHRcdFx0XHRmcm9tVmFsdWUgPSBBU0tPLnN0clRvTnVtYmVyKGZyb20udmFsdWUpLFxyXG5cdFx0XHRcdHRvVmFsdWUgPSBBU0tPLnN0clRvTnVtYmVyKHRvLnZhbHVlKTtcclxuXHJcblx0XHRcdGlucHV0RXZlbnQoaW5wdXRGcm9tKTtcclxuXHRcdFx0aW5wdXRFdmVudChpbnB1dFRvKTtcclxuXHJcblx0XHRcdGlucHV0RnJvbS52YWx1ZSA9IEFTS08uc2VwTnVtYmVyKGZyb21WYWx1ZSk7XHJcblx0XHRcdGlucHV0VG8udmFsdWUgPSBBU0tPLnNlcE51bWJlcih0b1ZhbHVlKTtcclxuXHJcblx0XHRcdGZ1bmN0aW9uIGlucHV0RXZlbnQoaW5wdXQpe1xyXG5cclxuXHRcdFx0XHRpbnB1dC52YWx1ZSA9IEFTS08uc2VwTnVtYmVyKGlucHV0LnZhbHVlKTtcclxuXHJcblx0XHRcdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9IEFTS08uc3RyVG9OdW1iZXIodGhpcy52YWx1ZSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0XHRcdHZhciB2YWwgPSBBU0tPLnN0clRvTnVtYmVyKHRoaXMudmFsdWUpO1xyXG5cclxuXHRcdFx0XHRcdGlmKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaWx0ZXJfX3JhbmdlLWlucHV0LWZyb20nKSAmJiB2YWwgPCBtaW5WYWx1ZSl7XHJcblxyXG5cdFx0XHRcdFx0XHR2YWwgPSBtaW5WYWx1ZTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaWx0ZXJfX3JhbmdlLWlucHV0LXRvJykgJiYgdmFsID4gbWF4VmFsdWUpe1xyXG5cclxuXHRcdFx0XHRcdFx0dmFsID0gbWF4VmFsdWU7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSBBU0tPLnNlcE51bWJlcih2YWwpO1xyXG5cclxuXHRcdFx0XHRcdHVwZGF0ZUlucHV0KCk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdHZhciB2YWwgPSB0aGlzLnZhbHVlLnJlcGxhY2UoL1tcXERdL2csICcnKTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gdmFsO1xyXG5cclxuXHRcdFx0XHRcdHVwZGF0ZUlucHV0KCk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gdXBkYXRlSW5wdXQoKXtcclxuXHJcblx0XHRcdFx0ZnJvbVZhbHVlID0gQVNLTy5zdHJUb051bWJlcihpbnB1dEZyb20udmFsdWUpO1xyXG5cdFx0XHRcdHRvVmFsdWUgPSBBU0tPLnN0clRvTnVtYmVyKGlucHV0VG8udmFsdWUpO1xyXG5cclxuXHRcdFx0XHRmcm9tLnZhbHVlID0gZnJvbVZhbHVlO1xyXG5cdFx0XHRcdHRvLnZhbHVlID0gdG9WYWx1ZTtcclxuXHJcblx0XHRcdFx0c2xpZGVyLm5vVWlTbGlkZXIuc2V0KFtmcm9tVmFsdWUsIHRvVmFsdWVdKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIHVwZGF0ZVNsaWRlcigpe1xyXG5cclxuXHRcdFx0XHRmcm9tLnZhbHVlID0gZnJvbVZhbHVlO1xyXG5cdFx0XHRcdHRvLnZhbHVlID0gdG9WYWx1ZTtcclxuXHJcblx0XHRcdFx0aW5wdXRGcm9tLnZhbHVlID0gQVNLTy5zZXBOdW1iZXIoZnJvbVZhbHVlKTtcclxuXHRcdFx0XHRpbnB1dFRvLnZhbHVlID0gQVNLTy5zZXBOdW1iZXIodG9WYWx1ZSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgb25GdWxmaWxsZWQgPSBmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0XHRub1VpU2xpZGVyLmNyZWF0ZShzbGlkZXIsIHtcclxuXHRcdFx0XHRcdHN0YXJ0OiBbZnJvbVZhbHVlLHRvVmFsdWVdLFxyXG5cdFx0XHRcdFx0Y29ubmVjdDogdHJ1ZSxcclxuXHRcdFx0XHRcdHJhbmdlOiB7XHJcblx0XHRcdFx0XHRcdCdtaW4nOiBtaW5WYWx1ZSxcclxuXHRcdFx0XHRcdFx0J21heCc6IG1heFZhbHVlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0bWFyZ2luOiBwYXJzZUludChzbGlkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXN0ZXAnKSksXHJcblx0XHRcdFx0XHRzdGVwOiBwYXJzZUludChzbGlkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXN0ZXAnKSlcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0c2xpZGVyLm5vVWlTbGlkZXIub24oJ3NsaWRlJywgZnVuY3Rpb24oZSl7XHJcblxyXG5cdFx0XHRcdFx0ZnJvbVZhbHVlID0gcGFyc2VJbnQoZVswXSk7XHJcblx0XHRcdFx0XHR0b1ZhbHVlID0gcGFyc2VJbnQoZVsxXSk7XHJcblx0XHRcdFx0XHR1cGRhdGVTbGlkZXIoKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHNsaWRlci5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCBmdW5jdGlvbihlKXtcclxuXHJcblx0XHRcdFx0Ly9cdHVwZGF0ZVNsaWRlcihwYXJzZUludChlWzBdKSxwYXJzZUludChlWzFdKSlcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWROb1VpU2xpZGVyXCIsIHJlc29sdmUpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRwcm9taXNlLnRoZW4ob25GdWxmaWxsZWQpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGlucHV0UmFuZ2UsIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRcdFx0dmFyIGZyb20gPSBlbC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19yYW5nZS1mcm9tJyksXHJcblx0XHRcdFx0XHR0byA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX3JhbmdlLXRvJyksXHJcblx0XHRcdFx0XHRpbnB1dEZyb20gPSBlbC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19yYW5nZS1pbnB1dC1mcm9tJyksXHJcblx0XHRcdFx0XHRpbnB1dFRvID0gZWwucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fcmFuZ2UtaW5wdXQtdG8nKSxcclxuXHRcdFx0XHRcdHNsaWRlciA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX3NsaWRlci1jb250cm9sJyksXHJcblx0XHRcdFx0XHRmcm9tVmFsdWUgPSBBU0tPLnN0clRvTnVtYmVyKGlucHV0RnJvbS52YWx1ZSksXHJcblx0XHRcdFx0XHR0b1ZhbHVlID0gQVNLTy5zdHJUb051bWJlcihpbnB1dFRvLnZhbHVlKTtcclxuXHJcblx0XHRcdFx0ZnJvbS52YWx1ZSA9IGZyb21WYWx1ZTtcclxuXHRcdFx0XHR0by52YWx1ZSA9IHRvVmFsdWU7XHJcblx0XHRcdFx0c2xpZGVyLm5vVWlTbGlkZXIuc2V0KFtmcm9tVmFsdWUsIHRvVmFsdWVdKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0sMTAwKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vIGxvYWQgVWlTbGlkZXJcclxuXHJcblx0dmFyIGxvYWROb1VpU2xpZGVyID0gZmFsc2U7XHJcblxyXG5cdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcblx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuXHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG5cdHNjcmlwdC5zcmMgPSAnL2pzL25vdWlzbGlkZXIubWluLmpzJztcclxuXHJcblx0c2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHR2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ2xvYWROb1VpU2xpZGVyJyk7XHJcblx0XHR3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblxyXG5cdH07XHJcblxyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcblx0XHRpZighbG9hZE5vVWlTbGlkZXIpe1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG5cdFx0XHRsb2FkTm9VaVNsaWRlciA9IHRydWU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9LCA4MDAwKTtcclxuXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fYnRuLXRvZ2dsZSAuYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0aWYoIWxvYWROb1VpU2xpZGVyKXtcclxuXHJcblx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuXHRcdFx0bG9hZE5vVWlTbGlkZXIgPSB0cnVlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyJykpOyIsIihmdW5jdGlvbihmb3Jtcyl7XHJcblxyXG5cdGlmKCFmb3Jtcykge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGZvcm1zLCBmdW5jdGlvbihmb3JtKXtcclxuXHJcblx0XHR2YXIgYnRuID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1teS1saXN0X19idG4nKSxcclxuXHRcdFx0bW9kZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJtb2RlXCJdJyksXHJcblx0XHRcdGhlYWRlckNvdW50ZXJWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfXycgKyBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwibXlsaXN0XCJdJykudmFsdWUgKyAnLWNvdW50Jyk7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLGZ1bmN0aW9uKGUpe1xyXG5cclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0dmFyIGFkZCA9IG1vZGUudmFsdWUgPT09ICdhZGQnO1xyXG5cclxuXHRcdFx0YnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdC8vIHNlbmQgZm9ybVxyXG5cclxuXHRcdFx0dmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pLFxyXG5cdFx0XHRcdHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHRcdFx0eGhyLm9wZW4oXCJQT1NUXCIsIGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSArICdhamF4LycpO1xyXG5cclxuXHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT09IDQpe1xyXG5cclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFkZCcsIGFkZCk7XHJcblx0XHRcdFx0bW9kZS52YWx1ZSA9ICggYWRkID8gJ2RlbCcgOiAnYWRkJyApO1xyXG5cclxuXHRcdFx0XHR2YXIgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuXHRcdFx0XHRpZiAoeGhyLnN0YXR1cyAhPT0gMjAwKSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ9C+0YjQuNCx0LrQsCAnICsgeGhyLnN0YXR1cyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRoZWFkZXJDb3VudGVyVmFsdWUudGV4dENvbnRlbnQgPSByZXNwb25zZS5xdWFudGl0eTtcclxuXHRcdFx0XHRcdGhlYWRlckNvdW50ZXJWYWx1ZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgcmVzcG9uc2UucXVhbnRpdHkgPT09IDApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR4aHIuc2VuZChmb3JtRGF0YSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tbXktbGlzdCcpKTsiLCJcclxuXHJcbihmdW5jdGlvbigpe1xyXG5cclxuXHR2YXIgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybScpO1xyXG5cclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGZvcm1zLCBmdW5jdGlvbihmb3JtKXtcclxuXHJcblx0XHR2YXIgc2hvd01vYWRhbE9rID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2stbW9kYWwnKSxcclxuXHRcdFx0eGhyT2ZmID0gZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0temFrYXonKSB8fCBmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS16YWthei1kZXRhaWxzJyksXHJcblx0XHRcdGZvcm1SZXF1aXJlZCA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnW3JlcXVpcmVkXScpLFxyXG5cdFx0XHRmb3JtQnRuU3VibWl0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fc3VibWl0JyksXHJcblx0XHRcdHRleHRFcnJvciA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm1fX3RleHRlcnJvcicpO1xyXG5cclxuXHRcdC8vINC+0YLQv9GA0LDQstC60LAg0YTQvtGA0LzRi1xyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cdFx0XHR2YXIgbm92YWxpZGF0ZSA9IGZhbHNlLFxyXG5cdFx0XHRcdGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG5cclxuXHRcdFx0aWYodGV4dEVycm9yKSB7XHJcblxyXG5cdFx0XHRcdHRleHRFcnJvci50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChmb3JtUmVxdWlyZWQsIGZ1bmN0aW9uKGlucHV0KXtcclxuXHJcblx0XHRcdFx0aWYoaW5wdXQub2Zmc2V0UGFyZW50ID09PSBudWxsKSB7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKGlucHV0LmdldEF0dHJpYnV0ZSgndHlwZScpID09ICdjaGVja2JveCcpIHtcclxuXHJcblx0XHRcdFx0XHRpZihpbnB1dC5jaGVja2VkKXtcclxuXHJcblx0XHRcdFx0XHRcdGlucHV0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tib3gtLWVycm9yJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpbnB1dC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LS1lcnJvcicpO1xyXG5cdFx0XHRcdFx0XHRub3ZhbGlkYXRlID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0ZWxzZSBpZihpbnB1dC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PSAncmFkaW8nKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIF9uYW1lID0gaW5wdXQuZ2V0QXR0cmlidXRlKCduYW1lJyksXHJcblx0XHRcdFx0XHRcdF9jaGVja2VkID0gZmFsc2UsXHJcblx0XHRcdFx0XHRcdF9yYWRpb0dyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCInK19uYW1lKydcIl0nKTtcclxuXHJcblx0XHRcdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKF9yYWRpb0dyb3VwLCBmdW5jdGlvbihlbCkge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYoZWwuY2hlY2tlZCl7XHJcblxyXG5cdFx0XHRcdFx0XHRcdF9jaGVja2VkID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRpZighX2NoZWNrZWQpe1xyXG5cclxuXHRcdFx0XHRcdFx0bm92YWxpZGF0ZSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdGlucHV0LmNsb3Nlc3QoJy5pbnB1dC1yb3dfX2lucHV0JykuY2xhc3NMaXN0LmFkZCgnaW5wdXQtcm93X19pbnB1dC0tZXJyb3InKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0ZXJyb3JJbnB1dChpbnB1dCk7XHJcblxyXG5cdFx0XHRcdFx0aWYoIWlucHV0LnZhbHVlKXtcclxuXHJcblx0XHRcdFx0XHRcdG5vdmFsaWRhdGUgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZighbm92YWxpZGF0ZSl7XHJcblxyXG5cdFx0XHRcdGlmKHhock9mZikge1xyXG5cclxuXHRcdFx0XHRcdEFTS08uc2VuZEJlYWNvbiA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8g0L/RgNC+0LLQtdGA0LrQsCDQvdCwINCx0L7RgtCwXHJcblxyXG5cdFx0XHRcdGlmKGZvcm0ub2Zmc2V0UGFyZW50ID09PSBudWxsKSB7XHJcblxyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbF9faXRlbS0tY2FsbGJhY2snKSkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBwaG9uZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmlucHV0W3R5cGU9XCJ0ZWxcIl0nKTtcclxuXHJcblx0XHRcdFx0XHRpZihwaG9uZSAmJiBwaG9uZS52YWx1ZS5yZXBsYWNlKC9bXitcXGRdL2csICcnKSA9PT0gJycpe1xyXG5cclxuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0XHRcdFx0eGhyLm9wZW4oXCJQT1NUXCIsIGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSk7XHJcblx0XHRcdFx0eGhyLnNlbmQoZm9ybURhdGEpO1xyXG5cclxuXHRcdFx0XHRpZihmb3JtQnRuU3VibWl0KSB7XHJcblxyXG5cdFx0XHRcdFx0Zm9ybUJ0blN1Ym1pdC5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSAhPSA0KXtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZihzaG93TW9hZGFsT2spIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS10aGFua3MgLm1vZGFsX190ZXh0JykudGV4dENvbnRlbnQgPSBzaG93TW9hZGFsT2s7XHJcblxyXG5cdFx0XHRcdFx0XHRcdEFTS08ubW9kYWxTaG93KCd0aGFua3MnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Zm9ybS5yZXNldCgpO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRhbGVydCgn0L7RiNC40LHQutCwICcgKyB4aHIuc3RhdHVzKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYoZm9ybUJ0blN1Ym1pdCkge1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9ybUJ0blN1Ym1pdC5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0dmFyIGNoZWNrYm94RXJyb3IgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC0tZXJyb3InKTtcclxuXHJcblx0XHRcdFx0aWYgKCBjaGVja2JveEVycm9yICkge1xyXG5cclxuXHRcdFx0XHRcdGlmKCFBU0tPLmlzSW5WaWV3cG9ydChjaGVja2JveEVycm9yKSl7XHJcblxyXG5cdFx0XHRcdFx0XHRjaGVja2JveEVycm9yLmNsb3Nlc3QoJy5pbnB1dC1yb3cnKS5zY3JvbGxJbnRvVmlldyhcInNtb290aFwiKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgaW5wdXRFcnJvciA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmlucHV0LXJvd19faW5wdXQtLWVycm9yJyk7XHJcblxyXG5cdFx0XHRcdFx0aWYodGV4dEVycm9yICYmIGlucHV0RXJyb3IuZ2V0QXR0cmlidXRlKCdkYXRhLWVycm9yJykpIHtcclxuXHJcblx0XHRcdFx0XHRcdHRleHRFcnJvci50ZXh0Q29udGVudCA9IGlucHV0RXJyb3IuZ2V0QXR0cmlidXRlKCdkYXRhLWVycm9yJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmKCFBU0tPLmlzSW5WaWV3cG9ydChpbnB1dEVycm9yKSl7XHJcblxyXG5cdFx0XHRcdFx0XHRpbnB1dEVycm9yLmNsb3Nlc3QoJy5pbnB1dC1yb3cnKS5zY3JvbGxJbnRvVmlldyhcInNtb290aFwiKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYoaW5wdXRFcnJvciAmJiBpbnB1dEVycm9yLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC0tZXJyb3InKSAmJiBpbnB1dEVycm9yLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC0tZXJyb3InKS50eXBlID09PSAndGV4dCcpe1xyXG5cclxuXHRcdFx0XHRcdFx0aW5wdXRFcnJvci5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtLWVycm9yJykuZm9jdXMoKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyDQuNC30LzQtdC90LXQvdC40LUg0YTQvtGA0LzRi1xyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cdFx0XHR2YXIgX3RhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuXHRcdFx0aWYoX3RhcmdldC5yZXF1aXJlZCkge1xyXG5cclxuXHRcdFx0XHRpZihfdGFyZ2V0LnR5cGUgPT09ICdyYWRpbycpIHtcclxuXHJcblx0XHRcdFx0XHRfdGFyZ2V0LmNsb3Nlc3QoJy5pbnB1dC1yb3dfX2lucHV0JykuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtcm93X19pbnB1dC0tZXJyb3InKTtcclxuXHRcdFx0XHRcdHRleHRFcnJvci50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKF90YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyAmJiBfdGFyZ2V0LmNoZWNrZWQpIHtcclxuXHJcblx0XHRcdFx0XHRfdGFyZ2V0LmNsb3Nlc3QoJy5jaGVja2JveCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrYm94LS1lcnJvcicpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuLy8gaW5wdXRcclxuXHJcblx0dmFyIGlucHV0UmVxdWlyZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXRbcmVxdWlyZWRdJyk7XHJcblxyXG5cdGZ1bmN0aW9uIGVycm9ySW5wdXQoZWwpe1xyXG5cclxuXHRcdGlmKGVsLnZhbHVlKSB7XHJcblx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LS1lcnJvcicpO1xyXG5cdFx0XHRlbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LXJvd19faW5wdXQtLWVycm9yJyk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnaW5wdXQtLWVycm9yJyk7XHJcblx0XHRcdGVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnaW5wdXQtcm93X19pbnB1dC0tZXJyb3InKTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGlucHV0UmVxdWlyZWQsIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRcdGlmKGUuY29kZSAhPT0gXCJUYWJcIikge1xyXG5cclxuXHRcdFx0XHRlcnJvcklucHV0KGVsKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRlcnJvcklucHV0KGVsKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbihnYWxsZXJ5KXtcclxuXHJcblx0aWYoZ2FsbGVyeSkge1xyXG5cclxuXHRcdEFTS08uZ2FsbGVyeVN3aXBlciA9ICc8ZGl2IGNsYXNzPVwic3dpcGVyLWNvbnRhaW5lciBzd2lwZXItY29udGFpbmVyLS1nYWxsZXJ5XCI+PHVsIGNsYXNzPVwibm90c2VsIHN3aXBlci13cmFwcGVyXCI+JztcclxuXHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGdhbGxlcnkucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RfX2ltZy1zbWFsbCBhJyksIGZ1bmN0aW9uKGxpbmspe1xyXG5cclxuXHRcdFx0Ly8g0LXRgdC70Lgg0Y7RgtGD0LEg0LIg0YHQu9Cw0LnQtNC10YDQtVxyXG5cdFx0XHRpZihsaW5rLmNsYXNzTGlzdC5jb250YWlucygncHJvZHVjdF9faW1nLXlvdXR1YmUnKSl7XHJcblxyXG5cdFx0XHRcdEFTS08uZ2FsbGVyeVN3aXBlciArPSAnPGxpIGNsYXNzPVwic3dpcGVyLXNsaWRlIHN3aXBlci1zbGlkZS0teW91dHViZVwiPjxkaXYgY2xhc3M9XCJ5b3V0dWJlLW1vZGFsLWdhbGxlcnlcIiBkYXRhLWlkPVwiJyArIGxpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgKyAnXCI+PGltZyBzcmM9XCJodHRwczovL2kueXRpbWcuY29tL3ZpLycgKyBsaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpICsgJy9tYXhyZXNkZWZhdWx0LmpwZ1wiPjwvZGl2PjwvbGk+JztcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdEFTS08uZ2FsbGVyeVN3aXBlciArPSAnPGxpIGNsYXNzPVwic3dpcGVyLXNsaWRlXCI+PGltZyBzcmM9XCInICsgbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSArICdcIj48L2xpPic7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0QVNLTy5nYWxsZXJ5U3dpcGVyICs9ICc8L3VsPjxzcGFuIGNsYXNzPVwic3dpcGVyLWNvdW50XCI+PC9zcGFuPjwvZGl2Pic7XHJcblxyXG5cdFx0Z2FsbGVyeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRcdGlmKGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9kdWN0X19lbmVyZycpKSB7XHJcblxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKGUudGFyZ2V0LmNsb3Nlc3QoJ2EnKSkge1xyXG5cclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xyXG5cclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZ2FsbGVyeScpLmlubmVySFRNTCA9IEFTS08uZ2FsbGVyeVN3aXBlcjtcclxuXHJcblx0XHRcdEFTS08ubW9kYWxTaG93KCdnYWxsZXJ5Jyk7XHJcblxyXG5cdFx0XHR2YXIgZ2FsbGVyeU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWdhbGxlcnkgLnN3aXBlci1jb250YWluZXItLWdhbGxlcnknKSxcclxuXHRcdFx0XHRzbGlkZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5zd2lwZXItc2xpZGUnKSxcclxuXHRcdFx0XHRpbmRleCA9IHNsaWRlID8gc2xpZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpIDogMDtcclxuXHJcblx0XHRcdEFTS08uc3dpcGVyKGdhbGxlcnlNb2RhbCwgaW5kZXgpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9faW1nJykpOyIsIihmdW5jdGlvbiAoKSB7XHJcblxyXG5cdHZhciB5YUNvdW50ZXJJZCA9ICcyNjUyNjcyOScsXHJcblx0XHRnb2FscyA9IFtcclxuXHJcblx0XHQvLyDQv9C10YDQtdGF0L7QtNGLINC/0L4g0YHRgtCw0YLRjNGP0Lwg0LjQtyDQvNC10L3RjlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c2VsZWN0b3I6ICcubGluay1hcnRpY2xlLWluLWNhdGFsb2ctbWVudScsXHJcblx0XHRcdFx0ZXZlbnQ6ICdjbGljaycsXHJcblx0XHRcdFx0eWFuZGV4OiB7XHJcblx0XHRcdFx0XHR0YXJnZXQ6ICdMSU5LX0FSVElDTEVfSU5fQ0FUQUxPR19NRU5VJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHQvLyDQotC10LvQtdGE0L7QvVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c2VsZWN0b3I6ICdhW2hyZWZePVwidGVsXCJdJyxcclxuXHRcdFx0XHRldmVudDogJ2NsaWNrJyxcclxuXHRcdFx0XHR5YW5kZXg6IHtcclxuXHRcdFx0XHRcdHRhcmdldDogJ1BIT05FJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHQvLyDQpNC40LvRjNGC0YBcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNlbGVjdG9yOiAnLmZpbHRlcl9fYnRuLXRvZ2dsZSAuYnRuJyxcclxuXHRcdFx0XHRldmVudDogJ2NsaWNrJyxcclxuXHRcdFx0XHR5YW5kZXg6IHtcclxuXHRcdFx0XHRcdHRhcmdldDogJ0ZJTFRFUl9PUEVOJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNlbGVjdG9yOiAnLmZpbHRlcicsXHJcblx0XHRcdFx0ZXZlbnQ6ICdzdWJtaXQnLFxyXG5cdFx0XHRcdHlhbmRleDoge1xyXG5cdFx0XHRcdFx0dGFyZ2V0OiAnRklMVEVSX1NVQk1JVCdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0Ly8g0J/QvtC60YPQv9C60LBcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNlbGVjdG9yOiAnLmNhdGFsb2ctbGlzdF9fY2FydCwgLnByb2R1Y3RfX2NhcnQnLFxyXG5cdFx0XHRcdGV2ZW50OiAnc3VibWl0JyxcclxuXHRcdFx0XHR5YW5kZXg6IHtcclxuXHRcdFx0XHRcdHRhcmdldDogJ0NMSUNLX0JVWSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzZWxlY3RvcjogJy5mb3JtLXpha2F6JyxcclxuXHRcdFx0XHRldmVudDogJ3N1Ym1pdCcsXHJcblx0XHRcdFx0eWFuZGV4OiB7XHJcblx0XHRcdFx0XHR0YXJnZXQ6ICdTVUJNSVRfT1JERVJfQ1JFQVRFJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNlbGVjdG9yOiAnLmZvcm0temFrYXotZGV0YWlscycsXHJcblx0XHRcdFx0ZXZlbnQ6ICdzdWJtaXQnLFxyXG5cdFx0XHRcdHlhbmRleDoge1xyXG5cdFx0XHRcdFx0dGFyZ2V0OiAnU1VCTUlUX09SREVSX0RFVEFJTFMnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdC8vINCX0LDQutCw0LfQsNGC0Ywg0LfQstC+0L3QvtC6XHJcblx0XHRcdHtcclxuXHRcdFx0XHRzZWxlY3RvcjogJy5tb2RhbF9faXRlbS0tY2FsbGJhY2snLFxyXG5cdFx0XHRcdGV2ZW50OiAnbW9kYWxTaG93JyxcclxuXHRcdFx0XHR5YW5kZXg6IHtcclxuXHRcdFx0XHRcdHRhcmdldDogJ0NBTExCQUNLX09QRU4nXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c2VsZWN0b3I6ICcubW9kYWxfX2l0ZW0tLWNhbGxiYWNrJyxcclxuXHRcdFx0XHRldmVudDogJ3N1Ym1pdCcsXHJcblx0XHRcdFx0eWFuZGV4OiB7XHJcblx0XHRcdFx0XHR0YXJnZXQ6ICdDQUxMQkFDS19TRU5EJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNlbGVjdG9yOiAnLm1vZGFsX19pdGVtLS10aGFua3MnLFxyXG5cdFx0XHRcdGV2ZW50OiAnbW9kYWxTaG93JyxcclxuXHRcdFx0XHR5YW5kZXg6IHtcclxuXHRcdFx0XHRcdHRhcmdldDogJ1RIQU5LU19PUEVOJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRdO1xyXG5cclxuXHJcblx0Z29hbHMuZm9yRWFjaChmdW5jdGlvbiAoZ29hbCkge1xyXG5cdFx0aWYgKGdvYWwucGFnZSAmJiBnb2FsLnBhZ2UgIT09IGxvY2F0aW9uLnBhdGhuYW1lKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKGdvYWwuc2tpcFBhZ2VzICYmIGdvYWwuc2tpcFBhZ2VzLmluZGV4T2YobG9jYXRpb24ucGF0aG5hbWUpICE9PSAtMSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZ29hbC5zZWxlY3Rvcik7XHJcblxyXG5cdFx0W10uZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZ29hbC5ldmVudCwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGdvYWwueWFuZGV4LnRhcmdldClcclxuXHRcdFx0XHRpZiAoZ29hbC55YW5kZXggJiYgd2luZG93Wyd5YUNvdW50ZXInICsgeWFDb3VudGVySWRdKSB7XHJcblx0XHRcdFx0XHR3aW5kb3dbJ3lhQ291bnRlcicgKyB5YUNvdW50ZXJJZF0ucmVhY2hHb2FsKGdvYWwueWFuZGV4LnRhcmdldCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24oaGVhZGVyQ2FydCl7XHJcblxyXG5cdGlmKGhlYWRlckNhcnQpIHtcclxuXHJcblx0XHR2YXIgY2xlYXJUaW1lb3V0SUQgPSBudWxsO1xyXG5cclxuXHRcdEFTS08uaGVhZGVyQ2FydCA9IHtcclxuXHJcblx0XHRcdGNoYW5nZSA6IGZ1bmN0aW9uKHF1YW50aXR5LCBzdW0pIHtcclxuXHJcblx0XHRcdFx0aGVhZGVyQ2FydC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jYXJ0LWNvdW50JykudGV4dENvbnRlbnQgPSBxdWFudGl0eTtcclxuXHRcdFx0XHRoZWFkZXJDYXJ0LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NhcnQtdmFsdWUnKS50ZXh0Q29udGVudCA9IEFTS08uc2VwTnVtYmVyKHN1bSk7XHJcblx0XHRcdFx0aGVhZGVyQ2FydC5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX2NhcnQtLWVtcHR5JywgcXVhbnRpdHkgPT0gJzAnKTtcclxuXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRzaG93IDogZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdGhlYWRlckNhcnQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19jYXJ0LS1zaG93Jyk7XHJcblxyXG5cdFx0XHRcdGNsZWFyVGltZW91dChjbGVhclRpbWVvdXRJRCk7XHJcblxyXG5cdFx0XHRcdGNsZWFyVGltZW91dElEID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0XHRcdGhlYWRlckNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19jYXJ0LS1zaG93Jyk7XHJcblxyXG5cdFx0XHRcdH0sIDMwMDApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY2FydCcpKTsiLCIoZnVuY3Rpb24obmF2KXtcclxuXHJcblx0aWYoIW5hdikge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHR2YXIgbGV2ZWwxID0gbmF2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2l0ZW0nKSxcclxuXHRcdGxldmVsMlBhcmVudCA9IG5hdi5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19sZXZlbDItaXRlbS0tcGFyZW50JyksXHJcblx0XHRsZXZlbDJCYWNrID0gbmF2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2xldmVsMi1idG4tYmFjaycpLFxyXG5cdFx0bGV2ZWwzQmFjayA9IG5hdi5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19sZXZlbDMtYnRuLWJhY2snKSxcclxuXHRcdHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xyXG5cclxuXHQvLyDQvtGC0LrRgNGL0YLRjHzQt9Cw0LrRgNGL0YLRjCDQvNC10L3RjlxyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG5cdFx0aWYoZS50YXJnZXQuY2xvc2VzdCgnLmhlYWRlcl9fYnRuLXRvZ2dsZScpIHx8IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmF2JykpIHtcclxuXHJcblx0XHRcdGlmKEFTS08uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtb3BlbicpKXtcclxuXHJcblx0XHRcdFx0bmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxldmVsMicpO1xyXG5cdFx0XHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sZXZlbDMnKTtcclxuXHJcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsZXZlbDEsIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRcdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1ob3ZlcicpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsZXZlbDJQYXJlbnQsIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRcdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1ob3ZlcicpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLEFTS08ud2luZG93U2Nyb2xsT2xkKTtcclxuXHRcdFx0XHRcdHdyYXBwZXIuc3R5bGUudG9wID0gMDtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRBU0tPLndpbmRvd1Njcm9sbE9sZCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuXHRcdFx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IC1BU0tPLndpbmRvd1Njcm9sbE9sZCArICdweCc7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRBU0tPLmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1vcGVuJyk7XHJcblx0XHRcdG5hdi5jbGFzc0xpc3QudG9nZ2xlKCd2aXN1YWxseWhpZGRlbicpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cclxuXHQvLyDQvdCw0LLQtdC00LXQvdC40LUg0L3QsCDQv9C10YDQstGL0Lkg0YPRgNC+0LLQtdC90YxcclxuXHJcblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsZXZlbDEsIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRpZighZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZfX2l0ZW0tLXBhcmVudCcpKSB7XHJcblxyXG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0XHRpZihBU0tPLndpZHRoID49IDc2OCkge1xyXG5cclxuXHRcdFx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhvdmVyJyk7XHJcblx0XHRcdFx0XHRuYXYuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbGV2ZWwyJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdFx0aWYoQVNLTy53aWR0aCA+PSA3NjgpIHtcclxuXHJcblx0XHRcdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1ob3ZlcicpO1xyXG5cdFx0XHRcdFx0bmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxldmVsMicpO1xyXG5cclxuXHRcdFx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGV2ZWwxLCBmdW5jdGlvbihlbGVtKXtcclxuXHJcblx0XHRcdFx0XHRcdGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaG92ZXInKTtcclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0XHRpZihBU0tPLndpZHRoID49IDc2OCkge1xyXG5cclxuXHRcdFx0XHRcdG5hdi5jbGFzc0xpc3QuYWRkKCdpcy1sZXZlbDInKTtcclxuXHJcblx0XHRcdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxldmVsMSwgZnVuY3Rpb24oZWxlbSl7XHJcblxyXG5cdFx0XHRcdFx0XHRlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWhvdmVyJywgZWxlbSA9PT0gZWwpO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGVsLnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2hlYWQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG5cdFx0XHRcdGlmKEFTS08ud2lkdGggPCA3NjgpIHtcclxuXHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdFx0bmF2LnN0eWxlLm1pbkhlaWdodCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2xldmVsMicpLnNjcm9sbEhlaWdodCArIFwicHhcIjtcclxuXHJcblx0XHRcdFx0XHRuYXYuY2xhc3NMaXN0LmFkZCgnaXMtbGV2ZWwyJyk7XHJcblxyXG5cdFx0XHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsZXZlbDEsIGZ1bmN0aW9uKGVsZW0pe1xyXG5cclxuXHRcdFx0XHRcdFx0ZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1ob3ZlcicsIGVsZW0gPT09IGVsKTtcclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0YXQvtCy0LXRgC/QutC70LjQuiDQstGC0L7RgNC+0Lkg0YPRgNC+0LLQtdC90YxcclxuXHJcblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsZXZlbDJQYXJlbnQsIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRlbC5wYXJlbnROb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRpZihBU0tPLndpZHRoID49IDc2OCkge1xyXG5cclxuXHRcdFx0XHRuYXYuY2xhc3NMaXN0LmFkZCgnaXMtbGV2ZWwzJyk7XHJcblxyXG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGV2ZWwyUGFyZW50LCBmdW5jdGlvbihlbGVtKXtcclxuXHJcblx0XHRcdFx0XHRlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWhvdmVyJywgZWxlbSA9PT0gZWwpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRlbC5wYXJlbnROb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRpZihBU0tPLndpZHRoID49IDc2OCkge1xyXG5cclxuXHRcdFx0XHRuYXYuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbGV2ZWwzJyk7XHJcblxyXG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGV2ZWwyUGFyZW50LCBmdW5jdGlvbihlbGVtKXtcclxuXHJcblx0XHRcdFx0XHRlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhvdmVyJyk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGVsLnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2xldmVsMi1saW5rJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuXHRcdFx0aWYoQVNLTy53aWR0aCA8IDc2OCkge1xyXG5cclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdG5hdi5jbGFzc0xpc3QuYWRkKCdpcy1sZXZlbDMnKTtcclxuXHJcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsZXZlbDJQYXJlbnQsIGZ1bmN0aW9uKGVsZW0pe1xyXG5cclxuXHRcdFx0XHRcdGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtaG92ZXInLCBlbGVtID09PSBlbCk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0LrQu9C40Log0L/QviDQutC90L7Qv9C60LUg0L3QsNC30LDQtFxyXG5cclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxldmVsMkJhY2ssIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdG5hdi5zdHlsZS5taW5IZWlnaHQgPSBuYXYucXVlcnlTZWxlY3RvcignLm5hdl9faW5uZXInKS5jbGllbnRIZWlnaHQgKyBcInB4XCI7XHJcblxyXG5cdFx0XHRuYXYuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbGV2ZWwyJyk7XHJcblxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxldmVsMSwgZnVuY3Rpb24oZWwpe1xyXG5cclxuXHRcdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1ob3ZlcicpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxldmVsM0JhY2ssIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sZXZlbDMnKTtcclxuXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGV2ZWwyUGFyZW50LCBmdW5jdGlvbihlbGVtKXtcclxuXHJcblx0XHRcdFx0ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1ob3ZlcicpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpKTsiLCJcclxuKGZ1bmN0aW9uKCl7XHJcblxyXG5cdHZhciBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpLFxyXG5cdFx0aXRlbXMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxfX2l0ZW0nKSxcclxuXHRcdGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19jbG9zZScpLFxyXG5cdFx0d3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XHJcblxyXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoY2xvc2UsIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdEFTS08uY2xvc2VNb2RhbCgpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuXHRcdGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSkge1xyXG5cclxuXHRcdFx0QVNLTy5jbG9zZU1vZGFsKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0QVNLTy5jbG9zZU1vZGFsID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0QVNLTy5hY3RpdmVNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF9faXRlbS0tYWN0aXZlJyk7XHJcblx0XHRBU0tPLmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtc2hvdycpO1xyXG5cdFx0d3JhcHBlci5zdHlsZS50b3AgPSAwO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsQVNLTy53aW5kb3dTY3JvbGxPbGQpO1xyXG5cclxuXHRcdC8vINC/0L7QutCw0LbQtdC8INC60L7RgNC30LjQvdGDXHJcblxyXG5cdFx0aWYoQVNLTy5hY3RpdmVNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsX19pdGVtLS1wcm9kdWN0LWluLWNhcnQnKSAmJiAhQVNLTy5hY3RpdmVNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsX19pdGVtLS1hY3RpdmUnKSkge1xyXG5cclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0XHRBU0tPLmhlYWRlckNhcnQuc2hvdygpO1xyXG5cclxuXHRcdFx0fSwgMjAwKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g0L7RgdGC0LDQvdC+0LLQuNGC0Ywg0LLQuNC00LXQvlxyXG5cclxuXHRcdGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1nYWxsZXJ5IC55b3V0dWJlLW1vZGFsLWdhbGxlcnkuaXMtYWN0aXZlJykpIHtcclxuXHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1nYWxsZXJ5IC55b3V0dWJlLW1vZGFsLWdhbGxlcnkuaXMtYWN0aXZlIGlmcmFtZScpLnJlbW92ZSgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyDRg9C00LDQu9C40YLRjCDQstC40LTQtdC+XHJcblxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXZpZGVvJykuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cdH07XHJcblxyXG5cdEFTS08ubW9kYWxTaG93ID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcblxyXG5cdFx0QVNLTy5hY3RpdmVNb2RhbCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tJyArIHNlbGVjdG9yKTtcclxuXHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGl0ZW1zLCBmdW5jdGlvbihlbCl7XHJcblxyXG5cdFx0XHRlbC5jbGFzc0xpc3QudG9nZ2xlKCdtb2RhbF9faXRlbS0tYWN0aXZlJywgQVNLTy5hY3RpdmVNb2RhbCA9PSBlbCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZnVsbCcsIHNlbGVjdG9yID09PSAnZ2FsbGVyeScgfHwgc2VsZWN0b3IgPT09ICd2aWRlbycpO1xyXG5cclxuXHRcdEFTS08ud2luZG93U2Nyb2xsT2xkID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdHdyYXBwZXIuc3R5bGUudG9wID0gLUFTS08ud2luZG93U2Nyb2xsT2xkICsgJ3B4JztcclxuXHJcblx0XHRBU0tPLmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtc2hvdycpO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsMCk7XHJcblxyXG5cdFx0QVNLTy5hY3RpdmVNb2RhbC5mb2N1cygpO1xyXG5cclxuXHRcdC8vINCy0YvQt9GL0LLRi9C10Lwg0YHQvtCx0YvRgtC40LUg0L3QsCDQsNC60YLQuNCy0L3QvtC8INC+0LrQvdC1XHJcblx0XHRBU0tPLmFjdGl2ZU1vZGFsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdtb2RhbFNob3cnKSk7XHJcblxyXG5cdH1cclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsZnVuY3Rpb24oZSkge1xyXG5cclxuXHRcdHZhciBrZXlDb2RlID0gZS5rZXlDb2RlIHx8IGUud2hpY2g7XHJcblxyXG5cdFx0aWYoa2V5Q29kZSA9PT0gMjcpe1xyXG5cclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ2NsaWNrJyk7XHJcblx0XHRcdG1vZGFsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcblx0XHR2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG5cdFx0d2hpbGUgKHRhcmdldCAhPT0gdGhpcykge1xyXG5cclxuXHRcdFx0aWYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnKSkge1xyXG5cclxuXHRcdFx0XHRBU0tPLm1vZGFsU2hvdyh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsJykpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbn0pKCk7IiwiXHJcbihmdW5jdGlvbihmb3JtKXtcclxuXHJcblx0aWYoZm9ybSkge1xyXG5cclxuXHRcdHZhciBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoLWlucHV0Jyk7XHJcblxyXG5cdFx0Ly8g0L7RgtC/0YDQsNCy0LrQsCDRhNC+0YDQvNGLXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRcdGlmKGlucHV0LnZhbHVlID09PSAnJykge1xyXG5cclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0aW5wdXQuZm9jdXMoKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoJykpOyIsIihmdW5jdGlvbihnYWxsZXJ5KXtcclxuXHJcblx0aWYoZ2FsbGVyeSkge1xyXG5cclxuXHRcdHZhciBnYWxsZXJ5SXRlbSA9IGdhbGxlcnkucXVlcnlTZWxlY3RvckFsbCgnLnNob3ctcm9vbS1nYWxsZXJ5X19pdGVtJyk7XHJcblxyXG5cdFx0QVNLTy5nYWxsZXJ5U3dpcGVyID0gJzxkaXYgY2xhc3M9XCJzd2lwZXItY29udGFpbmVyIHN3aXBlci1jb250YWluZXItLWdhbGxlcnlcIj48dWwgY2xhc3M9XCJub3RzZWwgc3dpcGVyLXdyYXBwZXJcIj4nO1xyXG5cclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZ2FsbGVyeUl0ZW0sIGZ1bmN0aW9uKGxpbmssIGluZGV4KXtcclxuXHJcblx0XHRcdEFTS08uZ2FsbGVyeVN3aXBlciArPSAnPGxpIGNsYXNzPVwic3dpcGVyLXNsaWRlXCI+PGltZyBzcmM9XCInICsgbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSArICdcIj48L2xpPic7XHJcblxyXG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1nYWxsZXJ5JykuaW5uZXJIVE1MID0gQVNLTy5nYWxsZXJ5U3dpcGVyO1xyXG5cclxuXHRcdFx0XHRBU0tPLm1vZGFsU2hvdygnZ2FsbGVyeScpO1xyXG5cclxuXHRcdFx0XHR2YXIgZ2FsbGVyeU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWdhbGxlcnkgLnN3aXBlci1jb250YWluZXItLWdhbGxlcnknKTtcclxuXHJcblx0XHRcdFx0QVNLTy5zd2lwZXIoZ2FsbGVyeU1vZGFsLCBpbmRleCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRBU0tPLmdhbGxlcnlTd2lwZXIgKz0gJzwvdWw+PHNwYW4gY2xhc3M9XCJzd2lwZXItY291bnRcIj48L3NwYW4+PC9kaXY+JztcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG5cdFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG5cdFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG5cdFx0XHRzY3JpcHQuc3JjID0gJy9qcy9zd2lwZXIubWluLmpzJztcclxuXHJcblx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuXHJcblx0XHR9LCBBU0tPLnNldHRpbWVvdXQpO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvdy1yb29tLWdhbGxlcnknKSk7IiwiQVNLTy5zd2lwZXIgPSBmdW5jdGlvbihzd2lwZSwgaW5pdGlhbFNsaWRlKXtcclxuXHJcblx0aWYoc3dpcGUucXVlcnlTZWxlY3RvcignLnN3aXBlci1wYWdpbmF0aW9uJykpe1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHR2YXIgbXlTd2lwZSA9IG51bGwsXHJcblx0XHRyZXNpemVUaW1lb3V0ID0gbnVsbCxcclxuXHRcdHdpbmRvd1dpZHRoT0xkID0gbnVsbCxcclxuXHRcdHRvZ2dsZVN3aXBlID0gbnVsbCxcclxuXHRcdHJlc2V0U3dpcGUgPSBudWxsLFxyXG5cdFx0c3dpcGVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdHN3aXBlTmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG5cdFx0c3dpcGVQcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcblx0XHRpbml0aWFsU2xpZGUgPSBpbml0aWFsU2xpZGUgPyBwYXJzZUludChpbml0aWFsU2xpZGUpIDogMCxcclxuXHRcdGNvdW50ID0gc3dpcGUucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1zbGlkZScpLmxlbmd0aCxcclxuXHRcdGJpZyA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tYmlnJyksXHJcblx0XHRwcm9kdWN0ID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1wcm9kdWN0JyksXHJcblx0XHRnYWxsZXJ5ID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1nYWxsZXJ5Jyk7XHJcblxyXG5cdHN3aXBlTmF2LmNsYXNzTmFtZSA9ICdzd2lwZXItcGFnaW5hdGlvbiBoaWRlJztcclxuXHRzd2lwZVByZXYuY2xhc3NOYW1lID0gJ3N3aXBlci1idXR0b24tcHJldiBidXR0b24gaGlkZSc7XHJcblx0c3dpcGVOZXh0LmNsYXNzTmFtZSA9ICdzd2lwZXItYnV0dG9uLW5leHQgYnV0dG9uIGhpZGUnO1xyXG5cclxuXHRzd2lwZVByZXYuaW5uZXJIVE1MID0gJzxzdmcgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIj48cGF0aCBkPVwiTTk5MCAxMEgxMHY5ODBoOTgwVjEwem0tOTEuNCA0MTYuNXYxNDdIMzk0LjRsMjE1LjMgMjE1LjMtMTE0LjMgMTE0LjRMOTIuMiA1MDAgNDk1LjQgOTYuOGwxMTQuNCAxMTQuNC0yMTUuNCAyMTUuM2g1MDQuMnpcIi8+PC9zdmc+JztcclxuXHJcblx0c3dpcGVOZXh0LmlubmVySFRNTCA9ICc8c3ZnIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCI+PHBhdGggZD1cIk05OTAgMTBIMTB2OTgwaDk4MFYxMHptLTkxLjQgNDE2LjV2MTQ3SDM5NC40bDIxNS4zIDIxNS4zLTExNC4zIDExNC40TDkyLjIgNTAwIDQ5NS40IDk2LjhsMTE0LjQgMTE0LjQtMjE1LjQgMjE1LjNoNTA0LjJ6XCIvPjwvc3ZnPic7XHJcblxyXG5cdHN3aXBlLmFwcGVuZENoaWxkKHN3aXBlTmF2KTtcclxuXHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHN3aXBlTmV4dCk7XHJcblx0c3dpcGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzd2lwZVByZXYpO1xyXG5cclxuXHRyZXNldFN3aXBlID0gZnVuY3Rpb24oKXtcclxuXHJcblx0XHRpZihteVN3aXBlKSB7XHJcblxyXG5cdFx0XHRteVN3aXBlLmRlc3Ryb3koZmFsc2UsdHJ1ZSk7XHJcblx0XHRcdG15U3dpcGUgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdHN3aXBlTmV4dC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRzd2lwZVByZXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdGlmIChBU0tPLndpZHRoIDwgNzY4KSB7XHJcblxyXG5cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0c3dpcGVOZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGVQcmV2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKGJpZykge1xyXG5cclxuXHRcdHJlc2V0U3dpcGUoKTtcclxuXHJcblx0XHR0b2dnbGVTd2lwZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSBmYWxzZTtcclxuXHJcblx0XHRcdG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRcdGVsOiBzd2lwZU5hdlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGlmIChwcm9kdWN0KSB7XHJcblxyXG5cdFx0aWYoQVNLTy53aWR0aCA8IDc2OCkge1xyXG5cclxuXHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYoKGNvdW50ID4gMyB8fCAoY291bnQgPiAyICYmIEFTS08ud2lkdGggPCAxMDAwKSkpIHtcclxuXHJcblx0XHRcdHN3aXBlTmV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlUHJldi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRzd2lwZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLS1vZmYnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dG9nZ2xlU3dpcGUgPSBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGVOZXh0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGVQcmV2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGUuY2xhc3NMaXN0LnJlbW92ZSgnc3dpcGVyLWNvbnRhaW5lci0tb2ZmJyk7XHJcblxyXG5cclxuXHRcdFx0aWYobXlTd2lwZSkge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhteVN3aXBlKVxyXG5cclxuXHRcdFx0XHRteVN3aXBlLmRlc3Ryb3koZmFsc2UsdHJ1ZSk7XHJcblx0XHRcdFx0bXlTd2lwZSA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHRcdFx0Ly8g0YPQtNCw0LvRh9C10Lwg0Y7RgtGD0LEg0LIg0LzQsNC70LXQvdGM0LrQvtC8INGB0LvQsNC50LTQtdGA0LUsINC/0YDQuCDRgNC10YHQsNC50YHQtSDQuNC70Lgg0LXRidC1INC60LDQulxyXG5cdFx0XHRcdGlmKHN3aXBlLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0X19pbWcteW91dHViZS5pcy1hY3RpdmUnKSl7XHJcblxyXG5cdFx0XHRcdFx0c3dpcGUucXVlcnlTZWxlY3RvcignLnByb2R1Y3RfX2ltZy15b3V0dWJlLmlzLWFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRcdGlmKHN3aXBlLnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpKXtcclxuXHJcblx0XHRcdFx0XHRcdHN3aXBlLnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoQVNLTy53aWR0aCA8IDc2OCkge1xyXG5cclxuXHRcdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdGlmKGNvdW50ID4gMSkge1xyXG5cclxuXHRcdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0XHRcdHByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0XHRcdFx0ZWw6IHN3aXBlTmF2LFxyXG5cdFx0XHRcdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRvbjoge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydDogZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYobXlTd2lwZSl7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyDQvtGB0YLQsNC90LDQstC70LjQstCw0LXQvCDRjtGC0YPQsSDQsiDQvNCw0LvQtdC90YzQutC+0Lwg0YHQu9Cw0LnQtNC10YDQtVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYobXlTd2lwZS5zbGlkZXNbbXlTd2lwZS5wcmV2aW91c0luZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1zbGlkZS0teW91dHViZScpKXtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bXlTd2lwZS5zbGlkZXNbbXlTd2lwZS5wcmV2aW91c0luZGV4XS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9faW1nLXlvdXR1YmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYobXlTd2lwZS5zbGlkZXNbbXlTd2lwZS5wcmV2aW91c0luZGV4XS5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKSl7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bXlTd2lwZS5zbGlkZXNbbXlTd2lwZS5wcmV2aW91c0luZGV4XS5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZigoY291bnQgPiAzIHx8IChjb3VudCA+IDIgJiYgQVNLTy53aWR0aCA8IDEwMDApKSkge1xyXG5cclxuXHRcdFx0XHRzd2lwZU5leHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdHN3aXBlUHJldi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0cHJlbG9hZEltYWdlczogZmFsc2UsXHJcblx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRcdG5leHRFbDogc3dpcGVOZXh0LFxyXG5cdFx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0c3dpcGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci0tb2ZmJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGlmIChnYWxsZXJ5KSB7XHJcblxyXG5cdFx0dG9nZ2xlU3dpcGUgPSBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdHZhciBjb3VudEN1cnJlbnQgPSBzd2lwZS5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLWNvdW50Jyk7XHJcblxyXG5cdFx0XHRpZihjb3VudCA+IDEpIHtcclxuXHJcblx0XHRcdFx0c3dpcGVOZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRzd2lwZVByZXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdGNvdW50Q3VycmVudC50ZXh0Q29udGVudCA9IChpbml0aWFsU2xpZGUgKyAxKSArICcvJyArIGNvdW50O1xyXG5cclxuXHRcdFx0XHRpZighbXlTd2lwZSkge1xyXG5cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdnYWxsZXJ5JylcclxuXHJcblx0XHRcdFx0XHRteVN3aXBlID0gbmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRpbml0aWFsU2xpZGU6IGluaXRpYWxTbGlkZSxcclxuXHRcdFx0XHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRcdG5leHRFbDogc3dpcGVOZXh0LFxyXG5cdFx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdG9uOiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHNsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0OiBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZihteVN3aXBlKXtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvdW50Q3VycmVudC50ZXh0Q29udGVudCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bXlTd2lwZS5hY3RpdmVJbmRleCA9PT0gMCB8fCBteVN3aXBlLmFjdGl2ZUluZGV4ID09PSBjb3VudCA/XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb3VudCA6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRteVN3aXBlLmFjdGl2ZUluZGV4ICUgY291bnQ7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb3VudEN1cnJlbnQudGV4dENvbnRlbnQgKz0gJy8nICsgY291bnQ7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyDRg9C00LDQu9GH0LXQvCDRjtGC0YPQsSDQsiDQvNC+0LTQsNC70YzQvdC+0Lwg0L7QutC90LUgKNC+0YHRgtCw0L3QvtCy0LrQsClcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYobXlTd2lwZS5zbGlkZXNbbXlTd2lwZS5wcmV2aW91c0luZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1zbGlkZS0teW91dHViZScpKXtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bXlTd2lwZS5zbGlkZXNbbXlTd2lwZS5wcmV2aW91c0luZGV4XS5xdWVyeVNlbGVjdG9yKCcueW91dHViZS1tb2RhbC1nYWxsZXJ5JykuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmKG15U3dpcGUuc2xpZGVzW215U3dpcGUucHJldmlvdXNJbmRleF0ucXVlcnlTZWxlY3RvcignaWZyYW1lJykpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG15U3dpcGUuc2xpZGVzW215U3dpcGUucHJldmlvdXNJbmRleF0ucXVlcnlTZWxlY3RvcignaWZyYW1lJykucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0c3dpcGVOZXh0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRzd2lwZVByZXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRcdGNvdW50Q3VycmVudC50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3cuU3dpcGVyICYmIHRvZ2dsZVN3aXBlKCk7XHJcblxyXG5cdH1cclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKXtcclxuXHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHRpZiAod2luZG93LlN3aXBlciAmJiAhcmVzaXplVGltZW91dCkge1xyXG5cclxuXHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHJcblx0XHRcdFx0XHRpZihBU0tPLndpZHRoICE9IHdpbmRvd1dpZHRoT0xkKXtcclxuXHJcblx0XHRcdFx0XHRcdHdpbmRvd1dpZHRoT0xkID0gQVNLTy53aWR0aDtcclxuXHJcblx0XHRcdFx0XHRcdHRvZ2dsZVN3aXBlICYmIHRvZ2dsZVN3aXBlKCk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9LCAxMDAwKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59O1xyXG5cclxuXHJcbihmdW5jdGlvbihpdGVtKXtcclxuXHJcblx0aWYoaXRlbS5sZW5ndGgpIHtcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG5cdFx0XHRzY3JpcHQuc3JjID0gJy9qcy9zd2lwZXIubWluLmpzJztcclxuXHJcblx0XHRcdHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzaXplJykpO1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuXHJcblx0XHR9LCBBU0tPLnNldHRpbWVvdXQpO1xyXG5cclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoaXRlbSwgZnVuY3Rpb24oZWwpe1xyXG5cclxuXHRcdFx0QVNLTy5zd2lwZXIoZWwpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLWNvbnRhaW5lcicpKTsiLCJBU0tPLnRhYnMgPSBmdW5jdGlvbihlbGVtcyl7XHJcblxyXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxlbXMsIGZ1bmN0aW9uKHRhYil7XHJcblxyXG5cdFx0dmFyIGJ0biA9IHRhYi5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19fYnRuJyksXHJcblx0XHRcdGl0ZW0gPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2l0ZW0nKSxcclxuXHRcdFx0bmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChidG4sIGZ1bmN0aW9uKGVsLGluZGV4KXtcclxuXHJcblx0XHRcdHZhciBfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcblx0XHRcdFx0X3BhdHRlcm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG5cdFx0XHRfYnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xyXG5cclxuXHRcdFx0X2J0bi5jbGFzc05hbWUgPSAnYnV0dG9uIHRhYnNfX25hdi1idG4nO1xyXG5cdFx0XHRfcGF0dGVybi5jbGFzc05hbWUgPSAncGF0dGVybic7XHJcblxyXG5cdFx0XHRfYnRuLmlubmVySFRNTCA9IGVsLmlubmVySFRNTDtcclxuXHRcdFx0X2J0bi5hcHBlbmRDaGlsZChfcGF0dGVybik7XHJcblxyXG5cdFx0XHRuYXYuYXBwZW5kQ2hpbGQoX2J0bik7XHJcblxyXG5cdFx0XHRlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGl0ZW0sIGZ1bmN0aW9uKGVsZW0saW54KXtcclxuXHJcblx0XHRcdFx0XHRidG5baW54XS5jbGFzc0xpc3QudG9nZ2xlKCd0YWJzX19uYXYtYnRuLS1hY3RpdmUnLCBpbnggPT0gaW5kZXgpO1xyXG5cdFx0XHRcdFx0ZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCd0YWJzX19pdGVtLS1hY3RpdmUnLCBpbnggPT0gaW5kZXgpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdG5hdi5jbGFzc0xpc3QuYWRkKCd0YWJzX19uYXYnKTtcclxuXHJcblx0XHR0YWIuaW5zZXJ0QmVmb3JlKG5hdiwgaXRlbVswXSk7XHJcblxyXG5cdFx0YnRuID0gbmF2LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19uYXYtYnRuJyk7XHJcblxyXG5cdFx0aXRlbVswXS5jbGFzc0xpc3QuYWRkKCd0YWJzX19pdGVtLS1hY3RpdmUnKTtcclxuXHRcdGJ0blswXS5jbGFzc0xpc3QuYWRkKCd0YWJzX19uYXYtYnRuLS1hY3RpdmUnKTtcclxuXHJcblx0fSk7XHJcblxyXG59O1xyXG5cclxuXHJcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzJykubGVuZ3RoKSB7XHJcblxyXG5cdEFTS08udGFicyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicycpKTtcclxuXHJcbn0iLCJcclxuKGZ1bmN0aW9uKGl0ZW1zKXtcclxuXHJcblx0aWYoaXRlbXMubGVuZ3RoID09PSAwKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoaXRlbXMsIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHR2YXIgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG5cdFx0YnRuLmNsYXNzTmFtZSA9ICdidG4gYnRuLS1saW5rJztcclxuXHJcblx0XHRidG4udGV4dENvbnRlbnQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnRuJyk7XHJcblxyXG5cdFx0ZWwuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRlbC5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHQtaGlkZGVuJykpOyIsIlxyXG4oIHRvb2x0aXBzID0+IHtcclxuXHJcblx0aWYodG9vbHRpcHMubGVuZ3RoKXtcclxuXHJcblx0XHRjb25zdCBpY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG5cdFx0aWNvLmlubmVySFRNTCA9ICc8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjAgMTJhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS01Ljc0LTMuODdhMy4xOCAzLjE4IDAgMDEuNTYgMy43OGMtLjM4LjctMSAxLjIyLTEuNzQgMS40OWEuNC40IDAgMDAtLjI4LjM4di42MmEuOC44IDAgMDEtMS42IDBWMTIuOEEuOC44IDAgMDExMiAxMmMuODggMCAxLjYtLjcyIDEuNi0xLjZhMS42IDEuNiAwIDAwLTMuMiAwIC44LjggMCAwMS0xLjU5LjA4bC0uMDEtLjEyYy4wMS0yIDEuODYtMy41NSAzLjk1LTMuMDcuNTcuMTMgMS4xLjQyIDEuNTEuODR6TTEyLjggMTYuOGEuOC44IDAgMTEtMS42IDAgLjguOCAwIDAxMS42IDB6XCIvPjwvc3ZnPic7XHJcblxyXG5cdFx0bGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25SZWNvcmRzID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHQgPSBtdXRhdGlvblJlY29yZHNbMF0udGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpLFxyXG5cdFx0XHRcdCAgcmVjdCA9IHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdFx0XHRpZihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPCByZWN0LnJpZ2h0KSB7XHJcblxyXG5cdFx0XHRcdC8vINC70LXQstC10LVcclxuXHJcblx0XHRcdFx0dC5zdHlsZS5tYXJnaW5MZWZ0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC0gcmVjdC5yaWdodCArICdweCc7XHJcblxyXG5cdFx0XHR9IGVsc2UgaWYocmVjdC5sZWZ0IDwgMCkge1xyXG5cclxuXHRcdFx0XHQvLyDQv9GA0LDQstC10LVcclxuXHJcblx0XHRcdFx0dC5zdHlsZS5tYXJnaW5MZWZ0ID0gLXJlY3QubGVmdCArICdweCc7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbSh0b29sdGlwcywgdG9vbHRpcCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBidG4gPSB0b29sdGlwLnF1ZXJ5U2VsZWN0b3IoJ3N1bW1hcnknKTtcclxuXHJcblx0XHRcdGlmICggdG9vbHRpcC5jbGFzc05hbWUubGVuZ3RoID09PSAwICkge1xyXG5cclxuXHRcdFx0XHRidG4uYXBwZW5kQ2hpbGQoaWNvLmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRvYnNlcnZlci5vYnNlcnZlKHRvb2x0aXAsIHtcclxuXHJcblx0XHRcdFx0YXR0cmlidXRlcyA6IHRydWVcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2RldGFpbHMnKTtcclxuXHJcblx0XHRcdEFycmF5LmZyb20odG9vbHRpcHMsIHRvb2x0aXAgPT4ge1xyXG5cclxuXHRcdFx0XHRpZih0YXJnZXQgIT09IHRvb2x0aXApIHtcclxuXHJcblx0XHRcdFx0XHR0b29sdGlwLm9wZW4gPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RldGFpbHMnKSk7IiwiLy8g0LLQuNC00LXQviDQuNC60L7QvdC60L7QuSwg0LfQsNC/0YPRgSDQsiDQv9C+0L/QsNC/XHJcblxyXG4oZnVuY3Rpb24oeW91dHViZSl7XHJcblxyXG5cdGlmKHlvdXR1YmUubGVuZ3RoKSB7XHJcblxyXG5cdFx0Wy4uLnlvdXR1YmVdLmZvckVhY2goIGxpbmsgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgaWQgPSBsaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG5cclxuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcblxyXG5cdFx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FsbG93ZnVsbHNjcmVlbicsICcnKTtcclxuXHRcdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdhbGxvdycsICdhdXRvcGxheScpO1xyXG5cdFx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICsgaWQgKyAnP3JlbD0wJnNob3dpbmZvPTAmYXV0b3BsYXk9MScpO1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtdmlkZW8nKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG5cclxuXHRcdFx0XHRBU0tPLm1vZGFsU2hvdyhcInZpZGVvXCIpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy55b3V0dWJlLWljbycpKTtcclxuXHJcbi8vINCy0LjQtNC10L4g0LIg0L7Qv9C40YHQsNC90LjQuFxyXG5cclxuKGZ1bmN0aW9uKHlvdXR1YmUpe1xyXG5cclxuXHRpZih5b3V0dWJlLmxlbmd0aCkge1xyXG5cclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoeW91dHViZSwgZnVuY3Rpb24odmlkZW8pe1xyXG5cclxuXHRcdFx0dmFyIGxpbmsgPSB2aWRlby5xdWVyeVNlbGVjdG9yKCcueW91dHViZV9fbGluaycpLFxyXG5cdFx0XHRcdGlkID0gbGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuXHJcblx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0aWYodmlkZW8uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSl7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZpZGVvLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xyXG5cdFx0XHRcdHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuXHRcdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdjb250cm9sc0xpc3QnLCdub2Rvd25sb2FkJyk7XHJcblx0XHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnZGlzYWJsZVBpY3R1cmVJblBpY3R1cmUnLCd0cnVlJyk7XHJcblx0XHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnYWxsb3dmdWxsc2NyZWVuJywnYWxsb3dmdWxsc2NyZWVuJyk7XHJcblx0XHRcdFx0aWZyYW1lLnNyYyA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICsgaWQgKyAnP2F1dG9wbGF5PTEmY29udHJvbHM9MCc7XHJcblx0XHRcdFx0dmlkZW8uYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueW91dHViZScpKTtcclxuXHJcbihmdW5jdGlvbih5b3V0dWJlKXtcclxuXHJcblx0aWYoeW91dHViZSkge1xyXG5cclxuXHQvLyBUaGlzIGNvZGUgbG9hZHMgdGhlIElGcmFtZSBQbGF5ZXIgQVBJIGNvZGUgYXN5bmNocm9ub3VzbHkuXHJcbi8qXHRcdHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRcdHRhZy5zcmMgPSBcImh0dHA6Ly93d3cueW91dHViZS5jb20vcGxheWVyX2FwaVwiO1xyXG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0YWcpO1xyXG4qL1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuXHRcdFx0dmFyIHlvdXR1YmUgPSBudWxsO1xyXG5cclxuXHRcdC8vINGB0LvRg9GI0LDQtdC8INCy0LjQtNC10L4g0LIg0YHQu9Cw0LnQtNC10YDQtSDQsNC00LDQv9GC0LjQslxyXG5cdFx0XHRpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xyXG5cclxuXHRcdFx0XHR5b3V0dWJlID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2R1Y3RfX2ltZy15b3V0dWJlJyk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdC8vINC10YHQu9C4INCy0LjQtNC10L4g0LIg0LzQvtC00LDQu9C60LVcclxuXHRcdFx0XHR5b3V0dWJlID0gZS50YXJnZXQuY2xvc2VzdCgnLnlvdXR1YmUtbW9kYWwtZ2FsbGVyeScpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdC8vINGB0L7Qt9C00LDQtdC8INC4INCy0YHRgtCw0LLQu9GP0LXQvCDQstC40LTQtdC+XHJcblx0XHRcdGlmKHlvdXR1YmUgJiYgIXlvdXR1YmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSl7XHJcblxyXG5cdFx0XHRcdHlvdXR1YmUuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdHZhciBpZCA9IHlvdXR1YmUuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblxyXG5cdFx0XHRcdHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuXHRcdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdpZCcsJ3BsYXllci0nICsgaWQpO1xyXG5cdFx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzTGlzdCcsJ25vZG93bmxvYWQnKTtcclxuXHRcdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdkaXNhYmxlUGljdHVyZUluUGljdHVyZScsJ3RydWUnKTtcclxuXHRcdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdhbGxvd2Z1bGxzY3JlZW4nLCdhbGxvd2Z1bGxzY3JlZW4nKTtcclxuXHRcdFx0XHRpZnJhbWUuc3JjID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyBpZCArICc/YXV0b3BsYXk9MSZjb250cm9scz0wJztcclxuXHRcdFx0XHR5b3V0dWJlLmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0X19pbWcteW91dHViZScpKTsiXX0=
