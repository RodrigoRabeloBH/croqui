let data = [];

const exame1 = {
    Tipo: "Exame 1",
    Clinica: "Clinica 1",
    Status: "Concluido",
    Id: 53526526,
    Envio: new Date("2019-07-25"),
    Criador: "John Doe",
    Prazo: new Date()

};
const exame2 = {
    Tipo: "Exame 2",
    Clinica: "Clinica 3",
    Status: "Aberto",
    Id: 53526526,
    Envio: new Date("2019-07-25"),
    Criador: "Alex Grey",
    Prazo: new Date()

};
const exame3 = {
    Tipo: "Exame 3",
    Clinica: "Clinica 2",
    Status: "Em andamento",
    Id: 53526526,
    Envio: new Date("2019-07-25"),
    Criador: "Bob Brown",
    Prazo: new Date()

};
const exame4 = {
    Tipo: "Exame 4",
    Clinica: "Clinica 100",
    Status: "Em andamento",
    Id: 53526526,
    Envio: new Date("2019-07-25"),
    Criador: "Marie Pink",
    Prazo: new Date()

};
data.push(exame1);
data.push(exame2);
data.push(exame3);
data.push(exame4);
data.push(exame1);
data.push(exame2);
data.push(exame3);
data.push(exame4);


document.addEventListener("DOMContentLoaded", ()=>{
localStorage.setItem('key',JSON.stringify(data));
    let output = '';

    data.forEach( x => {
        output +=
        `
        <tr>
            <td>${x.Tipo}</td>
            <td>${x.Clinica}</td>
            <td>${x.Status}</td>
            <td>
		<a href="details.html" class="btn btn-sm btn-info"><i class="fas fa-search-plus"></i></a>		
	    </td>
        </tr>
        `
    });
    document.querySelector('#tbody').innerHTML = output;
});

