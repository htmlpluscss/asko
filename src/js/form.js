

(function(){

	var forms = document.querySelectorAll('.form');

	Array.prototype.forEach.call(forms, function(form){

		var novalidate = false,
			showMoadalOk = form.getAttribute('data-ok'),
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

					if(input.classList.contains('input-label__input')){

						errorInputLabel(input);

					}

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

						Array.prototype.forEach.call(inputLabel, function(el){

							focusInputLabel(el);

						});

						if(showMoadalOk) {

							CF.modalShow('ok',showMoadalOk.split('|')[0],showMoadalOk.split('|')[1]);

						}

					} else {

						alert('ошибка ' + xhr.status);

					}

					formBtnSubmit && formBtnSubmit.removeAttribute('disabled');

				}
			}
		});
	});


// input-label

	var inputLabel = document.querySelectorAll('.input-label__input');

	function focusInputLabel(el,required){

		el.value ?
			el.parentNode.classList.add('input-label--no-empty'):
			el.parentNode.classList.remove('input-label--no-empty');

		if(required && el.getAttribute('required') !== null) {

			errorInputLabel(el);

		}

	}

	function errorInputLabel(el){

		el.value ?
			el.parentNode.classList.remove('input-label--error'):
			el.parentNode.classList.add('input-label--error');

	}

	Array.prototype.forEach.call(inputLabel, function(el){

		el.addEventListener('focus', function() {

			focusInputLabel(el);

		});

		el.addEventListener('keyup', function() {

			focusInputLabel(el,true);

		});

		el.addEventListener('blur', function() {

			focusInputLabel(el,true);

		});

		focusInputLabel(el);

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