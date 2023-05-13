def main():
    #Entrada
    numero = int(input('Digite um número:'))
    contador = 1
    
    #Saída
    while contador <= numero:
      if contador % 2 == 0:
        print(contador)
        
      contador += 1

main()