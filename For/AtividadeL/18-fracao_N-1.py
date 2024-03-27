def main():
    #Entrada
    N = int(input('Digite um número: '))

    #Processamento
    numerador = 1
    denominador = N
    minuendo = 0

    for i in range(N-1):
        #Saída
        print(f'{numerador}/{denominador} +',end=' ')
    
        minuendo += 1
        numerador += 1
        denominador = N - minuendo
        
    print(f'{numerador}/{denominador}',end=' ')
        
main()