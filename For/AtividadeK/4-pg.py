def main():
    #Entrada
    A0 = int(input('Digite o primeiro número da sequência:'))
    limite = int(input('Digite o limite da sequencia:'))
    razao = int(input('Digite uma razão:'))
  
    #Processamento
    for i in range(limite):
        if A0 > limite:
          break
        
        #Saída
        print(A0)

        A0 *= razao

main()