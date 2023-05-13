def main():
   #Entrada
   limite_superior = float(input('Limite superior:'))
   limite_inferior = float(input('Limite inferior:'))
   
   #Saída
   while limite_inferior <= limite_superior:
     if limite_inferior % 2 != 0:
        print(limite_inferior)
    
     limite_inferior += 1

main()