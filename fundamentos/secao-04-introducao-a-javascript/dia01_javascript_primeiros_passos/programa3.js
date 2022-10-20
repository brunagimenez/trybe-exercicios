//3°Programa
//Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo
//do programa, três constantes com os valores que serão comparados.

let num1 = 6;
let num2 = 4;
let num3 = 2;

if ( num1 > num2 && num1 > num3){
    console.log(num1,' é o maior número!')
} else if ( num2 > num3 && num2 > num1){
    console.log(num2,' é o maior número!')
} else {
    console.log(num3,' é o maior número!')
}