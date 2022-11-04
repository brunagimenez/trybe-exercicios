let array = [];

for (i = 1 ; i <= 25; i +=1){
    array.push(i);
}

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2
let division = [];

for (i = 0 ; i <array.length ; i+=1){
    division.push((array[i]/2));
}

console.log(division);
