
function CardImgHeight(){
let CardImg = document.querySelector(`#no_avatar`);
let CardTextHeight = document.querySelector(`#text-chat`).Height;

CardImg.style.height = `${CardTextHeight}` + `px`;
}; 

let timerId2 = setInterval(CardImgHeight, 100);
