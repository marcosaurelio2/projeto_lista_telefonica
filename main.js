const form = document.getElementById('form-cont');
const corpoTabela = document.querySelector('tbody');
const numAdcElement = document.getElementById('numAdc');

// Adiciona evento de submit no formulário
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNome = document.getElementById('nameCont').value.trim();
    const inputNumero = document.getElementById('numCont').value.trim(); // Como número de telefone é uma string

    if (inputNome && inputNumero) {
        adicionarLinhaTabela(inputNome, inputNumero);
        atualizarTotalContatos();
        limparCampos();
    }
});

// Função para adicionar a linha na tabela
function adicionarLinhaTabela(nome, numero) {
    const linha = document.createElement('tr');
    linha.innerHTML = `
        <td>${nome}</td>
        <td>${numero}</td>
    `;
    corpoTabela.appendChild(linha);
}

// Função para atualizar total de contatos
function atualizarTotalContatos() {
    const totalContatos = corpoTabela.querySelectorAll('tr').length;
    numAdcElement.textContent = totalContatos; // Exibe total de contatos na tabela
}

// Função para limpar os campos de entrada
function limparCampos() {
    form.reset(); // Reseta todos os campos do formulário
}

// Limpa a tabela e reinicia as informações
document.getElementById('limparBtn').addEventListener('click', function() {
    corpoTabela.innerHTML = ''; 
    numAdcElement.textContent = ''; // Limpa o total de contatos
});
