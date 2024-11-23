
( keywords => {

	if ( keywords ) {

		const btn = keywords.querySelector('.keywords__more'),
			  btnTxt = btn.textContent,
			  btnAlt = btn.getAttribute('data-alt'),
			  list = keywords.querySelector('.keywords__list');

		btn.addEventListener('click', ()=> {

			if ( list.classList.contains('is-short') ) {

				list.classList.remove('is-short');
				btn.textContent = btnAlt;

			}
			else {

				list.classList.add('is-short');
				btn.textContent = btnTxt;

			}

		});

	}

})(document.querySelector('.keywords'));