function calcular(){

    let num = Number(prompt("Digite o número a ser analisado."))

    let res = document.querySelector("section.resultado")

    res.innerHTML = `<p> O numero a ser analisado sera o ${num}</p> 

                    Seu valor absoluto é ${Math.abs(num)}</p>

                    Sua parte inteira é ${Math.trunc(num)}</p>

                    O valor inteiro mais próximo é ${Math.round(num)}</p>

                    Sua raiz quadrada é ${Math.sqrt(num)}</p>
                    Sua raiz cúbica é ${Math.cbrt(num)}</p>

                    O valor de ${num}<sup>2</sup> é ${Math.pow(num, 2)}</p>
                    O valor de ${num}<sup>3</sup> é ${Math.pow(num, 3)}`

}