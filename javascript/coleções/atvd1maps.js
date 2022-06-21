function getAdmins(mapss){
    let list = []; // let criada para lista e depois verificar os cargos dentro do if
   for(adm of mapss){
    console.log(adm)
    if('admin'=== adm[1]){  // (colchetes verifica) verificar se os cargos (indice 1) sao iguais a admin
        list.push(adm[0]); // se forem iguais adicionar na lista nomes que tem o cargo admin
    }
   }
   return list;
//funcoes atribuidas com nomes genericos, qualquer nome pode ser atribuido
}
const myMap = new Map();
myMap.set('carlos', 'admin');
myMap.set('joao', 'usuario');
myMap.set('jurandir','admin');
myMap.set('lucio','usuario');

const cargo = getAdmins(myMap); //const pegando o valor do retorno da funcao
// chamando a funcao e atribuindo a constante
console.log(cargo);
console.log(myMap);