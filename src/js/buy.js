(function(forms){

	if(!forms) {

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

				var cart = JSON.parse(xhr.response);
				console.log(cart.quantity, cart.sum);

				form.classList.toggle('in-cart', buy);

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

			xhr.send(formData);

		});

	});

})(document.querySelectorAll('.product-in-cart'));