const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');




// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

const addLiTech = (event) => {
    const addTech = document.querySelector('.tech');
    addTech.classList.remove('tech');
    event.target.classList.add('tech');
    input.value = '';
}

// const addLiTech = (event) => {
//     const addTech = event.target;
//     const addLiTech = document.getElementsByClassName('tech').length;
    
//     if (addTech.className.includes('tech')){
//         addTech.classList.remove('tech');
//     } else {
//         addTech.classList.add('tech');
//     }
     
// }

firstLi.addEventListener('click',addLiTech);
secondLi.addEventListener('click',addLiTech);
thirdLi.addEventListener('click',addLiTech);

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';


input.addEventListener('input',(renomear) => {
    const techElement = document.querySelector('.tech');
    techElement.innerText = renomear.target.value;
});

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?

  myWebpage.addEventListener('dblclick', () => {
    // window.location.replace('https://blog.betrybe.com/');
    window.open('https://brunagimenez.github.io/');
  });

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

  myWebpage.addEventListener('mouseover', (event) =>{
    if ( event.target.style.backgroundColor === 'black'){
        event.target.style.backgroundColor = 'unset'
    } else {
        event.target.style.backgroundColor = 'black'
    }
  } );


// Segue abaixo um exemplo do uso de event.target:


const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.