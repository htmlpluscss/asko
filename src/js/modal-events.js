// видимость пароля
(function(elems){

	Array.prototype.forEach.call(elems, function (el) {

		var btn = el.querySelector('.password-input__btn'),
			input = el.querySelector('.password-input__input'),
			inputPassword = el.querySelector('.password-input__hide-input'),
			passwordHide = true,
			realPassword = [];

        if (!input || !btn || !inputPassword)
            return;

		input.addEventListener('keyup', function () {

			var tmpPassword = this.value,
				passwordLen = tmpPassword.length;

			for (var i = 0; i < passwordLen; i++) {

				if (tmpPassword[i] != '*') {

					realPassword[i] = tmpPassword[i];

				}

			}

			realPassword = realPassword.slice(0, passwordLen);

			if(passwordHide){

				this.value = tmpPassword.replace(/./g, '*');

			}

			inputPassword.value = realPassword.join('');

		});

		btn.addEventListener('click', function () {

			passwordHide = !passwordHide;

			btn.classList.toggle('is-open');

			if(passwordHide){

				input.value = input.value.replace(/./g, '*');

			}

			else {

				input.value = realPassword.join('');

			}

		});

	});

})(document.querySelectorAll('.password-input'));

// генерация пароля
(function(genPassword){

	var len = 6; // длинна пароля
	var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!;%:?()_+=";

	function gen_password(len) {

		var password = "";

		for (var i = 0; i < len; i++){

			password += symbols.charAt(Math.floor(Math.random() * symbols.length));

		}

		return password;

	}

	Array.prototype.forEach.call(genPassword, function (el) {

		var btn = el.querySelector('.gen-password__btn'),
			input = el.querySelector('.gen-password__input'),
			toggleVisible = el.querySelector('.password-input__btn');

		btn.addEventListener('click', function () {

			input.value = gen_password(len);

			if (typeof window.CustomEvent === 'function') {

				input.dispatchEvent(new Event('keyup'));

				if(!!toggleVisible && !toggleVisible.classList.contains('is-open')){

					toggleVisible.dispatchEvent(new Event('click'));

				}

			}

		});

	});

})(document.querySelectorAll('.gen-password'));

// карта офисов
(function(map){

	if(map) {

		var mapLoad = false;

		map.closest('.modal__item--geo').addEventListener('modalShow', function () {

			if(mapLoad) {

				return;

			}

			CF.loadMap(function(){

				mapLoad = true;

				var myMap = new ymaps.Map(map, {
					center: [55.73996, 37.5797],
					zoom: 18,
					controls: []
				});

				var zoomControl = new ymaps.control.ZoomControl({
					options: {
						visible: true
					}
				});

				myMap.controls.add(zoomControl);

				myMap.behaviors.disable('scrollZoom');

				var myPlacemark = new ymaps.Placemark(myMap.getCenter(), false, false);

				myMap.geoObjects.add(myPlacemark);

			});

		});

	}

})(document.querySelector('.map-geo'));