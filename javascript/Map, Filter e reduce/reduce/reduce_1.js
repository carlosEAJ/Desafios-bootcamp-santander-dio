const lista = [
    {
        name: 'tomate',
        preco: 30,
    },
    {
        name: 'ovos',
        preco: 12
    },
    {
        name: 'queijo',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current){
        return prev - current.preco;
    }, saldoDisponivel);
}


console.log(calculaSaldo(saldoDisponivel, lista))