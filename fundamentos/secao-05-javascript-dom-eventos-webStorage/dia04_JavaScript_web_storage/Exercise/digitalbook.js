const backgroundId = document.getElementById('background');

const background = (event , color) =>{
    const button = event.target;
    body.style.backgroundColor = color;
};

background.addEventListener('click','background')
