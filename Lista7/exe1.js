function entrada(mat){
    for(let i = 0; i < 3; i++){
        mat[i] = []
        for(let j = 0; j < 5; j++){
            mat[i][j] = perseInt(Math.random() * 10) + 15 //gera númro aleatorio entre 0 e 9
        }
    }
}
function somaElemento(mat){
    let soma = 0
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 5; j++){
            if (mat[i][j] >= 15 && mat[i][j] <= 20){
                soma++
            }
        }
    }
    return soma 
}
function exibeMatriz(mat){
    let saida = ' '
    for(let i = 0; i < mat.length; i++){
        saida = saida + '\n'
        for(let j = 0; j < mat[i].length; j++){
            saida = saida + " " + mat[i][j]
        }
    }
}
function exe1(){
    let mat = []
    entrada(mat)
    exibeMatriz(mat)
    let soma = somaElemento(mat)
    alert(`A soma dos elementos entre 15 e 20 é: ${soma}`)
}
exe1()