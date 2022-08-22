let Body = document.querySelector('.body')
let Btn = document.getElementById('flexSwitchCheckChecked');

Btn.addEventListener('click', (e) => {
    Body.classList.toggle('black')
})