alert('Bem vindo ao meu site! :D')

function calcular(){

    var num = prompt('Digite o número!')
    var dobro = num * 2;
    var metade = num / 2;

    let resultado = document.querySelector("section.resultado")

    resultado.innerHTML = `<p> O dobro de <b>${num}</b> é <b>${dobro}</b> e a metade é <b>${metade}</b>`
}