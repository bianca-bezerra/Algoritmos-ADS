def main():
    #Entrada
    N = int(input('Digite o número:'))
    numerador = 1

    #Processamento
    for i in range(0,N,1):
        i += 1
        denominador = i
        print(f'{numerador}/{denominador}', end=' + ')
    
    print('FIM')

main()