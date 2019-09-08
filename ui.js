let data = []
const exame1 = {
    Tipo: "Exame 1",
    Clinica: "Clínica 1",
    Status: "Concluído",
    Id: 53526526,
    Envio: new Date("2019-07-25"),
    Criador: "John Doe",
    Prazo: new Date()

};
const exame2 = {
    Tipo: "Exame 2",
    Clinica: "Clínica 3",
    Status: "Aberto",
    Id: 53526526,
    Envio: new Date("2019-07-25"),
    Criador: "Alex Grey",
    Prazo: new Date()

};
const exame3 = {
    Tipo: "Exame 3",
    Clinica: "Clínica 2",
    Status: "Em andamento",
    Id: 53526526,
    Envio: new Date("2019-07-25"),
    Criador: "Bob Brown",
    Prazo: new Date()

};
const exame4 = {
    Tipo: "Exame 4",
    Clinica: "Clínica 100",
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
            <td><a href="details.html" class="btn btn-sm btn-info">Detalhes</a></td>
        </tr>
        `
    });
    document.querySelector('#tbody').innerHTML = output;
});

