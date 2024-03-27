def main():
    #Entrada
    N = int(input('Digite um número:'))
    soma = 0

    #Processamento
    for i in range(1,N+1):
        soma += i

    #Saída
    print(f'Soma de 1 a {N}: {soma}')

main()