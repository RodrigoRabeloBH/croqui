// Get btn-hamburger 
const btn = document.querySelector('.btn-hamburguer');

// Initial Condition
let open = false;

btn.addEventListener('click', () => {
    if (!open) {
        btn.classList.add('close');
        open = true;
    } else {
        btn.classList.remove('close');
        open = false;
    }
});