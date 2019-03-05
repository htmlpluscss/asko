// btn all menu

CF.videoToggle = function(metod){

	var video = document.querySelectorAll('video');

	if(video.length) {

		Array.prototype.forEach.call(video, function (el) {

			metod == 'play' ? el.play() : el.pause();

		});

	}

};

(function(btnFullMenu){

	if(!btnFullMenu) {

		return;

	}

	btnFullMenu.addEventListener('click', function () {

		CF.videoToggle('stop');

		btnFullMenu.parentNode.classList.toggle('header__nav--show');

	});

	window.addEventListener("click", function(e){

		if(!e.target.closest('.header__nav') || e.target.closest('.header__search')){

			CF.videoToggle('play');
			btnFullMenu.parentNode.classList.remove('header__nav--show');

		}

	});

})(document.querySelector('.header__btn-full-menu'));

// bg
(function(search){

	if(!search) {

		return;

	}

	var menu = document.querySelector('.header__btn-full-menu').parentNode;

	window.addEventListener("click", function(e){

		if(menu.classList.contains('header__nav--show') || search.classList.contains('header__search--show')) {

			CF.videoToggle('stop');
			CF.body.classList.add('body--bg');

		}
		else {

			CF.videoToggle('play');

		}

	});

})(document.querySelector('.header__search'));


// menu mobile
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