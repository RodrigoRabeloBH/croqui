const file = JSON.parse(localStorage.getItem('key'));

document.addEventListener('DOMContentLoaded', show);

function show(){

    let output = '';

    file.forEach( x => {
        output +=        
        `
            <ul class="list-group my-3">
            <li class="list-group-item bg-light">Tipo: ${x.Tipo}</li>
            <li class="list-group-item">Clínica: ${x.Clinica}</li>
            <li class="list-group-item">Status: ${x.Status}</li>
            <li class="list-group-item">Id: ${x.Id}</li>
            <li class="list-group-item">Envio: ${x.Envio}</li>
            <li class="list-group-item">Criador: ${x.Criador}</li>
            <li class="list-group-item">Prazo: ${x.Prazo}</li>
            </ul>
        `
    });
    document.querySelector('#showcase').innerHTML = output;
}

