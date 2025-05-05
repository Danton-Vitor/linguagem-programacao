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
    let percentual = [], nome = [], venda = []
    for (let i = 0; i < 5; i++){
        nome.push(prompt(`Infome o nome do ${i+1}° vendedor`))
        venda.push(Number(prompt(`Infome total vendido do ${i+1}° vendedor`)))
        percentual.push(Number(prompt(`Infome o percentual do ${i+1}° vendedor`)))
    }
}