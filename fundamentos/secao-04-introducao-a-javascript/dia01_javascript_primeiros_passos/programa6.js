let chessPiece = 'bispo';

switch (chessPiece.toLowerCase()){
    case 'Torre';
        console.log('Torre - move horizontal e vertical.')
        break;
    case 'Cavalo';
        console.log('Cavalo - move em L')
        break;
    case 'Bispo';
        console.log('Bispo - Move em Diagonal')
        break;
    case 'Rei';
        console.log('Rei- Move em diagonal, horizontal e vertical.')
        break;
    case 'Rainha';
        console.log('Rainha - Move em diagonal, horizontal e vertical.')
        break;
    case 'Peão';
        console.log('Peão - Movem somente para frente')
        break;
    default:
        console.log('Erro, peça inválida!');
        break;
};