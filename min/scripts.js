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

			const t = mutationRecords[0].target,
				  rect = t.getBoundingClientRect();

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50VXAubWluLmpzIiwianMuY29va2llLm1pbi5qcyIsInBvbHlmaWxsLmpzIiwic21vb3Roc2Nyb2xsLm1pbi5qcyIsImpzLmpzIiwiYnV5LmpzIiwiY29va2llLmpzIiwiZmlsdGVyLmpzIiwiZm9ybS1teS1saXN0LmpzIiwiZm9ybS5qcyIsImdhbGxlcnkuanMiLCJnb2Fscy5qcyIsImhlYWRlckNhcnQuanMiLCJtZW51LmpzIiwibW9kYWwuanMiLCJzZWFyY2guanMiLCJzaG93LXJvb20uanMiLCJzd2lwZXIuanMiLCJ0YWJzLmpzIiwidGV4dC1oaWRkZW4uanMiLCJ0b29sdGlwLmpzIiwieW91dHViZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEZBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDek1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDalFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbihhLG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUobik6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9bihyZXF1aXJlLGV4cG9ydHMsbW9kdWxlKTphLkNvdW50VXA9bigpfSh0aGlzLGZ1bmN0aW9uKGEsbix0KXtyZXR1cm4gZnVuY3Rpb24oYSxuLHQsZSxpLHIpe3ZhciB1PXRoaXM7aWYodS52ZXJzaW9uPWZ1bmN0aW9uKCl7cmV0dXJuXCIxLjkuM1wifSx1Lm9wdGlvbnM9e3VzZUVhc2luZzohMCx1c2VHcm91cGluZzohMCxzZXBhcmF0b3I6XCIsXCIsZGVjaW1hbDpcIi5cIixlYXNpbmdGbjpmdW5jdGlvbihhLG4sdCxlKXtyZXR1cm4gdCooMS1NYXRoLnBvdygyLC0xMCphL2UpKSoxMDI0LzEwMjMrbn0sZm9ybWF0dGluZ0ZuOmZ1bmN0aW9uKGEpe3ZhciBuLHQsZSxpLHIsbyxzPWE8MDtpZihhPU1hdGguYWJzKGEpLnRvRml4ZWQodS5kZWNpbWFscyksbj0oYSs9XCJcIikuc3BsaXQoXCIuXCIpLHQ9blswXSxlPTE8bi5sZW5ndGg/dS5vcHRpb25zLmRlY2ltYWwrblsxXTpcIlwiLHUub3B0aW9ucy51c2VHcm91cGluZyl7Zm9yKGk9XCJcIixyPTAsbz10Lmxlbmd0aDtyPG87KytyKTAhPT1yJiZyJTM9PTAmJihpPXUub3B0aW9ucy5zZXBhcmF0b3IraSksaT10W28tci0xXStpO3Q9aX1yZXR1cm4gdS5vcHRpb25zLm51bWVyYWxzLmxlbmd0aCYmKHQ9dC5yZXBsYWNlKC9bMC05XS9nLGZ1bmN0aW9uKGEpe3JldHVybiB1Lm9wdGlvbnMubnVtZXJhbHNbK2FdfSksZT1lLnJlcGxhY2UoL1swLTldL2csZnVuY3Rpb24oYSl7cmV0dXJuIHUub3B0aW9ucy5udW1lcmFsc1srYV19KSksKHM/XCItXCI6XCJcIikrdS5vcHRpb25zLnByZWZpeCt0K2UrdS5vcHRpb25zLnN1ZmZpeH0scHJlZml4OlwiXCIsc3VmZml4OlwiXCIsbnVtZXJhbHM6W119LHImJlwib2JqZWN0XCI9PXR5cGVvZiByKWZvcih2YXIgbyBpbiB1Lm9wdGlvbnMpci5oYXNPd25Qcm9wZXJ0eShvKSYmbnVsbCE9PXJbb10mJih1Lm9wdGlvbnNbb109cltvXSk7XCJcIj09PXUub3B0aW9ucy5zZXBhcmF0b3I/dS5vcHRpb25zLnVzZUdyb3VwaW5nPSExOnUub3B0aW9ucy5zZXBhcmF0b3I9XCJcIit1Lm9wdGlvbnMuc2VwYXJhdG9yO2Zvcih2YXIgcz0wLGw9W1wid2Via2l0XCIsXCJtb3pcIixcIm1zXCIsXCJvXCJdLG09MDttPGwubGVuZ3RoJiYhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsrK20pd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT13aW5kb3dbbFttXStcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXSx3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU9d2luZG93W2xbbV0rXCJDYW5jZWxBbmltYXRpb25GcmFtZVwiXXx8d2luZG93W2xbbV0rXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07ZnVuY3Rpb24gZChhKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgYSYmIWlzTmFOKGEpfXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKGEsbil7dmFyIHQ9KG5ldyBEYXRlKS5nZXRUaW1lKCksZT1NYXRoLm1heCgwLDE2LSh0LXMpKSxpPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YSh0K2UpfSxlKTtyZXR1cm4gcz10K2UsaX0pLHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZXx8KHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZT1mdW5jdGlvbihhKXtjbGVhclRpbWVvdXQoYSl9KSx1LmluaXRpYWxpemU9ZnVuY3Rpb24oKXtyZXR1cm4hIXUuaW5pdGlhbGl6ZWR8fCh1LmVycm9yPVwiXCIsdS5kPVwic3RyaW5nXCI9PXR5cGVvZiBhP2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGEpOmEsdS5kPyh1LnN0YXJ0VmFsPU51bWJlcihuKSx1LmVuZFZhbD1OdW1iZXIodCksZCh1LnN0YXJ0VmFsKSYmZCh1LmVuZFZhbCk/KHUuZGVjaW1hbHM9TWF0aC5tYXgoMCxlfHwwKSx1LmRlYz1NYXRoLnBvdygxMCx1LmRlY2ltYWxzKSx1LmR1cmF0aW9uPTFlMypOdW1iZXIoaSl8fDJlMyx1LmNvdW50RG93bj11LnN0YXJ0VmFsPnUuZW5kVmFsLHUuZnJhbWVWYWw9dS5zdGFydFZhbCx1LmluaXRpYWxpemVkPSEwKToodS5lcnJvcj1cIltDb3VudFVwXSBzdGFydFZhbCAoXCIrbitcIikgb3IgZW5kVmFsIChcIit0K1wiKSBpcyBub3QgYSBudW1iZXJcIiwhMSkpOiEodS5lcnJvcj1cIltDb3VudFVwXSB0YXJnZXQgaXMgbnVsbCBvciB1bmRlZmluZWRcIikpfSx1LnByaW50VmFsdWU9ZnVuY3Rpb24oYSl7dmFyIG49dS5vcHRpb25zLmZvcm1hdHRpbmdGbihhKTtcIklOUFVUXCI9PT11LmQudGFnTmFtZT90aGlzLmQudmFsdWU9bjpcInRleHRcIj09PXUuZC50YWdOYW1lfHxcInRzcGFuXCI9PT11LmQudGFnTmFtZT90aGlzLmQudGV4dENvbnRlbnQ9bjp0aGlzLmQuaW5uZXJIVE1MPW59LHUuY291bnQ9ZnVuY3Rpb24oYSl7dS5zdGFydFRpbWV8fCh1LnN0YXJ0VGltZT1hKTt2YXIgbj0odS50aW1lc3RhbXA9YSktdS5zdGFydFRpbWU7dS5yZW1haW5pbmc9dS5kdXJhdGlvbi1uLHUub3B0aW9ucy51c2VFYXNpbmc/dS5jb3VudERvd24/dS5mcmFtZVZhbD11LnN0YXJ0VmFsLXUub3B0aW9ucy5lYXNpbmdGbihuLDAsdS5zdGFydFZhbC11LmVuZFZhbCx1LmR1cmF0aW9uKTp1LmZyYW1lVmFsPXUub3B0aW9ucy5lYXNpbmdGbihuLHUuc3RhcnRWYWwsdS5lbmRWYWwtdS5zdGFydFZhbCx1LmR1cmF0aW9uKTp1LmNvdW50RG93bj91LmZyYW1lVmFsPXUuc3RhcnRWYWwtKHUuc3RhcnRWYWwtdS5lbmRWYWwpKihuL3UuZHVyYXRpb24pOnUuZnJhbWVWYWw9dS5zdGFydFZhbCsodS5lbmRWYWwtdS5zdGFydFZhbCkqKG4vdS5kdXJhdGlvbiksdS5jb3VudERvd24/dS5mcmFtZVZhbD11LmZyYW1lVmFsPHUuZW5kVmFsP3UuZW5kVmFsOnUuZnJhbWVWYWw6dS5mcmFtZVZhbD11LmZyYW1lVmFsPnUuZW5kVmFsP3UuZW5kVmFsOnUuZnJhbWVWYWwsdS5mcmFtZVZhbD1NYXRoLnJvdW5kKHUuZnJhbWVWYWwqdS5kZWMpL3UuZGVjLHUucHJpbnRWYWx1ZSh1LmZyYW1lVmFsKSxuPHUuZHVyYXRpb24/dS5yQUY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUuY291bnQpOnUuY2FsbGJhY2smJnUuY2FsbGJhY2soKX0sdS5zdGFydD1mdW5jdGlvbihhKXt1LmluaXRpYWxpemUoKSYmKHUuY2FsbGJhY2s9YSx1LnJBRj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodS5jb3VudCkpfSx1LnBhdXNlUmVzdW1lPWZ1bmN0aW9uKCl7dS5wYXVzZWQ/KHUucGF1c2VkPSExLGRlbGV0ZSB1LnN0YXJ0VGltZSx1LmR1cmF0aW9uPXUucmVtYWluaW5nLHUuc3RhcnRWYWw9dS5mcmFtZVZhbCxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodS5jb3VudCkpOih1LnBhdXNlZD0hMCxjYW5jZWxBbmltYXRpb25GcmFtZSh1LnJBRikpfSx1LnJlc2V0PWZ1bmN0aW9uKCl7dS5wYXVzZWQ9ITEsZGVsZXRlIHUuc3RhcnRUaW1lLHUuaW5pdGlhbGl6ZWQ9ITEsdS5pbml0aWFsaXplKCkmJihjYW5jZWxBbmltYXRpb25GcmFtZSh1LnJBRiksdS5wcmludFZhbHVlKHUuc3RhcnRWYWwpKX0sdS51cGRhdGU9ZnVuY3Rpb24oYSl7dS5pbml0aWFsaXplKCkmJihkKGE9TnVtYmVyKGEpKT8odS5lcnJvcj1cIlwiLGEhPT11LmZyYW1lVmFsJiYoY2FuY2VsQW5pbWF0aW9uRnJhbWUodS5yQUYpLHUucGF1c2VkPSExLGRlbGV0ZSB1LnN0YXJ0VGltZSx1LnN0YXJ0VmFsPXUuZnJhbWVWYWwsdS5lbmRWYWw9YSx1LmNvdW50RG93bj11LnN0YXJ0VmFsPnUuZW5kVmFsLHUuckFGPXJlcXVlc3RBbmltYXRpb25GcmFtZSh1LmNvdW50KSkpOnUuZXJyb3I9XCJbQ291bnRVcF0gdXBkYXRlKCkgLSBuZXcgZW5kVmFsIGlzIG5vdCBhIG51bWJlcjogXCIrYSl9LHUuaW5pdGlhbGl6ZSgpJiZ1LnByaW50VmFsdWUodS5zdGFydFZhbCl9fSk7IiwiLyohXHJcbiAqIEphdmFTY3JpcHQgQ29va2llIHYyLjIuMFxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAwNiwgMjAxNSBLbGF1cyBIYXJ0bCAmIEZhZ25lciBCcmFja1xyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICovXHJcbiFmdW5jdGlvbihlKXt2YXIgbj0hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJihkZWZpbmUoZSksbj0hMCksXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJihtb2R1bGUuZXhwb3J0cz1lKCksbj0hMCksIW4pe3ZhciBvPXdpbmRvdy5Db29raWVzLHQ9d2luZG93LkNvb2tpZXM9ZSgpO3Qubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiB3aW5kb3cuQ29va2llcz1vLHR9fX0oZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7Zm9yKHZhciBlPTAsbj17fTtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXt2YXIgbz1hcmd1bWVudHNbZV07Zm9yKHZhciB0IGluIG8pblt0XT1vW3RdfXJldHVybiBufXJldHVybiBmdW5jdGlvbiBuKG8pe2Z1bmN0aW9uIHQobixyLGkpe3ZhciBjO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCl7aWYoYXJndW1lbnRzLmxlbmd0aD4xKXtpZihcIm51bWJlclwiPT10eXBlb2YoaT1lKHtwYXRoOlwiL1wifSx0LmRlZmF1bHRzLGkpKS5leHBpcmVzKXt2YXIgYT1uZXcgRGF0ZTthLnNldE1pbGxpc2Vjb25kcyhhLmdldE1pbGxpc2Vjb25kcygpKzg2NGU1KmkuZXhwaXJlcyksaS5leHBpcmVzPWF9aS5leHBpcmVzPWkuZXhwaXJlcz9pLmV4cGlyZXMudG9VVENTdHJpbmcoKTpcIlwiO3RyeXtjPUpTT04uc3RyaW5naWZ5KHIpLC9eW1xce1xcW10vLnRlc3QoYykmJihyPWMpfWNhdGNoKGUpe31yPW8ud3JpdGU/by53cml0ZShyLG4pOmVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcocikpLnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8M0F8M0N8M0V8M0R8MkZ8M0Z8NDB8NUJ8NUR8NUV8NjB8N0J8N0R8N0MpL2csZGVjb2RlVVJJQ29tcG9uZW50KSxuPShuPShuPWVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcobikpKS5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDVFfDYwfDdDKS9nLGRlY29kZVVSSUNvbXBvbmVudCkpLnJlcGxhY2UoL1tcXChcXCldL2csZXNjYXBlKTt2YXIgcz1cIlwiO2Zvcih2YXIgZiBpbiBpKWlbZl0mJihzKz1cIjsgXCIrZiwhMCE9PWlbZl0mJihzKz1cIj1cIitpW2ZdKSk7cmV0dXJuIGRvY3VtZW50LmNvb2tpZT1uK1wiPVwiK3Irc31ufHwoYz17fSk7Zm9yKHZhciBwPWRvY3VtZW50LmNvb2tpZT9kb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKTpbXSxkPS8oJVswLTlBLVpdezJ9KSsvZyx1PTA7dTxwLmxlbmd0aDt1Kyspe3ZhciBsPXBbdV0uc3BsaXQoXCI9XCIpLEM9bC5zbGljZSgxKS5qb2luKFwiPVwiKTt0aGlzLmpzb258fCdcIichPT1DLmNoYXJBdCgwKXx8KEM9Qy5zbGljZSgxLC0xKSk7dHJ5e3ZhciBnPWxbMF0ucmVwbGFjZShkLGRlY29kZVVSSUNvbXBvbmVudCk7aWYoQz1vLnJlYWQ/by5yZWFkKEMsZyk6byhDLGcpfHxDLnJlcGxhY2UoZCxkZWNvZGVVUklDb21wb25lbnQpLHRoaXMuanNvbil0cnl7Qz1KU09OLnBhcnNlKEMpfWNhdGNoKGUpe31pZihuPT09Zyl7Yz1DO2JyZWFrfW58fChjW2ddPUMpfWNhdGNoKGUpe319cmV0dXJuIGN9fXJldHVybiB0LnNldD10LHQuZ2V0PWZ1bmN0aW9uKGUpe3JldHVybiB0LmNhbGwodCxlKX0sdC5nZXRKU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHQuYXBwbHkoe2pzb246ITB9LFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSl9LHQuZGVmYXVsdHM9e30sdC5yZW1vdmU9ZnVuY3Rpb24obixvKXt0KG4sXCJcIixlKG8se2V4cGlyZXM6LTF9KSl9LHQud2l0aENvbnZlcnRlcj1uLHR9KGZ1bmN0aW9uKCl7fSl9KTsiLCIvKiBQb2x5ZmlsbCBzZXJ2aWNlIHYzLjE2LjBcclxuICogRm9yIGRldGFpbGVkIGNyZWRpdHMgYW5kIGxpY2VuY2UgaW5mb3JtYXRpb24gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9maW5hbmNpYWwtdGltZXMvcG9seWZpbGwtc2VydmljZS5cclxuICpcclxuICogVUEgZGV0ZWN0ZWQ6IGllLzExLjAuMFxyXG4gKiBGZWF0dXJlcyByZXF1ZXN0ZWQ6IGRlZmF1bHRcclxuICpcclxuICogLSBBcnJheS5mcm9tLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIEFycmF5Lm9mLCBMaWNlbnNlOiBNSVQgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIEFycmF5LnByb3RvdHlwZS5maWxsLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIEV2ZW50LCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiLCBcIkN1c3RvbUV2ZW50XCIsIFwiUHJvbWlzZVwiKVxyXG4gKiAtIEN1c3RvbUV2ZW50LCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIF9ET01Ub2tlbkxpc3QsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJET01Ub2tlbkxpc3RcIiwgXCJkZWZhdWx0XCIpXHJcbiAqIC0gRE9NVG9rZW5MaXN0LCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIF9tdXRhdGlvbiwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcIkVsZW1lbnQucHJvdG90eXBlLmFmdGVyXCIsIFwiZGVmYXVsdFwiLCBcIkVsZW1lbnQucHJvdG90eXBlLmFwcGVuZFwiLCBcIkVsZW1lbnQucHJvdG90eXBlLmJlZm9yZVwiLCBcIkVsZW1lbnQucHJvdG90eXBlLnByZXBlbmRcIiwgXCJFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVcIiwgXCJFbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlV2l0aFwiKVxyXG4gKiAtIEVsZW1lbnQucHJvdG90eXBlLmFmdGVyLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIEVsZW1lbnQucHJvdG90eXBlLmFwcGVuZCwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBFbGVtZW50LnByb3RvdHlwZS5iZWZvcmUsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcywgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIiwgXCJFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0XCIpXHJcbiAqIC0gRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBFbGVtZW50LnByb3RvdHlwZS5wcmVwZW5kLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBFbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlV2l0aCwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBTeW1ib2wsIExpY2Vuc2U6IE1JVCAocmVxdWlyZWQgYnkgXCJNYXBcIiwgXCJkZWZhdWx0XCIsIFwiU2V0XCIsIFwiU3ltYm9sLml0ZXJhdG9yXCIsIFwiU3ltYm9sLnNwZWNpZXNcIilcclxuICogLSBTeW1ib2wuaXRlcmF0b3IsIExpY2Vuc2U6IE1JVCAocmVxdWlyZWQgYnkgXCJNYXBcIiwgXCJkZWZhdWx0XCIsIFwiU2V0XCIpXHJcbiAqIC0gU3ltYm9sLnNwZWNpZXMsIExpY2Vuc2U6IE1JVCAocmVxdWlyZWQgYnkgXCJNYXBcIiwgXCJkZWZhdWx0XCIsIFwiU2V0XCIpXHJcbiAqIC0gTnVtYmVyLmlzTmFOLCBMaWNlbnNlOiBNSVQgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiLCBcIk1hcFwiLCBcIlNldFwiKVxyXG4gKiAtIE1hcCwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBOb2RlLnByb3RvdHlwZS5jb250YWlucywgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBPYmplY3QuYXNzaWduLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIFByb21pc2UsIExpY2Vuc2U6IE1JVCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gU2V0LCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGgsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcywgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGgsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gVVJMLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKSAqL1xyXG5cclxuXHJcblxyXG4vLyBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzXHJcbkVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUub01hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZnVuY3Rpb24gbWF0Y2hlcyhzZWxlY3Rvcikge1xyXG5cclxuXHR2YXIgZWxlbWVudCA9IHRoaXM7XHJcblx0dmFyIGVsZW1lbnRzID0gKGVsZW1lbnQuZG9jdW1lbnQgfHwgZWxlbWVudC5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHR2YXIgaW5kZXggPSAwO1xyXG5cclxuXHR3aGlsZSAoZWxlbWVudHNbaW5kZXhdICYmIGVsZW1lbnRzW2luZGV4XSAhPT0gZWxlbWVudCkge1xyXG5cdFx0KytpbmRleDtcclxuXHR9XHJcblxyXG5cdHJldHVybiAhIWVsZW1lbnRzW2luZGV4XTtcclxufTtcclxuXHJcbi8vIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3RcclxuRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uIGNsb3Nlc3Qoc2VsZWN0b3IpIHtcclxuXHR2YXIgbm9kZSA9IHRoaXM7XHJcblxyXG5cdHdoaWxlIChub2RlKSB7XHJcblx0XHRpZiAobm9kZS5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIG5vZGU7XHJcblx0XHRlbHNlIG5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQ7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcblxyXG5cclxuLyohIEBzb3VyY2UgaHR0cDovL3B1cmwuZWxpZ3JleS5jb20vZ2l0aHViL2NsYXNzTGlzdC5qcy9ibG9iL21hc3Rlci9jbGFzc0xpc3QuanMgKi9cclxuXCJkb2N1bWVudFwiaW4gc2VsZiYmKFwiY2xhc3NMaXN0XCJpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKSYmKCFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlN8fFwiY2xhc3NMaXN0XCJpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwiZ1wiKSl8fGZ1bmN0aW9uKGEpe2lmKFwiRWxlbWVudFwiaW4gYSl7YT1hLkVsZW1lbnQucHJvdG90eXBlO3ZhciBoPU9iamVjdCxsPVN0cmluZy5wcm90b3R5cGUudHJpbXx8ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLFwiXCIpfSxuPUFycmF5LnByb3RvdHlwZS5pbmRleE9mfHxmdW5jdGlvbihjKXtmb3IodmFyIGI9MCxrPXRoaXMubGVuZ3RoO2I8aztiKyspaWYoYiBpbiB0aGlzJiZ0aGlzW2JdPT09YylyZXR1cm4gYjtyZXR1cm4tMX0sZj1mdW5jdGlvbihjLGIpe3RoaXMubmFtZT1jO3RoaXMuY29kZT1ET01FeGNlcHRpb25bY107dGhpcy5tZXNzYWdlPWJ9LGU9ZnVuY3Rpb24oYyxcclxuYil7aWYoXCJcIj09PWIpdGhyb3cgbmV3IGYoXCJTWU5UQVhfRVJSXCIsXCJUaGUgdG9rZW4gbXVzdCBub3QgYmUgZW1wdHkuXCIpO2lmKC9cXHMvLnRlc3QoYikpdGhyb3cgbmV3IGYoXCJJTlZBTElEX0NIQVJBQ1RFUl9FUlJcIixcIlRoZSB0b2tlbiBtdXN0IG5vdCBjb250YWluIHNwYWNlIGNoYXJhY3RlcnMuXCIpO3JldHVybiBuLmNhbGwoYyxiKX0sZz1mdW5jdGlvbihjKXt2YXIgYj1sLmNhbGwoYy5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIik7Yj1iP2Iuc3BsaXQoL1xccysvKTpbXTtmb3IodmFyIGs9MCxlPWIubGVuZ3RoO2s8ZTtrKyspdGhpcy5wdXNoKGJba10pO3RoaXMuX3VwZGF0ZUNsYXNzTmFtZT1mdW5jdGlvbigpe2Muc2V0QXR0cmlidXRlKFwiY2xhc3NcIix0aGlzLnRvU3RyaW5nKCkpfX0sZD1nLnByb3RvdHlwZT1bXSxtPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBnKHRoaXMpfTtmLnByb3RvdHlwZT1FcnJvci5wcm90b3R5cGU7ZC5pdGVtPWZ1bmN0aW9uKGMpe3JldHVybiB0aGlzW2NdfHxcclxubnVsbH07ZC5jb250YWlucz1mdW5jdGlvbihjKXtyZXR1cm4hfmUodGhpcyxjK1wiXCIpfTtkLmFkZD1mdW5jdGlvbigpe3ZhciBjPWFyZ3VtZW50cyxiPTAsaz1jLmxlbmd0aCxkPSExO2Rve3ZhciBhPWNbYl0rXCJcIjt+ZSh0aGlzLGEpJiYodGhpcy5wdXNoKGEpLGQ9ITApfXdoaWxlKCsrYjxrKTtkJiZ0aGlzLl91cGRhdGVDbGFzc05hbWUoKX07ZC5yZW1vdmU9ZnVuY3Rpb24oKXt2YXIgYz1hcmd1bWVudHMsYj0wLGQ9Yy5sZW5ndGgsYT0hMSxmO2Rve3ZhciBnPWNbYl0rXCJcIjtmb3IoZj1lKHRoaXMsZyk7fmY7KXRoaXMuc3BsaWNlKGYsMSksYT0hMCxmPWUodGhpcyxnKX13aGlsZSgrK2I8ZCk7YSYmdGhpcy5fdXBkYXRlQ2xhc3NOYW1lKCl9O2QudG9nZ2xlPWZ1bmN0aW9uKGMsYil7dmFyIGE9dGhpcy5jb250YWlucyhjKSxkPWE/ITAhPT1iJiZcInJlbW92ZVwiOiExIT09YiYmXCJhZGRcIjtpZihkKXRoaXNbZF0oYyk7cmV0dXJuITA9PT1ifHwhMT09PWI/YjohYX07ZC5yZXBsYWNlPWZ1bmN0aW9uKGMsXHJcbmIpe3ZhciBhPWUoYytcIlwiKTt+YSYmKHRoaXMuc3BsaWNlKGEsMSxiKSx0aGlzLl91cGRhdGVDbGFzc05hbWUoKSl9O2QudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5qb2luKFwiIFwiKX07aWYoaC5kZWZpbmVQcm9wZXJ0eSl7ZD17Z2V0Om0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9O3RyeXtoLmRlZmluZVByb3BlcnR5KGEsXCJjbGFzc0xpc3RcIixkKX1jYXRjaChjKXtpZih2b2lkIDA9PT1jLm51bWJlcnx8LTIxNDY4MjMyNTI9PT1jLm51bWJlcilkLmVudW1lcmFibGU9ITEsaC5kZWZpbmVQcm9wZXJ0eShhLFwiY2xhc3NMaXN0XCIsZCl9fWVsc2UgaC5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXyYmYS5fX2RlZmluZUdldHRlcl9fKFwiY2xhc3NMaXN0XCIsbSl9fShzZWxmKSxmdW5jdGlvbigpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJfXCIpO2EuY2xhc3NMaXN0LmFkZChcImMxXCIsXCJjMlwiKTtpZighYS5jbGFzc0xpc3QuY29udGFpbnMoXCJjMlwiKSl7dmFyIGg9XHJcbmZ1bmN0aW9uKGEpe3ZhciBmPURPTVRva2VuTGlzdC5wcm90b3R5cGVbYV07RE9NVG9rZW5MaXN0LnByb3RvdHlwZVthXT1mdW5jdGlvbihhKXt2YXIgZSxkPWFyZ3VtZW50cy5sZW5ndGg7Zm9yKGU9MDtlPGQ7ZSsrKWE9YXJndW1lbnRzW2VdLGYuY2FsbCh0aGlzLGEpfX07aChcImFkZFwiKTtoKFwicmVtb3ZlXCIpfWEuY2xhc3NMaXN0LnRvZ2dsZShcImMzXCIsITEpO2lmKGEuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYzNcIikpe3ZhciBsPURPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlO0RPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlPWZ1bmN0aW9uKGEsZil7cmV0dXJuIDEgaW4gYXJndW1lbnRzJiYhdGhpcy5jb250YWlucyhhKT09PSFmP2Y6bC5jYWxsKHRoaXMsYSl9fVwicmVwbGFjZVwiaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIl9cIikuY2xhc3NMaXN0fHwoRE9NVG9rZW5MaXN0LnByb3RvdHlwZS5yZXBsYWNlPWZ1bmN0aW9uKGEsZil7dmFyIGU9dGhpcy50b1N0cmluZygpLnNwbGl0KFwiIFwiKSxcclxuZz1lLmluZGV4T2YoYStcIlwiKTt+ZyYmKGU9ZS5zbGljZShnKSx0aGlzLnJlbW92ZS5hcHBseSh0aGlzLGUpLHRoaXMuYWRkKGYpLHRoaXMuYWRkLmFwcGx5KHRoaXMsZS5zbGljZSgxKSkpfSk7YT1udWxsfSgpKTtcclxuXHJcblxyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgaWYgKCB0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSBcImZ1bmN0aW9uXCIgKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIGZ1bmN0aW9uIEN1c3RvbUV2ZW50ICggZXZlbnQsIHBhcmFtcyApIHtcclxuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiBudWxsIH07XHJcbiAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoICdDdXN0b21FdmVudCcgKTtcclxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoIGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwgKTtcclxuICAgIHJldHVybiBldnQ7XHJcbiAgIH1cclxuXHJcbiAgd2luZG93LkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnQ7XHJcbn0pKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcG9seWZpbGwoKXt2YXIgbz13aW5kb3csdD1kb2N1bWVudDtpZighKFwic2Nyb2xsQmVoYXZpb3JcImluIHQuZG9jdW1lbnRFbGVtZW50LnN0eWxlJiYhMCE9PW8uX19mb3JjZVNtb290aFNjcm9sbFBvbHlmaWxsX18pKXt2YXIgbCxlPW8uSFRNTEVsZW1lbnR8fG8uRWxlbWVudCxyPTQ2OCxpPXtzY3JvbGw6by5zY3JvbGx8fG8uc2Nyb2xsVG8sc2Nyb2xsQnk6by5zY3JvbGxCeSxlbGVtZW50U2Nyb2xsOmUucHJvdG90eXBlLnNjcm9sbHx8bixzY3JvbGxJbnRvVmlldzplLnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld30scz1vLnBlcmZvcm1hbmNlJiZvLnBlcmZvcm1hbmNlLm5vdz9vLnBlcmZvcm1hbmNlLm5vdy5iaW5kKG8ucGVyZm9ybWFuY2UpOkRhdGUubm93LGM9KGw9by5uYXZpZ2F0b3IudXNlckFnZW50LG5ldyBSZWdFeHAoW1wiTVNJRSBcIixcIlRyaWRlbnQvXCIsXCJFZGdlL1wiXS5qb2luKFwifFwiKSkudGVzdChsKT8xOjApO28uc2Nyb2xsPW8uc2Nyb2xsVG89ZnVuY3Rpb24oKXt2b2lkIDAhPT1hcmd1bWVudHNbMF0mJighMCE9PWYoYXJndW1lbnRzWzBdKT92LmNhbGwobyx0LmJvZHksdm9pZCAwIT09YXJndW1lbnRzWzBdLmxlZnQ/fn5hcmd1bWVudHNbMF0ubGVmdDpvLnNjcm9sbFh8fG8ucGFnZVhPZmZzZXQsdm9pZCAwIT09YXJndW1lbnRzWzBdLnRvcD9+fmFyZ3VtZW50c1swXS50b3A6by5zY3JvbGxZfHxvLnBhZ2VZT2Zmc2V0KTppLnNjcm9sbC5jYWxsKG8sdm9pZCAwIT09YXJndW1lbnRzWzBdLmxlZnQ/YXJndW1lbnRzWzBdLmxlZnQ6XCJvYmplY3RcIiE9dHlwZW9mIGFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06by5zY3JvbGxYfHxvLnBhZ2VYT2Zmc2V0LHZvaWQgMCE9PWFyZ3VtZW50c1swXS50b3A/YXJndW1lbnRzWzBdLnRvcDp2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOm8uc2Nyb2xsWXx8by5wYWdlWU9mZnNldCkpfSxvLnNjcm9sbEJ5PWZ1bmN0aW9uKCl7dm9pZCAwIT09YXJndW1lbnRzWzBdJiYoZihhcmd1bWVudHNbMF0pP2kuc2Nyb2xsQnkuY2FsbChvLHZvaWQgMCE9PWFyZ3VtZW50c1swXS5sZWZ0P2FyZ3VtZW50c1swXS5sZWZ0Olwib2JqZWN0XCIhPXR5cGVvZiBhcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjAsdm9pZCAwIT09YXJndW1lbnRzWzBdLnRvcD9hcmd1bWVudHNbMF0udG9wOnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06MCk6di5jYWxsKG8sdC5ib2R5LH5+YXJndW1lbnRzWzBdLmxlZnQrKG8uc2Nyb2xsWHx8by5wYWdlWE9mZnNldCksfn5hcmd1bWVudHNbMF0udG9wKyhvLnNjcm9sbFl8fG8ucGFnZVlPZmZzZXQpKSl9LGUucHJvdG90eXBlLnNjcm9sbD1lLnByb3RvdHlwZS5zY3JvbGxUbz1mdW5jdGlvbigpe2lmKHZvaWQgMCE9PWFyZ3VtZW50c1swXSlpZighMCE9PWYoYXJndW1lbnRzWzBdKSl7dmFyIG89YXJndW1lbnRzWzBdLmxlZnQsdD1hcmd1bWVudHNbMF0udG9wO3YuY2FsbCh0aGlzLHRoaXMsdm9pZCAwPT09bz90aGlzLnNjcm9sbExlZnQ6fn5vLHZvaWQgMD09PXQ/dGhpcy5zY3JvbGxUb3A6fn50KX1lbHNle2lmKFwibnVtYmVyXCI9PXR5cGVvZiBhcmd1bWVudHNbMF0mJnZvaWQgMD09PWFyZ3VtZW50c1sxXSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJWYWx1ZSBjb3VsZCBub3QgYmUgY29udmVydGVkXCIpO2kuZWxlbWVudFNjcm9sbC5jYWxsKHRoaXMsdm9pZCAwIT09YXJndW1lbnRzWzBdLmxlZnQ/fn5hcmd1bWVudHNbMF0ubGVmdDpcIm9iamVjdFwiIT10eXBlb2YgYXJndW1lbnRzWzBdP35+YXJndW1lbnRzWzBdOnRoaXMuc2Nyb2xsTGVmdCx2b2lkIDAhPT1hcmd1bWVudHNbMF0udG9wP35+YXJndW1lbnRzWzBdLnRvcDp2b2lkIDAhPT1hcmd1bWVudHNbMV0/fn5hcmd1bWVudHNbMV06dGhpcy5zY3JvbGxUb3ApfX0sZS5wcm90b3R5cGUuc2Nyb2xsQnk9ZnVuY3Rpb24oKXt2b2lkIDAhPT1hcmd1bWVudHNbMF0mJighMCE9PWYoYXJndW1lbnRzWzBdKT90aGlzLnNjcm9sbCh7bGVmdDp+fmFyZ3VtZW50c1swXS5sZWZ0K3RoaXMuc2Nyb2xsTGVmdCx0b3A6fn5hcmd1bWVudHNbMF0udG9wK3RoaXMuc2Nyb2xsVG9wLGJlaGF2aW9yOmFyZ3VtZW50c1swXS5iZWhhdmlvcn0pOmkuZWxlbWVudFNjcm9sbC5jYWxsKHRoaXMsdm9pZCAwIT09YXJndW1lbnRzWzBdLmxlZnQ/fn5hcmd1bWVudHNbMF0ubGVmdCt0aGlzLnNjcm9sbExlZnQ6fn5hcmd1bWVudHNbMF0rdGhpcy5zY3JvbGxMZWZ0LHZvaWQgMCE9PWFyZ3VtZW50c1swXS50b3A/fn5hcmd1bWVudHNbMF0udG9wK3RoaXMuc2Nyb2xsVG9wOn5+YXJndW1lbnRzWzFdK3RoaXMuc2Nyb2xsVG9wKSl9LGUucHJvdG90eXBlLnNjcm9sbEludG9WaWV3PWZ1bmN0aW9uKCl7aWYoITAhPT1mKGFyZ3VtZW50c1swXSkpe3ZhciBsPWZ1bmN0aW9uKG8pe2Zvcig7byE9PXQuYm9keSYmITE9PT1kKG8pOylvPW8ucGFyZW50Tm9kZXx8by5ob3N0O3JldHVybiBvfSh0aGlzKSxlPWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkscj10aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2whPT10LmJvZHk/KHYuY2FsbCh0aGlzLGwsbC5zY3JvbGxMZWZ0K3IubGVmdC1lLmxlZnQsbC5zY3JvbGxUb3Arci50b3AtZS50b3ApLFwiZml4ZWRcIiE9PW8uZ2V0Q29tcHV0ZWRTdHlsZShsKS5wb3NpdGlvbiYmby5zY3JvbGxCeSh7bGVmdDplLmxlZnQsdG9wOmUudG9wLGJlaGF2aW9yOlwic21vb3RoXCJ9KSk6by5zY3JvbGxCeSh7bGVmdDpyLmxlZnQsdG9wOnIudG9wLGJlaGF2aW9yOlwic21vb3RoXCJ9KX1lbHNlIGkuc2Nyb2xsSW50b1ZpZXcuY2FsbCh0aGlzLHZvaWQgMD09PWFyZ3VtZW50c1swXXx8YXJndW1lbnRzWzBdKX19ZnVuY3Rpb24gbihvLHQpe3RoaXMuc2Nyb2xsTGVmdD1vLHRoaXMuc2Nyb2xsVG9wPXR9ZnVuY3Rpb24gZihvKXtpZihudWxsPT09b3x8XCJvYmplY3RcIiE9dHlwZW9mIG98fHZvaWQgMD09PW8uYmVoYXZpb3J8fFwiYXV0b1wiPT09by5iZWhhdmlvcnx8XCJpbnN0YW50XCI9PT1vLmJlaGF2aW9yKXJldHVybiEwO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBvJiZcInNtb290aFwiPT09by5iZWhhdmlvcilyZXR1cm4hMTt0aHJvdyBuZXcgVHlwZUVycm9yKFwiYmVoYXZpb3IgbWVtYmVyIG9mIFNjcm9sbE9wdGlvbnMgXCIrby5iZWhhdmlvcitcIiBpcyBub3QgYSB2YWxpZCB2YWx1ZSBmb3IgZW51bWVyYXRpb24gU2Nyb2xsQmVoYXZpb3IuXCIpfWZ1bmN0aW9uIHAobyx0KXtyZXR1cm5cIllcIj09PXQ/by5jbGllbnRIZWlnaHQrYzxvLnNjcm9sbEhlaWdodDpcIlhcIj09PXQ/by5jbGllbnRXaWR0aCtjPG8uc2Nyb2xsV2lkdGg6dm9pZCAwfWZ1bmN0aW9uIGEodCxsKXt2YXIgZT1vLmdldENvbXB1dGVkU3R5bGUodCxudWxsKVtcIm92ZXJmbG93XCIrbF07cmV0dXJuXCJhdXRvXCI9PT1lfHxcInNjcm9sbFwiPT09ZX1mdW5jdGlvbiBkKG8pe3ZhciB0PXAobyxcIllcIikmJmEobyxcIllcIiksbD1wKG8sXCJYXCIpJiZhKG8sXCJYXCIpO3JldHVybiB0fHxsfWZ1bmN0aW9uIGgodCl7dmFyIGwsZSxpLGMsbj0ocygpLXQuc3RhcnRUaW1lKS9yO2M9bj1uPjE/MTpuLGw9LjUqKDEtTWF0aC5jb3MoTWF0aC5QSSpjKSksZT10LnN0YXJ0WCsodC54LXQuc3RhcnRYKSpsLGk9dC5zdGFydFkrKHQueS10LnN0YXJ0WSkqbCx0Lm1ldGhvZC5jYWxsKHQuc2Nyb2xsYWJsZSxlLGkpLGU9PT10LngmJmk9PT10Lnl8fG8ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGguYmluZChvLHQpKX1mdW5jdGlvbiB2KGwsZSxyKXt2YXIgYyxmLHAsYSxkPXMoKTtsPT09dC5ib2R5PyhjPW8sZj1vLnNjcm9sbFh8fG8ucGFnZVhPZmZzZXQscD1vLnNjcm9sbFl8fG8ucGFnZVlPZmZzZXQsYT1pLnNjcm9sbCk6KGM9bCxmPWwuc2Nyb2xsTGVmdCxwPWwuc2Nyb2xsVG9wLGE9biksaCh7c2Nyb2xsYWJsZTpjLG1ldGhvZDphLHN0YXJ0VGltZTpkLHN0YXJ0WDpmLHN0YXJ0WTpwLHg6ZSx5OnJ9KX19XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9e3BvbHlmaWxsOnBvbHlmaWxsfTpwb2x5ZmlsbCgpOyIsIi8qISBVVEYtOFxyXG5cclxuwqkga292cmlnaW5cclxu0JLRgdC1INC/0YDQsNCy0LAg0YDQsNC30YDQtdGI0LXQvdGLXHJcbtC60YDQsNGB0LjQstGL0Lkg0LTQuNC30LDQudC9INC00L7Qu9C20LXQvSDQuNC80LXRgtGMINC60YDQsNGB0LjQstGL0Lkg0LrQvtC0wq5cclxuXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9odG1scGx1c2Nzcy9cclxuXHJcbiovXHJcblxyXG5pZignc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKXtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XHJcblx0XHRuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignL3N3LmpzJyk7XHJcblx0fSk7XHJcbn1cclxuXHJcbnZhciBBU0tPID0gQVNLTyB8fCB7fTtcclxuXHJcbihmdW5jdGlvbigpe1xyXG5cclxuXHRBU0tPLmJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cdEFTS08ud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRBU0tPLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHRBU0tPLnNldHRpbWVvdXQgPSBDb29raWVzLmdldCgnY29va2llc1BvbGljeScpID8gMCA6IDEwMDAwO1xyXG5cclxuXHRBU0tPLmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tanMnKTtcclxuXHJcbi8vIHJlc2l6ZVxyXG5cclxuXHR2YXIgcmVzaXplVGltZW91dCA9IG51bGw7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0aWYgKCFyZXNpemVUaW1lb3V0KSB7XHJcblxyXG5cdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cdFx0XHRcdFx0QVNLTy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0XHRcdFx0QVNLTy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5cdFx0XHRcdH0sIDEwMCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuLy8gaHJlZj1cInRlbDpcIlxyXG5cclxuXHRpZihBU0tPLndpZHRoID4gMTIwMCkge1xyXG5cclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2hyZWZePVwidGVsXCJdJyksIGZ1bmN0aW9uIChlbCkge1xyXG5cclxuXHRcdFx0ZWwucmVtb3ZlQXR0cmlidXRlKCdocmVmJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbi8vINGB0LrQu9C+0L3QtdC90LjQtVxyXG5cdEFTS08uZGVjbGVuc2lvbiA9IGZ1bmN0aW9uKG51bSwgZXhwcmVzc2lvbnMpIHtcclxuXHRcdHZhciByO1xyXG5cdFx0dmFyIGNvdW50ID0gbnVtICUgMTAwO1xyXG5cdFx0aWYgKGNvdW50ID4gNCAmJiBjb3VudCA8IDIxKVxyXG5cdFx0XHRyID0gZXhwcmVzc2lvbnNbJzInXTtcclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRjb3VudCA9IGNvdW50ICUgMTA7XHJcblx0XHRcdGlmIChjb3VudCA9PSAxKVxyXG5cdFx0XHRcdHIgPSBleHByZXNzaW9uc1snMCddO1xyXG5cdFx0XHRlbHNlIGlmIChjb3VudCA+IDEgJiYgY291bnQgPCA1KVxyXG5cdFx0XHRcdHIgPSBleHByZXNzaW9uc1snMSddO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycyJ107XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcjtcclxuXHR9XHJcblxyXG5cdC8vINC+0LHRgNCw0LHQvtGC0YfQuNC6INCw0L3QuNC80LDRhtC40LlcclxuXHRBU0tPLmNzc0FuaW1hdGlvbiA9IGZ1bmN0aW9uKGEpe3ZhciBiLGMsZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY3NzYW5pbWF0aW9uXCIpO3N3aXRjaChhKXtjYXNlJ2FuaW1hdGlvbic6Yj17XCJhbmltYXRpb25cIjpcImFuaW1hdGlvbmVuZFwiLFwiT0FuaW1hdGlvblwiOlwib0FuaW1hdGlvbkVuZFwiLFwiTW96QW5pbWF0aW9uXCI6XCJhbmltYXRpb25lbmRcIixcIldlYmtpdEFuaW1hdGlvblwiOlwid2Via2l0QW5pbWF0aW9uRW5kXCJ9O2JyZWFrO2Nhc2UndHJhbnNpdGlvbic6Yj17XCJ0cmFuc2l0aW9uXCI6XCJ0cmFuc2l0aW9uZW5kXCIsXCJPVHJhbnNpdGlvblwiOlwib1RyYW5zaXRpb25FbmRcIixcIk1velRyYW5zaXRpb25cIjpcInRyYW5zaXRpb25lbmRcIixcIldlYmtpdFRyYW5zaXRpb25cIjpcIndlYmtpdFRyYW5zaXRpb25FbmRcIn19Zm9yKGMgaW4gYilpZihkLnN0eWxlW2NdIT09dW5kZWZpbmVkKXJldHVybiBiW2NdfVxyXG5cclxuXHQvLyBEZXRlcm1pbmUgaWYgYW4gZWxlbWVudCBpcyBpbiB0aGUgdmlzaWJsZSB2aWV3cG9ydFxyXG5cdEFTS08uaXNJblZpZXdwb3J0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0dmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0cmV0dXJuIChyZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IEFTS08uaGVpZ2h0KTtcclxuXHR9XHJcblxyXG5cdC8vINC+0YLQtNC10LvRj9C10Lwg0YLRi9GB0Y/Rh9C4XHJcblx0QVNLTy5zZXBOdW1iZXIgPSBmdW5jdGlvbihzdHIpe1xyXG5cdFx0c3RyID0gc3RyLnRvU3RyaW5nKCk7XHJcblx0XHRzdHIgPSBzdHIucmVwbGFjZSgvXFxzKy9nLCcnKTtcclxuXHRcdHJldHVybiBzdHIucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoW15cXGRdfCQpKS9nLCAnJDEgJyk7XHJcblx0fVxyXG5cclxuXHQvLyDRgdC60LvQtdC40LLQsNC10Lwg0YLRi9GB0Y/Rh9C4XHJcblx0QVNLTy5zdHJUb051bWJlciA9IGZ1bmN0aW9uKG4pe1xyXG5cdFx0cmV0dXJuIHBhcnNlSW50KG4ucmVwbGFjZSgvXFxzKy9nLCcnKSwgMTApO1xyXG5cdH1cclxuXHJcblx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuXHRcdC8vIGVhZ2VyXHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tsb2FkaW5nPVwibGF6eVwiXScpLCBmdW5jdGlvbihpbWcpe1xyXG5cclxuXHRcdFx0aW1nLnNldEF0dHJpYnV0ZSgnbG9hZGluZycsJ2VhZ2VyJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0sIEFTS08uc2V0dGltZW91dCk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbihmb3Jtcyl7XHJcblxyXG5cdGlmKCFmb3Jtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChmb3JtcywgZnVuY3Rpb24oYnRuKXtcclxuXHJcblx0XHR2YXIgZm9ybSA9IGJ0bi5jbG9zZXN0KCdmb3JtJyk7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLGZ1bmN0aW9uKGUpe1xyXG5cclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0dmFyIGJ1eSA9ICFmb3JtLmNsYXNzTGlzdC5jb250YWlucygnaW4tY2FydCcpO1xyXG5cclxuXHRcdFx0YnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdC8vIHNlbmQgZm9ybVxyXG5cclxuXHRcdFx0dmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pLFxyXG5cdFx0XHRcdHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHRcdFx0eGhyLm9wZW4oXCJQT1NUXCIsIGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSArICdhamF4LycpO1xyXG5cclxuXHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT0gNCl7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdidG4tLWdyYXknLCBidXkpO1xyXG5cdFx0XHRcdGJ0bi50ZXh0Q29udGVudCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArICggYnV5ID8gJ2RlbGV0ZScgOiAnYnV5JyApICk7XHJcblx0XHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibW9kZVwiXScpLnZhbHVlID0gKCBidXkgPyAnZGVsJyA6ICdhZGQnICk7XHJcblxyXG5cdFx0XHRcdGlmKGJ1eSkge1xyXG5cclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1wcm9kdWN0LWluLWNhcnQnKS50ZXh0Q29udGVudCA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByb2R1Y3QtbmFtZVwiXScpLnZhbHVlO1xyXG5cclxuXHRcdFx0XHRcdEFTS08ubW9kYWxTaG93KCdwcm9kdWN0LWluLWNhcnQnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdEFTS08uaGVhZGVyQ2FydC5zaG93KCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyIGNhcnQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coY2FydC5xdWFudGl0eSwgY2FydC5zdW0pO1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2luLWNhcnQnLCBidXkpO1xyXG5cclxuXHRcdFx0XHRpZiAoeGhyLnN0YXR1cyAhPSAyMDApIHtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn0L7RiNC40LHQutCwICcgKyB4aHIuc3RhdHVzKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdEFTS08uaGVhZGVyQ2FydC5jaGFuZ2UoY2FydC5xdWFudGl0eSwgY2FydC5zdW0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR4aHIuc2VuZChmb3JtRGF0YSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtaW4tY2FydCcpKTsiLCIvKihmdW5jdGlvbihjb29raWUpe1xyXG5cclxuXHRpZihjb29raWUpIHtcclxuXHJcblx0XHRjb29raWUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuXHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdENvb2tpZXMuc2V0KCdjb29raWVzUG9saWN5JywgJ0FjY2VwdCcpO1xyXG5cclxuXHRcdFx0Y29va2llLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvb2tpZScpKTsqLyIsIihmdW5jdGlvbihmb3JtKXtcclxuXHJcblx0aWYoIWZvcm0pIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0dmFyIGlucHV0UmFuZ2UgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX3JhbmdlJyk7XHJcblxyXG5cdGlmKGlucHV0UmFuZ2UubGVuZ3RoKSB7XHJcblxyXG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChpbnB1dFJhbmdlLCBmdW5jdGlvbihlbCl7XHJcblxyXG5cdFx0XHR2YXIgZnJvbSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX3JhbmdlLWZyb20nKSxcclxuXHRcdFx0XHR0byA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX3JhbmdlLXRvJyksXHJcblx0XHRcdFx0aW5wdXRGcm9tID0gZWwucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fcmFuZ2UtaW5wdXQtZnJvbScpLFxyXG5cdFx0XHRcdGlucHV0VG8gPSBlbC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19yYW5nZS1pbnB1dC10bycpLFxyXG5cdFx0XHRcdHNsaWRlciA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX3NsaWRlci1jb250cm9sJyksXHJcblx0XHRcdFx0bWluVmFsdWUgPSBBU0tPLnN0clRvTnVtYmVyKGVsLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX3JhbmdlLW1pbicpLnRleHRDb250ZW50KSxcclxuXHRcdFx0XHRtYXhWYWx1ZSA9IEFTS08uc3RyVG9OdW1iZXIoZWwucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fcmFuZ2UtbWF4JykudGV4dENvbnRlbnQpLFxyXG5cdFx0XHRcdGZyb21WYWx1ZSA9IEFTS08uc3RyVG9OdW1iZXIoZnJvbS52YWx1ZSksXHJcblx0XHRcdFx0dG9WYWx1ZSA9IEFTS08uc3RyVG9OdW1iZXIodG8udmFsdWUpO1xyXG5cclxuXHRcdFx0aW5wdXRFdmVudChpbnB1dEZyb20pO1xyXG5cdFx0XHRpbnB1dEV2ZW50KGlucHV0VG8pO1xyXG5cclxuXHRcdFx0aW5wdXRGcm9tLnZhbHVlID0gQVNLTy5zZXBOdW1iZXIoZnJvbVZhbHVlKTtcclxuXHRcdFx0aW5wdXRUby52YWx1ZSA9IEFTS08uc2VwTnVtYmVyKHRvVmFsdWUpO1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gaW5wdXRFdmVudChpbnB1dCl7XHJcblxyXG5cdFx0XHRcdGlucHV0LnZhbHVlID0gQVNLTy5zZXBOdW1iZXIoaW5wdXQudmFsdWUpO1xyXG5cclxuXHRcdFx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gQVNLTy5zdHJUb051bWJlcih0aGlzLnZhbHVlKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIHZhbCA9IEFTS08uc3RyVG9OdW1iZXIodGhpcy52YWx1ZSk7XHJcblxyXG5cdFx0XHRcdFx0aWYodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbHRlcl9fcmFuZ2UtaW5wdXQtZnJvbScpICYmIHZhbCA8IG1pblZhbHVlKXtcclxuXHJcblx0XHRcdFx0XHRcdHZhbCA9IG1pblZhbHVlO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbHRlcl9fcmFuZ2UtaW5wdXQtdG8nKSAmJiB2YWwgPiBtYXhWYWx1ZSl7XHJcblxyXG5cdFx0XHRcdFx0XHR2YWwgPSBtYXhWYWx1ZTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9IEFTS08uc2VwTnVtYmVyKHZhbCk7XHJcblxyXG5cdFx0XHRcdFx0dXBkYXRlSW5wdXQoKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIHZhbCA9IHRoaXMudmFsdWUucmVwbGFjZSgvW1xcRF0vZywgJycpO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSB2YWw7XHJcblxyXG5cdFx0XHRcdFx0dXBkYXRlSW5wdXQoKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiB1cGRhdGVJbnB1dCgpe1xyXG5cclxuXHRcdFx0XHRmcm9tVmFsdWUgPSBBU0tPLnN0clRvTnVtYmVyKGlucHV0RnJvbS52YWx1ZSk7XHJcblx0XHRcdFx0dG9WYWx1ZSA9IEFTS08uc3RyVG9OdW1iZXIoaW5wdXRUby52YWx1ZSk7XHJcblxyXG5cdFx0XHRcdGZyb20udmFsdWUgPSBmcm9tVmFsdWU7XHJcblx0XHRcdFx0dG8udmFsdWUgPSB0b1ZhbHVlO1xyXG5cclxuXHRcdFx0XHRzbGlkZXIubm9VaVNsaWRlci5zZXQoW2Zyb21WYWx1ZSwgdG9WYWx1ZV0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gdXBkYXRlU2xpZGVyKCl7XHJcblxyXG5cdFx0XHRcdGZyb20udmFsdWUgPSBmcm9tVmFsdWU7XHJcblx0XHRcdFx0dG8udmFsdWUgPSB0b1ZhbHVlO1xyXG5cclxuXHRcdFx0XHRpbnB1dEZyb20udmFsdWUgPSBBU0tPLnNlcE51bWJlcihmcm9tVmFsdWUpO1xyXG5cdFx0XHRcdGlucHV0VG8udmFsdWUgPSBBU0tPLnNlcE51bWJlcih0b1ZhbHVlKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBvbkZ1bGZpbGxlZCA9IGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHRcdG5vVWlTbGlkZXIuY3JlYXRlKHNsaWRlciwge1xyXG5cdFx0XHRcdFx0c3RhcnQ6IFtmcm9tVmFsdWUsdG9WYWx1ZV0sXHJcblx0XHRcdFx0XHRjb25uZWN0OiB0cnVlLFxyXG5cdFx0XHRcdFx0cmFuZ2U6IHtcclxuXHRcdFx0XHRcdFx0J21pbic6IG1pblZhbHVlLFxyXG5cdFx0XHRcdFx0XHQnbWF4JzogbWF4VmFsdWVcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRtYXJnaW46IHBhcnNlSW50KHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RlcCcpKSxcclxuXHRcdFx0XHRcdHN0ZXA6IHBhcnNlSW50KHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RlcCcpKVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRzbGlkZXIubm9VaVNsaWRlci5vbignc2xpZGUnLCBmdW5jdGlvbihlKXtcclxuXHJcblx0XHRcdFx0XHRmcm9tVmFsdWUgPSBwYXJzZUludChlWzBdKTtcclxuXHRcdFx0XHRcdHRvVmFsdWUgPSBwYXJzZUludChlWzFdKTtcclxuXHRcdFx0XHRcdHVwZGF0ZVNsaWRlcigpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0c2xpZGVyLm5vVWlTbGlkZXIub24oJ3VwZGF0ZScsIGZ1bmN0aW9uKGUpe1xyXG5cclxuXHRcdFx0XHQvL1x0dXBkYXRlU2xpZGVyKHBhcnNlSW50KGVbMF0pLHBhcnNlSW50KGVbMV0pKVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZE5vVWlTbGlkZXJcIiwgcmVzb2x2ZSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHByb21pc2UudGhlbihvbkZ1bGZpbGxlZCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoaW5wdXRSYW5nZSwgZnVuY3Rpb24oZWwpe1xyXG5cclxuXHRcdFx0XHR2YXIgZnJvbSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX3JhbmdlLWZyb20nKSxcclxuXHRcdFx0XHRcdHRvID0gZWwucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fcmFuZ2UtdG8nKSxcclxuXHRcdFx0XHRcdGlucHV0RnJvbSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX3JhbmdlLWlucHV0LWZyb20nKSxcclxuXHRcdFx0XHRcdGlucHV0VG8gPSBlbC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19yYW5nZS1pbnB1dC10bycpLFxyXG5cdFx0XHRcdFx0c2xpZGVyID0gZWwucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fc2xpZGVyLWNvbnRyb2wnKSxcclxuXHRcdFx0XHRcdGZyb21WYWx1ZSA9IEFTS08uc3RyVG9OdW1iZXIoaW5wdXRGcm9tLnZhbHVlKSxcclxuXHRcdFx0XHRcdHRvVmFsdWUgPSBBU0tPLnN0clRvTnVtYmVyKGlucHV0VG8udmFsdWUpO1xyXG5cclxuXHRcdFx0XHRmcm9tLnZhbHVlID0gZnJvbVZhbHVlO1xyXG5cdFx0XHRcdHRvLnZhbHVlID0gdG9WYWx1ZTtcclxuXHRcdFx0XHRzbGlkZXIubm9VaVNsaWRlci5zZXQoW2Zyb21WYWx1ZSwgdG9WYWx1ZV0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSwxMDApO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8gbG9hZCBVaVNsaWRlclxyXG5cclxuXHR2YXIgbG9hZE5vVWlTbGlkZXIgPSBmYWxzZTtcclxuXHJcblx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuXHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG5cdHNjcmlwdC5hc3luYyA9IHRydWU7XHJcblx0c2NyaXB0LnNyYyA9ICcvanMvbm91aXNsaWRlci5taW4uanMnO1xyXG5cclxuXHRzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdHZhciBldmVudCA9IG5ldyBFdmVudCgnbG9hZE5vVWlTbGlkZXInKTtcclxuXHRcdHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHJcblx0fTtcclxuXHJcblx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuXHRcdGlmKCFsb2FkTm9VaVNsaWRlcil7XHJcblxyXG5cdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcblx0XHRcdGxvYWROb1VpU2xpZGVyID0gdHJ1ZTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0sIDgwMDApO1xyXG5cclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19idG4tdG9nZ2xlIC5idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRpZighbG9hZE5vVWlTbGlkZXIpe1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG5cdFx0XHRsb2FkTm9VaVNsaWRlciA9IHRydWU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXInKSk7IiwiKGZ1bmN0aW9uKGZvcm1zKXtcclxuXHJcblx0aWYoIWZvcm1zKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZm9ybXMsIGZ1bmN0aW9uKGZvcm0pe1xyXG5cclxuXHRcdHZhciBidG4gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLW15LWxpc3RfX2J0bicpLFxyXG5cdFx0XHRtb2RlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIm1vZGVcIl0nKSxcclxuXHRcdFx0aGVhZGVyQ291bnRlclZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fJyArIGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJteWxpc3RcIl0nKS52YWx1ZSArICctY291bnQnKTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsZnVuY3Rpb24oZSl7XHJcblxyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHR2YXIgYWRkID0gbW9kZS52YWx1ZSA9PT0gJ2FkZCc7XHJcblxyXG5cdFx0XHRidG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0Ly8gc2VuZCBmb3JtXHJcblxyXG5cdFx0XHR2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSksXHJcblx0XHRcdFx0eGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0XHR4aHIub3BlbihcIlBPU1RcIiwgZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpICsgJ2FqYXgvJyk7XHJcblxyXG5cdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gNCl7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWRkJywgYWRkKTtcclxuXHRcdFx0XHRtb2RlLnZhbHVlID0gKCBhZGQgPyAnZGVsJyA6ICdhZGQnICk7XHJcblxyXG5cdFx0XHRcdHZhciByZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG5cdFx0XHRcdGlmICh4aHIuc3RhdHVzICE9PSAyMDApIHtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn0L7RiNC40LHQutCwICcgKyB4aHIuc3RhdHVzKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdGhlYWRlckNvdW50ZXJWYWx1ZS50ZXh0Q29udGVudCA9IHJlc3BvbnNlLnF1YW50aXR5O1xyXG5cdFx0XHRcdFx0aGVhZGVyQ291bnRlclZhbHVlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCByZXNwb25zZS5xdWFudGl0eSA9PT0gMCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHhoci5zZW5kKGZvcm1EYXRhKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1teS1saXN0JykpOyIsIlxyXG5cclxuKGZ1bmN0aW9uKCl7XHJcblxyXG5cdHZhciBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtJyk7XHJcblxyXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZm9ybXMsIGZ1bmN0aW9uKGZvcm0pe1xyXG5cclxuXHRcdHZhciBzaG93TW9hZGFsT2sgPSBmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS1vay1tb2RhbCcpLFxyXG5cdFx0XHR4aHJPZmYgPSBmb3JtLmNsYXNzTGlzdC5jb250YWlucygnZm9ybS16YWtheicpIHx8IGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtLXpha2F6LWRldGFpbHMnKSxcclxuXHRcdFx0Zm9ybVJlcXVpcmVkID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdbcmVxdWlyZWRdJyksXHJcblx0XHRcdGZvcm1CdG5TdWJtaXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19zdWJtaXQnKSxcclxuXHRcdFx0dGV4dEVycm9yID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fdGV4dGVycm9yJyk7XHJcblxyXG5cdFx0Ly8g0L7RgtC/0YDQsNCy0LrQsCDRhNC+0YDQvNGLXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRcdHZhciBub3ZhbGlkYXRlID0gZmFsc2UsXHJcblx0XHRcdFx0Zm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG5cdFx0XHRpZih0ZXh0RXJyb3IpIHtcclxuXHJcblx0XHRcdFx0dGV4dEVycm9yLnRleHRDb250ZW50ID0gJyc7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGZvcm1SZXF1aXJlZCwgZnVuY3Rpb24oaW5wdXQpe1xyXG5cclxuXHRcdFx0XHRpZihpbnB1dC5vZmZzZXRQYXJlbnQgPT09IG51bGwpIHtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYoaW5wdXQuZ2V0QXR0cmlidXRlKCd0eXBlJykgPT0gJ2NoZWNrYm94Jykge1xyXG5cclxuXHRcdFx0XHRcdGlmKGlucHV0LmNoZWNrZWQpe1xyXG5cclxuXHRcdFx0XHRcdFx0aW5wdXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2JveC0tZXJyb3InKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdGlucHV0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtLWVycm9yJyk7XHJcblx0XHRcdFx0XHRcdG5vdmFsaWRhdGUgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRlbHNlIGlmKGlucHV0LmdldEF0dHJpYnV0ZSgndHlwZScpID09ICdyYWRpbycpIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgX25hbWUgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSxcclxuXHRcdFx0XHRcdFx0X2NoZWNrZWQgPSBmYWxzZSxcclxuXHRcdFx0XHRcdFx0X3JhZGlvR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cIicrX25hbWUrJ1wiXScpO1xyXG5cclxuXHRcdFx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoX3JhZGlvR3JvdXAsIGZ1bmN0aW9uKGVsKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZihlbC5jaGVja2VkKXtcclxuXHJcblx0XHRcdFx0XHRcdFx0X2NoZWNrZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdGlmKCFfY2hlY2tlZCl7XHJcblxyXG5cdFx0XHRcdFx0XHRub3ZhbGlkYXRlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0aW5wdXQuY2xvc2VzdCgnLmlucHV0LXJvd19faW5wdXQnKS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1yb3dfX2lucHV0LS1lcnJvcicpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRlcnJvcklucHV0KGlucHV0KTtcclxuXHJcblx0XHRcdFx0XHRpZighaW5wdXQudmFsdWUpe1xyXG5cclxuXHRcdFx0XHRcdFx0bm92YWxpZGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmKCFub3ZhbGlkYXRlKXtcclxuXHJcblx0XHRcdFx0aWYoeGhyT2ZmKSB7XHJcblxyXG5cdFx0XHRcdFx0QVNLTy5zZW5kQmVhY29uID0gZmFsc2U7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyDQv9GA0L7QstC10YDQutCwINC90LAg0LHQvtGC0LBcclxuXHJcblx0XHRcdFx0aWYoZm9ybS5vZmZzZXRQYXJlbnQgPT09IG51bGwpIHtcclxuXHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsX19pdGVtLS1jYWxsYmFjaycpKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIHBob25lID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuaW5wdXRbdHlwZT1cInRlbFwiXScpO1xyXG5cclxuXHRcdFx0XHRcdGlmKHBob25lICYmIHBob25lLnZhbHVlLnJlcGxhY2UoL1teK1xcZF0vZywgJycpID09PSAnJyl7XHJcblxyXG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHRcdFx0XHR4aHIub3BlbihcIlBPU1RcIiwgZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpKTtcclxuXHRcdFx0XHR4aHIuc2VuZChmb3JtRGF0YSk7XHJcblxyXG5cdFx0XHRcdGlmKGZvcm1CdG5TdWJtaXQpIHtcclxuXHJcblx0XHRcdFx0XHRmb3JtQnRuU3VibWl0LmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHhoci5yZWFkeVN0YXRlICE9IDQpe1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmKHNob3dNb2FkYWxPaykge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLXRoYW5rcyAubW9kYWxfX3RleHQnKS50ZXh0Q29udGVudCA9IHNob3dNb2FkYWxPaztcclxuXHJcblx0XHRcdFx0XHRcdFx0QVNLTy5tb2RhbFNob3coJ3RoYW5rcycpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRmb3JtLnJlc2V0KCk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdGFsZXJ0KCfQvtGI0LjQsdC60LAgJyArIHhoci5zdGF0dXMpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZihmb3JtQnRuU3VibWl0KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRmb3JtQnRuU3VibWl0LmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHR2YXIgaW5wdXRFcnJvciA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmlucHV0LXJvd19faW5wdXQtLWVycm9yJyk7XHJcblxyXG5cdFx0XHRcdGlmKHRleHRFcnJvciAmJiBpbnB1dEVycm9yLmdldEF0dHJpYnV0ZSgnZGF0YS1lcnJvcicpKSB7XHJcblxyXG5cdFx0XHRcdFx0dGV4dEVycm9yLnRleHRDb250ZW50ID0gaW5wdXRFcnJvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXJyb3InKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZighQVNLTy5pc0luVmlld3BvcnQoaW5wdXRFcnJvcikpe1xyXG5cclxuXHRcdFx0XHRcdGlucHV0RXJyb3IuY2xvc2VzdCgnLmlucHV0LXJvdycpLnNjcm9sbEludG9WaWV3KFwic21vb3RoXCIpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKGlucHV0RXJyb3IgJiYgaW5wdXRFcnJvci5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtLWVycm9yJykgJiYgaW5wdXRFcnJvci5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtLWVycm9yJykudHlwZSA9PT0gJ3RleHQnKXtcclxuXHJcblx0XHRcdFx0XHRpbnB1dEVycm9yLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC0tZXJyb3InKS5mb2N1cygpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8g0LjQt9C80LXQvdC10L3QuNC1INGE0L7RgNC80YtcclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xyXG5cclxuXHRcdFx0dmFyIF90YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcblx0XHRcdGlmKF90YXJnZXQucmVxdWlyZWQpIHtcclxuXHJcblx0XHRcdFx0aWYoX3RhcmdldC50eXBlID09PSAncmFkaW8nKSB7XHJcblxyXG5cdFx0XHRcdFx0X3RhcmdldC5jbG9zZXN0KCcuaW5wdXQtcm93X19pbnB1dCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LXJvd19faW5wdXQtLWVycm9yJyk7XHJcblx0XHRcdFx0XHR0ZXh0RXJyb3IudGV4dENvbnRlbnQgPSAnJztcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZihfdGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgJiYgX3RhcmdldC5jaGVja2VkKSB7XHJcblxyXG5cdFx0XHRcdFx0X3RhcmdldC5jbG9zZXN0KCcuY2hlY2tib3gnKS5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2JveC0tZXJyb3InKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbi8vIGlucHV0XHJcblxyXG5cdHZhciBpbnB1dFJlcXVpcmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0W3JlcXVpcmVkXScpO1xyXG5cclxuXHRmdW5jdGlvbiBlcnJvcklucHV0KGVsKXtcclxuXHJcblx0XHRpZihlbC52YWx1ZSkge1xyXG5cdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC0tZXJyb3InKTtcclxuXHRcdFx0ZWwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1yb3dfX2lucHV0LS1lcnJvcicpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ2lucHV0LS1lcnJvcicpO1xyXG5cdFx0XHRlbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXJvd19faW5wdXQtLWVycm9yJyk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChpbnB1dFJlcXVpcmVkLCBmdW5jdGlvbihlbCl7XHJcblxyXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cdFx0XHRpZihlLmNvZGUgIT09IFwiVGFiXCIpIHtcclxuXHJcblx0XHRcdFx0ZXJyb3JJbnB1dChlbCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0ZXJyb3JJbnB1dChlbCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24oZ2FsbGVyeSl7XHJcblxyXG5cdGlmKGdhbGxlcnkpIHtcclxuXHJcblx0XHRBU0tPLmdhbGxlcnlTd2lwZXIgPSAnPGRpdiBjbGFzcz1cInN3aXBlci1jb250YWluZXIgc3dpcGVyLWNvbnRhaW5lci0tZ2FsbGVyeVwiPjx1bCBjbGFzcz1cIm5vdHNlbCBzd2lwZXItd3JhcHBlclwiPic7XHJcblxyXG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChnYWxsZXJ5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0X19pbWctc21hbGwgYScpLCBmdW5jdGlvbihsaW5rKXtcclxuXHJcblx0XHRcdC8vINC10YHQu9C4INGO0YLRg9CxINCyINGB0LvQsNC50LTQtdGA0LVcclxuXHRcdFx0aWYobGluay5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2R1Y3RfX2ltZy15b3V0dWJlJykpe1xyXG5cclxuXHRcdFx0XHRBU0tPLmdhbGxlcnlTd2lwZXIgKz0gJzxsaSBjbGFzcz1cInN3aXBlci1zbGlkZSBzd2lwZXItc2xpZGUtLXlvdXR1YmVcIj48ZGl2IGNsYXNzPVwieW91dHViZS1tb2RhbC1nYWxsZXJ5XCIgZGF0YS1pZD1cIicgKyBsaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpICsgJ1wiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS8nICsgbGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSArICcvbWF4cmVzZGVmYXVsdC5qcGdcIj48L2Rpdj48L2xpPic7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRBU0tPLmdhbGxlcnlTd2lwZXIgKz0gJzxsaSBjbGFzcz1cInN3aXBlci1zbGlkZVwiPjxpbWcgc3JjPVwiJyArIGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykgKyAnXCI+PC9saT4nO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdEFTS08uZ2FsbGVyeVN3aXBlciArPSAnPC91bD48c3BhbiBjbGFzcz1cInN3aXBlci1jb3VudFwiPjwvc3Bhbj48L2Rpdj4nO1xyXG5cclxuXHRcdGdhbGxlcnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cdFx0XHRpZihlLnRhcmdldC5jbG9zZXN0KCcucHJvZHVjdF9fZW5lcmcnKSkge1xyXG5cclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZihlLnRhcmdldC5jbG9zZXN0KCdhJykpIHtcclxuXHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcclxuXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWdhbGxlcnknKS5pbm5lckhUTUwgPSBBU0tPLmdhbGxlcnlTd2lwZXI7XHJcblxyXG5cdFx0XHRBU0tPLm1vZGFsU2hvdygnZ2FsbGVyeScpO1xyXG5cclxuXHRcdFx0dmFyIGdhbGxlcnlNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1nYWxsZXJ5IC5zd2lwZXItY29udGFpbmVyLS1nYWxsZXJ5JyksXHJcblx0XHRcdFx0c2xpZGUgPSBlLnRhcmdldC5jbG9zZXN0KCcuc3dpcGVyLXNsaWRlJyksXHJcblx0XHRcdFx0aW5kZXggPSBzbGlkZSA/IHNsaWRlLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSA6IDA7XHJcblxyXG5cdFx0XHRBU0tPLnN3aXBlcihnYWxsZXJ5TW9kYWwsIGluZGV4KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RfX2ltZycpKTsiLCIoZnVuY3Rpb24gKCkge1xyXG5cclxuXHR2YXIgeWFDb3VudGVySWQgPSAnMjY1MjY3MjknLFxyXG5cdFx0Z29hbHMgPSBbXHJcblxyXG5cdFx0Ly8g0L/QtdGA0LXRhdC+0LTRiyDQv9C+INGB0YLQsNGC0YzRj9C8INC40Lcg0LzQtdC90Y5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNlbGVjdG9yOiAnLmxpbmstYXJ0aWNsZS1pbi1jYXRhbG9nLW1lbnUnLFxyXG5cdFx0XHRcdGV2ZW50OiAnY2xpY2snLFxyXG5cdFx0XHRcdHlhbmRleDoge1xyXG5cdFx0XHRcdFx0dGFyZ2V0OiAnTElOS19BUlRJQ0xFX0lOX0NBVEFMT0dfTUVOVSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0Ly8g0KLQtdC70LXRhNC+0L1cclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNlbGVjdG9yOiAnYVtocmVmXj1cInRlbFwiXScsXHJcblx0XHRcdFx0ZXZlbnQ6ICdjbGljaycsXHJcblx0XHRcdFx0eWFuZGV4OiB7XHJcblx0XHRcdFx0XHR0YXJnZXQ6ICdQSE9ORSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0Ly8g0KTQuNC70YzRgtGAXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzZWxlY3RvcjogJy5maWx0ZXJfX2J0bi10b2dnbGUgLmJ0bicsXHJcblx0XHRcdFx0ZXZlbnQ6ICdjbGljaycsXHJcblx0XHRcdFx0eWFuZGV4OiB7XHJcblx0XHRcdFx0XHR0YXJnZXQ6ICdGSUxURVJfT1BFTidcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzZWxlY3RvcjogJy5maWx0ZXInLFxyXG5cdFx0XHRcdGV2ZW50OiAnc3VibWl0JyxcclxuXHRcdFx0XHR5YW5kZXg6IHtcclxuXHRcdFx0XHRcdHRhcmdldDogJ0ZJTFRFUl9TVUJNSVQnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdC8vINCf0L7QutGD0L/QutCwXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzZWxlY3RvcjogJy5jYXRhbG9nLWxpc3RfX2NhcnQsIC5wcm9kdWN0X19jYXJ0JyxcclxuXHRcdFx0XHRldmVudDogJ3N1Ym1pdCcsXHJcblx0XHRcdFx0eWFuZGV4OiB7XHJcblx0XHRcdFx0XHR0YXJnZXQ6ICdDTElDS19CVVknXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c2VsZWN0b3I6ICcuZm9ybS16YWtheicsXHJcblx0XHRcdFx0ZXZlbnQ6ICdzdWJtaXQnLFxyXG5cdFx0XHRcdHlhbmRleDoge1xyXG5cdFx0XHRcdFx0dGFyZ2V0OiAnU1VCTUlUX09SREVSX0NSRUFURSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzZWxlY3RvcjogJy5mb3JtLXpha2F6LWRldGFpbHMnLFxyXG5cdFx0XHRcdGV2ZW50OiAnc3VibWl0JyxcclxuXHRcdFx0XHR5YW5kZXg6IHtcclxuXHRcdFx0XHRcdHRhcmdldDogJ1NVQk1JVF9PUkRFUl9ERVRBSUxTJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHQvLyDQl9Cw0LrQsNC30LDRgtGMINC30LLQvtC90L7QulxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c2VsZWN0b3I6ICcubW9kYWxfX2l0ZW0tLWNhbGxiYWNrJyxcclxuXHRcdFx0XHRldmVudDogJ21vZGFsU2hvdycsXHJcblx0XHRcdFx0eWFuZGV4OiB7XHJcblx0XHRcdFx0XHR0YXJnZXQ6ICdDQUxMQkFDS19PUEVOJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNlbGVjdG9yOiAnLm1vZGFsX19pdGVtLS1jYWxsYmFjaycsXHJcblx0XHRcdFx0ZXZlbnQ6ICdzdWJtaXQnLFxyXG5cdFx0XHRcdHlhbmRleDoge1xyXG5cdFx0XHRcdFx0dGFyZ2V0OiAnQ0FMTEJBQ0tfU0VORCdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzZWxlY3RvcjogJy5tb2RhbF9faXRlbS0tdGhhbmtzJyxcclxuXHRcdFx0XHRldmVudDogJ21vZGFsU2hvdycsXHJcblx0XHRcdFx0eWFuZGV4OiB7XHJcblx0XHRcdFx0XHR0YXJnZXQ6ICdUSEFOS1NfT1BFTidcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XTtcclxuXHJcblxyXG5cdGdvYWxzLmZvckVhY2goZnVuY3Rpb24gKGdvYWwpIHtcclxuXHRcdGlmIChnb2FsLnBhZ2UgJiYgZ29hbC5wYWdlICE9PSBsb2NhdGlvbi5wYXRobmFtZSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmIChnb2FsLnNraXBQYWdlcyAmJiBnb2FsLnNraXBQYWdlcy5pbmRleE9mKGxvY2F0aW9uLnBhdGhuYW1lKSAhPT0gLTEpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGdvYWwuc2VsZWN0b3IpO1xyXG5cclxuXHRcdFtdLmZvckVhY2guY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGdvYWwuZXZlbnQsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhnb2FsLnlhbmRleC50YXJnZXQpXHJcblx0XHRcdFx0aWYgKGdvYWwueWFuZGV4ICYmIHdpbmRvd1sneWFDb3VudGVyJyArIHlhQ291bnRlcklkXSkge1xyXG5cdFx0XHRcdFx0d2luZG93Wyd5YUNvdW50ZXInICsgeWFDb3VudGVySWRdLnJlYWNoR29hbChnb2FsLnlhbmRleC50YXJnZXQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uKGhlYWRlckNhcnQpe1xyXG5cclxuXHRpZihoZWFkZXJDYXJ0KSB7XHJcblxyXG5cdFx0dmFyIGNsZWFyVGltZW91dElEID0gbnVsbDtcclxuXHJcblx0XHRBU0tPLmhlYWRlckNhcnQgPSB7XHJcblxyXG5cdFx0XHRjaGFuZ2UgOiBmdW5jdGlvbihxdWFudGl0eSwgc3VtKSB7XHJcblxyXG5cdFx0XHRcdGhlYWRlckNhcnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY2FydC1jb3VudCcpLnRleHRDb250ZW50ID0gcXVhbnRpdHk7XHJcblx0XHRcdFx0aGVhZGVyQ2FydC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jYXJ0LXZhbHVlJykudGV4dENvbnRlbnQgPSBBU0tPLnNlcE51bWJlcihzdW0pO1xyXG5cdFx0XHRcdGhlYWRlckNhcnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19jYXJ0LS1lbXB0eScsIHF1YW50aXR5ID09ICcwJyk7XHJcblxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0c2hvdyA6IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRoZWFkZXJDYXJ0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fY2FydC0tc2hvdycpO1xyXG5cclxuXHRcdFx0XHRjbGVhclRpbWVvdXQoY2xlYXJUaW1lb3V0SUQpO1xyXG5cclxuXHRcdFx0XHRjbGVhclRpbWVvdXRJRCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdFx0XHRoZWFkZXJDYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fY2FydC0tc2hvdycpO1xyXG5cclxuXHRcdFx0XHR9LCAzMDAwKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NhcnQnKSk7IiwiKGZ1bmN0aW9uKG5hdil7XHJcblxyXG5cdGlmKCFuYXYpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0dmFyIGxldmVsMSA9IG5hdi5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19pdGVtJyksXHJcblx0XHRsZXZlbDJQYXJlbnQgPSBuYXYucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9fbGV2ZWwyLWl0ZW0tLXBhcmVudCcpLFxyXG5cdFx0bGV2ZWwyQmFjayA9IG5hdi5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19sZXZlbDItYnRuLWJhY2snKSxcclxuXHRcdGxldmVsM0JhY2sgPSBuYXYucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9fbGV2ZWwzLWJ0bi1iYWNrJyksXHJcblx0XHR3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcclxuXHJcblx0Ly8g0L7RgtC60YDRi9GC0Yx80LfQsNC60YDRi9GC0Ywg0LzQtdC90Y5cclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuXHRcdGlmKGUudGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXJfX2J0bi10b2dnbGUnKSB8fCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdicpKSB7XHJcblxyXG5cdFx0XHRpZihBU0tPLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LW9wZW4nKSl7XHJcblxyXG5cdFx0XHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sZXZlbDInKTtcclxuXHRcdFx0XHRuYXYuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbGV2ZWwzJyk7XHJcblxyXG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGV2ZWwxLCBmdW5jdGlvbihlbCl7XHJcblxyXG5cdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaG92ZXInKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGV2ZWwyUGFyZW50LCBmdW5jdGlvbihlbCl7XHJcblxyXG5cdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaG92ZXInKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCxBU0tPLndpbmRvd1Njcm9sbE9sZCk7XHJcblx0XHRcdFx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IDA7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0QVNLTy53aW5kb3dTY3JvbGxPbGQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsMCk7XHJcblx0XHRcdFx0d3JhcHBlci5zdHlsZS50b3AgPSAtQVNLTy53aW5kb3dTY3JvbGxPbGQgKyAncHgnO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0QVNLTy5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtb3BlbicpO1xyXG5cdFx0XHRuYXYuY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHloaWRkZW4nKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHJcblx0Ly8g0L3QsNCy0LXQtNC10L3QuNC1INC90LAg0L/QtdGA0LLRi9C5INGD0YDQvtCy0LXQvdGMXHJcblxyXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGV2ZWwxLCBmdW5jdGlvbihlbCl7XHJcblxyXG5cdFx0aWYoIWVsLmNsYXNzTGlzdC5jb250YWlucygnbmF2X19pdGVtLS1wYXJlbnQnKSkge1xyXG5cclxuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdFx0aWYoQVNLTy53aWR0aCA+PSA3NjgpIHtcclxuXHJcblx0XHRcdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1ob3ZlcicpO1xyXG5cdFx0XHRcdFx0bmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxldmVsMicpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdGlmKEFTS08ud2lkdGggPj0gNzY4KSB7XHJcblxyXG5cdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaG92ZXInKTtcclxuXHRcdFx0XHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sZXZlbDInKTtcclxuXHJcblx0XHRcdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxldmVsMSwgZnVuY3Rpb24oZWxlbSl7XHJcblxyXG5cdFx0XHRcdFx0XHRlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhvdmVyJyk7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdFx0aWYoQVNLTy53aWR0aCA+PSA3NjgpIHtcclxuXHJcblx0XHRcdFx0XHRuYXYuY2xhc3NMaXN0LmFkZCgnaXMtbGV2ZWwyJyk7XHJcblxyXG5cdFx0XHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsZXZlbDEsIGZ1bmN0aW9uKGVsZW0pe1xyXG5cclxuXHRcdFx0XHRcdFx0ZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1ob3ZlcicsIGVsZW0gPT09IGVsKTtcclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRlbC5xdWVyeVNlbGVjdG9yKCcubmF2X19oZWFkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuXHRcdFx0XHRpZihBU0tPLndpZHRoIDwgNzY4KSB7XHJcblxyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRcdG5hdi5zdHlsZS5taW5IZWlnaHQgPSBlbC5xdWVyeVNlbGVjdG9yKCcubmF2X19sZXZlbDInKS5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XHJcblxyXG5cdFx0XHRcdFx0bmF2LmNsYXNzTGlzdC5hZGQoJ2lzLWxldmVsMicpO1xyXG5cclxuXHRcdFx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGV2ZWwxLCBmdW5jdGlvbihlbGVtKXtcclxuXHJcblx0XHRcdFx0XHRcdGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtaG92ZXInLCBlbGVtID09PSBlbCk7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINGF0L7QstC10YAv0LrQu9C40Log0LLRgtC+0YDQvtC5INGD0YDQvtCy0LXQvdGMXHJcblxyXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGV2ZWwyUGFyZW50LCBmdW5jdGlvbihlbCl7XHJcblxyXG5cdFx0ZWwucGFyZW50Tm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0aWYoQVNLTy53aWR0aCA+PSA3NjgpIHtcclxuXHJcblx0XHRcdFx0bmF2LmNsYXNzTGlzdC5hZGQoJ2lzLWxldmVsMycpO1xyXG5cclxuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxldmVsMlBhcmVudCwgZnVuY3Rpb24oZWxlbSl7XHJcblxyXG5cdFx0XHRcdFx0ZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1ob3ZlcicsIGVsZW0gPT09IGVsKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZWwucGFyZW50Tm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0aWYoQVNLTy53aWR0aCA+PSA3NjgpIHtcclxuXHJcblx0XHRcdFx0bmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxldmVsMycpO1xyXG5cclxuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxldmVsMlBhcmVudCwgZnVuY3Rpb24oZWxlbSl7XHJcblxyXG5cdFx0XHRcdFx0ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1ob3ZlcicpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRlbC5xdWVyeVNlbGVjdG9yKCcubmF2X19sZXZlbDItbGluaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcblx0XHRcdGlmKEFTS08ud2lkdGggPCA3NjgpIHtcclxuXHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRuYXYuY2xhc3NMaXN0LmFkZCgnaXMtbGV2ZWwzJyk7XHJcblxyXG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGV2ZWwyUGFyZW50LCBmdW5jdGlvbihlbGVtKXtcclxuXHJcblx0XHRcdFx0XHRlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWhvdmVyJywgZWxlbSA9PT0gZWwpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINC60LvQuNC6INC/0L4g0LrQvdC+0L/QutC1INC90LDQt9Cw0LRcclxuXHJcblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsZXZlbDJCYWNrLCBmdW5jdGlvbihlbCl7XHJcblxyXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRuYXYuc3R5bGUubWluSGVpZ2h0ID0gbmF2LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2lubmVyJykuY2xpZW50SGVpZ2h0ICsgXCJweFwiO1xyXG5cclxuXHRcdFx0bmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxldmVsMicpO1xyXG5cclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsZXZlbDEsIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaG92ZXInKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsZXZlbDNCYWNrLCBmdW5jdGlvbihlbCl7XHJcblxyXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRuYXYuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbGV2ZWwzJyk7XHJcblxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxldmVsMlBhcmVudCwgZnVuY3Rpb24oZWxlbSl7XHJcblxyXG5cdFx0XHRcdGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaG92ZXInKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKSk7IiwiXHJcbihmdW5jdGlvbigpe1xyXG5cclxuXHR2YXIgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKSxcclxuXHRcdGl0ZW1zID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19pdGVtJyksXHJcblx0XHRjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fY2xvc2UnKSxcclxuXHRcdHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xyXG5cclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGNsb3NlLCBmdW5jdGlvbihlbCl7XHJcblxyXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRBU0tPLmNsb3NlTW9kYWwoKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcblx0XHRpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsJykpIHtcclxuXHJcblx0XHRcdEFTS08uY2xvc2VNb2RhbCgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdEFTS08uY2xvc2VNb2RhbCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdEFTS08uYWN0aXZlTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX2l0ZW0tLWFjdGl2ZScpO1xyXG5cdFx0QVNLTy5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXNob3cnKTtcclxuXHRcdHdyYXBwZXIuc3R5bGUudG9wID0gMDtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLEFTS08ud2luZG93U2Nyb2xsT2xkKTtcclxuXHJcblx0XHQvLyDQv9C+0LrQsNC20LXQvCDQutC+0YDQt9C40L3Rg1xyXG5cclxuXHRcdGlmKEFTS08uYWN0aXZlTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbF9faXRlbS0tcHJvZHVjdC1pbi1jYXJ0JykgJiYgIUFTS08uYWN0aXZlTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbF9faXRlbS0tYWN0aXZlJykpIHtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdFx0QVNLTy5oZWFkZXJDYXJ0LnNob3coKTtcclxuXHJcblx0XHRcdH0sIDIwMCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vINC+0YHRgtCw0L3QvtCy0LjRgtGMINCy0LjQtNC10L5cclxuXHJcblx0XHRpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZ2FsbGVyeSAueW91dHViZS1tb2RhbC1nYWxsZXJ5LmlzLWFjdGl2ZScpKSB7XHJcblxyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZ2FsbGVyeSAueW91dHViZS1tb2RhbC1nYWxsZXJ5LmlzLWFjdGl2ZSBpZnJhbWUnKS5yZW1vdmUoKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g0YPQtNCw0LvQuNGC0Ywg0LLQuNC00LXQvlxyXG5cclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC12aWRlbycpLmlubmVySFRNTCA9ICcnO1xyXG5cclxuXHR9O1xyXG5cclxuXHRBU0tPLm1vZGFsU2hvdyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuXHRcdEFTS08uYWN0aXZlTW9kYWwgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLScgKyBzZWxlY3Rvcik7XHJcblxyXG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChpdGVtcywgZnVuY3Rpb24oZWwpe1xyXG5cclxuXHRcdFx0ZWwuY2xhc3NMaXN0LnRvZ2dsZSgnbW9kYWxfX2l0ZW0tLWFjdGl2ZScsIEFTS08uYWN0aXZlTW9kYWwgPT0gZWwpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWZ1bGwnLCBzZWxlY3RvciA9PT0gJ2dhbGxlcnknIHx8IHNlbGVjdG9yID09PSAndmlkZW8nKTtcclxuXHJcblx0XHRBU0tPLndpbmRvd1Njcm9sbE9sZCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IC1BU0tPLndpbmRvd1Njcm9sbE9sZCArICdweCc7XHJcblxyXG5cdFx0QVNLTy5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXNob3cnKTtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuXHRcdEFTS08uYWN0aXZlTW9kYWwuZm9jdXMoKTtcclxuXHJcblx0XHQvLyDQstGL0LfRi9Cy0YvQtdC8INGB0L7QsdGL0YLQuNC1INC90LAg0LDQutGC0LjQstC90L7QvCDQvtC60L3QtVxyXG5cdFx0QVNLTy5hY3RpdmVNb2RhbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnbW9kYWxTaG93JykpO1xyXG5cclxuXHR9XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHR2YXIga2V5Q29kZSA9IGUua2V5Q29kZSB8fCBlLndoaWNoO1xyXG5cclxuXHRcdGlmKGtleUNvZGUgPT09IDI3KXtcclxuXHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0dmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdjbGljaycpO1xyXG5cdFx0XHRtb2RhbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG5cdFx0dmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuXHRcdHdoaWxlICh0YXJnZXQgIT09IHRoaXMpIHtcclxuXHJcblx0XHRcdGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLW1vZGFsJykpIHtcclxuXHJcblx0XHRcdFx0QVNLTy5tb2RhbFNob3codGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KSgpOyIsIlxyXG4oZnVuY3Rpb24oZm9ybSl7XHJcblxyXG5cdGlmKGZvcm0pIHtcclxuXHJcblx0XHR2YXIgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3NlYXJjaC1pbnB1dCcpO1xyXG5cclxuXHRcdC8vINC+0YLQv9GA0LDQstC60LAg0YTQvtGA0LzRi1xyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cdFx0XHRpZihpbnB1dC52YWx1ZSA9PT0gJycpIHtcclxuXHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdGlucHV0LmZvY3VzKCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3NlYXJjaCcpKTsiLCIoZnVuY3Rpb24oZ2FsbGVyeSl7XHJcblxyXG5cdGlmKGdhbGxlcnkpIHtcclxuXHJcblx0XHR2YXIgZ2FsbGVyeUl0ZW0gPSBnYWxsZXJ5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaG93LXJvb20tZ2FsbGVyeV9faXRlbScpO1xyXG5cclxuXHRcdEFTS08uZ2FsbGVyeVN3aXBlciA9ICc8ZGl2IGNsYXNzPVwic3dpcGVyLWNvbnRhaW5lciBzd2lwZXItY29udGFpbmVyLS1nYWxsZXJ5XCI+PHVsIGNsYXNzPVwibm90c2VsIHN3aXBlci13cmFwcGVyXCI+JztcclxuXHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGdhbGxlcnlJdGVtLCBmdW5jdGlvbihsaW5rLCBpbmRleCl7XHJcblxyXG5cdFx0XHRBU0tPLmdhbGxlcnlTd2lwZXIgKz0gJzxsaSBjbGFzcz1cInN3aXBlci1zbGlkZVwiPjxpbWcgc3JjPVwiJyArIGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykgKyAnXCI+PC9saT4nO1xyXG5cclxuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZ2FsbGVyeScpLmlubmVySFRNTCA9IEFTS08uZ2FsbGVyeVN3aXBlcjtcclxuXHJcblx0XHRcdFx0QVNLTy5tb2RhbFNob3coJ2dhbGxlcnknKTtcclxuXHJcblx0XHRcdFx0dmFyIGdhbGxlcnlNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1nYWxsZXJ5IC5zd2lwZXItY29udGFpbmVyLS1nYWxsZXJ5Jyk7XHJcblxyXG5cdFx0XHRcdEFTS08uc3dpcGVyKGdhbGxlcnlNb2RhbCwgaW5kZXgpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0QVNLTy5nYWxsZXJ5U3dpcGVyICs9ICc8L3VsPjxzcGFuIGNsYXNzPVwic3dpcGVyLWNvdW50XCI+PC9zcGFuPjwvZGl2Pic7XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuXHRcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuXHRcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuXHRcdFx0c2NyaXB0LnNyYyA9ICcvanMvc3dpcGVyLm1pbi5qcyc7XHJcblxyXG5cdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcblxyXG5cdFx0fSwgQVNLTy5zZXR0aW1lb3V0KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3ctcm9vbS1nYWxsZXJ5JykpOyIsIkFTS08uc3dpcGVyID0gZnVuY3Rpb24oc3dpcGUsIGluaXRpYWxTbGlkZSl7XHJcblxyXG5cdGlmKHN3aXBlLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItcGFnaW5hdGlvbicpKXtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0dmFyIG15U3dpcGUgPSBudWxsLFxyXG5cdFx0cmVzaXplVGltZW91dCA9IG51bGwsXHJcblx0XHR3aW5kb3dXaWR0aE9MZCA9IG51bGwsXHJcblx0XHR0b2dnbGVTd2lwZSA9IG51bGwsXHJcblx0XHRyZXNldFN3aXBlID0gbnVsbCxcclxuXHRcdHN3aXBlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRzd2lwZU5leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuXHRcdHN3aXBlUHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG5cdFx0aW5pdGlhbFNsaWRlID0gaW5pdGlhbFNsaWRlID8gcGFyc2VJbnQoaW5pdGlhbFNsaWRlKSA6IDAsXHJcblx0XHRjb3VudCA9IHN3aXBlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItc2xpZGUnKS5sZW5ndGgsXHJcblx0XHRiaWcgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWJpZycpLFxyXG5cdFx0cHJvZHVjdCA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tcHJvZHVjdCcpLFxyXG5cdFx0Z2FsbGVyeSA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tZ2FsbGVyeScpO1xyXG5cclxuXHRzd2lwZU5hdi5jbGFzc05hbWUgPSAnc3dpcGVyLXBhZ2luYXRpb24gaGlkZSc7XHJcblx0c3dpcGVQcmV2LmNsYXNzTmFtZSA9ICdzd2lwZXItYnV0dG9uLXByZXYgYnV0dG9uIGhpZGUnO1xyXG5cdHN3aXBlTmV4dC5jbGFzc05hbWUgPSAnc3dpcGVyLWJ1dHRvbi1uZXh0IGJ1dHRvbiBoaWRlJztcclxuXHJcblx0c3dpcGVQcmV2LmlubmVySFRNTCA9ICc8c3ZnIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCI+PHBhdGggZD1cIk05OTAgMTBIMTB2OTgwaDk4MFYxMHptLTkxLjQgNDE2LjV2MTQ3SDM5NC40bDIxNS4zIDIxNS4zLTExNC4zIDExNC40TDkyLjIgNTAwIDQ5NS40IDk2LjhsMTE0LjQgMTE0LjQtMjE1LjQgMjE1LjNoNTA0LjJ6XCIvPjwvc3ZnPic7XHJcblxyXG5cdHN3aXBlTmV4dC5pbm5lckhUTUwgPSAnPHN2ZyB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiPjxwYXRoIGQ9XCJNOTkwIDEwSDEwdjk4MGg5ODBWMTB6bS05MS40IDQxNi41djE0N0gzOTQuNGwyMTUuMyAyMTUuMy0xMTQuMyAxMTQuNEw5Mi4yIDUwMCA0OTUuNCA5Ni44bDExNC40IDExNC40LTIxNS40IDIxNS4zaDUwNC4yelwiLz48L3N2Zz4nO1xyXG5cclxuXHRzd2lwZS5hcHBlbmRDaGlsZChzd2lwZU5hdik7XHJcblx0c3dpcGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzd2lwZU5leHQpO1xyXG5cdHN3aXBlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoc3dpcGVQcmV2KTtcclxuXHJcblx0cmVzZXRTd2lwZSA9IGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0aWYobXlTd2lwZSkge1xyXG5cclxuXHRcdFx0bXlTd2lwZS5kZXN0cm95KGZhbHNlLHRydWUpO1xyXG5cdFx0XHRteVN3aXBlID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRzd2lwZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRzd2lwZU5leHQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0c3dpcGVQcmV2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRpZiAoQVNLTy53aWR0aCA8IDc2OCkge1xyXG5cclxuXHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHJcblx0XHRcdHN3aXBlTmV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlUHJldi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGlmIChiaWcpIHtcclxuXHJcblx0XHRyZXNldFN3aXBlKCk7XHJcblxyXG5cdFx0dG9nZ2xlU3dpcGUgPSBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0XHRlbDogc3dpcGVOYXZcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRcdG5leHRFbDogc3dpcGVOZXh0LFxyXG5cdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRpZiAocHJvZHVjdCkge1xyXG5cclxuXHRcdGlmKEFTS08ud2lkdGggPCA3NjgpIHtcclxuXHJcblx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKChjb3VudCA+IDMgfHwgKGNvdW50ID4gMiAmJiBBU0tPLndpZHRoIDwgMTAwMCkpKSB7XHJcblxyXG5cdFx0XHRzd2lwZU5leHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRzd2lwZVByZXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0c3dpcGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci0tb2ZmJyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHRvZ2dsZVN3aXBlID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlTmV4dC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlUHJldi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlLmNsYXNzTGlzdC5yZW1vdmUoJ3N3aXBlci1jb250YWluZXItLW9mZicpO1xyXG5cclxuXHJcblx0XHRcdGlmKG15U3dpcGUpIHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2cobXlTd2lwZSlcclxuXHJcblx0XHRcdFx0bXlTd2lwZS5kZXN0cm95KGZhbHNlLHRydWUpO1xyXG5cdFx0XHRcdG15U3dpcGUgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0XHRcdC8vINGD0LTQsNC70YfQtdC8INGO0YLRg9CxINCyINC80LDQu9C10L3RjNC60L7QvCDRgdC70LDQudC00LXRgNC1LCDQv9GA0Lgg0YDQtdGB0LDQudGB0LUg0LjQu9C4INC10YnQtSDQutCw0LpcclxuXHRcdFx0XHRpZihzd2lwZS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9faW1nLXlvdXR1YmUuaXMtYWN0aXZlJykpe1xyXG5cclxuXHRcdFx0XHRcdHN3aXBlLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0X19pbWcteW91dHViZS5pcy1hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHRpZihzd2lwZS5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKSl7XHJcblxyXG5cdFx0XHRcdFx0XHRzd2lwZS5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKEFTS08ud2lkdGggPCA3NjgpIHtcclxuXHJcblx0XHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRpZihjb3VudCA+IDEpIHtcclxuXHJcblx0XHRcdFx0XHRteVN3aXBlID0gbmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRwcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRcdGVsOiBzd2lwZU5hdixcclxuXHRcdFx0XHRcdFx0XHRjbGlja2FibGU6IHRydWVcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0b246IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0c2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmKG15U3dpcGUpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8g0L7RgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0Y7RgtGD0LEg0LIg0LzQsNC70LXQvdGM0LrQvtC8INGB0LvQsNC50LTQtdGA0LVcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmKG15U3dpcGUuc2xpZGVzW215U3dpcGUucHJldmlvdXNJbmRleF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItc2xpZGUtLXlvdXR1YmUnKSl7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG15U3dpcGUuc2xpZGVzW215U3dpcGUucHJldmlvdXNJbmRleF0ucXVlcnlTZWxlY3RvcignLnByb2R1Y3RfX2ltZy15b3V0dWJlJykuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmKG15U3dpcGUuc2xpZGVzW215U3dpcGUucHJldmlvdXNJbmRleF0ucXVlcnlTZWxlY3RvcignaWZyYW1lJykpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG15U3dpcGUuc2xpZGVzW215U3dpcGUucHJldmlvdXNJbmRleF0ucXVlcnlTZWxlY3RvcignaWZyYW1lJykucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYoKGNvdW50ID4gMyB8fCAoY291bnQgPiAyICYmIEFTS08ud2lkdGggPCAxMDAwKSkpIHtcclxuXHJcblx0XHRcdFx0c3dpcGVOZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRzd2lwZVByZXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRteVN3aXBlID0gbmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdFx0XHRcdHByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG5cdFx0XHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRuZXh0RWw6IHN3aXBlTmV4dCxcclxuXHRcdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdHN3aXBlLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1jb250YWluZXItLW9mZicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRpZiAoZ2FsbGVyeSkge1xyXG5cclxuXHRcdHRvZ2dsZVN3aXBlID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHR2YXIgY291bnRDdXJyZW50ID0gc3dpcGUucXVlcnlTZWxlY3RvcignLnN3aXBlci1jb3VudCcpO1xyXG5cclxuXHRcdFx0aWYoY291bnQgPiAxKSB7XHJcblxyXG5cdFx0XHRcdHN3aXBlTmV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0c3dpcGVQcmV2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRjb3VudEN1cnJlbnQudGV4dENvbnRlbnQgPSAoaW5pdGlhbFNsaWRlICsgMSkgKyAnLycgKyBjb3VudDtcclxuXHJcblx0XHRcdFx0aWYoIW15U3dpcGUpIHtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnZ2FsbGVyeScpXHJcblxyXG5cdFx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0aW5pdGlhbFNsaWRlOiBpbml0aWFsU2xpZGUsXHJcblx0XHRcdFx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRcdFx0XHRuZXh0RWw6IHN3aXBlTmV4dCxcclxuXHRcdFx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRvbjoge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydDogZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYobXlTd2lwZSl7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb3VudEN1cnJlbnQudGV4dENvbnRlbnQgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG15U3dpcGUuYWN0aXZlSW5kZXggPT09IDAgfHwgbXlTd2lwZS5hY3RpdmVJbmRleCA9PT0gY291bnQgP1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y291bnQgOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bXlTd2lwZS5hY3RpdmVJbmRleCAlIGNvdW50O1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y291bnRDdXJyZW50LnRleHRDb250ZW50ICs9ICcvJyArIGNvdW50O1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8g0YPQtNCw0LvRh9C10Lwg0Y7RgtGD0LEg0LIg0LzQvtC00LDQu9GM0L3QvtC8INC+0LrQvdC1ICjQvtGB0YLQsNC90L7QstC60LApXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmKG15U3dpcGUuc2xpZGVzW215U3dpcGUucHJldmlvdXNJbmRleF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItc2xpZGUtLXlvdXR1YmUnKSl7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG15U3dpcGUuc2xpZGVzW215U3dpcGUucHJldmlvdXNJbmRleF0ucXVlcnlTZWxlY3RvcignLnlvdXR1YmUtbW9kYWwtZ2FsbGVyeScpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZihteVN3aXBlLnNsaWRlc1tteVN3aXBlLnByZXZpb3VzSW5kZXhdLnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpKXtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRteVN3aXBlLnNsaWRlc1tteVN3aXBlLnByZXZpb3VzSW5kZXhdLnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdHN3aXBlTmV4dC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdFx0c3dpcGVQcmV2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRjb3VudEN1cnJlbnQudGV4dENvbnRlbnQgPSAnJztcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0d2luZG93LlN3aXBlciAmJiB0b2dnbGVTd2lwZSgpO1xyXG5cclxuXHR9XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0aWYgKHdpbmRvdy5Td2lwZXIgJiYgIXJlc2l6ZVRpbWVvdXQpIHtcclxuXHJcblx0XHRcdFx0cmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0cmVzaXplVGltZW91dCA9IG51bGw7XHJcblxyXG5cdFx0XHRcdFx0aWYoQVNLTy53aWR0aCAhPSB3aW5kb3dXaWR0aE9MZCl7XHJcblxyXG5cdFx0XHRcdFx0XHR3aW5kb3dXaWR0aE9MZCA9IEFTS08ud2lkdGg7XHJcblxyXG5cdFx0XHRcdFx0XHR0b2dnbGVTd2lwZSAmJiB0b2dnbGVTd2lwZSgpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSwgMTAwMCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufTtcclxuXHJcblxyXG4oZnVuY3Rpb24oaXRlbSl7XHJcblxyXG5cdGlmKGl0ZW0ubGVuZ3RoKSB7XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuXHRcdFx0c2NyaXB0LnNyYyA9ICcvanMvc3dpcGVyLm1pbi5qcyc7XHJcblxyXG5cdFx0XHRzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0XHR3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKTtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcblxyXG5cdFx0fSwgQVNLTy5zZXR0aW1lb3V0KTtcclxuXHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGl0ZW0sIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRcdEFTS08uc3dpcGVyKGVsKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1jb250YWluZXInKSk7IiwiQVNLTy50YWJzID0gZnVuY3Rpb24oZWxlbXMpe1xyXG5cclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVsZW1zLCBmdW5jdGlvbih0YWIpe1xyXG5cclxuXHRcdHZhciBidG4gPSB0YWIucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2J0bicpLFxyXG5cdFx0XHRpdGVtID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19pdGVtJyksXHJcblx0XHRcdG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYnRuLCBmdW5jdGlvbihlbCxpbmRleCl7XHJcblxyXG5cdFx0XHR2YXIgX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG5cdFx0XHRcdF9wYXR0ZXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuXHRcdFx0X2J0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcclxuXHJcblx0XHRcdF9idG4uY2xhc3NOYW1lID0gJ2J1dHRvbiB0YWJzX19uYXYtYnRuJztcclxuXHRcdFx0X3BhdHRlcm4uY2xhc3NOYW1lID0gJ3BhdHRlcm4nO1xyXG5cclxuXHRcdFx0X2J0bi5pbm5lckhUTUwgPSBlbC5pbm5lckhUTUw7XHJcblx0XHRcdF9idG4uYXBwZW5kQ2hpbGQoX3BhdHRlcm4pO1xyXG5cclxuXHRcdFx0bmF2LmFwcGVuZENoaWxkKF9idG4pO1xyXG5cclxuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0X2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChpdGVtLCBmdW5jdGlvbihlbGVtLGlueCl7XHJcblxyXG5cdFx0XHRcdFx0YnRuW2lueF0uY2xhc3NMaXN0LnRvZ2dsZSgndGFic19fbmF2LWJ0bi0tYWN0aXZlJywgaW54ID09IGluZGV4KTtcclxuXHRcdFx0XHRcdGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgndGFic19faXRlbS0tYWN0aXZlJywgaW54ID09IGluZGV4KTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRuYXYuY2xhc3NMaXN0LmFkZCgndGFic19fbmF2Jyk7XHJcblxyXG5cdFx0dGFiLmluc2VydEJlZm9yZShuYXYsIGl0ZW1bMF0pO1xyXG5cclxuXHRcdGJ0biA9IG5hdi5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19fbmF2LWJ0bicpO1xyXG5cclxuXHRcdGl0ZW1bMF0uY2xhc3NMaXN0LmFkZCgndGFic19faXRlbS0tYWN0aXZlJyk7XHJcblx0XHRidG5bMF0uY2xhc3NMaXN0LmFkZCgndGFic19fbmF2LWJ0bi0tYWN0aXZlJyk7XHJcblxyXG5cdH0pO1xyXG5cclxufTtcclxuXHJcblxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicycpLmxlbmd0aCkge1xyXG5cclxuXHRBU0tPLnRhYnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnMnKSk7XHJcblxyXG59IiwiXHJcbihmdW5jdGlvbihpdGVtcyl7XHJcblxyXG5cdGlmKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGl0ZW1zLCBmdW5jdGlvbihlbCl7XHJcblxyXG5cdFx0dmFyIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuXHRcdGJ0bi5jbGFzc05hbWUgPSAnYnRuIGJ0bi0tbGluayc7XHJcblxyXG5cdFx0YnRuLnRleHRDb250ZW50ID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWJ0bicpO1xyXG5cclxuXHRcdGVsLmFwcGVuZENoaWxkKGJ0bik7XHJcblxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0LWhpZGRlbicpKTsiLCJcclxuKCB0b29sdGlwcyA9PiB7XHJcblxyXG5cdGlmKHRvb2x0aXBzLmxlbmd0aCl7XHJcblxyXG5cdFx0Y29uc3QgaWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuXHRcdGljby5pbm5lckhUTUwgPSAnPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIwIDEyYTggOCAwIDExLTE2IDAgOCA4IDAgMDExNiAwem0tNS43NC0zLjg3YTMuMTggMy4xOCAwIDAxLjU2IDMuNzhjLS4zOC43LTEgMS4yMi0xLjc0IDEuNDlhLjQuNCAwIDAwLS4yOC4zOHYuNjJhLjguOCAwIDAxLTEuNiAwVjEyLjhBLjguOCAwIDAxMTIgMTJjLjg4IDAgMS42LS43MiAxLjYtMS42YTEuNiAxLjYgMCAwMC0zLjIgMCAuOC44IDAgMDEtMS41OS4wOGwtLjAxLS4xMmMuMDEtMiAxLjg2LTMuNTUgMy45NS0zLjA3LjU3LjEzIDEuMS40MiAxLjUxLjg0ek0xMi44IDE2LjhhLjguOCAwIDExLTEuNiAwIC44LjggMCAwMTEuNiAwelwiLz48L3N2Zz4nO1xyXG5cclxuXHRcdGxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9uUmVjb3JkcyA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0ID0gbXV0YXRpb25SZWNvcmRzWzBdLnRhcmdldCxcclxuXHRcdFx0XHQgIHJlY3QgPSB0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdEFycmF5LmZyb20odG9vbHRpcHMsIHRvb2x0aXAgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgYnRuID0gdG9vbHRpcC5xdWVyeVNlbGVjdG9yKCdzdW1tYXJ5Jyk7XHJcblxyXG5cdFx0XHRpZiAoIHRvb2x0aXAuY2xhc3NOYW1lLmxlbmd0aCA9PT0gMCApIHtcclxuXHJcblx0XHRcdFx0YnRuLmFwcGVuZENoaWxkKGljby5jbG9uZU5vZGUodHJ1ZSkpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0b2JzZXJ2ZXIub2JzZXJ2ZSh0b29sdGlwLCB7XHJcblxyXG5cdFx0XHRcdGF0dHJpYnV0ZXMgOiB0cnVlXHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdkZXRhaWxzJyk7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKHRvb2x0aXBzLCB0b29sdGlwID0+IHtcclxuXHJcblx0XHRcdFx0aWYodGFyZ2V0ICE9PSB0b29sdGlwKSB7XHJcblxyXG5cdFx0XHRcdFx0dG9vbHRpcC5vcGVuID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkZXRhaWxzJykpOyIsIi8vINCy0LjQtNC10L4g0LjQutC+0L3QutC+0LksINC30LDQv9GD0YEg0LIg0L/QvtC/0LDQv1xyXG5cclxuKGZ1bmN0aW9uKHlvdXR1YmUpe1xyXG5cclxuXHRpZih5b3V0dWJlLmxlbmd0aCkge1xyXG5cclxuXHRcdFsuLi55b3V0dWJlXS5mb3JFYWNoKCBsaW5rID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGlkID0gbGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuXHJcblx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG5cclxuXHRcdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdhbGxvd2Z1bGxzY3JlZW4nLCAnJyk7XHJcblx0XHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnYWxsb3cnLCAnYXV0b3BsYXknKTtcclxuXHRcdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIGlkICsgJz9yZWw9MCZzaG93aW5mbz0wJmF1dG9wbGF5PTEnKTtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXZpZGVvJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuXHJcblx0XHRcdFx0QVNLTy5tb2RhbFNob3coXCJ2aWRlb1wiKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueW91dHViZS1pY28nKSk7XHJcblxyXG4vLyDQstC40LTQtdC+INCyINC+0L/QuNGB0LDQvdC40LhcclxuXHJcbihmdW5jdGlvbih5b3V0dWJlKXtcclxuXHJcblx0aWYoeW91dHViZS5sZW5ndGgpIHtcclxuXHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHlvdXR1YmUsIGZ1bmN0aW9uKHZpZGVvKXtcclxuXHJcblx0XHRcdHZhciBsaW5rID0gdmlkZW8ucXVlcnlTZWxlY3RvcignLnlvdXR1YmVfX2xpbmsnKSxcclxuXHRcdFx0XHRpZCA9IGxpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblxyXG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdGlmKHZpZGVvLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpe1xyXG5cclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2aWRlby5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcclxuXHRcdFx0XHR2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcblx0XHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnY29udHJvbHNMaXN0Jywnbm9kb3dubG9hZCcpO1xyXG5cdFx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVQaWN0dXJlSW5QaWN0dXJlJywndHJ1ZScpO1xyXG5cdFx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FsbG93ZnVsbHNjcmVlbicsJ2FsbG93ZnVsbHNjcmVlbicpO1xyXG5cdFx0XHRcdGlmcmFtZS5zcmMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIGlkICsgJz9hdXRvcGxheT0xJmNvbnRyb2xzPTAnO1xyXG5cdFx0XHRcdHZpZGVvLmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnlvdXR1YmUnKSk7XHJcblxyXG4oZnVuY3Rpb24oeW91dHViZSl7XHJcblxyXG5cdGlmKHlvdXR1YmUpIHtcclxuXHJcblx0Ly8gVGhpcyBjb2RlIGxvYWRzIHRoZSBJRnJhbWUgUGxheWVyIEFQSSBjb2RlIGFzeW5jaHJvbm91c2x5LlxyXG4vKlx0XHR2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblx0XHR0YWcuc3JjID0gXCJodHRwOi8vd3d3LnlvdXR1YmUuY29tL3BsYXllcl9hcGlcIjtcclxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGFnKTtcclxuKi9cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRcdHZhciB5b3V0dWJlID0gbnVsbDtcclxuXHJcblx0XHQvLyDRgdC70YPRiNCw0LXQvCDQstC40LTQtdC+INCyINGB0LvQsNC50LTQtdGA0LUg0LDQtNCw0L/RgtC40LJcclxuXHRcdFx0aWYod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcclxuXHJcblx0XHRcdFx0eW91dHViZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9kdWN0X19pbWcteW91dHViZScpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHQvLyDQtdGB0LvQuCDQstC40LTQtdC+INCyINC80L7QtNCw0LvQutC1XHJcblx0XHRcdFx0eW91dHViZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy55b3V0dWJlLW1vZGFsLWdhbGxlcnknKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHQvLyDRgdC+0LfQtNCw0LXQvCDQuCDQstGB0YLQsNCy0LvRj9C10Lwg0LLQuNC00LXQvlxyXG5cdFx0XHRpZih5b3V0dWJlICYmICF5b3V0dWJlLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpe1xyXG5cclxuXHRcdFx0XHR5b3V0dWJlLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHR2YXIgaWQgPSB5b3V0dWJlLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG5cclxuXHRcdFx0XHR2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcblx0XHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCdwbGF5ZXItJyArIGlkKTtcclxuXHRcdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdjb250cm9sc0xpc3QnLCdub2Rvd25sb2FkJyk7XHJcblx0XHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnZGlzYWJsZVBpY3R1cmVJblBpY3R1cmUnLCd0cnVlJyk7XHJcblx0XHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnYWxsb3dmdWxsc2NyZWVuJywnYWxsb3dmdWxsc2NyZWVuJyk7XHJcblx0XHRcdFx0aWZyYW1lLnNyYyA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICsgaWQgKyAnP2F1dG9wbGF5PTEmY29udHJvbHM9MCc7XHJcblx0XHRcdFx0eW91dHViZS5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9faW1nLXlvdXR1YmUnKSk7Il19
