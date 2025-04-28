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
    for (i = 0; i < nro.length; i++){
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