const menorValor = 1;
const maiorValor = 1000;

const geraNumeroSecreto = () => {
    const numeroSecreto = parseInt(Math.random() * maiorValor + 1);
    return numeroSecreto;
};

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;
