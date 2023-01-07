
/*Тут функции менюшки чатов*/

let but000001 = document.querySelector(`#but000001`);
let waiting = document.querySelector(`#wait-menu`);
let c000001 = document.querySelector(`#c000001`);
let tc000001 = document.querySelector(`#tc000001`);
let ChatFooter = document.querySelector(`#chat-footer`);


but000001.addEventListener('click', function(){
	but000001.classList.toggle('post-click-chat');
	tc000001.classList.toggle('white-text');
	waiting.classList.toggle('d-none');
	c000001.classList.toggle('d-none');
	let ChatMainc000001Width = document.querySelector(`#chat-main-c000001`).clientWidth;
    let ChatFooterWidth = ChatMainc000001Width;
	ChatFooter.style.width = `${ChatFooterWidth}` + `px`;
});

/*Тут функции внутри чата*/
let TextInput = document.querySelector(`#MessageTextEnter`);
let SendButton = document.querySelector(`#message-send-button`);
let c000001ChatMain = document.querySelector(`#chat-main-c000001`);
let lastMessage = document.querySelector(`#last-message`);
let OptionsButton = document.querySelector(`#options-button`);
let OptionsMenu = document.querySelector(`#options-menu`);
let WindowBackground = document.querySelector(`#window-background`); 
let ReportWindowBackground = document.querySelector(`#report-window-background`); 
let ReportMenu = document.querySelector(`#report-menu`);
let ReportButton = document.querySelector(`#report-button`);
let CloseOptionsButton = document.querySelector(`#close-options-button`);
let CloseReportButton = document.querySelector(`#close-report-button`);
let SendFileButton = document.querySelector(`#file-button`);
let FileStorage = document.querySelector(`#file-storage`);

SendButton.addEventListener(`click`, function(){
	if(TextInput.value == `` || TextInput.value == ` `){
	}else{
  let TextMessage = `
 <div class="my-message">
       <div class="message-body">
	    <div class="message-content">
		 <p class="message-text">${TextInput.value}</p>
        </div>
       </div>
      </div>
`;
document.getElementById('tc000001').textContent = `Вы: ${TextInput.value}`
c000001ChatMain.innerHTML += TextMessage;
	TextInput.value = ``;
	}
});
OptionsButton.addEventListener(`click`, function(){
	OptionsMenu.classList.remove('d-none');
});
WindowBackground.addEventListener(`click`, function(){
	OptionsMenu.classList.add('d-none');
});
ReportWindowBackground.addEventListener(`click`, function(){
	ReportMenu.classList.add('d-none');
});
ReportButton.addEventListener(`click`, function(){
	ReportMenu.classList.remove('d-none');
});
CloseOptionsButton.addEventListener(`click`, function(){
	OptionsMenu.classList.add('d-none');
})
CloseReportButton.addEventListener(`click`, function(){
	ReportMenu.classList.add('d-none');
})
SendFileButton.addEventListener(`click`, function(event){
	console.log(FileStorage.files);
})

/*Тут назначение клавиш*/
document.addEventListener(`keydown`, function(event){
	if(event.key == `Enter`){
		 if(TextInput.value == ``){
	}else{
  let TextMessage = `
 <div class="my-message">
       <div class="message-body">
	    <div class="message-content">
		 <p class="message-text">
        ${TextInput.value}
         </p>
        </div>
       </div>
      </div>
`;
document.getElementById('tc000001').textContent = `Вы: ${TextInput.value}`
c000001ChatMain.innerHTML += TextMessage;
	TextInput.value = ``;
	}
	}
});

let flag = false;
document.addEventListener(`keydown`, function(event){
	if(event.key == `Shift`)flag = true;
	if ((event.key == `Z` && flag) || (event.key == `Я` && flag)){
		flag = false;
		OptionsMenu.classList.toggle('d-none');
	  };	
});