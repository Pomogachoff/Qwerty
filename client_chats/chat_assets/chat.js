function ImgHeight(){
let InfoImg = document.querySelector(`#info`);
let BlockImg = document.querySelector(`#block`);
let ReportImg = document.querySelector(`#report`);
let OptionsMenuTextHeight = document.querySelector(`#menu-text-js`).offsetHeight;
let ProfileImg = document.querySelector(`#no_avatar_in_menu`);
let OptionsMenuHeaderTextHeight = document.querySelector(`#polzovatel-name-in-menu`).offsetHeight;

InfoImg.style.height = `${OptionsMenuTextHeight}` + `px`;
BlockImg.style.height = `${OptionsMenuTextHeight}` + `px`;
ReportImg.style.height = `${OptionsMenuTextHeight}` + `px`;
ProfileImg.style.height = `${OptionsMenuHeaderTextHeight}` + `px`;
}; 

let timerId3 = setInterval(ImgHeight, 100);