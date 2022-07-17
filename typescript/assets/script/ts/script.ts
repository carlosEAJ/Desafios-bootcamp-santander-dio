const INPUT_BASE = document.getElementById('numero-base') as HTMLInputElement;
const INPUT_ALIQUOTA_PORCENTAGEM = document.getElementById('porcentagem-aliquota') as HTMLInputElement;
const BTN_CALC_SIMPLES = document.getElementById('btn-calc-simples') as HTMLButtonElement;
const RESULTADO_CALC_SIMPLES = document.getElementById('resultado-calc-simples') as HTMLParagraphElement;
const BTN_RESET_CALC_SIMPLES = document.getElementById('btn-reset-calc-simples') as HTMLButtonElement;

BTN_CALC_SIMPLES.addEventListener("click", calculoSimples);
BTN_RESET_CALC_SIMPLES.addEventListener("click", resetCalcSimples);


const INPUT_BASE_INVERSA = document.getElementById('numero-base-inversa') as HTMLInputElement;
const VALOR_FRETE = document.getElementById('valor-frete') as HTMLInputElement;
const BTN_CALC_INVERSO = document.getElementById('btn-calc-inverso') as HTMLButtonElement;
const RESULTADO_CALC_INVERSO = document.getElementById('resultado-calc-inverso') as HTMLParagraphElement;
const BTN_RESET_CALC_INVERSO = document.getElementById('btn-reset-calc-inverso') as HTMLButtonElement;

BTN_CALC_INVERSO.addEventListener('click', calculoInverso)
BTN_RESET_CALC_INVERSO.addEventListener('click', resetCalcInverso)

function calculoSimples(){  
    let recebe = +INPUT_ALIQUOTA_PORCENTAGEM.value / 100;
    let base = +INPUT_BASE.value;
    let resultado = base * recebe;
    let final = base + resultado;
    RESULTADO_CALC_SIMPLES.innerText = ` ${final.toFixed(2)}`;
}


function calculoInverso(){
    let icms = (100 - +INPUT_BASE_INVERSA.value) / 100;
    let valorDoFrete = +VALOR_FRETE.value;
    let totalFrete = valorDoFrete / icms; 
    RESULTADO_CALC_INVERSO.innerText = ` ${totalFrete.toFixed(2)}`;
}

function resetCalcSimples(){
    INPUT_BASE.value = '';
    INPUT_ALIQUOTA_PORCENTAGEM.value = '';
    RESULTADO_CALC_SIMPLES.innerText = '';
}

function resetCalcInverso(){
    INPUT_BASE_INVERSA.value = '';
    VALOR_FRETE.value = '';
    RESULTADO_CALC_INVERSO.innerText = '';
}