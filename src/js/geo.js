

(function(geo){

	if(geo) {

		var btnTrue = geo.querySelector('.header__geo-confirm-true'),
			confirmWindow = geo.querySelector('.header__geo-confirm');

		btnTrue.addEventListener('click', function () {

            var city = geo.querySelector('.header__geo-confirm-name'),
                current = geo.querySelector('.header__geo-current');

            current.textContent = city.textContent;

			confirmWindow.classList.add('hide');

            Cookies.set('BITRIX_SM_GEO_ACCEPT', 1, {domain: location.hostname});
		});

		if(!Cookies.get('BITRIX_SM_GEO_ACCEPT') || Cookies.get('BITRIX_SM_GEO_ACCEPT') === '0') {

			confirmWindow.classList.remove('hide');

		}

	}

})(document.querySelector('.header__geo'));