var itens = document.getElementsByClassName('hamb-info')


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

