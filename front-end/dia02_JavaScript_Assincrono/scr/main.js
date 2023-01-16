import Swal from 'sweetalert2';
import './style.css';

const idAleatorio = Math.floor(Math.random() * (731 - 1) + 1);

 fetch(`https://superheroapi.com/api.php/5914326875293490/${idAleatorio}`)
   .then((response) => response.json()).then((dados) => console.log(dados));

const imgHero = document.getElementsByTagName('img');
imgHero.src = "https://www.superherodb.com/pictures2/portraits/10/100/653.jpg";