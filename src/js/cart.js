(function(cart){

	if(!cart) {

		return;

	}

	var form = cart.querySelector('.cart__form'),
		quantity = form.querySelectorAll('.quantity');

	function result() {

		var s = 0;

		Array.prototype.forEach.call(cart.querySelectorAll('.cart__item'), function(el){

			var count = parseInt(el.querySelector('.quantity__count').value),
				price = parseInt(el.querySelector('.quantity__price').value);

			if(isNaN(count)) {

				count = 1;
				el.querySelector('.quantity__count').value = 1;

			}

			el.querySelector('.cart__item-price--total').textContent = ASKO.sepNumber(count * price);

			s += count * price;

		});

		form.querySelector('.cart__items-price').textContent = ASKO.sepNumber(s);

		if(s == 0) {

			form.querySelector('.cart__list').classList.add('cart__list--hide');

		}

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

	setTimeout(function(){

		var script = document.createElement('script');

		script.type = 'text/javascript';
		script.async = true;
		script.src = '/js/nouislider.min.js';

		script.onload = function () {

			var event = new Event('loadNoUiSlider');
			window.dispatchEvent(event);

		};

		document.head.appendChild(script);

	}, 1000);

})(document.querySelector('.cart'));