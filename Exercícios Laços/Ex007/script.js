/*Faça um programa que leia 5 números e informe o maior número. */

let maiorNumero
let aux = 0
let numero
let res = document.querySelector("section.resultado")


res.innerHTML = `Numeros digitados:` 
for(let i = 1; i <= 5; i++){

    numero = Number(prompt("Digite um numero:"))

    res.innerHTML += ` ${numero}  `

    if(numero > aux){

        aux = numero
        maiorNumero = aux

    }

}

res.innerHTML += `<p>Maior numero: ${maiorNumero}<p>` 