(function(btn){

	if(!btn) {

		return;

	}

	btn.addEventListener('click', function () {

		if(CF.OpenMenu) {

			CF.body.classList.remove('menu-show');

			window.scrollTo(0,CF.windowScrollOld);

			CF.OpenMenu = false;

		}
		else {

			CF.OpenMenu = true;

			// записываем значение скролла страницы
			CF.windowScrollOld = window.pageYOffset;
			window.scrollTo(0,0);

			CF.body.classList.add('menu-show');

		}

	});

})(document.querySelector('.header__btn-menu-toggle'));