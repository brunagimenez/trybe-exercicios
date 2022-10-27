let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumber = 0;

for (let i = 0 ; i < numbers.length; i += 1){
    if (numbers[i] % 2 !== 0) {
        oddNumber+=1;
    }
}
if (oddNumber === 0){
    console.log("Nenhum valor ímpar encontrado");
} else {
    console.log(oddNumber);
}

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let oddNumber = [];

// for (let i = 0 ; i < numbers.length; i += 1){
//     if (numbers[i] % 2 !== 0) {
//         oddNumber.push(numbers[i]);
//     }
// }
// if (oddNumber === 0){
//     console.log("Nenhum valor ímpar encontrado");
// } else {
//     console.log(`Números ímpares: ${oddNumber};`);
// }
