def main():
    #Entrada
    N = int(input('Digite um número:'))
    count = 1
    num = 0

    #Processamento
    for i in range(1,N):
        num = num + count
        count += 1

        #Saída
        print(num, end=' ')

main()
