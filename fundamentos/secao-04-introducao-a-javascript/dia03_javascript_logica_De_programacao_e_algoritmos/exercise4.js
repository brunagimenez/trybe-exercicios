//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.
let number = 0;

// for (let i = 2; i <= 50; i += 1){
//     if (i%1===0&&i%i===0){
//         number = number + i;
//     }
// }
// console.log(number);

// erro aparentemente está somando todos os resultados do i

for (let i = 2; i <= 50; i += 1){
    if (i%1===0&&i%i===0){
        number += 1;
    }
}
console.log(number);

//erro aparentemente está somando todos os resultados do i