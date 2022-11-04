let admTempo = document.getElementById('header-container');
admTempo.style.backgroundColor = '#27b668';

let footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#0a3633';

let rose = document.getElementsByClassName('emergency-tasks');
rose[0].style.backgroundColor ='#f49d85';

let pink = document.querySelectorAll('.emergency-tasks h3');
    for (let i in pink){
        pink[i].style.backgroundColor='#aa00f3';
    }

let preto = document.querySelectorAll('.no-emergency-tasks h3');
    for (let i in preto){
        preto[i].style.backgroundColor='#232525';
    }

let yellow = document.querySelector('.no-emergency-tasks');
yellow.style.backgroundColor ='#f2e16no';


