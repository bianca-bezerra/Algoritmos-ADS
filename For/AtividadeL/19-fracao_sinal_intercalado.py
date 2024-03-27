def main():
    #Entrada
    N = int(input('Digite um número: '))

    #Processamento
    subtraendo1 = 0
    subtraendo2 = 1
    numerador_positivo = 1
    denominador_positivo =  N - subtraendo1
    denominador_negativo = 2

    for i in range(N):
        numerador_negativo = N - subtraendo2

        print(f' + {numerador_positivo}/{denominador_positivo}')
        print(f' - {numerador_negativo}/{denominador_negativo}')

      #Numero positivo
        numerador_positivo += 2
        subtraendo1 += 2
        denominador_positivo = N - subtraendo1
        
        
        #Numero negativo
        subtraendo2 += 2
        denominador_negativo += 2
        
main()