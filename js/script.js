
//FUNÇOES PARA SLIDES
fAtual=1
fMax=3
fTempo=3000

function trocaFoto(){
   document.getElementById("foto1").style.visibility ="hidden"
   document.getElementById("foto2").style.visibility ="hidden"
   document.getElementById("foto3").style.visibility ="hidden"
   document.getElementById("foto"+fAtual).style.visibility ="visible"
   fAtual++
   if (fAtual>fMax){
       fAtual = 1 
   }
}
function slide(){
    document.getElementById("foto1").style.visibility ="hidden"
    document.getElementById("foto2").style.visibility ="hidden"
    document.getElementById("foto3").style.visibility ="visible"
    slideTempo = setInterval(trocaFoto, fTempo)
}

// MENU
const navegacao = document.getElementById('menu')
const menu = document.getElementById('btn')

// QUANDO O USUÁRIO CLICAR NO MENU, VAI APARECER OS ITENS DO MENU
menu.addEventListener('click',() =>{
 
        navegacao.style.height = '24vh'
        navegacao.style.transform = 'rotate(360deg)'
        navegacao.style.transition = '.6s ease-in-out'
        navegacao.style.marginTop ='-105vh' 
})

// QUANDO O USUÁRIO CLICAR EM QUALQUER ITEM DO MENU, VAI DESAPARECER OS ITENS DO MENU
navegacao.addEventListener('click',() =>{
    navegacao.style.height = '0'
    navegacao.style.transform = 'rotate(-360deg)'
    navegacao.style.transition = '.6s ease-in-out'
})





