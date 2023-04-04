

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