let contador = 0
let res = document.querySelector("section.resultado")
res.innerHTML = `O contador está com ${contador} cliques`

function clicou(){

        contador++;

        res.innerHTML = `O contador está com ${contador} cliques`

}
function zerar(){


        contador = 0;
        res.innerHTML = `O contador está com ${contador} cliques`

}