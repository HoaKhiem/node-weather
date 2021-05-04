const bar = document.querySelector('.header__bar')
const list = document.querySelector('.header__right__content__list')
bar.onclick = () =>{
    list.classList.toggle('display')
}