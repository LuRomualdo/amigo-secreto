// Crie um array para armazenar os nomes - Os usuários escreverão o nome de um amigo em um campo de 
//texto e o adicionarão a uma lista visível ao clicar em "Adicionar".
function adicionarAmigo() {
    var nomeInput = document.getElementById("amigo");
    var nome = nomeInput.value.trim();
    
    if (nome !== "") {
        var lista = document.getElementById("listaAmigos");
        var novoItem = document.createElement("li");
        novoItem.textContent = nome;
        lista.appendChild(novoItem);
        nomeInput.value = "";
    } else {
        alert("Por favor, insira um nome.");
    }
}