def main():
    #Entrada
    N = int(input('Digite um número: '))
    lista = []

    for i in range(N):
        lista.append(i)

    print(lista)
    soma = 0
    
    #Processamento
    for i in lista:
        soma += i

    media = soma/N

    print(f'> Soma = {soma}')
    print(f'> Média = {media}')

main()