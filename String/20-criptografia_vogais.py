

def main():
    #Entrada
    frase = input('Frase: ')

    #Processamento
    frase_criptografada = obter_frase_sem_vogais(frase)

    #Saída
    print('Frase criptografada: ', frase_criptografada)


def obter_frase_sem_vogais(frase):
    frase_sem_vogal= ''
    vogais = []
    posicao_vogal = []

    for i in range(len(frase)):
        letra = frase[i]
            
        if letra in 'aeiouáéíóúà':
            vogais.append(letra)
            posicao_vogal.append(i)
            continue

        frase_sem_vogal += letra

    return frase_sem_vogal

main()
