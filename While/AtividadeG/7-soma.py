def main():
    #Entrada
    numero = int(input('Digite um número:'))
    soma = 0
 
    #Processamento
    while numero >= 1:
      soma += numero
      numero -= 1
    
    #Saída
    print(f'A soma dos números inteiros: {soma}')

main()
