const files = JSON.parse(localStorage.getItem('key'));

document.addEventListener('DOMContentLoaded', show);

document.querySelector('.btn').addEventListener('click', () => {
    window.history.back();
});

function show() {
    let output = '';
    files.forEach(x => {
        if (JSON.parse(localStorage.getItem('id')) === x.Id) {
            let date = x.Prazo.split("-");         
            output +=
                `
            <ul class="list-group my-3">
            <li class="list-group-item bg-light">Tipo: ${x.Tipo}</li>
            <li class="list-group-item">Clínica: ${x.Clinica}</li>
            <li class="list-group-item">Status: ${x.Status}</li>
            <li class="list-group-item">Id: ${x.Id}</li>
            <li class="list-group-item">Envio: ${date[2].slice(0, 2) -12}/${date[1]}/${date[0]}</li>
            <li class="list-group-item">Criador: ${x.Criador}</li>
            <li class="list-group-item">Prazo: ${date[2].slice(0, 2)}/${date[1]}/${date[0]}</li>
            </ul>
        `
        }
    });
    document.querySelector('#showcase').innerHTML = output;
}


