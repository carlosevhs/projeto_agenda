const form = document.getElementById('agenda');
let contador = 0;
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinha();
    attTabela();
    contador ++
    attNumeroContatos()
});

function addLinha(){
    const inputNome = document.getElementById('nome');
    const inputDdd = document.getElementById('ddd');
    const inputTelefone = document.getElementById('telefone');
    
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>(${inputDdd.value})</td>`;
    linha += `<td>${inputTelefone.value.slice(0,1)}.${inputTelefone.value.slice(1,5)}-${inputTelefone.value.slice(5,9)}</td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNome.value = '';
    inputDdd.value = '';
    inputTelefone.value = '';
}

function attTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function attNumeroContatos(){
    const aux = contador
    document.getElementById('quantidade-contatos').innerHTML = aux;
    document.getElementById('concordancia').innerHTML = aux > 1 ? 'Contatos' : 'Contato';
}
