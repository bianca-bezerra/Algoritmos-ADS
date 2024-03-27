def main():
    #Entrada
    N = int(input('Digite um número:'))
    numero = 0

    #Processamento
    while numero**2 <= N:
        numero += 1
    
    numero = numero - 1
    quadrado = numero ** 2

    #Saída
    print(f'O maior quadrado menor é {quadrado}')

main()