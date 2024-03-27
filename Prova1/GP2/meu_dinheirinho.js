import { question } from "readline-sync";


function main(){
    const valor_hora = Number(question("Valor da hora:"))
    const nome = question("Nome do professor:")
    const horas_semanais = Number(question("Horas semanais:"))
    const qualificacao = question("Qualificacao (E,M ou D):")
    const tempo_experiencia = Number(question("Tempo de experiência (meses):"))
    const qtd_filhos = Number(question("Quantidade de filhos (menores que 6):"))
    const plano_saude = Number(question('Valor do plano de saúde:'))

    const valor_qualidade = valorHora_por_qualidade(valor_hora,qualificacao)
    const valor_hora_final = valorHora_final(valor_qualidade,tempo_experiencia)
    const salario_semanal = obter_salarioSemanal(valor_hora_final,horas_semanais)
    

    console.log('----- CONTRACHEQUE -----')
    console.log(`Professor : ${nome}`)
    console.log(`Valor da hora: R$ ${valor_hora_final}`)
    console.log(`Salário base semanal: R$ ${salario_semanal}`)

    //BENEFICIOS
    const salario_mensal_base = obter_salarioMensal(salario_semanal)
    const auxilio_creche = obter_auxilioCreche(qtd_filhos)  
    const ressarcimento_saude = obter_auxilioSaude(plano_saude)
    const auxilio_combustivel = obter_auxilioCombus(horas_semanais)
    const salario_bruto = salario_mensal_base + auxilio_combustivel + auxilio_creche + ressarcimento_saude

    console.log('----- GANHOS -----')
    console.log(`Salário mensal base: R$ ${salario_mensal_base}`)
    console.log(`Auxílio Creche: R$ ${auxilio_creche}`)
    console.log(`Ressarcimento saúde: R$ ${ressarcimento_saude}`)
    console.log(`Auxílio combustível: R$ ${auxilio_combustivel}`)
    console.log(`Salário Bruto: R$ ${salario_bruto}`)

    //DESCONTOS
    const previdencia = obter_previdencia(salario_mensal_base)
    const imposto_de_renda = obterIR(salario_mensal_base)
    const descontos = (previdencia + imposto_de_renda).toFixed(2)
    
    console.log('----- DESCONTOS -----')
    console.log(`Previdência: R$ ${previdencia}`)
    console.log(`Imposto de renda: R$ ${imposto_de_renda}`)
    console.log(`Total descontos: R$ ${descontos}`)
    
    //FIM
    const salario_liquido = salario_bruto - descontos
    console.log('----- SALARIO LIQUIDO -----')
    console.log(`Salário líquido: R$ ${salario_liquido}`)
}
main()

function valorHora_por_qualidade(valor_hora,qualificacao){
    if (qualificacao == 'E'){
        return valor_hora * 1.2
    }else if (qualificacao == 'M'){
        return valor_hora * 1.3
    }else if (qualificacao == 'D'){
        return valor_hora * 1.5
    }else{
        return 'ERRO! Informe uma qualificação válida, escolha entre E (Especialização), M (Mestrado) ou D (Doutorado).'
    }
}

function valorHora_final(valor_qualidade,tempo_experiencia){
    if (tempo_experiencia < 6){
        return valor_qualidade
    }else if (tempo_experiencia >= 6){
        return (valor_qualidade + (valor_qualidade *.05 * tempo_experiencia/12))
    }else{
        return 'ERRO! Informe tempo de experiência válido.'
    }
}

function obter_salarioSemanal(valor_hora_final,horas_semanais){
    return (valor_hora_final * horas_semanais)
}

function obter_salarioMensal(salario_semanal){
    return salario_semanal * 4.5
}


// BENEFICIOS
function obter_auxilioCreche(qtd_filhos){
    return 700 * qtd_filhos
}

function obter_auxilioSaude(plano_saude){
    if (plano_saude * 0.5 > 500){
        return 500
    }else{
        return ( plano_saude * 0.5)
    }
}
function obter_auxilioCombus(horas_semanais){
return (Math.floor(horas_semanais/8) * 30)
}

//DESCONTOS
function obter_previdencia(salario_mensal_base){
    if (salario_mensal_base < 1302){
        return salario_mensal_base * 0.075
    }else if (salario_mensal_base <= 2500){
        return salario_mensal_base * 0.09
    }else if (salario_mensal_base <= 3900){
        return salario_mensal_base * 0.12
    }else if (salario_mensal_base <= 7500){
        return salario_mensal_base * 0.14
    }else{
        return salario_mensal_base * 0.16
    }
}

function obterIR(salario_mensal_base){
    if (salario_mensal_base <= 5000){
        return 0
    }else{
        return ((salario_mensal_base - 5000) * 0.275)
    }
}