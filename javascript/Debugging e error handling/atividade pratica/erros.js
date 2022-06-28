function arr(array, num){
    try{    //&& = and
        if (!array && !num) throw new ReferenceError('envie os parametros');
        if (typeof array !== 'object') throw new TypeError('Seu array nao e um object');
        if (typeof num !== 'number') throw new TypeError('seu numero nao e do tipo number');
        if (array.length !== num ) throw new RangeError('o tamanho do array e diferente do numero');
        
        return array
    }
    catch(e){
        if (e instanceof ReferenceError){
            console.log(e.message)
        }
        else if (e instanceof TypeError){
            console.log(e.message)
        }
        else if (e instanceof RangeError){
            console.log(e.message)
        } 
        else {
            console.log('error nao esperado' + e)
        }
    }
}

console.log(arr())
console.log(arr(2,5))
console.log(arr(['vida'], 2))
console.log(arr([], '2'))
console.log(arr(['vida'], 1))