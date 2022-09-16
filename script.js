


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
   
    
    let qdtTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    let qdtTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas);
   
    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} kg de Carnes</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 350)} Latas de Cervejas</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Garrafas de Bedidas</p>`

}
function carnePorPessoa(duracao) {
    if (duracao >= 6) {
        return 650;
        
    } else {
        return 400;
    }
}

function cervejaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 2000;
        
    } else {
        return 1200;
    }
}

function bebidasPorPessoa(duracao) {
    if (duracao >= 6) {
        return 1500;
        
    } else {
        return 1000;
    }
} 

