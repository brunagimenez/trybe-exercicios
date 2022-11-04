let salarioBruto = 10000;
let descontoINSS;
let descontoIR;

//INSS
if (salarioBruto<=1556.94){
    descontoINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92){
    descontoINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82){
    descontoINSS = salarioBruto * 0.11;
} else {
    descontoINSS = 570.88;
}

let salarioSINSS = salarioBruto - descontoINSS;

//IR
if (salarioSINSS <= 1903.98){
    descontoIR = 0;
} else if  (salarioSINSS <= 2826.65){
    descontoIR = (salarioSINSS * 0.075) - 142,80;
}  else if  (salarioSINSS <= 3751.05){
    descontoIR = (salarioSINSS * 0.15) - 354.80;
} else if  (salarioSINSS <= 4664.68){
    descontoIR = (salarioSINSS * 0.225) - 636.13;
} else { 
    descontoIR = (salarioSINSS * 0.275) - 869.36;
}

console.log("Salário liquido:",(salarioSINSS - descontoIR));