/*Faça um programa que receba dois números inteiros e gere os 
números inteiros que estão no intervalo compreendido por eles. */

alert("Bem vindo ao site")

let num1 = Number(prompt("Digite um numero inteiro:"))
let num2 = Number(prompt("Digite outro numero inteiro"))

let x = num1
let y = num2

let res = document.querySelector("section.resultado")


res.innerHTML += `<p>Números no intervalo:</p>`

if(num1 > num2 ){

    while(x > num2 + 1){

        x--
        res.innerHTML += ` ${x} -`

        console.log(y + " ")

    }


}
else if(num2 > num1 ){

    while(y > num1 + 1){

        y--
        res.innerHTML += ` ${y} -`

        console.log(x + " ")

    }
}







