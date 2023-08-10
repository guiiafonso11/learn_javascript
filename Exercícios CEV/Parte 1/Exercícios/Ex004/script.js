function clicou(){

    let nome = prompt("Digite seu nome!")

    var frase = document.getElementById('frase')
    frase.innerHTML = `<p> Bem vindo <strong> ${nome} </strong>, é um prazer em conhecê-lo! :D </p>`

}