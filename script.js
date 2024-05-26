var horas = document.getElementById('ihoras');
var linkAberto = document.getElementById('link-aberto');

var now = new Date();
var dias = now.getDay();
var hours = now.getHours();

if ((dias == 2) || (hours < 19 || hours > 23)) {
    horas.style.backgroundColor = 'red'; 
    linkAberto.innerText = 'Fechado para pedidos'
} else {
    horas.style.backgroundColor = 'green';
}


var horarios = document.getElementById('ihorarios')

function abrirHorario(){
    if(horarios.style.display = 'none'){
        horarios.style.display = 'block'
    }else{
        horarios.style.display = 'none'
    }
}
horas.addEventListener('click', abrirHorario)


var figuras = document.getElementById('figuras')

function icones(){
    figuras.innerText= 'home_pin'
}

figuras.addEventListener('mouseenter', icones)


var itens = document.getElementsByClassName('hamb-box')
let total = document.getElementById('total')
let num = []

for(let i = 0; i < itens.length; i++){
itens[i].addEventListener('click', function(){
    
    num.push(1)
    total.innerHTML = num.length

});
}


var menu = document.getElementById('imenu-hamb')
var icon = document.getElementById('icon-hamb')
var section = document.getElementById('section-menu')
var corpo = document.getElementById('corpo')

function abrirMenu(){
    if(section.style.display == 'block'){
        section.style.display = 'none'
        icon.innerText = 'menu'
    }else{
        section.style.display = 'block'
        icon.innerText = 'close'
    }

}
menu.addEventListener('click', abrirMenu)


function mudouTamanho(){
    if(window.innerWidth >= 768){
        section.style.display = 'grid'
    }else{
        section.style.display = 'none'
    }
}

