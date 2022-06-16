function fraseF(num1,num2){
    const f1 = frase1(num1,num2);
    const f2 = frase2(num1,num2);
    
    return `${f1} ${f2}`;

};


function frase1(num1,num2) {
    const iguais = num1 == num2;
    
    if (iguais){
        return `Os números ${num1} e ${num2} são iguais`;
    };
    return `Os números ${num1} e ${num2} não são iguais.`;
};


function frase2(num1,num2){
    const soma = num1 + num2;
    let compara10 = 'que é menor que 10';
    let compara20 = 'e maior que 20';

    if (soma > 10) {
        compara10 = 'que é maior que 10';
    };  

    if  (soma < 20){
        compara20 = 'e menor que 20';
    };
    return `Sua soma é ${soma}, ${compara10} ${compara20}.`;
    
};


console.log(fraseF(8,8))