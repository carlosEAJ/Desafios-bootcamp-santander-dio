
function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    botao.classList.toggle(dark);
    titulo.classList.toggle(dark);
    rodape.classList.toggle(dark);
    corpo.classList.toggle(dark);
}


function changeText(){
   const lightMode = "Light Mode";
   const darkMode = "Dark Mode";
   
    if(botao.classList.contains(dark)){
        botao.innerHTML = lightMode;
        titulo.innerHTML = darkMode + " ON";
    return;
    }
    
    botao.innerHTML = darkMode;
    titulo.innerHTML = lightMode + " ON";
}

const titulo = document.getElementById('page-title');
const botao = document.getElementById('mode-selector');
const rodape = document.getElementsByTagName('footer')[0];
const corpo = document.getElementsByTagName('body')[0];
const dark = 'dark-mode';

botao.addEventListener('click', changeMode)