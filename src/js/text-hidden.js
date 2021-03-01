
(function(items){

	if(items.length === 0) {

		return;

	}

	Array.prototype.forEach.call(items, function(el){

		var btn = document.createElement('button');

		btn.className = 'btn btn--link';

		btn.textContent = el.getAttribute('data-btn');

		el.appendChild(btn);

		btn.addEventListener('click', function () {

			el.classList.add('is-open');

		});

	});

})(document.querySelectorAll('.text-hidden'));