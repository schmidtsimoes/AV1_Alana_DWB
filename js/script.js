// Array para armazenar as tarefas
const tarefas = [];

// Selecionar elementos do DOM
const formulario = document.querySelector('#formulario');
const inputTarefa = document.querySelector('#inputTarefa');
const listaTarefas = document.querySelector('#listaTarefas');
const mensagem = document.querySelector('#mensagem');

// Evento do formulário
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    adicionarTarefa();
});

// Função para validar tarefa
function validarTarefa(texto) {
    if (texto.trim() === '') {
        return false;
    }
    return true;
}

// Função para adicionar tarefa
function adicionarTarefa() {
    const texto = inputTarefa.value;

    if (!validarTarefa(texto)) {
        exibirMensagem('Por favor, digite uma tarefa válida!');
        return;
    }

    // Limpar mensagem de erro
    limparMensagem();

    // Adicionar ao array
    tarefas.push(texto);

    // Limpar input
    inputTarefa.value = '';

    // Renderizar a lista
    renderTarefas();
}

// Função para renderizar tarefas
function renderTarefas() {
    listaTarefas.innerHTML = '';

    tarefas.forEach(function(tarefa, indice) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${tarefa}</span>
            <button class="btnRemover" data-indice="${indice}">Remover</button>
        `;
        listaTarefas.appendChild(li);
    });

    // Adicionar evento aos botões de remover
    const botoesRemover = document.querySelectorAll('.btnRemover');
    botoesRemover.forEach(function(botao) {
        botao.addEventListener('click', function() {
            const indice = this.getAttribute('data-indice');
            removerTarefa(indice);
        });
    });
}

// Função para remover tarefa
function removerTarefa(indice) {
    tarefas.splice(indice, 1);
    renderTarefas();
}

// Função para exibir mensagem de erro
function exibirMensagem(texto) {
    mensagem.textContent = texto;
}

// Função para limpar mensagem
function limparMensagem() {
    mensagem.textContent = '';
}

// Renderizar inicial (lista vazia)
renderTarefas();
