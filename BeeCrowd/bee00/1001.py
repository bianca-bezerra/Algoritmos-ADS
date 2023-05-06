def main():
    # Entrada
    numA = obter_inteiro()
    numB = obter_inteiro()
    
    # Processamento
    soma = numA + numB
    
    # Saída
    print('X =',soma)


def obter_inteiro():
    return int(input())

main()
