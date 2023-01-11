const resultado = document.querySelector("div.resultado");
const inicio = document.querySelector("input#inicio");
const fim = document.querySelector("input#fim");
const passo = document.querySelector("input#passo");
const botao = document.querySelector("button#botao");
const righthand = "&#128073;";
const finishflag = "&#127937;";

function contar() {
    let valorInicio = parseInt(inicio.value);
    let valorFim = parseInt(fim.value);
    let valorPasso = parseInt(passo.value);

    /*let erro = false;
    let mensagemErro = "";

    if (!valorInicio) {
        inicio.value = 0;
        valorInicio = 0;
    }

    if (!valorFim) {
        fim.value = 0;
        valorFim = 0;
    }

    if (!valorPasso || valorPasso == 0) {
       passo.value = 1;
       valorPasso = 1;
    }*/

    let message = "";

    resultado.setAttribute("class", "resultado");

    resultado.innerHTML = "Contando:<br>";

    
    if (valorFim < valorInicio && valorPasso < 0) {
        for (let i = valorInicio; i <= valorFim; i -= valorPasso) {
            console.log(i);
            message += i + righthand;
        }
    } else if (valorFim > valorInicio && valorPasso > 0) {
        for (let i = valorInicio; i <= valorFim; i += valorPasso) {
            console.log(i);
            message += ` ${i} ${righthand} `;
        }
    } else {
        resultado.class = "resultado error";
        resultado.innerHTML = `Por favor, confira os valores corretamente.`;
        return;
    }

    resultado.innerHTML = `${message} ${finishflag}`;
}

botao.addEventListener("click", contar);