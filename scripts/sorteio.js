const menorValor = 1;
const maiorValor = 1000;
let numeroSecreto;

const geraNumeroSecreto = () => {
    numeroSecreto = Math.floor(Math.random() * (maiorValor - menorValor + 1)) + menorValor;
    return numeroSecreto;
};

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;

console.log(geraNumeroSecreto());
