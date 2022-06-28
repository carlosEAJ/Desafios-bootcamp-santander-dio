const multi = {
    value: 2
}

function comthis(arr){
    return arr.map((item) => item * this.value );
};

const arr = [1,2,3,4,5];
console.log(comthis.call(multi, arr));
                        //(objeto que eu quero pegar o valor, arr =  parametro)