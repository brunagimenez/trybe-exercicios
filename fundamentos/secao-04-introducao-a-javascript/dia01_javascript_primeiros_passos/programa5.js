//5°Programa
//Utilize if/else para fazer um programa que defina três constantes com os valores dos três
//ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um
//triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma
//mensagem de erro.

const anguloIntA = 110;
const anguloIntB = 40;
const anguloIntC = 30;

let soma = anguloIntA + anguloIntB + anguloIntC;
let invalido = anguloIntA > 0 && anguloIntB > 0 && anguloIntC > 0;

if (invalido){
    if (soma === 180){
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('erro');
}