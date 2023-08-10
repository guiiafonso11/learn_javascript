/*Faça um programa que leia 5 números e informe a soma e a média dos números. */

alert("Bem vindo ao site")
let res = document.querySelector("section.resultado")
res.innerHTML += `<p>Números digitados:</p>`
let soma = 0
for(let i = 1; i<=5; i++ ){

    let numero = Number(prompt("Digite um numero:"))
    soma+=numero
    res.innerHTML += `${numero}, `
}

let media = soma / 5


res.innerHTML += `<p> Soma dos Números: ${soma}</p>`
res.innerHTML += `<p> Media dos Números: ${media}</p>`