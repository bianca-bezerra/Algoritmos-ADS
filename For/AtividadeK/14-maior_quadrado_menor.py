def main():
    #Entrada
    N = int(input('Digite um número: '))
    quadrado = float('inf')

    #Processamento
    for i in range(0,N):
        numero_ao_quadrado = i ** 2
        if numero_ao_quadrado > N:
            numero_ao_quadrado = (i - 1) ** 2
            break

    #Saída
    print(f'Quadrado mais próximo => {numero_ao_quadrado}')

main()