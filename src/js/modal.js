
(function(){

	var modal = document.querySelectorAll('.modal'),
		box = document.querySelectorAll('.modal__box'),
		items = document.querySelectorAll('.modal__item'),
		wrapper = document.querySelector('.wrapper'),
		videoBox = document.getElementById('modal-video'),
		activeItem = null;

	// клик по фону или кнопкам закрыть
	Array.prototype.forEach.call(modal, function (el) {

		el.addEventListener('click', function (e) {

			if(e.target.classList.contains('modal') || e.target.classList.contains('modal__close')){

				CF.hideModal();

			}

		});

	});

	CF.hideModal = function() {

		CF.videoToggle('play');

		Array.prototype.forEach.call(modal, function (el) {

			el.classList.add('hidden-visible');

		});

		CF.body.classList.remove('modal-show');
		wrapper.style.top = 0;
		window.scrollTo(0,CF.windowScrollOld);

		activeItem = false;

		// clear video
		if (videoBox){

			videoBox.innerHTML = '';

		}

	};

	CF.modalShow = function (selector,title,text) {

		CF.videoToggle('stop');

		// если модальные окна не показаны
        if (!activeItem) {

			CF.windowScrollOld = window.pageYOffset;

			wrapper.style.top = -CF.windowScrollOld + 'px';

		}

        activeItem = null;

		// ищем активное окно и его бокс
		Array.prototype.forEach.call(items, function(el){

			if(el.classList.contains('modal__item--' + selector)) {

				el.classList.remove('hidden-visible');

				activeItem = el;

			}
			else {

				el.classList.add('hidden-visible');

			}

		});

        if (!activeItem) {
            console.warn('Modal "%s" not found', selector);
			return;
        }

        if (selector === 'ok') {

			if(!title) {

				title = '';

			}

			if(!text) {

				text = '';

			}

			activeItem.querySelector('.modal__title').innerHTML = title;
			activeItem.querySelector('.modal__text').innerHTML = text;

		}

		// скрываем все боксы
		Array.prototype.forEach.call(modal, function (el) {

			el.classList.add('hidden-visible');

		});

		Array.prototype.forEach.call(box, function (el) {

			el.classList.add('hidden-visible');

		});

		// показывыем активный бокс
		activeItem.closest('.modal').classList.remove('hidden-visible');
		activeItem.closest('.modal__box').classList.remove('hidden-visible');

		CF.body.classList.add('modal-show');
		window.scrollTo(0,0);

		// close menu
		if(CF.OpenMenu){

			CF.body.classList.remove('menu-show');
			CF.OpenMenu = false;

		}

		activeItem.focus();

		// вызывыем событие на активном окне
		if (typeof window.CustomEvent === 'function') {

			activeItem.dispatchEvent(new Event('modalShow'));

		}

	};

	// слушаем источник клика
	document.addEventListener('click', function (e) {

		var target = e.target;

		while (target !== this) {

			if (target.hasAttribute('data-modal')) {

				CF.modalShow(target.getAttribute('data-modal'));

			}

			target = target.parentNode;

		}

	});

})();