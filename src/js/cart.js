(function(cart){

	if(!cart) {

		return;

	}

	// create order
	if(cart.querySelector('.cart__list')) {

		var form = cart.querySelector('.cart__list'),
			quantity = form.querySelectorAll('.quantity'),
			headerCart = document.querySelector('.header__cart'),
			headerCount = headerCart.querySelector('.header__cart-count'),
			headerValue	= headerCart.querySelector('.header__cart-value'),
			totalText = cart.querySelector('.cart__total'),
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
				totalText,
				ASKO.strToNumber(totalText.textContent),
				s,
				0,
				0.5,
				countUpOption);

			if (!countUp.error) {

				countUp.start();

			} else {

				console.error(countUp.error);
				totalText.textContent = ASKO.sepNumber(s);

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

	}


	// переключение с зависимыми контролами

	if(cart.querySelector('.toggle-control')) {

		Array.prototype.forEach.call(cart.querySelectorAll('.toggle-control'), (el) => {

			var hide = el.getAttribute('data-toggle-hide'),
				show = el.getAttribute('data-toggle-show');

			el.addEventListener('change', () => {

				Array.prototype.forEach.call(cart.querySelectorAll('[data-toggle-dependent-hide="'+hide+'"]'), (el) => el.classList.add('hide'));
				Array.prototype.forEach.call(cart.querySelectorAll('[data-toggle-dependent-show="'+show+'"]'), (el) => el.classList.remove('hide'));

			});

		});

	}

})(document.querySelector('.cart'));