

(function(){

	var forms = document.querySelectorAll('.form');

	Array.prototype.forEach.call(forms, function(form){

		var novalidate = false,
			showMoadalOk = form.getAttribute('data-ok-modal'),
			formRequired = form.querySelectorAll('[required]'),
			formBtnSubmit = form.querySelector('.form__submit');

		// отправка формы
		form.addEventListener('submit', function(e) {

			e.preventDefault();

			var novalidate = false,
				formData = new FormData(form);

			Array.prototype.forEach.call(formRequired, function(input){

				if(input.getAttribute('type') == 'checkbox') {

					if(input.checked){

						input.parentNode.classList.remove('checkbox--error');

					}
					else {

						input.parentNode.classList.add('checkbox--error');
						novalidate = true;

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

				var xhr = new XMLHttpRequest();

				xhr.open("POST", form.getAttribute('action'));
				xhr.send(formData);

				// reset

				formBtnSubmit && formBtnSubmit.setAttribute('disabled','disabled');

				xhr.onreadystatechange = function() {

					if (xhr.readyState != 4){

						return;

					}

					if (xhr.status == 200) {

						form.reset();

						if(showMoadalOk) {

							ASKO.modalShow('thanks');

						}

					} else {

						alert('ошибка ' + xhr.status);

					}

					formBtnSubmit && formBtnSubmit.removeAttribute('disabled');

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

		el.addEventListener('keyup', function() {

			errorInput(el);

		});

		el.addEventListener('blur', function() {

			errorInput(el);

		});

	});

// checked

	var checkbox = document.querySelectorAll('.checkbox');

	Array.prototype.forEach.call(checkbox, function(el){

		var input = el.querySelector('input');

		input.addEventListener('change', function() {

			if(input.checked) {

				el.classList.remove('checkbox--error');

			}

		});

	});

})();