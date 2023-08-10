/*Altere o programa anterior para mostrar no final a soma dos números. */

alert("Bem vindo ao site")

let num1 = Number(prompt("Digite um numero inteiro:"))
let num2 = Number(prompt("Digite outro numero inteiro"))

let x = num1
let y = num2
let aux = 0


let res = document.querySelector("section.resultado")


res.innerHTML += `<p>Números no intervalo:</p>`

if(num1 > num2 ){

    while(x >= num2){
        aux+=x

        res.innerHTML += ` ${x} -`

        x--
        

        console.log(y + " ")

    }
    res.innerHTML += `<p>Soma dos números:</p>`
    res.innerHTML += `<p>${aux}</p>`
}

else if(num2 > num1 ){

    while(y >= num1){
        aux+=y

        res.innerHTML += ` ${y} -`
        y--

        console.log(x + " ")

    }
    res.innerHTML += `<p>Soma dos números:</p>`
    res.innerHTML += `<p>${aux}</p>`

}







