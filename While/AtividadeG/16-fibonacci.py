def main():
    #Entrada
    N = int(input('Digite quantos números deseja mostrar na sequência: '))

    while N < 2:
        print('Número inválido, tente um maior igual a 2.')
        N = int(input('Digite quantos números são desejados na sequência: '))

    #Processamento e saída
    t1 = 0
    t2 = 1
    print(f'{t1} -> {t2} ->',end=' ')

    while N >= 0:
        t3 = t1 + t2
        print(t3, end=' -> ')
        t1 = t2
        t2 = t3
        N -= 1

    print('FIM')

main()