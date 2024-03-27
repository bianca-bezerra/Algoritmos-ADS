import { question } from "readline-sync";

function main(){
    const nome = question('Nome:')
    const sexo = question('Sexo(F ou M):')
    const idade = Number(question('Idade:'))
    const peso = Number(question('Peso(kg):'))
    const altura = Number(question('Altura(m):'))
    const perfil_ativfisica = question('Perfil de Atividade Física:')


    //Primeira parte
    const AF = obterRitmoAtivFisica(sexo,perfil_ativfisica)
    const necessidadeKcal = obterNecessidadeCalorica(idade,sexo,peso,altura,AF)

    if (peso == 0 || idade == 0 || altura == 0){
        console.log(`ERRO! Informe dados válidos, diferentes de 0.`)
        return
    }
    console.log(`Olá ${nome}!`)
    console.log(`Necessidade calórica diária: ${necessidadeKcal} calorias.`)


    //Segunda parte
    const pergunta = question('Ganhar(1) ou perder peso(2):')
    const quilos = Number(question('Ganhar/Perder quantos kg:'))
    const tempo = Number(question('Meta de semanas:'))


    const quiloPorSemana = obterKGPorSemana(quilos,tempo)
    const kcalPorSemana = obterKcalPorSemana(quiloPorSemana)
    const consumoDiario = obterConsumoKcal(pergunta,necessidadeKcal,kcalPorSemana)
    const distribuicao = obterDistribuicao(consumoDiario)

    if (pergunta == '1'){
    console.log(`Você deve ganhar ${quiloPorSemana} kg por semana, corresponde a ${kcalPorSemana}kcal por semana.`)
    }else{
        console.log(`Você deve perder ${quiloPorSemana} kg por semana, corresponde a ${kcalPorSemana}kcal por semana.`)
    }
    console.log(`Consumir diariamente: ${consumoDiario} kcal`)
    console.log(`Nova dieta: ${distribuicao}`)

    if (pergunta == '2'){
    if (quiloPorSemana > 1){
        console.log(`ATENÇÃO! Perder + de 1kg por semana pode comprometer sua sáude, tenha cuidado.`)
    }else{
        console.log(`Você consegue! Tenha foco, siga a nova dieta e mantenha seu ritmo de exercício!`)
    }
}else{
    console.log(`Você consegue! Tenha foco, siga a nova dieta e mantenha seu ritmo de exercício!`)
}
    
}
main()
function obterRitmoAtivFisica(sexo,perfil_ativfisica){
    if (sexo == 'M'){
        if (perfil_ativfisica == 'Sedentario'){
            return 1.0
        }else if(perfil_ativfisica == 'Pouco ativo'){
            return 1.11
        }else if(perfil_ativfisica == 'Ativo'){
            return 1.25
        }else if(perfil_ativfisica == 'Muito ativo'){
            return 1.48
        }else{
            return "ERRO! Digite um dado válido!"
        }
    }else if (sexo == 'F'){
        if (perfil_ativfisica == 'Sedentario'){
            return 1.0
        }else if(perfil_ativfisica == 'Pouco ativo'){
            return 1.12
        }else if(perfil_ativfisica == 'Ativo'){
            return 1.27
        }else if(perfil_ativfisica == 'Muito ativo'){
            return 1.45
        }else{
            return "ERRO! Digite um dado válido!"
        }
    }else{
        return "ERRO! Digite seu sexo com caracteres válidos (F ou M)."
    }
}

function obterNecessidadeCalorica(idade,sexo,peso,altura,AF){
    if (sexo == 'F'){
        return (354 - (6.91 * idade) + AF * (9.36 * peso) + (726 * altura)).toFixed(2)
    }else if(sexo == 'M'){
        return (662 - (9.53 * idade) + AF * (15.91 * peso ) + (539.6 * altura)).toFixed(2)
    }else{
        return "ERRO! Escolha 'F ou 'M' para determinar seu sexo."
    }
}


function obterKGPorSemana(quilos,tempo){
    return (quilos/tempo).toFixed(1)
}

function obterKcalPorSemana(quiloPorSemana){
    return quiloPorSemana * 7700
}

function obterConsumoKcal(pergunta,necessidadeKcal,kcalPorSemana){
    if (pergunta == '1'){
        return ((necessidadeKcal*7 + kcalPorSemana)/7).toFixed(1)
    }else if(pergunta == '2'){
        return ((necessidadeKcal*7 - kcalPorSemana)/7).toFixed(1)
    }else{
        return "ERRO! Informe escolha válida, 1 para ganho de peso e 2 para perda."
    }
}

function obterDistribuicao(consumoDiario){
    return `Proteínas: ${(consumoDiario * 0.4)/4} g + Carboidratos: ${(consumoDiario * 0.4)/4} g + Gorduras: ${((consumoDiario*0.2)/9).toFixed(1)} g`
}