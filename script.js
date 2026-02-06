async function buscarEndereco() {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    if (cep.length !== 8) {
        alert("Por favor, digite um CEP válido com 8 dígitos.");
        return;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.erro) {
            alert("CEP não encontrado!");
            limparCampos();
        } else {
            document.getElementById('logradouro').innerText = data.logradouro;
            document.getElementById('bairro').innerText = data.bairro;
            document.getElementById('localidade').innerText = data.localidade;
            document.getElementById('uf').innerText = data.uf;
        }
    } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
        alert("Erro na conexão com o servidor.");
    }
}

function limparCampos() {
    document.getElementById('logradouro').innerText = "...";
    document.getElementById('bairro').innerText = "...";
    document.getElementById('localidade').innerText = "...";
    document.getElementById('uf').innerText = "...";
}