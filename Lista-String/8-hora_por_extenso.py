'''
8. Leia uma string no formato hh:mm:ss e escreva o resultado na seguinte forma: “hh hora(s), mm
minuto(s) e ss segundo(s)”.
'''
from string_utils import partir

def main():
    #Entrada
    frase = partir(input('Digite um horário:'))

    #Processamento
    horas = frase[0]
    min = frase[1]
    seg = frase[2]
   
   #Saída
    print(f'{horas} hora(s), {min} minuto(s) e {seg} segundo(s)')
        
main()

