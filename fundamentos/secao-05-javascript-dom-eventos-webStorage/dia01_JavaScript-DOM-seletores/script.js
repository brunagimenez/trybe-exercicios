        /*
      Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
      - document.getElementById()
      - document.getElementsByClassName()
      - document.getElementsByTagName()
      1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
      2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,10)).
      3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
      4. Crie e execute uma função que corrija o texto da tag <h1>.
      5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
      6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
      */

 const years = () => {
  let twoYears = document.getElementsByTagName('p');
  twoYears[1].innerText = "Daqui dois anos me vejo exercendo a profissão de dev em uma empresa com os mesmos princípios que os meus, como: Inovação; Diversidade; Criatividade; Ética e Transparência.";
};
years();

  
const color = () => {
    let colorGreenTrybe = document.getElementsByClassName('main-content');
    colorGreenTrybe[0].style.backgroundColor = "rgb(76,164,109)"
};
  color();

const colorWhite = () => {
  let colorWhiteTrybe = document.getElementsByClassName ("center-content");
  colorWhiteTrybe[0].style.backgroundColor = "white";
};

colorWhite ();

const tagH1 = () => {
  let tag = document.getElementsByTagName('h1');
  tag[0].innerText = 'Exercício - JavaScript';
};
tagH1();

const alterText = () => {
  const paragrafoP= document.getElementsByTagName('p')[0];
  paragrafoP.style.textTransform = 'uppercase'
  // paragrafoP.innerText = paragrafoP.innerText.toUpperCase();
}
alterText();

const executeConsole = () => {
  const todosP = document.getElementsByTagName ('p');
  for ( let i in todosP){
    const elemen = todosP[i];
    console.log(elemen)
  }
}