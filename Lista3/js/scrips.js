function exe1(){
    // recupera os dados do usuário
    let a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    let c = Number(document.getElementById("c").value)
    let d = Number(document.getElementById("d").value)

    let i = 1 // variável que conta quantas vezes o laço vai se repetir
    let aux // será utilizada nas trocas das variáveis a, b, c e d
    while (i <= 3){
        if (a > b){
            aux = a; a = b; b = aux;
        }    
        if (b > c){
            aux = b; b = c; c = aux;
        }
        if (c > d){
            aux = c; c = d; d = aux;
        }
        i++ // incrementa i
    }
    document.getElementById("ordena").innerHTML = `Ordem crescente ${a} ${b} ${c} ${d} e ordem decrescente ${d} ${c} ${b} ${a}`
}
function exe2(){
    let preco = 5.0
    let qtde = 120
    const despesa = 200
    let lucro // guarda o lucro da peça teatro
    let saida = ""
    while (preco >= 1.0){
        lucro = (preco * qtde) - despesa
        saida = saida + `<tr> <td>R$ ${preco}</td> <td>${qtde} </td> <td> R$ ${despesa}</td>  <td>R$ ${lucro}</td> <tr/>`
        preco = preco - 0.50
        qtde = qtde + 26
    }
    document.getElementById("tabela").innerHTML = saida
}
function exe3(){
    let faixa1 = 0, faixa2 = 0, faixa3 = 0, faixa4 = 0, faixa5 = 0
    //estrutura de repetição for
    // let i = 1 será executado uma única vez, logo no incio
    // let <= 8 será executado toda vez, antes de entrar no loop
    // i++ será executado toda vez, antes de ir para próxima interação
    for (let i = 1; i <= 8; i++){
        idade = Number(prompt(`Informe a idade ${i}`))
        if (idade > 0 && idade <= 15){
            faixa1++
        }
        else if (idade >= 16 && idade <= 30){
            faixa2++
        }
        else if (idade >= 31 && idade <= 45){
            faixa3++
        }
        else if (idade >= 46 && idade <= 60){
            faixa4++
        }
        else if (idade > 60){
            faixa5++
        }
        else{
            alert(`Idade inválida`)
        }
    }
    document.getElementById("resultado").innerHTML = `F1: ${faixa1} <br/> F2: ${faixa2} <br/> F3: ${faixa3} <br/> F4: ${faixa4} <br/> F5: ${faixa5} <br/> %F1: ${faixa1/8*100}% <br/> %F5: ${faixa5/8*100}%`
}
function exe4(){
    let nro = Number(document.getElementById("nro").value)
    let i = 1
    let resultado = ""
    while (i <= 10){
        resultado = resultado + nro + " x " + i + " = " + nro * i + "<br/>"
        i++
    }
    document.getElementById("tabuada").innerHTML = resultado 
}
function exe5(){
    let resultado = ""
    for (let nro = 1; nro <= 10; nro++){
        resultado = resultado + `<br/>Tabuada do Nº ${nro} <br/>`  
         for(let i = 1; i <= 10; i++){
            resultado = resultado + `${nro} x ${i} = ${nro*i} <br/>`
        }    
    }
    document.getElementById("tabuada").innerHTML = resultado
}
function exe6(){
    let codigo, valor, totalVista = 0, totalPrazo = 0
    for (let i = 1; i <= 5; i++){
        do {
            codigo = prompt(`Digite V (à vista) ou P (à prazo)`).toUpperCase()
        }
        while (codigo != 'V' && codigo != "P")
        valor = Number(prompt(`Digite o valor da transação`))
        if (codigo == 'V'){
            totalVista += valor
        }
        else {
            totalPrazo += valor
        }
    }
    document.getElementById("resultado").innerHTML = `Total à vista R$ ${totalVista} <br/> Total à prazo R$ ${totalPrazo} <br/> Total das compras R$ ${totalVista + totalPrazo} <br/> Valor da primeira parcela ${totalPrazo/3}`
}
function exe7(){
    let idade, altura, peso, idade50 = 0, idade10e20 = 0, somaAltura = 0, peso40 = 0
    for (let i = 1; i <= 2; i++){
        do {
            idade = Number(prompt(`Informe a idade`))
        }
        while (idade < 0)
        do {
            altura = Number(prompt(`Informe a idade`))
        }
        while (altura < 0)
        do {
            peso = Number(prompt(`Informe a idade`))
        }
        while (peso < 0)
        
        if (idade > 50){
            idade50++
        }
        if (idade >= 10 && idade <= 20){
            idade10e20++
            somaAltura += altura
        }
        if (peso < 40){
            peso40++
        }
    }
    document.getElementById("resultado").innerHTML = `Pessoas c/ idade superior a 50: ${idade50} <br/> Média altura idade entre 10 e 20: ${somaAltura/idade10e20} <br/> Porcentagem de pessoas peso inferior a 40Kg: ${peso40/5*100}%`
}