//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let fruit = 'banana';
let newString = '';

for(let i = fruit.legth - 1; i>=0;i--){
    newString += fruit[i];
}

console.log(newString);