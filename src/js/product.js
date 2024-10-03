( form => {

	if(form) {

		const productForm = document.querySelector('.product__cart'),
			  footer = document.querySelector('.footer');

		window.addEventListener("scroll", () => {

			window.requestAnimationFrame( () => {

				const rect = footer.getBoundingClientRect();

				form.classList.toggle('is-show', ASKO.isInViewport(productForm) === false && rect.top > ASKO.height);

			});

		});

	}

})(document.querySelector('.product-scroll'));
