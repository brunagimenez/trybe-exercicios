// Implemente a função fizzBuzz que recebe um array de números e retorna um array de string de acordo com o resultado

// A função fizzBuzz recebe um array de números e para cada número do array é realizada a divisão por 3 e por 5 e de acordo com o resultado, a função deve retornar um array de strings:

// Retorne a string 'fizz' para cada número do array que seja divisível apenas por 3;
// Retorne a string 'buzz' para cada número do array que seja divisível apenas por 5;
// Retorne a string 'fizzBuzz' para cada número do array que seja divisível por 3 e 5;
// Retorne a string 'bug!' para cada número do array que não seja dividido por 3 nem por 5.
// Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz'].

//div 3
//div 5
//return 'fizz' => if number%3 === 0 && number%5 !== 0(cada número add um fizz)
//return 'buzz' => if number%5 === 0 && number%3 !== 0(cada número add um buzz)
// return 'fizzBuzz' => if number%3 === 0 && number%5 === 0
// return 'bug!' => number%3 !== 0 && number%5 !== 0
function fizzBuzz(number) {
    let newArray =[];
    for (let i = 0; i <= number.length; i+=1){
        if (number[i]%3 === 0 && number[i]%5 !== 0){
            newArray.push('fizz');
        } else if (number[i]%5 === 0 && number[i]%3 !== 0){
            newArray.push('buzz');
        } else if (number[i]%5 === 0 && number[i]%5 === 0){
            newArray.push('fizzBuzz');
        } else if (number[i]%3 !== 0 && number[i]%5 !== 0){
            newArray.push('bug!');
        }
    }
    return newArray;
}

let num = [2, 15, 7, 9, 45];
console.log(fizzBuzz(num));
