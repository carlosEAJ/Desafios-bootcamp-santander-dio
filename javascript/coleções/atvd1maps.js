function getAdmins(mapss){
   for(adm of mapss){
    console.log(adm);
   }
//funcoes atribuidas com nomes genericos, qualquer nome pode ser atribuido
}
const myMap = new Map()
myMap.set('carlos', 'Admin');
myMap.set('joao', 'admin')
myMap.set('jurandir','admin')
myMap.set('lucio','admin')

getAdmins(myMap) // chamando a funcao e atribuindo a constante