//15. Leia o valor da base e altura de um triângulo, calcule e escreva sua área.
import prompt from 'prompt-sync'

function main(){
//Entrada
const input = prompt()
const base = Number(input('Base(m):'))
const altura = Number(input('Altura do triângulo(m):'))

//Processamento
const area = calcular_area(base,altura)

//Saída
console.log('A área mede', area ,'metros quadrados')

//Função usada
function calcular_area(base,altura){
    const area_triangulo = (base*altura)/2
    return area_triangulo
}
}
main()