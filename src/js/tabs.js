ASKO.tabs = function(elems){

	Array.prototype.forEach.call(elems, function(tab){

		var btn = tab.querySelectorAll('.tabs__btn'),
			item = tab.querySelectorAll('.tabs__item'),
			nav = document.createElement('div');

		Array.prototype.forEach.call(btn, function(el,index){

			var _btn = document.createElement('button'),
				_pattern = document.createElement('span');;

			_btn.setAttribute('type','button');

			_btn.className = 'button tabs__nav-btn';
			_pattern.className = 'pattern';

			_btn.innerHTML = el.innerHTML;
			_btn.appendChild(_pattern);

			nav.appendChild(_btn);

			el.classList.add('hide');

			_btn.addEventListener('click',function(){

				Array.prototype.forEach.call(item, function(elem,inx){

					btn[inx].classList.toggle('tabs__nav-btn--active', inx == index);
					elem.classList.toggle('tabs__item--active', inx == index);

				});

			});

		});

		nav.classList.add('tabs__nav');

		tab.insertBefore(nav, item[0]);

		btn = nav.querySelectorAll('.tabs__nav-btn');

		item[0].classList.add('tabs__item--active');
		btn[0].classList.add('tabs__nav-btn--active');

	});

};


if(document.querySelectorAll('.tabs').length) {

	ASKO.tabs(document.querySelectorAll('.tabs'));

}