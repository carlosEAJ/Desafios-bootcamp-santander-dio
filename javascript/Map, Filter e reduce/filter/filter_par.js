function filter(array){
    let list = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0){
            list.push(array[i])    
        }
    }
    return list;
}


console.log(filter([1,2,3,4,5,6,7,8]));