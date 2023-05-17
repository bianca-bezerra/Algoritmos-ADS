def main():
    #Entrada
    N = int(input('Digite um número: '))

    lista = []

    for i in range(N):
        lista.append(i)

    #Processamento
    maior_de_todos = obter_maior(lista)

    #Saída
    print(f'> Maior número: {maior_de_todos}')


def obter_maior(lista):
    maior = - float('inf')

    for i in lista:
        if i > maior:
          maior = i
            
    return maior

main()