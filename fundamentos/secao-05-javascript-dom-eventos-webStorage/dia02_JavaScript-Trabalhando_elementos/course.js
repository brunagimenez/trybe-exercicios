// Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const elementoPai = elementoOndeVoceEsta.parentElement;
elementoPai.style.color ='red';
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const filhoDoFilho = elementoOndeVoceEsta.firstElementChild;
filhoDoFilho.innerText = 'Algum texto'
// Acesse o primeiroFilho a partir de pai.
const primeiroFilho = elementoPai.firstElementChild;
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const retornarAoPrimeiroFilho = elementoOndeVoceEsta.previousElementSibling;
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const atencao = elementoOndeVoceEsta.nextSibling;
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
// Agora acesse o terceiroFilho a partir de pai.
const terceiroFilhoPai = elementoPai.lastElementChild.previousElementSibling;

