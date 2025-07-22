function entrada(mat){
    for (let i = 0; i < 2; i++){
        mat[i] = []
        for (let j = 0; j < 4; j++){
            mat[i][j] = Math.floor(Math.random() * 21) // gera número de 0 a 20
        }
    }
}
function contElementosEntre12e20(mat){
    let conta
    for (let i = 0; i < 2; i++){ // para cada linha
        conta = 0 //zero a contagem 
        for (let j = 0; j < 4; j++){
            if (mat[i][j] >= 12 && mat[i][j] <= 20){
                conta++
            }
        }
        alert(`A qtde de elementos entre 12 e 20 na linha ${i} é ${conta}`)
    }
}
function exibeMatriz(mat){
    let saida = ' '
    for(let i = 0; i < mat.length; i++){
        saida = saida + '\n'
        for(let j = 0; j < mat[i].length; j++){
            saida = saida + " " + mat[i][j]
        }
    }
    alert(saida)
}
function mediaPares(mat){
    let soma = 0
    let qtde = 0
    for (let i = 0; i < mat.length; i++){ 
        for (let j = 0; mat[i].length; j++){
            if (mat[i][j] >= 12 && mat[i][j] <= 20){
                soma += mat[i][j]
                qtde++
            }
        }
    }
    return soma / qtde
}
function exe2(){
    let mat = []
    entrada(mat)
    exibeMatriz(mat)
    contElementosEntre12e20(mat)
    mediaPares(mat)
    alert(`A média dos elementos pares é ${mediaPares(mat)}`)    
}
exe2()