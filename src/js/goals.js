(function () {

	var yaCounterId = '26526729',
		goals = [

		// Товар добавлен в корзину
			{
				selector: '.modal__item--product-in-cart',
				event: 'modalShow',
				yandex: {
					target: 'OPEN_MODAL_PRODUCT-IN-CART'
				}
			},
			{
				selector: '.modal__item--product-in-cart .btn--gray',
				event: 'click',
				yandex: {
					target: 'CLOSE_MODAL_PRODUCT-IN-CART'
				}
			},

		// Покупка
			{
				selector: '.catalog-list__cart',
				event: 'submit',
				yandex: {
					target: 'CLICK_BUY'
				}
			},
			{
				selector: '.product__cart',
				event: 'submit',
				yandex: {
					target: 'CLICK_BUY'
				}
			},
			{
				selector: '.cart__order-create',
				event: 'submit',
				yandex: {
					target: 'SUBMIT_ORDER_CREATE'
				}
			},
			{
				selector: '.cart__order-details',
				event: 'submit',
				yandex: {
					target: 'SUBMIT_ORDER_DETAILS'
				}
			},

		// Заказать звонок
			{
				selector: '.modal__item--callback',
				event: 'modalShow',
				yandex: {
					target: 'CALLBACK_OPEN'
				}
			},
			{
				selector: '.modal__item--callback',
				event: 'submit',
				yandex: {
					target: 'CALLBACK_SEND'
				}
			},

		];


	goals.forEach(function (goal) {
		if (goal.page && goal.page !== location.pathname)
			return;

		if (goal.skipPages && goal.skipPages.indexOf(location.pathname) !== -1)
			return;

		var elements = document.querySelectorAll(goal.selector);

		[].forEach.call(elements, function (element) {
			element.addEventListener(goal.event, function () {
				console.log(goal.yandex.target)
				if (goal.yandex && window['yaCounter' + yaCounterId]) {
					window['yaCounter' + yaCounterId].reachGoal(goal.yandex.target);
				}
			});
		});
	});

})();