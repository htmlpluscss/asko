(function(btn){

	if(!btn) {

		return;

	}

	var nav = document.querySelector('.nav'),
		level1 = nav.querySelectorAll('.nav__item'),
		wrapper = document.querySelector('.wrapper');

	// открыть меню

	btn.addEventListener('click', function () {

		ASKO.windowScrollOld = window.pageYOffset;

		wrapper.style.top = -ASKO.windowScrollOld + 'px';

		ASKO.body.classList.add('modal-show');
		window.scrollTo(0,0);
		nav.classList.remove('visuallyhidden');

	});

	// закрыть меню

	nav.addEventListener('click', function (e) {

		if(e.target.classList.contains('nav') || e.target.closest('.nav__btn-toggle')) {

			ASKO.body.classList.remove('modal-show');
			wrapper.style.top = 0;
			window.scrollTo(0,ASKO.windowScrollOld);
			nav.classList.add('visuallyhidden');

			Array.prototype.forEach.call(level1, function(el){

				el.classList.remove('is-hover');

			});

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

})(document.querySelector('.header__btn-toggle'));