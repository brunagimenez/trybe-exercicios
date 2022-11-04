const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?  
//Ela está com uma classe tech e as outras não

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?


const addClass = (event) => {
const techClass = document.querySelector('.tech');
techClass.classList.remove('tech');
event.target.classList.add('tech');
input.value='';
}

firstLi.addEventListener('click',addClass);
secondLi.addEventListener('click',addClass);
thirdLi.addEventListener('click',addClass);

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener

const textBox = (event) => {
  const techClass = document.querySelector('.tech');
  techClass.innerText = event.target.value
};

input.addEventListener('input',textBox);



// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?

myWebpage.addEventListener('dblclick', () => {
  window.open('https://github.com/brunagimenez');
});

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener('mouseover', (event) => {
  event.target.style.backgroundColor = 'pink';
});

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