//33. Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
import prompt from 'prompt-sync'


function main(){

//Entrada
const input = prompt()
const nibble = (input('Digite um numero inteiro de 3 digitos:'))
const n1 = (nibble[0])
const n2 = (nibble[1])
const n3 = (nibble[2])

//Processamento
const numero1 = (formar_inverso_numero1(n1,n2,n3))
const inverso = (formar_inverso_numero1(n3,n2,n1))
const soma = somar_numero_e_inverso(numero1,inverso)

//Saída
console.log('A soma do número com seu inverso é',soma)


//Funções usadas
function formar_numero1(n1,n2,n3){
    const numero = Number(n3+n2+n1)
    return numero 
}
function formar_inverso_numero1(n1,n2,n3){
    const inverso1 =Number(n1+n2+n3)
    return inverso1
}
function somar_numero_e_inverso(numero1,inverso){
    const somar = (numero1 + inverso)
    return somar 
}
}
main()