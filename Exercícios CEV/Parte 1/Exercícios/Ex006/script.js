function somar(){

    let n1 = prompt("Digite o primeiro número:")
    let n2 = prompt("Digite o segundo número:")
    
    n1 = Number(n1)
    n2 = Number(n2)

    let soma = n1 + n2

    let res = document.querySelector("section#resultado")
    res.innerHTML = `<p>Resultado: <mark>${n1}</mark> + <mark>${n2}</mark> = <b><mark>${soma}</mark></b>`

}