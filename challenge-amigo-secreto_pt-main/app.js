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
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
