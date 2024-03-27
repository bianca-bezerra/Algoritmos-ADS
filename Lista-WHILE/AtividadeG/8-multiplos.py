import math
def main():
    #Entrada
    numero = float(input('Digite um número:'))
    limiteSuperior = float(input('Digite seu limite superior:'))
    limiteInferior = float(input('Digite seu limite inferior:'))

    #Processamento
    primeiro_multiplo = numero * math.ceil(limiteInferior/numero)
    multiplo = primeiro_multiplo
    
    #Saída
    while multiplo <= limiteSuperior:
     print(multiplo)
    
     multiplo += numero

main()




    




   
   
    
    