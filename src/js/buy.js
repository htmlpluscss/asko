(function(forms){

	if(!forms) {

		return;

	}

	Array.prototype.forEach.call(forms, function(btn){

		var form = btn.closest('form');

		form.addEventListener('submit',function(e){

			e.preventDefault();

			var buy = form.classList.contains('in-cart') ? -1 : 1;

			form.querySelector('input[name="buy"]').value = buy;

			btn.disabled = true;

			// send form

			var formData = new FormData(form),
				xhr = new XMLHttpRequest();

			xhr.open("POST", form.getAttribute('action') + '&ajax/');
			xhr.send(formData);
			xhr.responseType = 'json';

			xhr.onreadystatechange = function() {

				if (xhr.readyState != 4){

					return;

				}

				btn.disabled = false;
				btn.classList.toggle('btn--gray', buy === 1);
				btn.textContent = btn.getAttribute('data-' + ( buy === 1 ? 'delete' : 'buy' ) );

				if(buy === 1) {

					document.querySelector('.modal-product-in-cart').textContent = form.querySelector('input[name="product-name"]').value;

					ASKO.modalShow('product-in-cart');

				}

				var cart = xhr.response;
				console.log(cart.quantity, cart.sum);

				form.classList.toggle('in-cart', buy === 1);

				if (xhr.status != 200) {

					console.log('ошибка ' + xhr.status);

				}
				else {

					var headerCart = document.querySelector('.header__cart');

					headerCart.querySelector('.header__cart-count').textContent = cart.quantity;
					headerCart.querySelector('.header__cart-value').textContent = ASKO.sepNumber(cart.sum);

					headerCart.classList.toggle('header__cart--empty', cart.quantity == '0');

				}

			}

		});

	});

})(document.querySelectorAll('.product-in-cart'));