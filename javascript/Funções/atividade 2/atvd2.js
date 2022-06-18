const nome1 = 
    {
        nome : 'ferrari',
        idade : 10,
    };
const   nome2 =
    {
        nome : 'lamborghini',
        idade : 70,
    };
const nome3 =
    {
        nome : 'camaro',
        idade : 18
    };



function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(nome1, 50))       //call permite enviar um objeto para funcao que nao esta definida nos parametros
console.log(calculaIdade.call(nome2, 25))
console.log(calculaIdade.call(nome3, 15))
console.log()
console.log(calculaIdade.apply(nome1, [10]))
console.log(calculaIdade.apply(nome2, [70]))
console.log(calculaIdade.apply(nome3, [40]))
 //apply permite enviar um objeto para funcao que nao esta definida nos parametros mas para ser usado tem que estar entre []