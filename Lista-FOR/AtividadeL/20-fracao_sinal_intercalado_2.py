def main():
    #Entrada
    N = int(input('Digite o número: '))

    #Processamento
    numerador = 1
    denominador_positivo = 1
    denominador_negativo = 2

    for i in range(N):
        #Saída
        print(f' + {numerador}/{denominador_positivo}')

        if denominador_negativo > N:
            break
        print(f' - {numerador}/{denominador_negativo}')

        denominador_positivo += 2
        denominador_negativo += 2
        
main()