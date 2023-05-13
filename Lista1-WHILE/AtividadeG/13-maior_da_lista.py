
def main():
    #Entrada
    N = int(input('Digite a quantidade de números desejados:'))
    lista = []

    #Processamento
    while len(lista) < N:
        numero = float(input('Digite um número:'))
        lista.append(numero)

    maior = -float('inf')
    
    while N > 0:
        if lista[N-1] > maior:
            maior = lista[N-1]
        N -= 1
        
    #Saída
    print(f'Maior da lista => {maior}')

main()