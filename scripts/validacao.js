function verificaChuteValido(chute){
    const numero = chute.trim();
    if (numero.toLowerCase() === 'game over') {
        document.body.style.backgroundColor = 'black';
        document.body.innerHTML = `
        <h2>GAME OVER</h2>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
        return;
    }

    const numeroConvertido = +numero;
    if (chuteForInvalido(numeroConvertido)) {
        elementoChute.innerHTML += '<div>Valor Inválido</div>';
        return;
    }
    if (numeroForaDoRAnge(numeroConvertido)){
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }
    if (numeroConvertido === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    }
    else if (numeroConvertido < numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-circle-arrow-up"></i></div>`;
    }
    else if (numeroConvertido > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-circle-arrow-down"></i></div>`;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForaDoRAnge(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
});
