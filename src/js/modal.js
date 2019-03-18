
(function(){

	var modal = document.querySelector('.modal'),
		items = modal.querySelectorAll('.modal__item'),
		close = document.querySelectorAll('.modal__close'),
		wrapper = document.querySelector('.wrapper');

	Array.prototype.forEach.call(close, function(el){

		el.addEventListener('click', function () {

			ASKO.closeModal();

		});

	});

	modal.addEventListener('click', function (e) {

		if(e.target.classList.contains('modal')) {

			ASKO.closeModal();

		}

	});

	Array.prototype.forEach.call(items, function(el){

		el.addEventListener(ASKO.cssAnimation('transition'),function(){

			if(ASKO.activeModal && !ASKO.activeModal.classList.contains('modal__item--active')){

				ASKO.body.classList.remove('modal-show');
				wrapper.style.top = 0;
				window.scrollTo(0,ASKO.windowScrollOld);
				modal.classList.add('visuallyhidden');

			}

		});

	});

	ASKO.closeModal = function() {

		ASKO.activeModal.classList.remove('modal__item--active');

	};

	ASKO.modalShow = function (selector) {

		modal.classList.remove('visuallyhidden');

		ASKO.activeModal = modal.querySelector('.modal__item--' + selector);

		Array.prototype.forEach.call(items, function(el){

			el.classList.toggle('modal__item--active', ASKO.activeModal == el);

		});

		ASKO.windowScrollOld = window.pageYOffset;

		wrapper.style.top = -ASKO.windowScrollOld + 'px';

		ASKO.body.classList.add('modal-show');
		window.scrollTo(0,0);

		ASKO.activeModal.focus();

		// вызывыем событие на активном окне
		if (typeof window.CustomEvent === 'function') {

			ASKO.activeModal.dispatchEvent(new Event('modalShow'));

		}

	}

	document.addEventListener('keydown',function(e) {

		var keyCode = e.keyCode || e.which;

		if(keyCode === 27){

			e.preventDefault();
			var event = new Event('click');
			modal.dispatchEvent(event);

		}

	});

	document.addEventListener('click', function (e) {

		var target = e.target;

		while (target !== this) {

			if (target.hasAttribute('data-modal')) {

				ASKO.modalShow(target.getAttribute('data-modal'));

			}

			target = target.parentNode;

		}

	});

})();