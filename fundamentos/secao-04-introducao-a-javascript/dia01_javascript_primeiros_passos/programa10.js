//10°Programa
//Utilize if/else para escrever um programa que se inicie com dois valores em duas
//constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores,
//calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá
//ao vender mil desses produtos.
//Atente que, sobre o custo do produto, incide um imposto de 20%.
//Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos
//seus valores de entrada seja menor que zero.
//O lucro de um produto é o resultado da subtração do valor de venda pelo custo
//do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

const cost = 1;
const sale = 3;
let sold = 1000;
let taxes = 0.2;

if (cost >= 0 && sale >=0 ){
    const profit = cost * 1.2;
    const profitOtax= (sale - profit)* sold;
    console.log('Seu lucro final s/ imposto é de: R$',profitOtax)
} else {
    console.log('ERRO não pode ser negativo!')
}
