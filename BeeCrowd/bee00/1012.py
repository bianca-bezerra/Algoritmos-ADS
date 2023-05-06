def main():
    #Entrada
    A,B,C = list(map(float,input().split()))

    #Processamento
    pi = 3.14159
    area_triangulo = obter_area_triangulo(A,C)
    area_circulo = obter_area_circulo(pi,C)
    area_trapezio = obter_area_trapezio(A,B,C)
    area_quadrado = obter_area_quadrado(B)
    area_retangulo = obter_area_retangulo(A,B)

    #Saída
    print(f'TRIANGULO: {area_triangulo:.3f}')
    print(f'CIRCULO: {area_circulo:.3f}')
    print(f'TRAPEZIO: {area_trapezio:.3f}')
    print(f'QUADRADO: {area_quadrado:.3f}')
    print(f'RETANGULO: {area_retangulo:.3f}')

def obter_area_triangulo(base,altura):
    return (base * altura)/2

def obter_area_circulo(pi,raio):
    return pi * (raio **2)

def obter_area_trapezio(base,Base,altura):
    return ((base + Base) * altura)/2

def obter_area_quadrado(lado):
    return lado * lado

def obter_area_retangulo(lado,altura):
    return lado * altura
                         
main()