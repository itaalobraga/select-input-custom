const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');
const flag = document.querySelector('.select-flag')

const optionsList = document.querySelectorAll('.option');

optionsList.forEach((option) => {
    option.addEventListener('click', () => {
        selected.innerHTML = option.querySelector('label').innerHTML;
        optionsContainer.classList.remove('active');
        option.querySelector('label').innerHTML === 'Brasil' ? flag.style.backgroundImage = "url('/assets/br.png')" : flag.style.backgroundImage = "url('/assets/eua.png')"
    });
});

optionsContainer.addEventListener('mouseleave', () => {
    optionsContainer.classList.remove('active');
});

selected.addEventListener('click', () => {
    optionsContainer.classList.toggle('active');
});
