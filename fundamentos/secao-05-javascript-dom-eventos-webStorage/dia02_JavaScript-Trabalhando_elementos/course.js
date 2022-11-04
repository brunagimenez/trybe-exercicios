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


// Crie um irmão para elementoOndeVoceEsta.
const pai = document.getElementById('pai');
const irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);
// Crie um filho para elementoOndeVoceEsta.
const filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);
// Crie um filho para primeiroFilhoDoFilho.
const filhoPrimeiroFilhoDoFilho = document.createElement('section');
filhoPrimeiroFilhoDoFilho.id ='filhoPrimeiroFilhoDoFilho';
filhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);
// A partir desse filho criado, acesse terceiroFilho.
const terceiroFilhopeloFilho = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;


// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
const todosOsFilhos = elementoPai.childNodes;
for (let i = todosOsFilhos.length - 1; i >=0; i -=1){
    let filhoAtual = todosOsFilhos[i];
    if (filhoAtual.id !== 'elementoOndeVoceEsta'){
        filhoAtual.remove();
    }
}
const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();