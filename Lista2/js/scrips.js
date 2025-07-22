function exe1(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    if (media < 7){
        document.getElementById("media").innerText = "Aluno Reprovado - Nota:" + media
    }
    else{
        document.getElementById("media").innerText = "Aluno Aprovado - Nota:" + media
    }
}
function exe2(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let media = (nota1 + nota2) / 2
    if (media < 3){
        document.getElementById("media").innerText = "Aluno Reprovado - Nota:" + media
    }
    else if (media < 7){
        document.getElementById("media").innerText = "Exame - Nota:" + media
    }
    else if (media <= 10){
        document.getElementById("media").innerText = "Aluno Aprovado - Nota:" + media
    }
}
function exe3(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    // calcule o menor
    if (nro1 < nro2){
        document.getElementById("menor").innerText = "O menor é " + nro1
    }
    else if (nro2 < nro1){
        document.getElementById("menor").innerText = "O menor é " + nro2
    }
    else {
        document.getElementById("menor").innerText = "Os dois são iguais" 
    }
}
function exe4(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    if (nro1 > nro2 && nro1 > nro3){
        document.getElementById("maior").innerText = "Maior = " + nro1
    }
    else if (nro2 > nro1 && nro2 > nro3){
        document.getElementById("maior").innerText = "Maior = " + nro2
    }
    else if (nro3 > nro1 && nro3 > nro2){
        document.getElementById("maior").innerText = "Maior = " + nro3
    }
}
function exe5(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let selecao = Number(document.getElementById("selecao").value)
    // utilização do escolha
    switch (selecao){
        case 1: document.getElementById("resultado").innerText = "A média é " + (nro1 + nro2) / 2 
            break
        case 2: if (nro1 >= nro2){
            document.getElementById("resultado").innerText = nro1 - nro2 
        }
        else{
            document.getElementById("resultado").innerText = nro2 - nro1
        }
            break
        case 3: document.getElementById("resultado").innerText = nro1 * nro2
            break
        case 4: if (nro2 != 0){
            document.getElementById("resultado").innerText = nro1 / nro2
        }
        else {
            document.getElementById("resultado").innerText = "Divisão por zero"
        }
    }
}
function exe6(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let selecao = Number(document.getElementById("selecao").value)
    switch (selecao){
        case 1: document.getElementById("resultado").innerText = "A potência é = " + Math.pow(nro1, nro2)
        break
        case 2: document.getElementById("resultado").innerHTML = "Raiz quadrada nº1 " + Math.sqrt(nro1).toFixed(2) + "<br/> Raiz quadrada nº2 " + Math.sqrt(nro2).toFixed(2)
        break
        case 3:  document.getElementById("resultado").innerHTML = "Raiz quadrada nº1 " + Math.cbrt(nro1).toFixed(2) + " <br/> Raiz quadrada nº2 " + Math.cbrt(nro2).toFixed(2)
    }
}
function exe7(){
    let salario = Number(document.getElementById("salario").value)
    let aumento = Number(document.getElementById("aumento").value)
    let novo_sal = Number(document.getElementById("novo_sal").value)
    if (salario <= 500){
        aumento = salario * 0.3
        novo_sal = salario + aumento
        document.getElementById("aumento").innerText = "Aumento R$" + aumento
        document.getElementById("novo_sal").innerText = "Novo Salário R$" + novo_sal
    }
    else{
        document.getElementById("aumento").innerText = "Sem direito ao ajuste"
        document.getElementById("novo_sal").innerText = "Salário R$" + salario
    }
}
function exe8(){
    let salario = Number(document.getElementById("salario").value)
    let aumento = Number(document.getElementById("aumento").value)
    let novo_sal = Number(document.getElementById("novo_sal").value)
    if (salario <= 350){
        aumento = salario * 0.35
        novo_sal = salario + aumento
        document.getElementById("aumento").innerText = "Aumento R$" + aumento
        document.getElementById("novo_sal").innerHTML = `Novo Salário R$ ${novo_sal}`

    }
    else {
        aumento = salario * 0.15
        novo_sal = salario + aumento
        document.getElementById("aumento").innerText = "Aumento R$" + aumento
        document.getElementById("novo_sal").innerHTML = `Novo Salário R$ ${novo_sal}` //template string 
    }
}
function exe9(){
    let saldo = Number(document.getElementById("saldo").value)
    let credito = 0 // inicializa com zero
    if (saldo > 0 && saldo <= 200){
        credito = saldo * 0.1
    }
    else if (saldo > 200 && saldo <= 300){
        credito = saldo * 0.2
    }
    else if (saldo > 300 && saldo <= 400){
        credito = saldo * 0.25
    }
    else if (saldo > 400){
        credito = saldo * 0.3
    }
    else {// saldo negativo
        document.getElementById("credito").innerHTML = "Saldo não pode ser negativo"
        return //saiu da função
    }
    document.getElementById("credito").innerHTML = `Saldo R$ ${saldo} e Crédito R$ ${credito}` //template string
}
function exe10(){
    let custo = Number(document.getElementById("custo").value)
    let imposto = 0
    let distribuidor = 0
    if (custo >= 0 && custo < 12000){
        distribuidor = custo * 0.05
        imposto = 0
    }
    else if (custo >= 12000 && custo <= 25000){
        distribuidor = custo * 0.1
        imposto = custo * 0.15
    }
    else if (custo > 25000){
        distribuidor = custo * 0.15
        imposto = custo * 0.2 
    }
    else{
        document.getElementById("consumidor").innerHTML = "Custo negativo"
        return
    }
    let consumidor = custo + imposto + distribuidor 
    document.getElementById("consumidor").innerHTML = `Custo da fábrica R$ ${custo} <br/> Distribuidor R$ ${distribuidor} <br/> Imposto R$ ${imposto}`
}