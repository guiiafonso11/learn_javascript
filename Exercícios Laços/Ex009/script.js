/*Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50. */

alert("Bem vindo ao site")
let res = document.querySelector("section.resultado")

res.innerHTML += `<p>Números impares:</p>`

for(let i = 1; i<=50; i++ ){

    if(i % 2 != 0){

        res.innerHTML += ` ${i} - `

    }
    
}

