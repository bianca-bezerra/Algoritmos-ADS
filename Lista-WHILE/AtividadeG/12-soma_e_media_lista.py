def main():
    #Entrada
    N = int(input('Digite a quantidade de números desejados:'))
    lista = []

    #Processamento
    while len(lista) < N:
        numero = float(input('Digite um número:'))
        lista.append(numero)
    
    soma = 0
    N_inicial = N
    while N > 0:
        soma += lista[N-1]
        N -= 1
    
    #Saída
    print(f'SOMA => {soma}')
    print(f'MEDIA => {soma/N_inicial}')

main()