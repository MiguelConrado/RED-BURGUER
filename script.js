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


// ----------------------------

 //HORARIOS DIV
 var corpo = document.getElementById('corpo')
 var horarios = document.getElementById('ibg-horarios')
 function abrirHorario(){
     if(horarios.style.display === 'block' && corpo.style.overflowY === 'hidden'){
        horarios.style.display = 'none'
        corpo.style.overflowY = 'visible'
     }else{
        horarios.style.display = 'block'
        corpo.style.overflowY = 'hidden'
     }
 }
horas.addEventListener('click', abrirHorario)

// fechar pelo BG
function fecharHorario(){
        horarios.style.display = 'none'
        corpo.style.overflowY = 'visible'
     
     
}
horarios.addEventListener('click', fecharHorario)

// ICON DE FECHAR
var fechar = document.getElementById('close-hora')
function iconFechar(){
    if(horarios.style.display === 'block'){
        horarios.style.display = 'none'
    }
}
fechar.addEventListener('click', iconFechar)



// --------------------------------



// FIGURINHAS
var figuras = document.getElementById('figuras')
function icones(){
    figuras.innerText= 'home_pin'
}
figuras.addEventListener('mouseenter', icones)


// compras
var itens = document.getElementsByClassName('hamb-box')
let total = document.getElementById('total')
let num = []

for(let i = 0; i < itens.length; i++){
itens[i].addEventListener('click', function(){
    
    num.push(1)
    total.innerHTML = num.length

});
}

//MENU CELULAR
var menu = document.getElementById('imenu-hamb')
var icon = document.getElementById('icon-hamb')
var section = document.getElementById('section-menu')

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

