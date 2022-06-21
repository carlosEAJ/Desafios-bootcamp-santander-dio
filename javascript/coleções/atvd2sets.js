/*function myarray(a){
    const myset = new Set(a);
    const list = [];
    for (item of myset){
        list.push(item)
    }
    return list; 
}*/


function myarray(a){
    const myset = new Set(a);
    return [...myset]
}



const array = [30, 30, 40, 5, 223, 2049, 3034, 5]
const listunicos = myarray(array);
console.log(listunicos);