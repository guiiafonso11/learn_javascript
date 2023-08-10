/*Supondo que a população de um país A seja da ordem de 
80000 habitantes com uma taxa anual de crescimento de 3% e 
que a população de B seja 200000 habitantes com uma taxa de 
crescimento de 1.5%. Faça um programa que calcule e escreva o 
número de anos necessários para que a população do país A 
ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento. */

let popA = Number(prompt("Digite a população A:"))
let popB = Number(prompt("Digite a população B:"))

let crescPopA = prompt("Digite a taxa de crescimento da população A:")
let crescPopB = prompt("Digite a taxa de crescimento da população B:")

crescPopA = crescPopA / 100
crescPopB = crescPopB / 100

let anos = 0;


while (popA <= popB) {
    popA += popA * crescPopA;
    popB += popB * crescPopB;
    anos++;
}

let res = document.querySelector("section.resultado")
res.innerHTML = `<h1>Quantidade de anos que A precisaria para ultrapassar B: ${anos}<h1>`


console.log(anos)
