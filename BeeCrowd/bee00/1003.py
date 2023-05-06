def main():
    #Entrada
    numA = obter_inteiro()
    numB = obter_inteiro()

    #Processamento
    SOMA = numA + numB
    
    #Saída
    print('SOMA =', SOMA)

def obter_inteiro():
    return int(input())

main()
