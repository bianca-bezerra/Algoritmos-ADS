import math
def main():
    #Entrada
    x1,y1 = list(map(float,input().split()))
    x2,y2 = list(map(float,input().split()))

    #Processamento
    distancia_entre_pontos = obter_distancia_entre_pontos(x1,y1,x2,y2)

    #Saída
    print(f'{distancia_entre_pontos:.4f}')

def obter_distancia_entre_pontos(x1,y1,x2,y2):
    operacao = math.pow((x2 - x1),2) + math.pow((y2 - y1),2)
    return math.sqrt(operacao)

main()