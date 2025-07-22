function entrada(mat){
    for (let i = 0; i < 5; i++){
        mat[i] = []
        for (let j = 0; j < 3; j++){
            mat[i][j] = Math.floor(Math.random() * 11)
            
        }
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
function somaColuna(mat, vet){
    for (let j = 0; j < 3; j++) {
        let soma = 0
        for (let i = 0; i < 5; i++) {
            soma += mat[i][j]
        }
        vet[j] = soma
    }
    alert(`A soma de cada coluna é:\nColuna 1: ${vet[0]}\nColuna 2: ${vet[1]}\nColuna 3: ${vet[2]}`)
}
function multiplicaColuna(mat, vet, resultado){
    for (let i = 0; i < 5; i++) {
        resultado[i] = []
        for (let j = 0; j < 3; j++) {
            resultado[i][j] = mat[i][j] * v 
        }
    }
}
function  exibeResultado(resultado){
    let saida = ' '
    for (let i = 0; i < resultado.length; i++) {
        saida = saida + '\n'
        for (let j = 0; j < resultado[i].length; j++) {
            saida = saida + " " + resultado[i][j]
        }
    }
    alert("Matriz resultante:\n" + saida)
}
function exe6(){
    let mat = []
    let vet = []
    let resultado = []
    entrada(mat)
    exibeMatriz(mat)
    somaColuna(mat, vet)
    multiplicaColuna(mat, vet, resultado)
    exibeResultado(resultado)
}
exe6()