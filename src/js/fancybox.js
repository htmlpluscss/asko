(function(fancyboxBtn){

	if(fancyboxBtn.length) {

		var openImg = null,
			loadingScript = false;

		function loadFancybox() {

			if(loadingScript) {

				return;

			}

			loadingScript = true;

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

					if(openImg !== null) {

						openFancybox(openImg);

					}

				};

				document.head.appendChild(script);

			};

			document.head.appendChild(script);

		}

		function openFancybox(index) {

			window.jQuery.fancybox.open(
				ASKO.gallery,
				{
					loop : true
				},
				index

			);

		}

		document.addEventListener('click', function (e) {

			var target = e.target;

			while (target !== this) {

				if (target.classList.contains('fancybox-gallery')) {

					e.preventDefault();

					if(ASKO.width < 768) {

						return;

					}

					var index = parseInt(target.getAttribute('data-fancybox-index'));

					if(window.jQuery && window.jQuery.fancybox) {

						openFancybox(index);

					}
					else {

						openImg = index;

						loadFancybox();

					}

				}

				target = target.parentNode;

			}

		});

		setTimeout(function(){

			loadFancybox();

		}, 4000);

	}

})(document.querySelectorAll('.fancybox-gallery'));