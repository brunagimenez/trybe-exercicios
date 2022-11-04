//7°Programa
//Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (
//de 0 a 100) em conceitos de A a F. Siga essas regras:
//Porcentagem >= 90 -> A | Porcentagem >= 80 -> B | Porcentagem >= 70 -> C
//Porcentagem >= 60 -> D | Porcentagem >= 50 -> E | Porcentagem < 50 -> F
//O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100

let nome = 'Bruna'
let nota = 50;

if (nota >= 90 && nota < 100){
    console.log(nome, ', você tirou nota: A');
} else if (nota >= 80 && nota < 100){
    console.log(nome, ', você tirou nota: B');
} else if (nota >= 70 && nota < 100){
    console.log(nome, ', você tirou nota: C');
} else if (nota >= 60 && nota < 100){
    console.log(nome, ', você tirou nota: D');
} else if (nota >= 50 && nota < 100){
    console.log(nome, ', você tirou nota: E');
} else if (nota < 50 && nota > 0){
    console.log(nome, ', você tirou nota: F');
} else {
    console.log('ERRO');
}

//ACIMA DÁ CERTO PORQUE COLOQUEI O PARÂMETRO '&& nota < 100' que não deixa ultrapassar esse valor, que por fim chega no ultimo else 
//que dá certo!


if (nota < 0 || nota > 100) {
    console.log('ERRO');
} else if (nota >= 90 && nota < 100){
    console.log(nome, ', você tirou nota: A');
} else if (nota >= 80){
    console.log(nome, ', você tirou nota: B');
} else if (nota >= 70){
    console.log(nome, ', você tirou nota: C');
} else if (nota >= 60){
    console.log(nome, ', você tirou nota: D');
} else if (nota >= 50){
    console.log(nome, ', você tirou nota: E');
} else if (nota < 50){
    console.log(nome, ', você tirou nota: F');
}

//Primeiro preciso colocar o erro pois os outro não tem o parâmetro  '&& nota < 100'. Se colocasse por ultimo não conseguiria chegar
//no ultimo comando.