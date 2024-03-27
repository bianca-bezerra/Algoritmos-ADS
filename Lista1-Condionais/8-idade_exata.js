/*8. Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva
sua idade exata (em anos).*/

import { question } from "readline-sync";

function main() {
  console.log('>> Data atual <<')
  const dia = Number(question('Dia:'))
  const mes = Number(question('Mês:'))
  const ano = Number(question('Ano:'))

  console.log(`>> Data de nascimento <<`)
  const dia2 = Number(question('Dia:'))
  const mes2 = Number(question('Mês:'))
  const ano2 = Number(question('Ano:'))
  
 const idade = calcular_idade(ano, ano2)
  
  console.log(`Sua idade é ${idade}`)

  if (dia <= 0 || dia > 31 || dia2 <= 0 || dia2 > 31) {
    console.log('Data inválida.')
    return
  }
  if (mes <= 0 || mes > 12 || mes2 <= 0 || mes2 > 12) {
    console.log('Data inválida.')
    return
  }
  if (ano < 0 || ano2 <= 0) {
    console.log('Data inválida')
    return
  }
  }

main()

  function calcular_idade(ano, ano2){
    const a_idade = ano - ano2
    return a_idade
  }
    
 
