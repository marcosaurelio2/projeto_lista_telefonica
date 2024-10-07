const form = document.getElementById('form-cont');
const corpoTabela = document.querySelector('tbody');
const numAdcElement = document.getElementById('numAdc');

// Adiciona evento de submit no formulário
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNome = document.getElementById('nameCont').value.trim();
    const inputNumero = document.getElementById('numCont').value.trim();

    const isFavorito = document.querySelector('#favorito-checkbox').checked; // Verifica se o checkbox está marcado

    if (inputNome && inputNumero) {
        adicionarLinhaTabela(inputNome, inputNumero, isFavorito);
        atualizarTotalContatos();
        limparCampos();
    }
});

// Função para adicionar a linha na tabela
function adicionarLinhaTabela(nome, numero, isFavorito) {
    const linha = document.createElement('tr');

    const favoritoImg = isFavorito ? `<img src="./favorito.png.png" alt="Favorito" class="favorito">` : '';

    linha.innerHTML = `
        <td>${nome}</td>
        <td>${numero}</td>
        <td>${favoritoImg}</td>
    `;

    // Adiciona a nova linha ao início da tabela se for favorito, senão adiciona ao final
    if (isFavorito) {
        corpoTabela.insertBefore(linha, corpoTabela.firstChild);
    } else {
        corpoTabela.appendChild(linha);
    }
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
