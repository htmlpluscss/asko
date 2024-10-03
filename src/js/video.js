
( videos => {

	if(videos.length) {

		[...videos].forEach( video => {

			video.addEventListener('click', ()=> {

				if ( video.classList.contains('is-play') === false ) {

					video.classList.add('is-play');

					video.querySelector('video').play();
					video.querySelector('video').controls = true;

				}

			});

		});

	}

})(document.querySelectorAll('.video'));