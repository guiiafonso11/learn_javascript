/*Faça um programa que leia um nome de usuário e a sua senha 
e não aceite a senha igual ao nome do usuário, 
mostrando uma mensagem de erro e voltando a pedir as informações.*/

let nome = prompt('Digite seu nome de usuário: ')
let senha = prompt('Digite sua senha:')

while(nome == senha){

    alert('Erro!')
    nome = prompt('Digite seu nome de usuário: ')
    senha = prompt('Digite sua senha:')

}

alert('Dados validados! :D')