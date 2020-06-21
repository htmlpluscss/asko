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

	var arrow = document.createElement("div");
	arrow.className = "nav__item-arrow";
	arrow.innerHTML = "<svg width='14' heigh='14' viewBox='0 0 256 256'><path d='M79.093 0L48.907 30.187 146.72 128l-97.813 97.813L79.093 256l128-128z'/></svg>";

	Array.prototype.forEach.call(level1, function(el){

		if(el.classList.contains('nav__item--parent')) {

			el.firstElementChild.appendChild(arrow.cloneNode(true));

		}
		else {

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