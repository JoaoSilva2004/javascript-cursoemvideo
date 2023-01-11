const numero = document.querySelector("input#numero");
const botao = document.querySelector("button#botao");
const tabuada = document.querySelector("select#tabuada")

function gerarTabuada(numero) {
    if (isNaN(numero) || numero < 0) {
        window.alert("Digite um valor válido!")
        return;
    }
    for (let opcao = 0; opcao < tabuada.children.length; opcao++) {
        tabuada.children[opcao].innerHTML = `${numero} x ${opcao + 1} = ${numero * (opcao+1)}`;
    }
}


botao.addEventListener("click", () => {
    gerarTabuada(parseInt(numero.value))
})