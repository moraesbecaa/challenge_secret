//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


//Inicie declarando uma variável do tipo array, que armazenará os nomes dos amigos inseridos
let amigos = [];


// Desenvolva uma função que permita ao usuário inserir um nome no campo de texto e adicioná-lo à lista de amigos criada anteriormente.

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();

    if (nome !== "" && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
    } else {
        alert("Nome inválido ou já adicionado!");
    }
    
    nomeInput.value = "";
}

// Crie uma função que percorra o array amigos e adicione cada nome como um elemento <li> dentro de uma lista HTML. Use innerHTML para limpar a lista antes de adicionar novos elementos.

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    lista.innerHTML = amigos.map(nome => `<li>${nome}</li>`).join('');
}

// Escreva uma função que selecione aleatoriamente um dos nomes armazenados no array amigos. Use Math.random() e Math.floor() para obter um índice aleatório

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo sorteado é: ${amigoSorteado}</li>`;
}
