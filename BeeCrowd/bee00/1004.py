def main():
    numA = obter_inteiro()
    numB = obter_inteiro()

    PROD = numA * numB
    
    print('PROD =', PROD)

def obter_inteiro():
    return int(input())

main()