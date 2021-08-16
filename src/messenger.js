function wr(){window.location.reload(true)}

function chatJob(new_interval){ chat_job = setInterval(chatRefresh, new_interval), chat_interval = new_interval, chat_count = 0; }

function chatRefresh(w=1){
	if (chat_xhr_load) return;
	chat_xhr_load = 1;
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'messenger.php?read='+chat_last_id+'&ajax='+Date.now(), true);
	xhr.onload = function(){
		let r = xhr.response, id = parseInt(r.substring(0,10));
		if ( id > chat_last_id ) {
			if (w) chatOpen();
			chat_last_id = id,
			chat_div.insertAdjacentHTML('beforeEnd',r.substring(10)),
			chat_div.scrollTop = chat_div.scrollHeight;
			if ( chat_interval > chat_interval_min ) clearInterval(chat_job), chatJob(chat_interval_min);
		} else { // если за минуту не было сообщений, а интервал еще не максимальный, то пошагово увеличим интервал
			if ( ++chat_count * chat_interval >= 60000 && chat_interval < 30000 ) clearInterval(chat_job), chatJob(chat_interval + chat_interval_min);
		}
		chat_xhr_load = 0;
	}
	xhr.onerror = wr;
	xhr.send();
}

function chatUpload(f,v){
	chat_submit.disabled = true;
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'messenger.php?ajax='+Date.now(), true);
	xhr.onload = function(){ f.reset(), chatRefresh(), chat_submit.disabled = false; }
	xhr.onerror = wr;
	let formData = new FormData(f);
	if(v) {
		formData.set('message', v);
	}
	xhr.send( formData );
	return false;
}

function chatInit(){
	chat = document.getElementById('chat'),
	chat_div = document.getElementById('chat_div'),
	chat_submit = document.getElementById('chat_submit'),
	chat_input = document.getElementById('chat_input'),
	chat_interval_min = 30000,
	chat_xhr_load = 0,
	chat_last_id = 0,
	open_chat = null;

	chatJob(chat_interval_min), chatRefresh(0);
}

function chatOpen(){
	if (open_chat) clearTimeout(open_chat), chatInit();
	window.messenger.classList.add('messenger--open');
	setTimeout(chatFocus,1000);
	chat_div.scrollTop = chat_div.scrollHeight;
}

function chatClose(){
	window.messenger.classList.remove('messenger--open');
}

function chatFocus(){
	chat_input.focus();
}

const formFile = window.messenger.querySelector('.messenger__form-file');

formFile.addEventListener('change', ()=> {

	fetch( 'messenger.php?ajax=' + Date.now(), {
		method: 'POST',
		body: new FormData(formFile)
	})
	.then(result => {

		formFile.reset();
		chatRefresh();

	});

});

// быстрые вопросы в самом начале чата
const fastText = window.messenger.querySelector('.message--fast-text');

fastText.addEventListener('click', event => {

	if(event.target.closest('.message__btn')) {

		chatUpload(window.messenger.querySelector('.messenger__form'), event.target.closest('.message__btn').textContent.trim());

		fastText.remove();

	}

});

// smile
const btnSmile = window.messenger.querySelector('.messenger__btn-smile');

btnSmile.addEventListener('click', () => window.messenger.classList.toggle('messenger--smile'));

const addSmiles = window.messenger.querySelectorAll('.messenger__add-smile');

Array.from(addSmiles, btn => {

	btn.addEventListener('click', () => {

		window.messenger.classList.remove('messenger--smile');

		chat_input.value = chat_input.value + btn.textContent.trim();

		chat_input.focus();

	});

});

if (window.Clipboard) {

	// поддержка ClipboardEvent API

	chat_input.addEventListener("paste", event => {

		const items = event.clipboardData.items;

		if (items) {

			for (let i = 0; i < items.length; i++) {

				if (items[i].type.indexOf("image") !== -1) {

					const imageBlob = items[i].getAsFile();

					let formData = new FormData();
					formData.append("file", imageBlob, "paste.png");

					fetch( 'messenger.php?ajax=' + Date.now(), {
						method: 'POST',
						body: formData
					});

				}

			}

		}

	});

}

// Drag'n'Drop

chat.addEventListener('dragover', event => {

	event.preventDefault();

	window.messenger.classList.add('messenger--drag');

});

chat.addEventListener('dragleave', () => {

	window.messenger.classList.remove('messenger--drag');

});

chat.addEventListener('drop', event => {

	event.preventDefault();

	window.messenger.classList.remove('messenger--drag');

	let dt = event.dataTransfer;
	let files = dt.files;

	[...files].forEach( file => {

		let formData = new FormData();
		formData.append('file', file)

		fetch( 'messenger.php?ajax=' + Date.now(), {
			method: 'POST',
			body: formData
		});

	});

});