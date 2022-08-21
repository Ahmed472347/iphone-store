const iGold = document.querySelector('.iGold');
const container = document.getElementsByClassName('container');
function selectItem(phone){
    iGold.src = phone;
}
function colors(color){
    container.style.background = color;
}