import { question } from "readline-sync";


export function obter_numero_positivo(label='Digite um numero: '){
    let numero = Number(question(label))

    while (isNaN(Number(numero)) || numero < 0 ){
        mostrar_texto('Valor inválido!')
        numero = Number(question(label))
    }

    return Number(numero)
}

export function mostrar_texto(label){
    console.log(label)
}
