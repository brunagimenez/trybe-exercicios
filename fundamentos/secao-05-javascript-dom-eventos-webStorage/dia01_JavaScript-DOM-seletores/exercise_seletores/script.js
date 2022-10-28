const admTempo = document.getElementById('header-container');
admTempo.style.backgroundColor = '#00b069';

const colorRose = document.getElementsByClassName('emergency-tasks')[0];
colorRose.style.backgroundColor = '#ff9f84';

const urgente = document.querySelectorAll('.emergency-tasks h3');
for (let i of urgente){
    urgente[i].style.backgroundColor = '#a500f3';
}
const colorYellow = document.querySelector('.no-emergency-tasks');
colorYellow.style.backgroundColor = '#f9db5e';

const naoUrgente = document.querySelectorAll('.no-emergency-tasks h3')
for (let i of naoUrgente){
    naoUrgente.style.backgroundColor = '#232525';
}