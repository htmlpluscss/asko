/*

© kovrigin
Все права разрешены
красивый дизайн должен иметь красивый код®

http://htmlpluscss.ru

*/

var $window = $(window);
var windowHeight = 0;

$window.on('resize',function(){
	setTimeout(function(){
		windowHeight = $window.height();
	},1);
});


$window.ready(function(){

// min height
	$window.trigger('resize').trigger('scroll');

// menu
	$('.menu li').hover(function(){
		var t = $(this);
		t.addClass('hover');
		setTimeout(function(){
			if(t.hasClass('hover'))
				t.children('.sub').fadeIn();
		},1000);
	},function(){
		var t = $(this);
		t.removeClass('hover');
		setTimeout(function(){
			if(!t.hasClass('hover'))
				t.children('.sub').fadeOut();
		},500);
	});
	$('.menu .sub').hide().addClass('show');

// slider home
	if($('.slider').is('aside.slider'))
		$('.menu').prepend('<span class="slider_shadow"></span>');

	$('.slider').each(function(){
		var s = $(this);
		var b = s.children('.box');
		var ul = b.children();
		var li = ul.children();
		if(s.is('.sl_np'))
			s.append('<span class="nav_left nextprev"></span><span class="nav_right nextprev"></span>');
		if(s.is('.sl_pagin'))
			app_nav(s,li);
		if(s.is('.abscissa'))
			ul_width(b,ul,li);
		if(s.is('[data-timer]'))
			timer(s,parseInt(s.attr('data-timer'))*1000);
	});

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


// alert_up
	bg = $('.bg_up').css('opacity',.5);
	up = $('.alert_up');

	bg.on('click',function() {
		var a_up = up.filter('.animate');
		alert_start(a_up,true);
		a_up.afterTransition(function(){
			bg.fadeOut();
			up.removeClass('animate');
			$('.clbh_blur').removeClass('clbh_blur');
		});
	});

	up.children('.close').on('click',function(){
		bg.trigger('click');
	});

	$('#header .callback').on('click',function() {
		alert_top(up.filter('.callback'));
	});

	// ASKO-HOME
	$('.buy_one_click').on('click',function() {
		alert_top(up.filter('.order_quick'));
	});

});

// alert_up
var bg, up;

function alert_top(a_up) {
	var top = alert_start(a_up);
	a_up.addClass('animate');
	bg.fadeIn(function(){
		var a_this = up.not(a_up).filter('.animate');
		if (a_this.length > 0) {
			alert_start(a_this);
			a_this.afterTransition(function() {
				a_this.removeClass('animate');
			});
		}
		setTimeout(function(){
			a_up.css('top', top);
		},1);
		$('header, .menu').addClass('clbh_blur');
	});
}
function alert_start(a_up,all_hide) {
	var h_up = a_up.outerHeight();
	var top = $window.scrollTop();
	var start = top - h_up - 24; // 24 box-shadow
	if(!(all_hide && (top>a_up.offset().top+h_up || top+windowHeight<a_up.offset().top)))
		a_up.css('top', start);
	if (windowHeight > h_up)
		top += (windowHeight - h_up) / 2;
	return top;
}

// sliders
function timer(s,t){
	var intervalID;
	function on_timer(){
		intervalID = setInterval(function(){
			s.children('.nav_right').triggerHandler('click');
		},t);
	}
	function off_timer(){
		clearInterval(intervalID);
	}
	s.hover(function(){
		off_timer();
	},function(){
		on_timer();
	});
	on_timer();
}

