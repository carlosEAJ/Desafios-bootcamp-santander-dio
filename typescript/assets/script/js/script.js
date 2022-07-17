"use strict";
const INPUT_BASE = document.getElementById('numero-base');
const INPUT_ALIQUOTA_PORCENTAGEM = document.getElementById('porcentagem-aliquota');
const BTN_CALC_SIMPLES = document.getElementById('btn-calc-simples');
const RESULTADO_CALC_SIMPLES = document.getElementById('resultado-calc-simples');
const BTN_RESET_CALC_SIMPLES = document.getElementById('btn-reset-calc-simples');
BTN_CALC_SIMPLES.addEventListener("click", calculoSimples);
BTN_RESET_CALC_SIMPLES.addEventListener("click", resetCalcSimples);
const INPUT_BASE_INVERSA = document.getElementById('numero-base-inversa');
const VALOR_FRETE = document.getElementById('valor-frete');
const BTN_CALC_INVERSO = document.getElementById('btn-calc-inverso');
const RESULTADO_CALC_INVERSO = document.getElementById('resultado-calc-inverso');
const BTN_RESET_CALC_INVERSO = document.getElementById('btn-reset-calc-inverso');
BTN_CALC_INVERSO.addEventListener('click', calculoInverso);
BTN_RESET_CALC_INVERSO.addEventListener('click', resetCalcInverso);
function calculoSimples() {
    let recebe = +INPUT_ALIQUOTA_PORCENTAGEM.value / 100;
    let base = +INPUT_BASE.value;
    let resultado = base * recebe;
    let final = base + resultado;
    RESULTADO_CALC_SIMPLES.innerText = ` ${final.toFixed(2)}`;
}
function calculoInverso() {
    let icms = (100 - +INPUT_BASE_INVERSA.value) / 100;
    let valorDoFrete = +VALOR_FRETE.value;
    let totalFrete = valorDoFrete / icms;
    RESULTADO_CALC_INVERSO.innerText = ` ${totalFrete.toFixed(2)}`;
}
function resetCalcSimples() {
    INPUT_BASE.value = '';
    INPUT_ALIQUOTA_PORCENTAGEM.value = '';
    RESULTADO_CALC_SIMPLES.innerText = '';
}
function resetCalcInverso() {
    INPUT_BASE_INVERSA.value = '';
    VALOR_FRETE.value = '';
    RESULTADO_CALC_INVERSO.innerText = '';
}
