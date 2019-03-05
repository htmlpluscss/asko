(function(content){

	if(!content) {

		return;

	}

	var videos = content.querySelectorAll('[data-youtube]');

	if(videos.length) {

		Array.prototype.forEach.call(videos, function (video) {

			var id = video.getAttribute('data-youtube');

			video.addEventListener('click', function (e) {

				e.preventDefault();

				var iframe = document.createElement('iframe');

				iframe.setAttribute('allowfullscreen', '');
				iframe.setAttribute('allow', 'autoplay');
				iframe.setAttribute('src', 'https://www.youtube.com/embed/' + id + '?rel=0&showinfo=0&autoplay=1');

				video.appendChild(iframe);
				video.classList.add('youtube-iframe');

			});

		});

	}

})(document.querySelector('.article__content'));