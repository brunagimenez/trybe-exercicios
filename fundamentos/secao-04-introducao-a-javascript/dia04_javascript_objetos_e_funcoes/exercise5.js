// function polimdromo1 (nome){
//     for (let i in nome) {
//         if (nome[i]!== nome[(nome.length - 1) - i]) {
//             return false;
//         }
//   }
//     return true;
// }
// console.log(polimdromo1('desenvolvimento'))


function polimdromo (nome){
    for (let i = 0; i < nome; i = i + 1) {
    //     if (nome[i]!== nome[(nome.length - 1) - i]){
    //         return false;
    //     }
    //  }
    //  return true;
    return nome[i], nome[(nome.length - 1) - i]
}
console.log(polimdromo('desenvolvimento'))

// function polimdromo3 (nome){
//     for (let i = 0; i < nome.length; i = i + 1) {
//         for (let index = nome.length -1 ;index <= 0 ; index =index -1 ){
//             if (nome[i]!== nome[index]){
//                 return false;
//             }
//         }
//     }
//     return true;
// }
// console.log(polimdromo3('desenvolvimento'))