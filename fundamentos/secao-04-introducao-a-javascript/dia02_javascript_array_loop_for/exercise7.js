//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smaller = numbers[0];

for (let i = 0 ; i <= numbers.length ; i = i + 1){
    if (numbers[i]<smaller){
        smaller = numbers[i]
    }
}
console.log(`Número ${smaller} é o menor.`);