let array = ['java', 'javascript', 'python', 'html', 'css'];

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let higherNumber = array[0];

for(let i = 0; i <=array.length;i++){
    for (let i2 = 0;i2 <=array.length;i2++ ){
        if (array[i]> array[i2]){
        higherNumber = array[i];
        }
    }
}
console.log(higherNumber);