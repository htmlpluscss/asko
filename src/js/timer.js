/** Этот код в продакшене больше не используется

(function(elems){

	Array.prototype.forEach.call(elems, function(timer){

		var clearIntervalID = null,
			formRepeat = timer.querySelector('.modal-timer__form'),
			btnRepeat = timer.querySelector('.modal-timer__submit'),
			timerText = timer.querySelector('.modal-timer__text'),
			timerValue = timer.querySelector('.modal-timer__value'),
			timerStart = parseInt(timerValue.getAttribute('data-time')),
			suf = timerValue.getAttribute('data-suf').split(',');

		function setup(){

			var count = timerStart;

			timerValue.textContent = count + ' ' + CF.declension(count,suf);
			timerText.classList.remove('hide');
			btnRepeat.classList.add('hide');

			clearInterval(clearIntervalID);

			clearIntervalID = setInterval(function(){

				if(count < 1) {

					clearInterval(clearIntervalID);

					timerText.classList.add('hide');
					btnRepeat.classList.remove('hide');

				}

				count--;
				timerValue.textContent = count + ' ' + CF.declension(count,suf);

			}, 1000);

		}

		timer.addEventListener('modalShow', function () {

			setup();

		});

		btnRepeat.addEventListener('click', function () {

			var xhr = new XMLHttpRequest(),
				formData = new FormData(formRepeat);

			xhr.open("GET", formRepeat.getAttribute('action'));

			setup();

			xhr.onreadystatechange = function() {

				if (xhr.readyState === 4) {

					console.log('запрос на новый код успешно отправлен.');

				}

				if (xhr.status !== 200) {

					console.log('ошибка ' + xhr.status);

				}

			}

			xhr.send(formData);

		});

	});

})(document.querySelectorAll('.modal-timer'));*/