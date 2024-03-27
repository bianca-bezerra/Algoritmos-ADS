from lib_utils import *

def main():

    #Entrada
    N = obter_num_int('Informe o número de eleitores: ')
    mostrar_texto('\n')

    #Processamento
    count_1 = 0
    count_2 = 0
    count_3 = 0
    count_0 = 0
    count_9 = 0

    while N != 0:
        voto = obter_num_int('Informe seu voto:')

        while voto != 1 and voto != 2 and voto != 3 and voto != 0 and voto != 9:
            mostrar_texto('Candidato inválido, tente novamente.')
            voto = obter_num_int('Informe seu voto:')

        if voto == 1:
            count_1 += 1
        if voto == 2:
            count_2 += 1
        if voto == 3:
            count_3 += 1
        if voto == 9:
            count_9 += 1
        if voto == 0:
            count_0 += 1

        N -=1

    resultado = obter_resultado_eleicao(count_1,count_2,count_3,count_0,count_9)
    
    #Saída
    mostrar_texto('\n')
    mostrar_texto('---------- QTD DE VOTOS ----------')
    mostrar_texto(f'> Candidato 1: {count_1} voto(s)')
    mostrar_texto(f'> Candidato 2: {count_2} voto(s)')
    mostrar_texto(f'> Candidato 3: {count_3} voto(s)')
    mostrar_texto(f'> Votos nulos: {count_0} voto(s)')
    mostrar_texto(f'> Votos brancos: {count_9} voto(s)')
    mostrar_texto('\n')
    mostrar_texto('------------ RESULTADO ------------')
    if resultado == 'EMPATE' or resultado == 'ELEIÇÃO ANULADA':
        mostrar_texto(f'> Resultado da eleição: {resultado}')
    else:
        mostrar_texto(f'> Vencedor da eleição: {resultado}')

    mostrar_texto('\n')
   
def obter_resultado_eleicao(a,b,c,d,e):
    vencedor = ''
    
    if a > b and a > c:
        vencedor = 'Candidato 1'
    if b > a and b > c:
        vencedor = 'Candidato 2'
    if c > a and c > b:
        vencedor = 'Candidato 2'
    if a == b and a == c:
        vencedor = 'EMPATE'
    if d > e and d > a and d > b and d > c:
        vencedor = 'ELEIÇÃO ANULADA'
    if e > d and e > a and e > b and e > c:
        vencedor = 'ELEIÇÃO ANULADA'

    return vencedor

main()