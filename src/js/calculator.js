(function(calculator){

	if(!calculator) {

		return;

	}

	window.CALCULATOR = window.CALCULATOR || {};

	var param = calculator.querySelector('.calculator__param'),
		paramType = param.querySelectorAll('.calculator__param-item'),
		paramTypeActive = paramType[0],

		form = calculator.querySelector('.calculator__form'),
		formFirst = calculator.querySelector('.calculator__step--first'),
		formNext = calculator.querySelector('.calculator__step--next'),

		// данные для отправки
		sumHidden = form.querySelector('.calculator__param-loan-sum'),
		dateHidden = form.querySelector('.calculator__param-loan-time'),

		// сообщение о скидке
		informationText = calculator.querySelector('.calculator__text'),

		// слайдер суммы
		summ = calculator.querySelector('.calculator__slider--sum'),
		summPlus = calculator.querySelector('.calculator__btn-step--sum-plus'),
		summMinus = calculator.querySelector('.calculator__btn-step--sum-minus'),
		summTextInput = calculator.querySelector(".calculator__input-text--sum"),
		summSelect = document.createElement('select'),
		summLineSale = summ.querySelector('.calculator__line-sale'),

		// сумма займа ввод
		summSet = calculator.querySelector("#sum-set"),
		// сумма займа вывод
		summText = calculator.querySelector(".calculator__sum-text"),
		// сумма возврата вывод
		returnSumm = calculator.querySelector('.calculator__sum-return'),
		// сумма переплаты вывод
		returnDiff = calculator.querySelector('.calculator__sum-diff'),

		// слайдер срока
		date = calculator.querySelector('.calculator__slider--date'),
		datePlus = calculator.querySelector('.calculator__btn-step--date-plus'),
		dateMinus = calculator.querySelector('.calculator__btn-step--date-minus'),
		dateTextInput = calculator.querySelector(".calculator__input-text--date"),
		dateSelect = document.createElement('select'),
		dateLineSale = date.querySelector('.calculator__line-sale'),

		// срок займа ввод
		dateSet = calculator.querySelector("#date-set");

	// select

	summTextInput.parentNode.appendChild(summSelect);
	dateTextInput.parentNode.appendChild(dateSelect);

	summSelect.addEventListener('change', function() {

		CALCULATOR.SUM.value = this.value;

		summ.noUiSlider.set(this.value);


	});

	dateSelect.addEventListener('change', function() {

		CALCULATOR.DATE.value = this.value;

		date.noUiSlider.set(this.value);

	});

	// кнопки переключения

	if(calculator.querySelector('.calculator__tab')) {

		var toggleBtn = calculator.querySelectorAll('.calculator__tab-item');

		Array.prototype.forEach.call(toggleBtn, function(el){

			el.addEventListener('click', function() {

				Array.prototype.forEach.call(toggleBtn, function(btn){

					btn.classList.remove('calculator__tab-item--active');

				});

				el.classList.add('calculator__tab-item--active');

				paramTypeActive.setAttribute('data-summ-value', CALCULATOR.SUM.value);
				paramTypeActive.setAttribute('data-date-value', CALCULATOR.DATE.value);

			});

		});

	}

	// change param

	Array.prototype.forEach.call(paramType, function(el){

		el.addEventListener('change', function() {

			paramTypeActive = el;

			CALCULATOR.updateSlider();

		});

	});

	// resize

	var resizeTimeout = null;

	window.addEventListener("resize", function(){

		if (!resizeTimeout) {

			resizeTimeout = setTimeout(function() {

				resizeTimeout = null;
				CALCULATOR.result();

			}, 1000);

		}

	});

	// default


	CALCULATOR.CountUp = {
	  useEasing: false,
	  useGrouping: true,
	  separator: ' ',
	  decimal: ''
	}

	// особые условия для калькуляторов

	if(CALCULATOR.typeLong) {

		CALCULATOR.typeLong.tableResult = document.querySelector('.calculator-table-result')

	}

	CALCULATOR.result = function(){

		CALCULATOR.SUM.value = parseInt(CALCULATOR.SUM.value, 10);
		CALCULATOR.DATE.value = parseInt(CALCULATOR.DATE.value, 10);

		sumHidden.value = CALCULATOR.SUM.value;
		dateHidden.value = CALCULATOR.DATE.value;

		// инпуты
		summSet.value = sepNumber(CALCULATOR.SUM.value);
		dateSet.value = CALCULATOR.DATE.value;

		summTextInput.textContent = sepNumber(CALCULATOR.SUM.value);
		dateTextInput.textContent = CALCULATOR.DATE.value;

		// select
		summSelect.value = CALCULATOR.SUM.value;
		dateSelect.value = CALCULATOR.DATE.value;

		// формулы
		switch (CALCULATOR.typeCalcul) {

			case 'first' :

				informationText.classList.remove('calculator__text--show');

				// расчет переплаты
				CALCULATOR.diff = CALCULATOR.stavka * CALCULATOR.SUM.value * CALCULATOR.DATE.value / 100;

			break;

			case 'long' :

				informationText.classList.add('calculator__text--show');

				// формула аннуитета = i / ( (1+i)^n - 1 ) + i

				// Количество периодов
				CALCULATOR.typeLong.paymentPeriodQuantity = CALCULATOR.DATE.value / CALCULATOR.typeLong.paymentPeriod;

				// Процентная ставка за период
				CALCULATOR.Procent = CALCULATOR.stavka * CALCULATOR.typeLong.paymentPeriod / 100;

				// Коэффициент аннуитета
				CALCULATOR.typeLong.AnnuityCoefficient = CALCULATOR.Procent/(Math.pow((1+CALCULATOR.Procent),CALCULATOR.typeLong.paymentPeriodQuantity)-1) + CALCULATOR.Procent;
				// Регулярный платеж = CALCULATOR.typeLong.AnnuityCoefficient * CALCULATOR.SUM.value
				// Общая сумма платежей = Регулярный платеж * CALCULATOR.typeLong.paymentPeriodQuantity
				// Сумма процентов = Общая сумма платежей - Сумма займа
				// расчет переплаты
				CALCULATOR.diff = CALCULATOR.typeLong.AnnuityCoefficient * CALCULATOR.SUM.value * CALCULATOR.typeLong.paymentPeriodQuantity - CALCULATOR.SUM.value;

				// отображаем лимит
				if(CALCULATOR.SUM.value > CALCULATOR.limitSumStart) {

					informationText.innerHTML = CALCULATOR.typeLong.textLimit;

					// задаем желтую полосу
					specLimit();
					summLineSale.classList.remove('hide');

				}
				else {

					informationText.innerHTML = CALCULATOR.typeLong.textSpec;
					summLineSale.classList.add('hide');

				}

				dateLineSale.classList.add('hide');


				// если есть таблица с расчетами

				if(CALCULATOR.typeLong.tableResult) {

					var tableRow = '',
						dateCurrent = new Date(),
						balance = null,
						totalProcent = null,
						summLoan = null,

					// Остаток на начало
					balance = CALCULATOR.SUM.value;
					// Сумма процентов
					totalProcent = balance * CALCULATOR.stavka / 100 * CALCULATOR.typeLong.paymentPeriod;
					// Сумма займа
					summLoan = CALCULATOR.typeLong.AnnuityCoefficient * CALCULATOR.SUM.value - totalProcent;

					var tableRow = '',
						dateCurrent = new Date();

					for(var tr = 1; tr <= CALCULATOR.typeLong.paymentPeriodQuantity; tr++){

						dateCurrent.setDate(dateCurrent.getDate() + CALCULATOR.typeLong.paymentPeriod);

						var row = "<tr><td></td>";
						row += "<td>" + dateCurrent.getDate() + " " + CALCULATOR.monthsShort[dateCurrent.getMonth()] + " " + dateCurrent.getFullYear() + "</td>";
						row += '<td data-suf="руб.">' + sepNumberKOP(summLoan) + "</td>";
						row += '<td data-suf="руб.">' + sepNumberKOP(totalProcent) + "</td>";
						row += '<td data-suf="руб.">' + sepNumberKOP(CALCULATOR.typeLong.AnnuityCoefficient * CALCULATOR.SUM.value) + "</td>";
						row += "<td></td></tr>";
						tableRow += row;

						// Остаток на начало
						balance -= summLoan;
						// Сумма процентов
						totalProcent = balance * CALCULATOR.stavka / 100 * CALCULATOR.typeLong.paymentPeriod;
						// Сумма займа
						summLoan = CALCULATOR.typeLong.AnnuityCoefficient * CALCULATOR.SUM.value - totalProcent;

					}

					CALCULATOR.typeLong.tableResult.innerHTML = tableRow;

				}

			break;

			case 'pensioner' :

				informationText.innerHTML = CALCULATOR.typePensioner.textSpec;
				informationText.classList.add('calculator__text--show');

				// расчет переплаты
				CALCULATOR.diff = CALCULATOR.stavka * CALCULATOR.SUM.value * CALCULATOR.DATE.value / 100;

			break;

			case 'week-gift' :

				// задаем желтую полосу
				specProcent(CALCULATOR.SUM.min, CALCULATOR.SUM.max, CALCULATOR.typeWeekGift.nullProcentStart, CALCULATOR.typeWeekGift.nullProcentFinish);

				// с 21го отнимаем 7 дней
				if (CALCULATOR.DATE.value >= CALCULATOR.typeWeekGift.nullProcentFinish) {

					CALCULATOR.typeWeekGift.weekForNothing = CALCULATOR.typeWeekGift.nullProcentFinish - CALCULATOR.typeWeekGift.nullProcentStart + 1;
					summLineSale.classList.remove('hide');

				} else {

					CALCULATOR.typeWeekGift.weekForNothing = 0;
					summLineSale.classList.add('hide');

				}


				// расчет переплаты
				CALCULATOR.diff = CALCULATOR.stavka * CALCULATOR.SUM.value * (CALCULATOR.DATE.value - CALCULATOR.typeWeekGift.weekForNothing) / 100;

				informationText.innerHTML = CALCULATOR.typeWeekGift.nullProcentText;
				informationText.classList.add('calculator__text--show');

				// задаем желтую полосу
				specLimit();
				summLineSale.classList.add('hide');
				dateLineSale.classList.remove('hide');

			break;

			case 'online' :

				// расчет переплаты
				CALCULATOR.diff = CALCULATOR.stavka * CALCULATOR.SUM.value * CALCULATOR.DATE.value / 100;

			break;

		}

		CALCULATOR.diff = parseInt(CALCULATOR.diff, 10);

		// вывели К возврату
		if(CALCULATOR.returnSummCountUp){

			CALCULATOR.returnSummCountUp.update(CALCULATOR.SUM.value + CALCULATOR.diff);

		}
		else {

			returnSumm.textContent = sepNumber(CALCULATOR.SUM.value + CALCULATOR.diff);

			CALCULATOR.returnSummCountUp = new CountUp(returnSumm, 0, 0, 0, 0.3, CALCULATOR.CountUp);

			if (CALCULATOR.returnSummCountUp.error) {

				returnSumm.textContent = sepNumber(CALCULATOR.SUM.value + CALCULATOR.diff);

			}
			else {

				CALCULATOR.returnSummCountUp.start();

			}

		}

		// вывели Плата за заём
		if(CALCULATOR.diffCountUp){

			CALCULATOR.diffCountUp.update(CALCULATOR.diff);

		}
		else{

			returnDiff.textContent = sepNumber(CALCULATOR.diff);

			CALCULATOR.diffCountUp = new CountUp(returnDiff, 0, 0, 0, 0.3, CALCULATOR.CountUp);

			if (CALCULATOR.diffCountUp.error) {

				returnDiff.textContent = sepNumber(CALCULATOR.diff);

			}
			else {

				CALCULATOR.diffCountUp.start();

			}

		}

		// вывели Вы получите
		if(CALCULATOR.summTextCountUp){

			CALCULATOR.summTextCountUp.update(CALCULATOR.SUM.value);

		}
		else{

			summText.textContent = sepNumber(CALCULATOR.SUM.value);

			CALCULATOR.summTextCountUp = new CountUp(summText, 0, 0, 0, 0.3, CALCULATOR.CountUp);

			if (CALCULATOR.summTextCountUp.error) {

				summText.textContent = sepNumber(CALCULATOR.SUM.value);

			}
			else {

				CALCULATOR.summTextCountUp.start();

			}

		}

		dateSet.parentNode.setAttribute('data-suf',CF.declension(CALCULATOR.DATE.value,CALCULATOR.days));

	};

	// инициализация слайдеров

	CALCULATOR.updateSlider = function(){

		// тип калькулятора first, long, pensioner, week-gift
		CALCULATOR.typeCalcul = paramTypeActive.getAttribute('data-loan-type');

		// активный калькулятор
		switch (CALCULATOR.typeCalcul) {

			case 'first' :

				CALCULATOR.paramTypeActive = CALCULATOR.typeFirst;

			break;

			case 'long' :

				CALCULATOR.paramTypeActive = CALCULATOR.typeLong;
				CALCULATOR.limitSumStart = CALCULATOR.typeLong.limitSumStart

			break;

			case 'pensioner' :

				CALCULATOR.paramTypeActive = CALCULATOR.typePensioner;

			break;

			case 'week-gift' :

				CALCULATOR.paramTypeActive = CALCULATOR.typeWeekGift;

			break;

			case 'online' :

				CALCULATOR.paramTypeActive = CALCULATOR.typeOnline;

			break;

		}

		// % ставка
		CALCULATOR.stavka = CALCULATOR.paramTypeActive.stavka;

		// сумма
		CALCULATOR.SUM = {
			min : CALCULATOR.paramTypeActive.summMin,
			max : CALCULATOR.paramTypeActive.summMax,
			step : CALCULATOR.paramTypeActive.summStep,
			value : CALCULATOR.paramTypeActive.summValue
		};

		// дата
		CALCULATOR.DATE = {
			min : CALCULATOR.paramTypeActive.dateMin,
			max : CALCULATOR.paramTypeActive.dateMax,
			step : CALCULATOR.paramTypeActive.dateStep,
			value : CALCULATOR.paramTypeActive.dateValue
		};

		if(summ.noUiSlider) {

			summ.noUiSlider.updateOptions({
				start: CALCULATOR.SUM.value,
				range: {
					'min': CALCULATOR.SUM.min,
					'max': CALCULATOR.SUM.max
				},
				step: CALCULATOR.SUM.step
			});

			date.noUiSlider.updateOptions({
				start: CALCULATOR.DATE.value,
				range: {
					'min': CALCULATOR.DATE.min,
					'max': CALCULATOR.DATE.max
				},
				step: CALCULATOR.DATE.step
			});

		}

		calculator.querySelector('.calculator__min-sum').textContent = sepNumber(CALCULATOR.SUM.min);
		calculator.querySelector('.calculator__max-sum').textContent = sepNumber(CALCULATOR.SUM.max);
		calculator.querySelector('.calculator__min-date').textContent = CALCULATOR.DATE.min;
		calculator.querySelector('.calculator__max-date').textContent = CALCULATOR.DATE.max;

		// select

		var option = '<option disabled="disabled">' + CALCULATOR.selectLabel[0]+ '</option>';
		for (var i = CALCULATOR.SUM.min; i <= CALCULATOR.SUM.max; i += CALCULATOR.SUM.step){

			option += '<option value="'+ i +'">'+ sepNumber(i) +'</option>';

		}

		summSelect.innerHTML = option;
		summSelect.value = CALCULATOR.SUM.value;

		option = '<option disabled="disabled">' + CALCULATOR.selectLabel[1] + '</option>';
		for (var i = CALCULATOR.DATE.min; i <= CALCULATOR.DATE.max; i += CALCULATOR.DATE.step){

			option += '<option value="' + i + '">' + i + '</option>';

		}

		dateSelect.innerHTML = option;
		dateSelect.value = CALCULATOR.DATE.value;
	};

	CALCULATOR.updateSlider();

	noUiSlider.create(summ, {
		start: CALCULATOR.SUM.value,
		connect: [true, false],
		range: {
			'min': CALCULATOR.SUM.min,
			'max': CALCULATOR.SUM.max
		},
		step: CALCULATOR.SUM.step
	});

	summ.noUiSlider.on('update', function(e){
		CALCULATOR.SUM.value = e[0];
		CALCULATOR.result();
	});

	summ.noUiSlider.on('slide', function(e){
		CALCULATOR.SUM.value = e[0];
		CALCULATOR.result();
	});

	summ.noUiSlider.on('change', function(e){
		CALCULATOR.SUM.value = e[0];
		CALCULATOR.result();
	});

	noUiSlider.create(date, {
		start: CALCULATOR.DATE.value,
		connect: [true, false],
		range: {
			'min': CALCULATOR.DATE.min,
			'max': CALCULATOR.DATE.max
		},
		step: CALCULATOR.DATE.step
	});

	date.noUiSlider.on('update', function(e){
		CALCULATOR.DATE.value = e[0];
		CALCULATOR.result();
	});

	date.noUiSlider.on('slide', function(e){
		CALCULATOR.DATE.value = e[0];
		CALCULATOR.result();
	});

	date.noUiSlider.on('change', function(e){
		CALCULATOR.DATE.value = e[0];
		CALCULATOR.result();
	});


	// события в инпутах

	function inputChange(input){

		if(input == summ) {

			var v = summSet.value;

			if (v.match(/[^0-9]/g))
				v = v.replace(/[^0-9]/g, '');

			if(v > CALCULATOR.SUM.max)
				v = CALCULATOR.SUM.max;

			if(v < CALCULATOR.SUM.min)
				v = CALCULATOR.SUM.min;

			summ.noUiSlider.set(v);

		}
		else {

			var v = dateSet.value;

			if (v.match(/[^0-9]/g))
				v = v.replace(/[^0-9]/g, '');

			if(v > CALCULATOR.DATE.max)
				v = CALCULATOR.DATE.max;

			if(v < CALCULATOR.DATE.min)
				v = CALCULATOR.DATE.min;

			date.noUiSlider.set(v);

		}

		CALCULATOR.result();

	}

	// фокус суммы в инпуте
	summSet.addEventListener('focus', function() {

		this.value = CALCULATOR.SUM.value;

		setTimeout(function(){

			summSet.setSelectionRange(0,9);

		},100)

	});

	// фокус даты в инпуте
	dateSet.addEventListener('focus', function() {

		setTimeout(function(){

			dateSet.setSelectionRange(0,9);

		},100)

	});

	// ввод суммы и даты в инпуте
	summSet.addEventListener('blur', function() {

		inputChange(summ);

	});

	summSet.addEventListener('keydown', function(e) {

		if (e.keyCode == 13) {

			this.blur();

		}

	});

	dateSet.addEventListener('blur', function() {

		inputChange(date);

	});

	dateSet.addEventListener('keydown', function(e) {

		if (e.keyCode == 13) {

			this.blur();

		}

	});

	// +/-
	summSet.addEventListener('keydown',function(e){

		if (e.key == "+") {

			e.preventDefault();
			btnPlusMinus("summ", 1);

		}
		if (e.key == "-") {

			e.preventDefault();
			btnPlusMinus("summ", -1);

		}

	});

	dateSet.addEventListener('keydown',function(e) {

		if (e.key == "+") {

			e.preventDefault();
			btnPlusMinus("date", 1);

		}
		if (e.key == "-") {

			e.preventDefault();
			btnPlusMinus("date", -1);

		}

	});

	// кнопки +/-

	var btnPlusMinusTimeoutId = null;

	function btnPlusMinus(type,step){

		clearTimeout(btnPlusMinusTimeoutId);

		if(type=="summ"){
			CALCULATOR.SUM.value += CALCULATOR.SUM.step * step;
			summ.noUiSlider.set(CALCULATOR.SUM.value);
			CALCULATOR.result();
		}

		else if(type=="date"){
			CALCULATOR.DATE.value += CALCULATOR.DATE.step * step;
			date.noUiSlider.set(CALCULATOR.DATE.value);
			CALCULATOR.result();
		}

		btnPlusMinusTimeoutId = setTimeout(function(){

			btnPlusMinus(type,step);

		}, 500);

	}


	summPlus.addEventListener('mousedown',function(){
		btnPlusMinus("summ", 1);
	});
	summMinus.addEventListener('mousedown',function(){
		btnPlusMinus("summ", -1);
	});
	datePlus.addEventListener('mousedown',function(){
		btnPlusMinus("date", 1);
	});
	dateMinus.addEventListener('mousedown',function(){
		btnPlusMinus("date", -1);
	});

	summPlus.addEventListener('touchstart',function(){
		btnPlusMinus("summ", 1);
	});
	summMinus.addEventListener('touchstart',function(){
		btnPlusMinus("summ", -1);
	});
	datePlus.addEventListener('touchstart',function(){
		btnPlusMinus("date", 1);
	});
	dateMinus.addEventListener('touchstart',function(){
		btnPlusMinus("date", -1);
	});

	window.addEventListener('mouseup',function(){
		clearTimeout(btnPlusMinusTimeoutId);
	});

	window.addEventListener('touchend',function(){
		clearTimeout(btnPlusMinusTimeoutId);
	});


    form.addEventListener('submit', function (e) {
        if (CALCULATOR.typeCalcul === 'online')
            return;

        e.preventDefault();

        var novalidate = false,
            formData = new FormData(form),
            btn = form.querySelector('.calculator__submit');

        [].forEach.call(form.querySelectorAll('[required]'), function (input) {
            if (input.getAttribute('type') === 'checkbox') {
                if (input.checked) {
                    input.parentNode.classList.remove('checkbox--error');
                } else {
                    input.parentNode.classList.add('checkbox--error');
                    novalidate = true;
                }
            } else {
                if (input.classList.contains('input-label__input')) {
                    errorInputLabel(input);
                }

                if (!input.value) {
                    novalidate = true;
                }
            }
        });

        if (novalidate)
            return;

        var xhr = new XMLHttpRequest();

        xhr.open('POST', form.getAttribute('action'));
        xhr.send(formData);

        if (btn)
            btn.disabled = true;

        xhr.onreadystatechange = function () {
            if (xhr.readyState === xhr.DONE)
                return;

            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);

                if (response.success) {
                    location.href = '/spasibo/?LOAN_ID=' + response.loan_id + '&sessid=' + response.sessid + '&target=' + response.target + '&nocdn';
                } else {

				}
            }

            if (btn)
                btn.disabled = false;
        }
    });


    function errorInputLabel(el) {
        el.value ?
            el.parentNode.classList.remove('input-label--error') :
            el.parentNode.classList.add('input-label--error');
    }


	// отделяем тысячи
	function sepNumber(str){
		str = parseInt(str, 10).toString();
		return str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	}
	function sepNumberKOP(str){
		str = str.toFixed(2);
		return str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ').replace('.',',');
	}
	// склеиваем тысячи
	function strToNumber(n){
		return parseInt(n.replace(/\s+/g,''), 10);
	}

	// переворачевание
	if(calculator.querySelector('.calculator__next-step')){

		calculator.querySelector('.calculator__next-step').addEventListener('click',function(){

			formNext.classList.remove('hide');

			if(form.getBoundingClientRect().top < 0) {

				animateScroll(form, 300, 'linear', 5, "top", function(){

					form.classList.add('calkulator__step-2');

				});

			}
			else {

				form.classList.add('calkulator__step-2');

			}

			form.style.minHeight = formFirst.clientHeight + 'px';

		});

		calculator.querySelector('.calculator__prev-step').addEventListener('click',function(){

			formFirst.classList.remove('hide');

			form.style.minHeight = 0;

			if(form.getBoundingClientRect().top < 0) {

				animateScroll(form, 300, 'linear', 5, "top", function(){

					form.classList.remove('calkulator__step-2');

				});

			}
			else {

				form.classList.remove('calkulator__step-2');

			}

		});

		formFirst.addEventListener(CF.cssAnimation('transition'),function(){

			form.classList.contains('calkulator__step-2') ?
				formFirst.classList.add('hide') : formNext.classList.add('hide');

		});

	};

	// желтая шкала скидки
	function specProcent(startSummProcent,finishSummProcent,startDateProcent,finishDateProcent){

		var left,
			width,
			widthStepSumm = summ.clientWidth * CALCULATOR.SUM.step / (CALCULATOR.SUM.max - CALCULATOR.SUM.min),
			widthStepDate = date.clientWidth * CALCULATOR.DATE.step / (CALCULATOR.DATE.max - CALCULATOR.DATE.min);

		left = startSummProcent==CALCULATOR.SUM.min ? 0 : widthStepSumm * (startSummProcent - CALCULATOR.SUM.min) / CALCULATOR.SUM.step;
		width = widthStepSumm * (finishSummProcent - startSummProcent) / CALCULATOR.SUM.step;

		summLineSale.style.left = left + 'px';
		summLineSale.style.width = width + 'px';

		left = startDateProcent==CALCULATOR.DATE.min ? 0 : widthStepDate * (startDateProcent - CALCULATOR.DATE.min) / CALCULATOR.DATE.step;
		width = widthStepDate * (finishDateProcent - startDateProcent) / CALCULATOR.DATE.step;

		dateLineSale.style.left = left + 'px';
		dateLineSale.style.width = width + 'px';

	}

	// желтая шкала лимита
	function specLimit(){

		var left,
			width,
			widthStepSumm = summ.clientWidth * CALCULATOR.SUM.step / (CALCULATOR.SUM.max - CALCULATOR.SUM.min);

		left = CALCULATOR.limitSumStart == CALCULATOR.SUM.min ? 0 : widthStepSumm * (CALCULATOR.limitSumStart - CALCULATOR.SUM.min) / CALCULATOR.SUM.step;
		width = widthStepSumm * (CALCULATOR.SUM.max - CALCULATOR.limitSumStart) / CALCULATOR.SUM.step;

		summLineSale.style.left = left + 'px';
		summLineSale.style.width = width + 'px';

	}

})(document.querySelector('.calculator'));