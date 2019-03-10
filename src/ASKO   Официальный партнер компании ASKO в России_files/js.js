
// select
	$('.select').each(function() {
		select_html($(this));
	});

// slider-range
	function str_to_number(n){
		return parseInt(n.replace(/\s+/g,''));
	}
	if($('.slider-range').is('.slider-range')){

		$('.slider-range').each(function(i){
			var t = $(this).parent();
			var from = t.find('.from');
			var to = t.find('.to');
			var s = t.find('.rang');

			var min = parseInt(s.attr('data-min'));
			var max = parseInt(s.attr('data-max'));
			var step = parseInt(s.attr('data-step'));

			s.slider({
				range: true,
				min:min,
				max:max,
				step:step,
				values: [min, max],
				slide: function(event,ui) {
					if(ui.values[0] == ui.values[1])
						return false;
					from.val(ui.values[0]),
					to.val(ui.values[1]);
				}
			});
			from.val(min).on('change blur',function(){
				var v = str_to_number(from.val());
				if(v<min) {
					from.val(min);
					v = min;
				}
				s.slider('values', 0, v);
			});
			to.val(max).on('change blur',function(){
				var v = str_to_number(to.val());
				if(v>max) {
					to.val(max);
					v = max;
				}
				s.slider('values', 1, v);
			});
		});

// background fidex
		$window.on('scroll',function(){
			$('.slider-range .ui-slider-range').each(function(){
				$(this).css('background-position','0 '+($(this).offset().top-$window.scrollTop())+'px');
			});
		}).trigger('scroll');
	}

// radio_type
	var radio_type_input = $('.radio_type input');
	radio_type_input.filter('[type=radio]').each(function(){
		var t = $(this);
		var name = t.attr('name');
		name = name.replace(/\[/g,'_');
		name = name.replace(/\]/g,'_');
		t.attr('data-name',name);
		t.parent().addClass('radio');
	});
	radio_type_input.each(function(){
		radioType($(this));
	}).on('change',function(){
		radioType($(this));
	});
	function radioType(t){
		if(t.prop('checked')){
			if(t.attr('type')=='radio')
				radio_type_input.filter('[data-name='+t.attr('data-name')+']').not(t).parent().removeClass('active');
			t.parent().addClass('active');
		}
		else
			t.parent().removeClass('active');
	}

//form_reset
	$('.form_reset').on('click',function(){
		$(this).parent().trigger('reset');
		$('.slider-range').each(function(i){
			var t = $(this).parent();
			var from = t.find('.from');
			var to = t.find('.to');
			var s = t.find('.rang');
			var min = parseInt(s.attr('data-min'));
			var max = parseInt(s.attr('data-max'));
			s.slider('values', 0, min);
			s.slider('values', 1, max);
			from.val(min),
			to.val(max);
		});
		$('.radio_type input').trigger('change');
	});

// tab
	$('.tabs > dt').each(function(){
		$(this).parent().children('dd').first().before($(this).wrapInner('<span></span>'));
	}).on('click',function(){
		var t = $(this);
		if(t.hasClass('active'))
			return false;
		t.addClass('active').siblings('.active').removeClass('active').siblings('dd').eq(t.index()).addClass('active');
	});
	if($('.tabs > dt.active').is('.active'))
		$('.tabs > dd').eq($('.tabs > dt.active').index()).addClass('active');
	else
		$('.tabs').children().first().addClass('active').siblings('dd').first().addClass('active');

// slider product
	$('.product .slider li').on('click',function(){
		var t = $(this);
		if(t.hasClass('show'))
			return false;
		t.addClass('show').siblings('.show').removeClass('show');
		$('.product .images .big a').eq(t.index()).addClass('active').siblings('.active').removeClass('active');
	});
	if($('.accessories li').size()<5){
		$('.accessories').addClass('not_list');
	}

// fancy
	if($('.fancy').is('.fancy')) {
		$('.fancy').fancybox({
			openEffect : 'elastic',
			closeEffect : 'elastic',
			padding: 3,
			title : null
		});
	}

// quantity
	$('.quantity .up, .quantity .down').on('click',function(){
		var v = $(this).siblings('.count').val();
		v = parseInt(v);
		v += ($(this).hasClass('up')) ? 1 : -1;
		if(v==0)
			v=1;
		$(this).siblings('.count').val(v).siblings('.result').text(v);
		summ();
	});
// cart del
	$('.button.remove').on('click',function(){
		var tr = $(this).closest('tr');
		tr.fadeOut(function(){
			tr.remove();
			summ();
		});
	});
	function summ() {
		var s = 0;
		$('.cart tbody tr').each(function(){
			var count = $(this).find('input.count').val();
			var price = $(this).find('input.price').val();
			count = parseInt(count);
			price = price.replace(/ /g,'');
			price = parseInt(price);
			price = price * count;
			s += price;
			$(this).find('td.summ_price').text(sep(price));
		});
		$('.cart tfoot .total').text(sep(s));
	}
	function sep(str){
		str = str.toString();
		return str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	}

// date
	if($('.date.input').is('.date')){
		$('.date.input').datepicker({
			firstDay: 1,
			minDate: 0,
			dateFormat: 'dd.mm.yy',
			dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
			monthNamesShort:["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
			monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
		});
	}




// select
function select_html(select) {
	var t = select.children('select');
	var c = '<span class="value">' + t.children(':selected').text() + '</span><div class="box"><ul>';
	t.children('option').each(function() {
		c += '<li data-value="' + $(this).val() + '">' + $(this).text() + '</li>';
	});
	c += '</ul></div>';
	t.before(c);

	select.children('.value').on('click', function() {
		var t = $(this).parent();
		var box = t.children('.box');
		box.css('min-width',t.outerWidth());
		$('.select .box').not(box).hide().parent().removeClass('focus');
		if(box.css('display')=='none')
			box.show().parent().addClass('focus');
		else
			box.hide().parent().removeClass('focus');
		$(document).one('click', function() {
			$('.select .box').hide().parent().removeClass('focus');
		});
		return false;
	});
	select.find('li').on('click', function() {
		var t = $(this);
		t.closest('.box').siblings('.value').text(t.text());
		t.closest('.box').siblings('select').val(t.attr('data-value')).trigger('change');
	});
}