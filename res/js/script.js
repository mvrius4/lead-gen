const nav = document.querySelector('nav');
const openBtn = document.querySelector('.svg.open');
const closeBtn = document.querySelector('.close');

openBtn.addEventListener('click', () => {
    console.log('a');
    nav.classList.add('active');
    openBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
})

closeBtn.addEventListener('click', () => {
    console.log('b');
    nav.classList.remove('active');
    closeBtn.classList.add('hidden');
    openBtn.classList.remove('hidden');
})