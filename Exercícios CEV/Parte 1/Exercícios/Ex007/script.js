function calcularMedia(){

    let nome = prompt("Digite o nome do aluno!")

    let n1 = prompt(`Qual foi a primeira nota de ${nome}?`)
    n1 = Number(n1)

    let n2 = prompt(`Ok, e qual foi a segunda nota de ${nome}?`)
    n2 = Number(n2)

    var media = (n1 + n2) / 2

    let res = document.querySelector("section.resultado")
    res.innerHTML = `<p> Calculando a nota final de <b>${nome}...</b> <br>
                    As notas obtidas foram: <mark>${n1}</mark> e <mark>${n2}</mark> <br>
                    A média final será <mark><b>${media}</b></mark>`


}