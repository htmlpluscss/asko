
(function(modalPoll){

	if(modalPoll.length) {

		Array.prototype.forEach.call(modalPoll, function (el) {

			var radio = el.querySelectorAll('.modal-poll__radio input'),
				inputText = el.querySelector('.modal-poll__input-custom'),
				btn = el.querySelector('.modal__btn');

			function inputTextEvent(){

				btn.disabled = !inputText.value;

			}

			inputText.addEventListener('change', function() {

				inputTextEvent();

			});

			inputText.addEventListener('keyup', function() {

				inputTextEvent();

			});

			inputText.addEventListener('blur', function() {

				inputTextEvent();

			});

			Array.prototype.forEach.call(radio, function (elem) {

				elem.addEventListener('change', function () {

					btn.disabled = false;

					if (this.value === 'custom') {

						inputText.classList.remove('hide');
						inputText.disabled = false;
						inputText.focus();

						inputTextEvent();

					} else {

						inputText.classList.add('hide');
						inputText.disabled = true;

					}

				});

			});


		});

	}

})(document.querySelectorAll('.modal-poll'));