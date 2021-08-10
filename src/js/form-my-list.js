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