//6°Programa
//Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e
//retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com
//letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

let chessPiece = 'rEi';

switch(chessPiece.toLowerCase()){
    case 'torre':
        console.log('Torre - move horizontal e vertical.')
        break;
    case 'cavalo':
        console.log('Cavalo - move em L.')
        break;
    case 'bispo':
        console.log('Bispo - Move em Diagonal.')
        break;
    case 'rei':
        console.log('Rei- Move em diagonal, horizontal e vertical.')
        break;
    case 'rainha':
        console.log('Rainha - Move em diagonal, horizontal e vertical.')
        break;
    case 'peão':
        console.log('Peão - Movem somente para frente.')
        break;
    default:
        console.log('Erro, peça inválida!');
        break;
};