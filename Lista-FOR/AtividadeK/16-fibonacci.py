def main():
    #Entrada
    N = int(input('Digite um número: '))

    #Processamento
    t1 = 0
    t2 = 1
    print('Sequência de Fibonacci ', end='=> ')
    print(t1,end= ' ')
    print(t2, end= ' ')

    for i in range(N):
        i = t1 + t2
        t1 = t2
        t2 = i
        print(i,end= ' ')
        
main()