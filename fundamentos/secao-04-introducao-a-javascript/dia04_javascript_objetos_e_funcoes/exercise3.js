let info = {
     personagem: 'Margarida',
     origem: 'Pato Donald',
     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
   };

console.log('Bem-vinda, '+ info.personagem)

 info['recorrente'] = "Sim";
console.log(info)

for (let key in info){
    console.log(key)
}

for (let key in info){
    console.log(info[key])
}

//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

let newInfo = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota:"O último MacPatinhas",
    recorrente:"Sim"
}

for (let key in info){
    if ( key === 'recorrente' && info[key] === "Sim" && newInfo[key] === "Sim") {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[key] + ' e ' + newInfo[key]);
    }
}