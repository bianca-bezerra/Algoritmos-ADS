def main():
    #Entrada
    N = int(input('Digite quantas numeros da sequencia são desejados:'))
    
    numero = 0
    sequencia = []
    numero_a_somar = 1

    #Processamento
    while N >= 0:
       while numero_a_somar <= N:
        numero = numero + numero_a_somar
        numero_a_somar += 1
        
        sequencia.append(numero)
       N -= 1
    
    #Saída
    print(sequencia)
        
main()