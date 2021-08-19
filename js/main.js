const tabMenuBtn = document.querySelector('.hamburger__menu');
const tabHeader = document.querySelector('.nav');
tabMenuBtn.addEventListener('click', (e)=>{
    tabHeader.classList.toggle('open_menu')
})
