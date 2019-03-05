
(function(elems){

	Array.prototype.forEach.call(elems, function (el) {

		var form = el.querySelector('.office-select__form'),
			input = el.querySelector('.office-select__input'),
			reset = el.querySelector('.office-select__reset');

		input.addEventListener('keyup', function () {

			reset.classList.toggle('hide', input.value.length < 4);

		});

		form.addEventListener('reset', function () {

			reset.classList.add('hide');
			input.value = '';

		});

	});

	// слушаем источник клика
	document.addEventListener('click', function (e) {

		var target = e.target;

		while (target !== this) {

			if (target.classList.contains('office-select__btn-toggle-rasp')) {

				var tableBox = target.parentNode.querySelector('.office-select__rasp'),
					height = tableBox.querySelector('table').clientHeight;

				if(tableBox.clientHeight > 0){

					height = 0;

				}

				tableBox.style.height = height + 'px';

			}

			target = target.parentNode;

		}

	});


})(document.querySelectorAll('.office-select'));