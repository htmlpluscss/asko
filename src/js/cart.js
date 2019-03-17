(function(cart){

	if(!cart) {

		return;

	}

	var form = cart.querySelector('.cart__list'),
		quantity = form.querySelectorAll('.quantity'),
		headerCart = document.querySelector('.header__cart'),
		headerCount = headerCart.querySelector('.header__cart-count'),
		headerValue	= headerCart.querySelector('.header__cart-value'),
		countUpOption = {
			useEasing: false,
			useGrouping: true,
			separator: ' ',
			decimal: ''
		};

	function result() {

		var s = 0,
			items = cart.querySelectorAll('.cart__item');

		Array.prototype.forEach.call(items, function(el){

			var count = parseInt(el.querySelector('.quantity__count').value),
				price = parseInt(el.querySelector('.quantity__price').value);

			if(isNaN(count)) {

				count = 1;
				el.querySelector('.quantity__count').value = 1;

			}

			var countUp = new CountUp(
				el.querySelector('.cart__item-price--total'),
				ASKO.strToNumber(el.querySelector('.cart__item-price--total').textContent),
				count * price,
				0,
				0.5,
				countUpOption);

			if (!countUp.error) {

				countUp.start();

			} else {

				console.error(countUp.error);
				el.querySelector('.cart__item-price--total').textContent = ASKO.sepNumber(count * price);

			}

			s += count * price;

		});

	// total sum
		var countUp = new CountUp(
			form.querySelector('.cart__items-price'),
			ASKO.strToNumber(form.querySelector('.cart__items-price').textContent),
			s,
			0,
			0.5,
			countUpOption);

		if (!countUp.error) {

			countUp.start();

		} else {

			console.error(countUp.error);
			form.querySelector('.cart__items-price').textContent = ASKO.sepNumber(s);

		}

	// header cart link
		var countUp = new CountUp(
			headerCount,
			parseInt(headerCount.textContent),
			items.length,
			0,
			0.5,
			countUpOption);

		if (!countUp.error) {

			countUp.start();

		} else {

			console.error(countUp.error);
			headerCount = items.length;

		}

		var countUp = new CountUp(
			headerValue,
			ASKO.strToNumber(headerValue.textContent),
			s,
			0,
			0.5,
			countUpOption);

		if (!countUp.error) {

			countUp.start();

		} else {

			console.error(countUp.error);
			headerValue = ASKO.sepNumber(s);

		}

	// hide form empty

		if(s == 0) {

			form.classList.add('cart__list--hide');
			headerCart.innerHTML = headerCart.getAttribute('data-empty');

		}

		// send form

		var formData = new FormData(form),
			xhr = new XMLHttpRequest();

		xhr.open("POST", form.getAttribute('action'));
		xhr.send(formData);

	}

	result();

	if(quantity.length) {

// quantity
		Array.prototype.forEach.call(quantity, function(el){

			var up = el.querySelector('.quantity__btn--up'),
				down = el.querySelector('.quantity__btn--down'),
				count = el.querySelector('.quantity__count'),
				value = null;

			up.addEventListener('click',function(){

				value = parseInt(count.value) + 1;

				count.value = value;

				result();

			});

			down.addEventListener('click',function(){

				value = parseInt(count.value) - 1;

				if(value < 1) {

					value = 1;

				}

				count.value = value;

				result();

			});

			count.addEventListener('blur',function(){

				result();

			});

			count.addEventListener('focus',function(){

				setTimeout(function(){

					count.setSelectionRange(0,9);

				},100)

			});

			count.addEventListener('keyup',function(){

				var val = this.value.replace(/[\D]/g, '');

				this.value = val;

				result();

			});

		});

// remove
		Array.prototype.forEach.call(cart.querySelectorAll('.cart__item-remove'), function(el){

			var item = el.closest('.cart__item');

			el.addEventListener('click',function(){

				item.style.height = item.clientHeight + 'px';

				item.addEventListener(ASKO.cssAnimation('transition'),function(){

					if(item.clientHeight > 0) {

						item.style.height = 0;

					}
					else {

						item.remove();
						result();

					}

				});

				item.classList.add('cart__item--remove');

			});

		});

	}

// mirror
	Array.prototype.forEach.call(cart.querySelectorAll('[data-mirror]'), function(el){

		el.addEventListener('blur', function(){

			document.querySelector('#' + el.getAttribute('data-mirror')).value = el.value;

		});

	});

})(document.querySelector('.cart'));