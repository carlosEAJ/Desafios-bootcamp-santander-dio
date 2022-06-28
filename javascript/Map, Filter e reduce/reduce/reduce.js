/*var arr = [1,2,3,4,5];
var soma_geral = 0;

for(let i = 0; i < arr.length; i++){
    soma_geral += arr[i];
}

console.log(soma_geral);*/

const array = [1,2,3,4,5];
let soma = array.reduce((soma_geral, arr) => soma_geral + arr, 0);

console.log(soma);
