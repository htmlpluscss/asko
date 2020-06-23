(function(swiperContainer){

	if(!swiperContainer.length) {

		return;

	}

	Array.prototype.forEach.call(swiperContainer, function(swipe){

		var mySwipe = null,
			resizeTimeout = null,
			windowWidthOLd = null,
			toggleSwipe = null,
			resetSwipe = null,
			swipeNav = document.createElement('div'),
			swipeNext = document.createElement('button'),
			swipePrev = document.createElement('button'),
			count = swipe.querySelectorAll('.swiper-slide').length,
			product = swipe.classList.contains('swiper-container--product');

		swipeNav.className = 'swiper-pagination hide';
		swipePrev.className = 'swiper-button-prev button hide';
		swipeNext.className = 'swiper-button-next button hide';

		swipePrev.innerHTML = '<svg viewBox="0 0 1000 1000"><path d="M990 10H10v980h980V10zm-91.4 416.5v147H394.4l215.3 215.3-114.3 114.4L92.2 500 495.4 96.8l114.4 114.4-215.4 215.3h504.2z"/></svg>';

		swipeNext.innerHTML = '<svg viewBox="0 0 1000 1000"><path d="M990 10H10v980h980V10zm-91.4 416.5v147H394.4l215.3 215.3-114.3 114.4L92.2 500 495.4 96.8l114.4 114.4-215.4 215.3h504.2z"/></svg>';

		swipe.appendChild(swipeNav);
		swipe.parentNode.appendChild(swipeNext);
		swipe.parentNode.appendChild(swipePrev);

		// eager
		Array.prototype.forEach.call(swipe.querySelectorAll('[loading="lazy"]'), function(img){

			img.getAttribute('loading','eager');

		});

		resetSwipe = function(){

			if(mySwipe) {

				mySwipe.destroy(false,true);
				mySwipe = undefined;

			}

			swipeNav.classList.remove('hide');
			swipeNext.classList.add('hide');
			swipePrev.classList.add('hide');

			if (ASKO.width < 768) {


			}
			else {

				swipeNext.classList.remove('hide');
				swipePrev.classList.remove('hide');

			}

		}

		if (product) {

			if(ASKO.width < 768) {

				swipeNav.classList.remove('hide');

			}
			else if((count > 3 || (count > 2 && ASKO.width < 1000))) {

				swipeNext.classList.remove('hide');
				swipePrev.classList.remove('hide');

			}

			toggleSwipe = function() {

				swipeNav.classList.add('hide');
				swipeNext.classList.add('hide');
				swipePrev.classList.add('hide');

				if(mySwipe) {

					mySwipe.destroy(false,true);
					mySwipe = undefined;

				}

				if(ASKO.width < 768) {

					swipeNav.classList.remove('hide');

					if(count > 1) {

						mySwipe = new Swiper(swipe, {
							loop: true,
							preloadImages: false,
							pagination: {
								el: swipeNav,
								clickable: true
							}
						});

					}

				}

				else if((count > 3 || (count > 2 && ASKO.width < 1000))) {

					swipeNext.classList.remove('hide');
					swipePrev.classList.remove('hide');

					mySwipe = new Swiper(swipe, {
						loop: true,
						slidesPerView: 'auto',
						preloadImages: false,
						navigation: {
							nextEl: swipeNext,
							prevEl: swipePrev
						}
					});

				}

			}

		}

		window.addEventListener("resize", function(){

			window.requestAnimationFrame(function(){

				if (window.Swiper && !resizeTimeout) {

					resizeTimeout = setTimeout(function() {

						resizeTimeout = null;

						if(ASKO.width != windowWidthOLd){

							windowWidthOLd = ASKO.width;

							toggleSwipe && toggleSwipe();

						}

					}, 1000);

				}

			});

		});

	});

	setTimeout(function(){

		var script = document.createElement('script');

		script.type = 'text/javascript';
		script.async = true;
		script.src = '/js/swiper.min.js';

		script.onload = function () {

			var event = new Event('resize');
			window.dispatchEvent(event);

		};

		document.head.appendChild(script);

	}, 5000);

})(document.querySelectorAll('.swiper-container'));