function exe1(){
    let i 
    let nro = [] // vetor para guardar os dados de entrada
    let par = [], impar = [] // guarda os pares e ímpares
    for (i = 0; i < 6; i++){
        nro.push(Number(prompt(`Informe o elemento ${i+1}`)))
    }
    // nro.length > retorna a qtde de elementos no vetor
    for (i = 0; i < nro.length; i++){
        if (nro[i] % 2 == 0){
            par.push(nro[i])
        }
        else {
            impar.push(nro[i])
        }
    }
    document.getElementById("resultado").innerHTML = `Números pares ${par} Quantidade ${par.length} <br/> Números ímpares ${impar} Quantidade ${impar.length}`
}
function exe2(){
    let nro = [], mult2e3 = [], mult2 = [], mult3 = []
    for (let i = 0; i < 3; i++){
        nro.push(Number(prompt(`Informe o elemento ${i+1}`)))
    }
    for (i = 0; i <= nro.length; i++){
        if (nro[i] % 2 === 0 && nro[i] % 3 === 0){
            mult2e3.push(nro[i])
        }
        else if (nro[i] % 2 === 0){
            mult2.push(nro[i])
        }
        else if (nro[i] % 3 === 0){
            mult3.push(nro[i])
        }
    }
    document.getElementById("resultado").innerHTML = `Múltiplo de 3 e 2: ${mult2e3} <br/> Múltiplo de 2: ${mult2} <br/> Múltiplo de 3: ${mult3}`
}
function exe3(){
    // cadastra código e qtde em estoque
    let codigos = [], estoque = [] // declara os vetores
    for(let i=0; i<3;i++){
        codigos.push(prompt(`Informe o código do produto`))
        estoque.push(Number(prompt(`Informe a qtde em estoque`)))
    }
    // comprando ...
    let cliente = Number(prompt(`Informe código do cliente`))
    do {
        let codigo = prompt(`Informe código do produdo para compra`)
        let qtde = Number(prompt(`Informe a qtde do produto para compra`))
        // procura pra ver se o produto existe
        let posicao = codigos.indexOf(codigo)
        if (posicao == -1){ // produto não existe
            alert(`Código ${codigo} inexistente`)
        }
        else { // produto existe
            // tem em estoque suficiente
            if (estoque[posicao] >= qtde){
                // atualiza o estoque
                estoque[posicao] = estoque[posicao] - qtde
                alert(`Pedido atendido. Obrigado e volte sempre`)
            }
            else { 
                alert(`Não temos estoque suficiente desta mercadoria`)
            }
        }
        cliente = Number(prompt(`Informe código do novo cliente. Digite 0 para encerrar`))
    } // fecha o do
    while (cliente != 0)
    alert(`${codigos} ${estoque}`)
}
function exe4(){
    let vet = [], posicao = []
    for (let i = 0; i < 15; i++){
        vet.push(Number(prompt(`Informe o ${i+1}° número`)))
    }
    for (i = 0; i < 15; i++){
        if (vet[i] == 30){
            posicao.push(i)
        }
    }
    document.getElementById("resultado").innerHTML = `Nro 30 encontrado na posição: ${posicao}`
}
function exe5(){
    let logica = [], linguagem = []
    for (let i = 0; i < 15; i++){
        logica.push(Number(prompt(`Informe o ${i+1}° aluno que faz displina de Lógica`)))
    }
    for (let i = 0; i < 10; i++){
        linguagem.push(Number(prompt(`Informe o ${i+1}° aluno que faz displina de Linguagem`)))
    }
    // encontrar a intersecção
    let interseccao =[]
    for (let i = 0; i < 15; i++){ // percorre o vetor logica
        // indexOf() percorre o vetor linguagem e procura por logica()
        let posicao = linguagem.indexOf(logica[i])
        if (posicao != -1){ // caso encontre
            interseccao.push(logica[i])
        }
    }
    //document.getElementById("resultado").innerHTML = `Alunos que fazem lógica e linguagem ${interseccao}`
    alert(`Alunos que fazem lógica e linguagem ${interseccao}`)
}
function exe6(){
    let percentual = [], nome = [], venda = [], comissao = []
    for (let i = 0; i < 3; i++){
        // entrada de dados
        nome.push(prompt(`Infome o nome do ${i+1}° vendedor`))
        venda.push(Number(prompt(`Infome total vendido do(a) ${nome[i]} vendedor`)))
        percentual.push(Number(prompt(`Infome o percentual do(a) ${nome[i]} vendedor`)))
        // calcula a comissão
        comissao.push((venda[i] * percentual[i]) / 100)
    }
    // relação dos vendedores e os valores a receber
    let relatorio = " "
    for (let i = 0; i < 3; i++){
        relatorio += `\nVendedor: ${nome[i]} vai receber R$ ${comissao[i]}`
    }
    alert(relatorio)
    // total das vendas de todos vendedores
    let somaVendas = 0
    for (let i = 0; i < 3; i++){
        somaVendas += venda[i]
    }
    alert(`Total de vendas: ${somaVendas.toFixed(2)}`)
    // calcula o maior e menor valor de comissão
    let maior = comissao[0]
    let menor = comissao[0]
    for (let i = 1; i < 3; i++){
        if (comissao[i] > maior){
            maior = comissao[i]
        }
        if (menor < comissao[i]){
            menor = comissao[i]
        }
    }
    let iMaior = comissao.indexOf(maior) // posição do maior na comissão
    alert(`${nome[iMaior]} vai receber maior comissão de R$ ${maior}`)
    let iMenor = comissao.indexOf(menor) // posição do menor na comissão
    alert(`${nome[iMenor]} vai receber menor comissão de R$ ${menor}`)
}
function exe7(){
    let nro = [], negativo = 0, somaPositivo = 0
    for (let i = 0; i < 10; i++){
        nro.push(Number(prompt(`Informe o ${i+1}° número real`)))
    }
    for (let i = 0; i < 10; i++){
        if (nro[i] < 0){
            negativo++
        }
        else {
            somaPositivo += nro[i]
        }
    }
    alert(`Qtde número negativo: ${negativo} \nSoma dos positivos: ${somaPositivo}`)
}
function exe8(){
    let nomes = [], medias = []
    for(let i=0;i<7;i++){
        nomes.push(prompt(`Informe nome do aluno ${i+1}`))
        medias.push(Number(prompt(`Informe média do aluno ${i+1}`)))
    }
    // calcular a maior média
    let maior = medias[0]
    for(let i=1;i<7;i++){
        if (medias[i] > maior){
            maior = medias[i]
        }
    }
    // nome do aluno com a maior média
    let pos = medias.indexOf(maior)
    alert(`Nome do aluno com maior média ${maior} é ${nomes[pos]}`)
    // calcular a nota necessária no exame final
    for(let i=0;i<6;i++){ // percorre o vetor
        if (medias[i] < 7){ // ficou para exame final
            // nota necessária sabendo que média deve ser mínimo 5
            alert(`${nomes[i]} precisa tirar ${10-medias[i]}`)
        }
    }
}
function exe9(){
    let nomes = [], codigos = [], precos = []
    for(let i=0;i<10;i++){
        nomes.push(prompt(`Informe nome do produto ${i+1}`))
        codigos.push(Number(prompt(`Informe código do produto ${i+1}`)))
        precos.push(Number(prompt(`Informe preço do produto ${i+1}`)))
        // let x = (int) (Math.random() * 10)
    }
    // gerar o relatório com os novos preços
    for(let i=0;i<10;i++){
        let novo
        if (codigos[i] % 2 == 0 && precos[i] > 1000){
            novo = precos[i] + precos[i] * 20/100
        }
        else if (codigos[i] % 2 == 0){
            novo = precos[i] + precos[i] * 15/100
        }
        else if (precos[i] > 100){
            novo = precos[i] + precos[i] * 10/100
        }
        else {
            novo = precos[i]
        }
        alert(`${nomes[i]} - ${codigos[i]} - ${precos[i]} - ${novo}`)
    }
}
function exe10(){
    let vetor1 = [], vetor2 = []
    let vetorr1 = [], vetorr2 = []
    // entrada de dados
    for(let i=0;i<10;i++){
        vetor1.push(Number(prompt(`Informe o ${i+1}o. elemento do vetor 1`)))       
    }
    for(let i=0;i<5;i++){
        vetor2.push(Number(prompt(`Informe o ${i+1}o. elemento do vetor 2`)))       
    }
    // calcular o vetor resultante 1
    // calcular a soma dos elementos do vetor2
    let somaVet2 = 0
    for(let i=0; i<5;i++){
        somaVet2 += vetor2[i]
    }
    // cria o vetor resultante 1
    for(let i =0;i < 10; i++){
        if (vetor1[i] % 2 == 0){
            vetorr1.push(vetor1[i] + somaVet2)
        }
    }
    alert(`Vetor resultante 1 ${vetorr1}`)
    // calcula vetor resultante 2
    for(let i=0;i<10;i++){ // para cada elemento de vetor 1
        if (vetor1[i] % 2 == 1) {// verifica se elemento é ímpar
            let qtdeDivisores = 0
            for(let j=0;j<5;j++){ // para cada elemento de vetor 2
                if (vetor1[i] % vetor2[j] == 0 ) { // encontrou um divisor
                    qtdeDivisores++ // conta +1 nos divisores
                }
            }
            vetorr2.push(qtdeDivisores) // adiciona contador no vetorr2
        }
    }
    alert(`Vetor resultante 2 ${vetorr2}`)
}