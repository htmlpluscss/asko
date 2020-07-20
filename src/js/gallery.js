(function(gallery){

	if(gallery) {

		ASKO.gallerySwiper = '<div class="swiper-container swiper-container--gallery"><ul class="notsel swiper-wrapper">';

		Array.prototype.forEach.call(gallery.querySelectorAll('.product__img-small a'), function(link){

			ASKO.gallerySwiper += '<li class="swiper-slide"><img src="' + link.getAttribute('href') + '"></li>';

		});

		ASKO.gallerySwiper += '</ul><span class="swiper-count"></span></div>';

		gallery.addEventListener('click', function(e) {

			if(e.target.closest('a')) {

				e.preventDefault();

			}
			else {

				return;

			}

			if(window.innerWidth < 768) {

				return;

			}

			document.querySelector('#modal-gallery').innerHTML = ASKO.gallerySwiper;

			ASKO.modalShow('gallery');

			var galleryModal = document.querySelector('#modal-gallery .swiper-container--gallery'),
				slide = e.target.closest('.swiper-slide'),
				index = slide ? slide.getAttribute('data-swiper-slide-index') : 0;

			ASKO.swiper(galleryModal, index);

		});

	}

})(document.querySelector('.product__img'));