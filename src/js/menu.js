(function(btn){

	if(!btn) {

		return;

	}

	btn.addEventListener('click', function () {

		if(ASKO.OpenMenu) {

			ASKO.body.classList.remove('menu-show');

			window.scrollTo(0,ASKO.windowScrollOld);

			ASKO.OpenMenu = false;

		}
		else {

			ASKO.OpenMenu = true;

			// записываем значение скролла страницы
			ASKO.windowScrollOld = window.pageYOffset;
			window.scrollTo(0,0);

			ASKO.body.classList.add('menu-show');

		}

	});

})(document.querySelector('.header__btn-menu-toggle'));

(function(btn){

	if(!btn) {

		return;

	}

	btn.addEventListener('click', function () {

		btn.classList.toggle('is-open');
		document.querySelector('.nav__list').classList.toggle('is-open');

	});

})(document.querySelector('.nav__btn-toggle'));