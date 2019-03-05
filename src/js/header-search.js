(function () {
    var Search = function (selector) {
        this.container = document.querySelector(selector);

        if (!this.container)
            return;

        this.action = this.container.getAttribute('action');

        this.input = this.container.querySelector('.header__search-input');
        this.btn = this.container.querySelector('.header__search-btn');
        this.result = this.container.querySelector('.header__search-result');

        this.init();
    };

    Search.prototype = {
        oldValue: '',
        run: false,
        minQueryLen: 2,
        cache: [],

        init: function () {
            var that = this;

            this.oldValue = this.input.value;

            this.btn.addEventListener('click', function () {
                that.open();
            });

            window.addEventListener('click', function (e) {
                if (!e.target.closest('.header__search')) {
                    that.close();
                }
            });

            this.input.addEventListener('keydown', function (e) {
                if (e.keyCode === 27) {
                    that.close();
                    return;
                }
            });

            this.input.addEventListener('focus', function () {
                if (that.result.innerHTML.length > 0)
                    that.showResult();
            });

            var timeout = 0;
            this.input.addEventListener('input', function () {
                if (timeout)
                    clearTimeout(timeout);

                if (that.input.value.length === 0) {
                    that.hideResult();
                    return;
                }

                timeout = setTimeout(function () {
                    that.search(that.input.value);
                }, 500);
            });
        },

        open: function () {
            var that = this;

            this.container.classList.toggle('header__search--show');

            setTimeout(function () {
                if(that.container.classList.contains('header__search--show')){
                    that.input.focus();
                }
                else {
                    document.body.classList.remove('body--bg');
                }
            }, 100);
        },

        close: function () {
            this.input.value = '';
            this.container.classList.remove('header__search--show');
            document.body.classList.remove('body--bg');
            this.hideResult();
        },

        showResult: function (result) {
            this.result.innerHTML = result || '';
            this.result.classList.remove('hide');
        },

        hideResult: function () {
            this.result.innerHTML = '';
            this.result.classList.add('hide');
        },

        search: function (value) {
            var that = this;

            if (this.run)
                return;

            if (value === this.oldValue)
                return;

            if (value.length <= this.minQueryLen)
                return;

            if (this.input.value in this.cache) {
                this.showResult(this.cache[this.input.value]);
            } else {
                this.run = true;

                this.loadResults(this.input.value).then(function (result) {
                    that.cache[that.input.value] = result;
                    that.showResult(result);
                    that.run = false;
                });
            }
        },

        loadResults: function (search) {
            var that = this;

            function formatParams(params) {
                return Object
                    .keys(params)
                    .map(function (key) {
                        return key + '=' + encodeURIComponent(params[key])
                    })
                    .join('&')
            }

            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();

                xhr.open('GET', that.action + '?' + formatParams({
                    'ajax_call': 'y',
                    'INPUT_ID': that.input.id,
                    'q': search,
                    'l': that.minQueryLen
                }));

                xhr.send();

                xhr.onload = function () {
                    if (this.status >= 200 && this.status < 300) {
                        resolve(xhr.response);
                    } else {
                        reject({
                            status: this.status,
                            statusText: this.statusText
                        });
                    }
                };

                xhr.onerror = function () {
                    reject({
                        status: this.status,
                        statusText: this.statusText
                    });
                };
            });
        }
    };

    new Search('.header__search');
})();