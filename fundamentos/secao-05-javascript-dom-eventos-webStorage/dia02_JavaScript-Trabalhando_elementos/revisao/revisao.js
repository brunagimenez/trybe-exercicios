const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')
const pai = document.getElementById('elementoOndeVoceEsta').parentNode;
let frase = 'A persistência é o caminho do êxito.'

let inserirFrase = document.createElement('section');
inserirFrase.innerText=frase;
pai.appendChild(inserirFrase);

let nameList = '10 dicas de motivação pessoal';

let createNameList = document.createElement('ul');
createNameList.innerText=nameList;
elementoOndeVoceEsta.appendChild(createNameList);


let  list = [
    'Acredite em você Antes de tudo, acredite em si.',
    'Tenha sonhos. O que mantém uma pessoa motivada são seus sonhos.',
    'Não desista de lutar.Por mais que a batalha seja árdua, não fuja dos desafios.',
    'Aprenda com os erros.',
    'Pense positivo.',
    'Realize atividades que fazem você feliz.',
    'Estabeleça metas.'
];

const ulMotivacao = document.getElementsByTagName('ul')[0];

for(let i in list){
    let listIndex = list[i];
    let createList = document.createElement('li');
    createList.innerText=listIndex;
    ulMotivacao.appendChild(createList);
}


const primeiroFilhoDoFilho = elementoOndeVoceEsta.children[0];
const elementImg = document.createElement('img');
elementImg.src = 'https://static.vecteezy.com/ti/vetor-gratis/p1/5645418-traducao-frase-motivacional-portugues-se-voce-acredita-que-pode-vetor.jpg';
elementImg.style.width= '400px'
primeiroFilhoDoFilho.appendChild(elementImg);

