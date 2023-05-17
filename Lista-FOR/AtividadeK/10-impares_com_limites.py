def main():
    #Entrada
    limite_inferior = int(input('Limite inferior: '))
    limite_superior = int(input('Limite superior: '))

    #Processamento
    for i in range(limite_inferior,limite_superior + 1):
        if i % 2 != 0 and i != 0:

            #Saída
            print(i)
        
main()