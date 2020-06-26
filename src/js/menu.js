(function(nav){

	if(!nav) {

		return;

	}

	var level1 = nav.querySelectorAll('.nav__item'),
		level2Parent = nav.querySelectorAll('.nav__level2-item--parent'),
		level2Back = nav.querySelectorAll('.nav__level2-btn-back'),
		level3Back = nav.querySelectorAll('.nav__level3-btn-back');

	// открыть|закрыть меню

	document.addEventListener('click', function (e) {

		if(e.target.closest('.header__btn-toggle') || e.target.classList.contains('nav')) {

			if(ASKO.body.classList.contains('menu-open')){

				Array.prototype.forEach.call(level1, function(el){

					el.classList.remove('is-hover');
					nav.classList.remove('is-level2');

				});

			}

			ASKO.body.classList.toggle('menu-open');
			nav.classList.toggle('visuallyhidden');

		}

	});


	// наведение на первый уровень

	Array.prototype.forEach.call(level1, function(el){

		if(!el.classList.contains('nav__item--parent')) {

			el.addEventListener('mouseleave', function () {

				el.classList.remove('is-hover');
				nav.classList.remove('is-level2');

			});

			el.addEventListener('mouseenter', function () {

				el.classList.remove('is-hover');
				nav.classList.remove('is-level2');

				Array.prototype.forEach.call(level1, function(elem){

					elem.classList.remove('is-hover');

				});

			});

		}
		else {

			el.addEventListener('mouseenter', function () {

				nav.classList.add('is-level2');

				Array.prototype.forEach.call(level1, function(elem){

					elem.classList.toggle('is-hover', elem === el);

				});

			});

			el.querySelector('.nav__head').addEventListener('touchstart', function (e) {

				e.preventDefault();
				e.stopPropagation();

				nav.classList.add('is-level2');

				Array.prototype.forEach.call(level1, function(elem){

					elem.classList.toggle('is-hover', elem === el);

				});

			});

		}

	});

	// клик второй уровень

	Array.prototype.forEach.call(level2Parent, function(el){

		el.addEventListener('touchstart', function () {

			nav.classList.add('is-level3');

			Array.prototype.forEach.call(level2Parent, function(elem){

				elem.classList.toggle('is-hover', elem === el);

			});

		});

	});

	// клик по кнопке назад

	Array.prototype.forEach.call(level2Back, function(el){

		el.addEventListener('click', function () {

			nav.classList.remove('is-level2');

			Array.prototype.forEach.call(level1, function(el){

				el.classList.remove('is-hover');

			});

		});

	});

	Array.prototype.forEach.call(level3Back, function(el){

		el.addEventListener('click', function () {

			nav.classList.remove('is-level3');

			Array.prototype.forEach.call(level2Parent, function(elem){

				elem.classList.remove('is-hover');

			});

		});

	});

})(document.querySelector('.nav'));