def main():
    #Entrada
    limite_superior = float(input('Limite superior:'))
    limite_inferior = float(input('Limite inferior:'))
    

    #Processamento
    while limite_inferior <= limite_superior:
        contador_de_divisoes = 0
        divisor = 1
        resto = 0
        numero = limite_inferior

        while divisor <= numero:
            if numero % divisor == 0:
                contador_de_divisoes += 1
            divisor += 1
        
        #Saída
        if contador_de_divisoes <= 2 and numero != 0 and numero != 1:
            print(numero)
        limite_inferior += 1
     
main()