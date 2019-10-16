(function(){

	var fancyboxBtn = document.querySelectorAll('.fancybox-gallery');

	if(fancyboxBtn.length) {

		document.addEventListener('click', function (e) {

			var target = e.target;

			while (target !== this) {

				if (target.classList.contains('fancybox-gallery')) {

					e.preventDefault();

					var index = parseInt(target.getAttribute('data-fancybox-index'));

					$.fancybox.open(
						ASKO.gallery,
						{
							loop : true
						},
						index
					);

				}

				target = target.parentNode;

			}

		});

		setTimeout(function(){

			if(!window.jQuery) {

				var script = document.createElement('script');

				script.type = 'text/javascript';
				script.async = true;
				script.src = '/js/jquery.min.js';

				script.onload = function () {

					var script = document.createElement('script');

					script.type = 'text/javascript';
					script.async = true;
					script.src = '/js/jquery.fancybox.min.js';

					script.onload = function () {

						$.fancybox.defaults.loop = true;

					};

					document.head.appendChild(script);

				};

				document.head.appendChild(script);

			}

		}, 1000);

	}

})();