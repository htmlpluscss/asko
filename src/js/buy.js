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