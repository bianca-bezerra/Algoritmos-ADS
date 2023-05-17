def main():
    #Entrada
    N = int(input('Número de eleitores: '))

    #Processamento
    count_1 = 0
    count_2 = 0
    count_3 = 0
    count_9 = 0
    count_0 = 0

    for i in range(N):
        voto = int(input('Número do candidato desejado: '))

        while voto != 1 and voto != 2 and voto != 3 and voto != 0 and voto != 9:
            print(f'Número de candidato inválido.')
            voto = int(input('Número do candidato desejado: '))
        
        if voto == 1:
            count_1 += 1
        if voto == 2:
            count_2 += 1
        if voto == 3:
            count_3 += 1
        if voto == 0:
            count_0 += 1
        if voto == 9:
            count_9 += 1

    resultado_eleicao = obter_resultado_eleicao(count_1,count_2,count_3,count_9,count_0)

    #Saída
    print('\n')
    print(f'-------- TOTAL DE VOTOS --------')
    print(f'Candidato 1: {count_1}\nCandidato 2: {count_2}\nCandidato 3: {count_3}')
    print(f'Nulos: {count_9}')
    print(f'Brancos: {count_0}')

    if resultado_eleicao == 'Eleição Anulada':
        print(f'Resultado da eleição > {resultado_eleicao}')
    else:
        print(f'Vencedor da eleição > {resultado_eleicao}')


def obter_resultado_eleicao(a,b,c,d,e):    
    if a > b and a > c:
        return 'Candidato 1'
    if b > a and b > c:
        return 'Candidato 2'
    if c > a and c > b:
        return 'Candidato 2'
    if a == b and a == c:
        return 'EMPATE'
    if d > e and d > a and d > b and d > c:
        return 'ELEIÇÃO ANULADA'
    if e > d and e > a and e > b and e > c:
        return 'ELEIÇÃO ANULADA'

main()