//5. Leia 3 (três) números e escreva-os em ordem crescente.

import { question } from 'readline-sync'

function main(){
    const num_a = Number(question('Número a: '))
    const num_b = Number(question('Número b: '))
    const num_c = Number(question('Número c: '))
    
    const numeros_ordenados = ordenar(num_a, num_b, num_c)

    console.log(numeros_ordenados)   
}
main()

function ordenar(num_a, num_b, num_c){
    if (o_menor_de_todos(num_a, num_b, num_c)){ 
        if (num_b < num_c){
            return ` ${num_a}, ${num_b}, ${num_c}`
        }else{
            return ` ${num_a}, ${num_c}, ${num_b}`
        }
    } else if (o_menor_de_todos(num_b, num_a, num_c)){ 
        if (num_a < num_c){
            return ` ${num_b}, ${num_a}, ${num_c}`
        }else{
            return ` ${num_b}, ${num_c}, ${num_a}`
        }
    } else{ 
        if (num_a < num_b){
            return ` ${num_c}, ${num_a}, ${num_b}`
        }else{
            return ` ${num_c}, ${num_b}, ${num_a}`
        }
    }
}

function o_menor_de_todos(num, num_1, num_2){
    
    return num <= num_1 && num <= num_2
}

