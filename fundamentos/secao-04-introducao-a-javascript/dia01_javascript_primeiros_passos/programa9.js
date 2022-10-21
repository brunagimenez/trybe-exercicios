const num1 = 5;
const num2 = 4;
const num3 = 8;

let itsOdd = false;

if (num1%2 != 0||num2%2 != 0||num3%2 != 0){
    itsOdd = true;
}

console.log(itsOdd);

// != -> Verifica apenas se seus dois operandos não são iguais
//console.log(1 !== 1);  --- É falso pois são iguais
// expected output: false
//
//console.log('1' !==  1);  --- É falso pois são iguais mesmo com os tipos primitivos diferentes
// expected output: false
//

// !== ->  Verifica se seus dois operandos não são iguais por inteiro
//console.log(1 !== 1);  --- É falso pois são iguais, e com os mesmos tipos primitivos
// expected output: false
//
//console.log('1' !==  1); --- É verdadeiro pois são iguais, mas não tem os mesmos tipos primitivos
// expected output: true
//