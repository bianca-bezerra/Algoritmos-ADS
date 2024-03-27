def main():
    #Entrada
    N = int(input('Digite um número: '))
    limite_inferior = int(input('Limite inferior: '))
    limite_superior = int(input('Limite superior: '))

    multiplos = []

    #Processamento
    for i in range(limite_inferior,limite_superior + 1):
        if i % N == 0:

            multiplos.append(i)
    
    #Saída
    print(f'Múltiplos => {multiplos}')
    
    
        

        

main()