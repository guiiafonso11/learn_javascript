/*Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd';
Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length */

let nome = prompt("Digite seu nome:")
let idade = Number(prompt("Digite sua idade:"))
let salario = parseFloat(prompt('Digite seu salário:'))
let sexo = prompt("Digite seu sexo: 'f' ou 'm' ")
let estadoCivil = prompt(" 's', 'c', 'v' ou 'd' ")

while(nome.length < 3){

    alert("Nome incorreto.")
    nome = prompt("Digite seu nome:")

}

alert("Nome Correto.")

while(idade < 0 || idade > 150){

    alert("Idade incorreta.")
    idade = Number(prompt("Digite sua idade:"))

}

alert("Idade Correta.")

while(salario < 0){

    alert("Salario incorreto")
    salario = parseFloat(prompt('Digite seu salário:'))

}

alert("Salário Correto.")

while(sexo !== 'f' && sexo !== 'm'){

    alert("Sexo incorreto")
    sexo = prompt("Digite seu sexo: 'f' ou 'm' ")

}

alert("Sexo correto.")

while(estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd'){

    alert("Estado civil incorreto.")
    estadoCivil = prompt(" 's', 'c', 'v' ou 'd' ")

}

alert("Estado Civil Correto.")

let res = document.querySelector("section.resultado")
res.innerHTML = `<p>Nome: ${nome}</p>
                 <p>Idade: ${idade}</p>
                 <p>Sexo: ${sexo}</p>
                 <p>Salário: ${salario}</p>
                 <p>Estado Civil: ${estadoCivil}</p>`