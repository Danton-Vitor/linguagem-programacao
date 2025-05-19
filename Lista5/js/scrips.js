function exe3(){
    // cadastra código e qtde em estoque
    let vetor =[]
    for(let i=0; i<3;i++){
        //cria o objeto
        let objeto = {
            codigo: prompt(`Informe o código do produto`),
            estoque: Number(prompt(`Informe a qtde em estoque`)),
            preco: Number(prompt(`Informe o preço do produto`))
        }
        //adiciona objeto no valor
        vetor.push(objeto)
    }
    // comprando ...
    let cliente = Number(prompt(`Informe código do cliente`))
    do {
        let codigo = prompt(`Informe código do produto para compra`)
        let qtde = Number(prompt(`Informe a qtde do produto para compra`))
        // procura pra ver se o produto existe
        let produtoEncontrado
        let i
        for(i=0; i<3;i++){
            if (vetor[i].codigo == codigo){
                produtoEncontrado = vetor[i] // guarda produto em produtoEncontrado
                break // para de procurar - sair do for
            }
        }
        if (i == 3){ // produto não existe
            alert(`Código ${codigo} inexistente`)
        }
        else { // produto existe
            // tem em estoque suficiente
            if (produtoEncontrado.estoque >= qtde){
                // atualiza o estoque
                produtoEncontrado.estoque -= qtde
                alert(`Pedido atendido. Obrigado e volte sempre`)
            }
            else { 
                alert(`Não temos estoque suficiente desta mercadoria`)
            }
        }
        cliente = Number(prompt(`Informe código do novo cliente. Digite 0 para encerrar`))
    } // fecha o do
    while (cliente != 0)
    console.log(vetor)
}
function exe6(){
    let vetor = []
    for (let i = 0; i < 3; i++){
        // criar o objeto, entrada de dados
        let objeto = {
            nome: prompt(`Infome o nome do ${i+1}° vendedor`),
            venda: Number(prompt(`Infome total vendido do(a) ${nome[i]} vendedor(a)`)),
            percentual: Number(prompt(`Infome o percentual do(a) ${nome[i]} vendedor(a)`))
        }
        vetor.push(objeto)
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