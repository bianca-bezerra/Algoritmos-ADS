def main():
    #Entrada
    N = int(input('Digite a quantidade de fichas a serem lidas: '))

    #Processamento
    maior = -float('inf')
    menor = float('inf')
    id_maior = 0
    id_menor = 0

    for i in range(N):

        peso = float(input('Peso:'))

        if peso > maior:
            maior = peso
            id_maior = i
        if peso < menor:
            menor = peso
            id_menor = i

    #Saída
    print(f'Boi de menor peso => ID: {id_menor} - {menor} kg')
    print(f'Boi de maior peso => ID: {id_maior} - {maior} kg')
    
main()