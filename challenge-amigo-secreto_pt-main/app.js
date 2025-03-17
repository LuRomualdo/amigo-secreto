// Crie um array para armazenar os nomes - Os usuários escreverão o nome de um amigo em um campo de 
//texto e o adicionarão a uma lista visível ao clicar em "Adicionar".
let amigos = [];

        function adicionarAmigo() {
            let nomeInput = document.getElementById("amigo");
            let nome = nomeInput.value.trim();
            
            if (nome !== "") {
                amigos.push(nome);
                atualizarLista();
                nomeInput.value = "";
            } else {
                alert("Por favor, insira um nome.");
            }
        }

        function atualizarLista() {
            let lista = document.getElementById("listaAmigos");
            lista.innerHTML = ""; // Limpa a lista antes de adicionar novos itens
            
            for (let amigo of amigos) {
                let novoItem = document.createElement("li");
                novoItem.textContent = amigo;
                lista.appendChild(novoItem);
            }
        }