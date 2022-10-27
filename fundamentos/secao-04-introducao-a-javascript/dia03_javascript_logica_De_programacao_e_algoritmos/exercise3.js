let array = ['java', 'javascript', 'python', 'html', 'css'];

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let higherNumber = '';

for(let i = 0; i < array.length;i+=1){
        if (array[i].length > higherNumber.length) {
        higherNumber = array[i];
        }
}
console.log(higherNumber);

let smallestNumber = array[0];

for(let i = 0; i < array.length;i+=1){
        if (array[i].length < smallestNumber.length) {
        smallestNumber = array[i];
        }
}
console.log(smallestNumber);
