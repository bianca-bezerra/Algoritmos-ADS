def main():
    #Entrada
    num1,num2 = list(map(int,input('Digite o limite inferior e o limite superior: ').split()))

    #Processamento
    for i in range(num1,num2):
        #Saída
        if eh_primo(i):
            print(i)

def eh_primo(num):
    if num < 2:
        return False
    elif num == 2:
        return True
    elif num > 2 and num % 2 == 0:
        return False
    else:
        for i in range(3,num):
            if num % i == 0:
                return False
        return True

main()