let itens = document.getElementsByClassName('div-opcoes')
let total = document.getElementById('total')
let num = []

for(let i = 0; i < itens.length; i++){
itens[i].addEventListener('click', function(){
    
    num.push(1)
    total.innerHTML = num.length

});
}
