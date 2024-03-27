/*18. Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação
sobre os dois valores lidos.*/

import { question } from "readline-sync";


function main() {
  const valor1 = Number(question('Valor 1:'))
  const valor2 = Number(question('Valor 2:'))
  const opcao = Number(question('Opcão (1 a 4):'))
  
  if (opcao === 1){
    const soma = adicao(valor1, valor2)
    console.log(`A soma é ${soma}`)
  }
   else if (opcao === 2){
    const subtracao = subtracao(valor1, valor2)
    console.log(`A subtração é ${subtracao}`)
  }
   else if (opcao === 3){
    const multiplicacao = multiplicacao(valor1, valor2)
    console.log(`A multiplicação é ${multiplicacao}`)
  } 
  else if (opcao === 4){
    const divisao = divisao(valor1, valor2)
    console.log(`A divisão é ${divisao}`)
  } 
  else {
    console.log(`Opção inválida, tente novamente entre 1 e 4.`)
  }
}

main()

  function adicao(v1, v2){
    const soma = v1 + v2
    return soma
  }
  
  function subtracao(v1, v2){
    const diferenca = v1 - v2
    return diferenca
  }
  
  function multiplicacao(v1, v2){
    const produto = v1 * v2
    return produto
  }
  
  function divisao(v1, v2){
    const quociente = v1 / v2
    return quociente
  }

