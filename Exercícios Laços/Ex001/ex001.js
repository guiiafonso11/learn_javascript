/*Faça um programa que peça uma nota, entre zero e dez. 
Mostre uma mensagem caso o valor seja inválido e continue 
pedindo até que o usuário informe um valor válido. */
    
let nota = Number(prompt('Digite uma nota'))
  
while(nota < 0 || nota > 10) {

  prompt('Valor inválido!')
  nota = Number(prompt('Digite uma nota'))

}


alert('Valor válido!')