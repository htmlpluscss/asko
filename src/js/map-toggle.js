
(function(elems){

	Array.prototype.forEach.call(elems, function (el) {

		var btn = el.querySelector('.map-toggle__btn'),
			box = el.querySelector('.map-toggle__box');

		btn.addEventListener('click', function () {

			if(box.clientHeight > 0) {

				box.style.height = box.clientHeight + 'px';

			}

			setTimeout(function(){

				el.classList.toggle('map-toggle--hide');

			},100);

		});

	});

})(document.querySelectorAll('.map-toggle'));