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

function chatUpload(f){
	chat_submit.disabled = true;
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'messenger.php?ajax='+Date.now(), true);
	xhr.onload = function(){ f.reset(), chatRefresh(), chat_submit.disabled = false; }
	xhr.onerror = wr;
	xhr.send( new FormData(f) );
	return false;
}

function chatInit(){
	chat = document.getElementById('chat'),
	chat_div = document.getElementById('chat_div'),
	chat_submit = document.getElementById('chat_submit'),
	chat_input = document.getElementById('chat_input'),
	chat_interval_min = 3000,
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

const formFile = document.querySelector('.messenger__form-file');

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