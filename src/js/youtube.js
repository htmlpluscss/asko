// видео иконкой, запус в попап

(function(youtube){

	if(youtube.length) {

		[...youtube].forEach( link => {

			const id = link.getAttribute('data-id');

			link.addEventListener('click', event => {

				event.preventDefault();

				const iframe = document.createElement('iframe');

				iframe.setAttribute('allowfullscreen', '');
				iframe.setAttribute('allow', 'autoplay');
				iframe.setAttribute('src', 'https://www.youtube.com/embed/' + id + '?rel=0&showinfo=0&autoplay=1');

				document.querySelector('#modal-video').appendChild(iframe);

				ASKO.modalShow("video");

			});

		});

	}

})(document.querySelectorAll('.youtube-ico'));

// видео в описании

(function(youtube){

	if(youtube.length) {

		Array.prototype.forEach.call(youtube, function(video){

			var link = video.querySelector('.youtube__link'),
				id = link.getAttribute('data-id');

			link.addEventListener('click', function(e) {

				e.preventDefault();

				if(video.classList.contains('is-active')){

					return;

				}

				video.classList.add('is-active');
				var iframe = document.createElement('iframe');
				iframe.setAttribute('controlsList','nodownload');
				iframe.setAttribute('disablePictureInPicture','true');
				iframe.setAttribute('allowfullscreen','allowfullscreen');
				iframe.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1&controls=0';
				video.appendChild(iframe);

			});

		});

	}

})(document.querySelectorAll('.youtube'));

(function(youtube){

	if(youtube) {

	// This code loads the IFrame Player API code asynchronously.
/*		var tag = document.createElement('script');
		tag.src = "http://www.youtube.com/player_api";
		document.head.appendChild(tag);
*/
		window.addEventListener('click', function(e) {

			var youtube = null;

		// слушаем видео в слайдере адаптив
			if(window.innerWidth < 768) {

				youtube = e.target.closest('.product__img-youtube');

			}
			else {

		// если видео в модалке
				youtube = e.target.closest('.youtube-modal-gallery');

			}

		// создаем и вставляем видео
			if(youtube && !youtube.classList.contains('is-active')){

				youtube.classList.add('is-active');

				var id = youtube.getAttribute('data-id');

				var iframe = document.createElement('iframe');
				iframe.setAttribute('id','player-' + id);
				iframe.setAttribute('controlsList','nodownload');
				iframe.setAttribute('disablePictureInPicture','true');
				iframe.setAttribute('allowfullscreen','allowfullscreen');
				iframe.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1&controls=0';
				youtube.appendChild(iframe);

			}

		});

	}

})(document.querySelector('.product__img-youtube'));