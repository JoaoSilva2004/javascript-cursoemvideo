let txtNumero = document.querySelector("input#txtNumero");
let btnAdicionar = document.querySelector("button#btnAdicionar");
let btnFinalizar = document.querySelector("button#btnFinalizar");
let resultado = document.querySelector("div#resultado");
let lista = document.querySelector("div#lista select");

let listaNumeros = [];

function adicionar(num = 1) {
    if (num == undefined || num < 1 || num > 100) {
        window.alert("Insira um número entre 1 e 100.");
        txtNumero.value = "";
        return
    }

    num = parseInt(num);

    txtNumero.value

    if (listaNumeros.length == 0) {
        lista.innerHTML = "";
    }

    listaNumeros.push(num);
    lista.innerHTML += `<option>Número ${num} adicionado.</option>`;
}

function finalizar() {
    if (listaNumeros.length < 1) {
        window.alert("Adicione ao menos um número.");
        return;
    }

    let maior = 0;
    let menor = 100;
    let listaOrdenada = listaNumeros.sort();
    let soma = 0;

    for (let n in listaNumeros) {
        soma += listaNumeros[n];

        if (listaNumeros[n] > maior) {
            maior = listaNumeros[n]
        }

        if (listaNumeros[n] < menor) {
            menor = listaNumeros[n]
        }
    }
    
    let media = soma / listaNumeros.length;

    resultado.innerHTML = `
    Ao todo, temos ${listaNumeros.length} número${listaNumeros.length == 1 ? "" : "s"} cadastrados.
    <br>O maior valor informado foi ${maior}.
    <br>O menor valor informado foi ${menor}.
    <br>Somando todos os valores, temos ${soma}.
    <br>A média dos valores digitados é ${media}.
    `;
}

btnAdicionar.addEventListener("click", () => {adicionar(txtNumero.value)});

btnFinalizar.addEventListener("click", finalizar)
