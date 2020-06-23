(function(nav){

	if(!nav) {

		return;

	}

	var level1 = nav.querySelectorAll('.nav__item');

	// открыть|закрыть меню

	document.addEventListener('click', function (e) {

		if(e.target.closest('.header__btn-toggle') || e.target.classList.contains('nav')) {

			if(ASKO.body.classList.contains('menu-open')){

				Array.prototype.forEach.call(level1, function(el){

					el.classList.remove('is-hover');

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

			});

		}

		el.addEventListener('mouseenter', function () {

			Array.prototype.forEach.call(level1, function(elem){

				elem.classList.toggle('is-hover', elem === el);

			});

		});

	});

})(document.querySelector('.nav'));