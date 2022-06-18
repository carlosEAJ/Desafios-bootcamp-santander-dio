// estrutura de uma lista dentro de uma const
const alunos = [
    {
        nome : 'carlos',
        nota : 7,
    },
    
    {
        nome : 'jose',
        nota : 5,
    },
    
    {
        nome : 'julia',
        nota : 2,
    },
    {
        nome : 'isadora',
        nota : 9,
    },
]; 
// estrutura de function, for e if(basicas)
function mediaf(lista, media){ // nao e necessario puxar a const, ela vai ser estruturada no console.
    let list = [];
    for (let i = 0; i < lista.length; i++){
        let {nome, nota} = lista[i]; //metodo object destructuring, com esse método eu consigo puxar as key dentro do meu objeto
        if (nota >= media){ 
            list.push(nome);// push adiciona um item na minha lista
        }
    }
    return list; // return se assemelha a um stop se não for adicionado um valor
    
}

console.log(mediaf(alunos, 6)); //console.log(puxando a funçao(puxando a array alunos e depois da virgula é adicionado o valor media ou o que quiser))