function ul_width(b,ul,li) {
	var w = 0;
	li.first().addClass('first active');
	li.last().css('margin-right',0);
	li.each(function() {
		w += $(this).outerWidth(true);
	});
	ul.width(w).animate({left: 0});

//	li_last
	var b_w = b.width();
	if (w > b_w) {
		w = 0;
		for(var i = -1; b_w >= w; i--)
			w += li.eq(i).outerWidth(true);
		li.eq(i + 2).addClass('last');

		b.siblings('.nextprev').on('click',function(){
			var t = $(this);
			var n = first_last(t,li);
			var l = n.addClass('active').position().left;
			if (n.hasClass('last'))
				l = ul.width() - ul.parent().width();
			ul.animate({'left': - l},700);
		});
	}

}
// slider nav_pag
function app_nav(s,li){
	li.first().addClass('first active').end().last().addClass('last');
	var pagination = $('<div class="nav_pagination">');
	for(var i = 0; i < li.size(); i++)
		pagination.append('<span></span>');
	var pagin_li = pagination.children();
	pagin_li.first().addClass('active first');
	pagin_li.last().addClass('last');
	pagin_li.on('click',function(){
		var t = $(this);
		if(t.hasClass('active'))
			return false;
		t.addClass('active').siblings('.active').removeClass('active');
		var a = li.filter('.active');
		var n = li.eq(t.index()).addClass('next');
		n.stop().fadeIn(700);
		a.stop().fadeOut(700,function(){
			li.removeClass('active next');
			n.addClass('active');
		})
	});
	s.append(pagination);

	s.children('.nextprev').on('click',function(){
		var t = $(this);
		var n = first_last(t,pagin_li);
		n.triggerHandler('click');
	});
}
function first_last(t,li){
	var n;
	var a = li.filter('.active').removeClass('active');
	if(t.hasClass('nav_right'))
		n = (a.hasClass('last')) ? li.filter('.first') : a.next();
	else
		n = (a.hasClass('first')) ? li.filter('.last') : a.prev();
	return n;
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

/*
 * Copyright 2012 Andrey “A.I.” Sitnik <andrey@sitnik.ru>,
 * sponsored by Evil Martians.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
(function(d){"use strict";d.Transitions={_names:{'transition':'transitionend','OTransition':'oTransitionEnd','WebkitTransition':'webkitTransitionEnd','MozTransition':'transitionend'},_parseTimes:function(b){var c,a=b.split(/,\s*/);for(var e=0;e<a.length;e++){c=a[e];a[e]=parseFloat(c);if(c.match(/\ds/)){a[e]=a[e]*1000}}return a},getEvent:function(){var b=false;for(var c in this._names){if(typeof(document.body.style[c])!='undefined'){b=this._names[c];break}}this.getEvent=function(){return b};return b},animFrame:function(c){var a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame;if(a){this.animFrame=function(b){return a.call(window,b)}}else{this.animFrame=function(b){return setTimeout(b,10)}}return this.animFrame(c)},isSupported:function(){return this.getEvent()!==false}};d.extend(d.fn,{afterTransition:function(h,i){if(typeof(i)=='undefined'){i=h;h=1}if(!d.Transitions.isSupported()){for(var f=0;f<this.length;f++){i.call(this[f],{type:'aftertransition',elapsedTime:0,propertyName:'',currentTarget:this[f]})}return this}for(var f=0;f<this.length;f++){var j=d(this[f]);var n=j.css('transition-property').split(/,\s*/);var k=j.css('transition-duration');var l=j.css('transition-delay');k=d.Transitions._parseTimes(k);l=d.Transitions._parseTimes(l);var o,m,p,q,r;for(var g=0;g<n.length;g++){o=n[g];m=k[k.length==1?0:g];p=l[l.length==1?0:g];q=p+(m*h);r=m*h/1000;(function(b,c,a,e){setTimeout(function(){d.Transitions.animFrame(function(){i.call(b[0],{type:'aftertransition',elapsedTime:e,propertyName:c,currentTarget:b[0]})})},a)})(j,o,q,r)}}return this},transitionEnd:function(c){for(var a=0;a<this.length;a++){this[a].addEventListener(d.Transitions.getEvent(),function(b){c.call(this,b)})}return this}})}).call(this,jQuery);