(function () {

	var yaCounterId = '51123644',
		goals = [
			// home
			{
				skipPages: ['/loans/ease/', '/loans/secured/', '/loans/ways/'],
				selector: '.callback',
				event: 'submit',
				yandex: {
					target: 'CallbackMain'
				},
				google: {
					category: 'Callback',
					action: 'submit',
					label: 'Main'
				}
			},
			{
				page: '/',
				selector: '.consultation',
				event: 'submit',
				yandex: {
					target: 'ConsultationMain'
				},
				google: {
					category: 'Form',
					action: 'submit',
					label: 'ConsultationMain'
				}
			},
			{
				page: '/',
				selector: '.promo__item--loan .btn',
				event: 'click',
				yandex: {
					target: 'DetailZaym'
				},
				google: {
					category: 'Button',
					action: 'click',
					label: 'DetailZaym'
				}
			},
			{
				page: '/',
				selector: '.promo__item--auto .btn',
				event: 'click',
				yandex: {
					target: 'DetailAuto'
				},
				google: {
					category: 'Button',
					action: 'click',
					label: 'DetailAuto'
				}

			},
			// loan (ease)
			{
				page: '/loans/ease/',
				selector: '.callback',
				event: 'submit',
				yandex: {
					target: 'ZaymCallback'
				},
				google: {
					category: 'Callback',
					action: 'submit',
					label: 'Zaym'
				}

			},
			{
				page: '/loans/ease/',
				selector: '.consultation',
				event: 'submit',
				yandex: {
					target: 'ConsultationZaym'
				},
				google: {
					category: 'Form',
					action: 'submit',
					label: 'ConsultationZaym'
				}

			},
			{
				page: '/loans/ease/',
				selector: '.calculator__form',
				event: 'submit',
				yandex: {
					target: 'ZaymForm'
				},
				google: {
					category: 'Form',
					action: 'submit',
					label: 'Zaym'
				}
			},

			// loan (auto)
			{
				page: '/loans/secured/',
				selector: '.callback',
				event: 'submit',
				yandex: {
					target: 'AutoCallback'
				},
				google: {
					category: 'Callback',
					action: 'submit',
					label: 'Auto'
				}
			},
			{
				page: '/loans/secured/',
				selector: '.consultation',
				event: 'submit',
				yandex: {
					target: 'ConsultationAuto'
				},
				google: {
					category: 'Form',
					action: 'submit',
					label: 'ConsultationAuto'
				}

			},
			{
				page: '/loans/secured/',
				selector: '.calculator__form',
				event: 'submit',
				yandex: {
					target: 'AutoForm'
				},
				google: {
					category: 'Form',
					action: 'submit',
					label: 'Auto'
				}

			},

			// ways
			{
				page: '/loans/ways/',
				selector: '.callback',
				event: 'submit',
				yandex: {
					target: 'HowCallback'
				},
				google: {
					category: 'Callback',
					action: 'submit',
					label: 'How'
				}
			},
			{
				page: '/loans/ways/',
				selector: '.ways__item:first-child .btn',
				event: 'click',
				yandex: {
					target: 'HowForm'
				},
				google: {
					category: 'Form',
					action: 'submit',
					label: 'How'
				}
			},

			// Получение денег
			{
				page: '/loans/secured/received/',
				selector: '.callback',
				event: 'submit',
				yandex: {
					target: 'GetCallback'
				},
				google: {
					category: 'Callback',
					action: 'submit',
					label: 'Get'
				}
			},
			{
				page: '/loans/secured/received/',
				selector: '.calculator__form',
				event: 'submit',
				yandex: {
					target: 'GetForm'
				},
				google: {
					category: 'Form',
					action: 'submit',
					label: 'Get'
				}
			},

			// Способы погашения
			{
				page: '/loans/repay/',
				selector: '.repay__item--elecsnet .btn',
				event: 'click',
				yandex: {
					target: 'Elecsnet'
				},
				google: {
					category: 'Button',
					action: 'click',
					label: 'Elecsnet'
				}
			},
			{
				page: '/loans/repay/',
				selector: '.repay__item--transfer .btn',
				event: 'click',
				yandex: {
					target: 'Transfer'
				},
				google: {
					category: 'Button',
					action: 'click',
					label: 'Transfer'
				}
			},
			{
				page: '/loans/repay/',
				selector: '.repay__item--bank .btn',
				event: 'click',
				yandex: {
					target: 'Bank'
				},
				google: {
					category: 'Button',
					action: 'click',
					label: 'Bank'
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
				if (goal.yandex && window['yaCounter' + yaCounterId]) {
					window['yaCounter' + yaCounterId].reachGoal(goal.yandex.target);
				}

				if (goal.google && window.gtag) {
					gtag('event', goal.google.action, {
						event_category: goal.google.category,
						event_label: goal.google.label
					});
				}
			});
		});
	});

})();