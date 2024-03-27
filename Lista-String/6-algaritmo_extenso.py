'''
6. Leia uma frase e gere uma nova frase, substituindo o algarismo que aparecer na frase por seu extenso.
'''

def main():
    #Entrada
    frase = input('Digite uma frase: ')

    #Processamento
    resultado = obter_frase_com_algaritmo_extenso(frase)

    #Saída
    print(resultado)


def obter_frase_com_algaritmo_extenso(frase):
    nova_frase = ''

    for caractere in frase:
        if caractere == '1' :
            nova_frase = nova_frase + 'um'
        elif caractere == '2' :
            nova_frase = nova_frase + 'dois'
        elif caractere == '3' :
            nova_frase = nova_frase + 'tres'
        elif caractere == '4' :
            nova_frase = nova_frase + 'quatro'
        elif caractere == '5' :
            nova_frase = nova_frase + 'cinco'
        elif caractere == '6':
            nova_frase = nova_frase + 'seis'
        elif caractere == '7' :
            nova_frase = nova_frase + 'sete'
        elif caractere == '8' :
            nova_frase = nova_frase + 'oito'
        elif caractere == '9':
            nova_frase = nova_frase + 'nove'
        else:
            nova_frase += caractere
    
    return nova_frase

main()