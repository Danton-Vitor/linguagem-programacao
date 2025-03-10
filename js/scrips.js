function seguir(){
    alert(`Você agora está seguindo Danton Vitor`)
}
// exercício 1
function exe1(){
    // vamos usar DOM para recuperar os dados HTML
    // DOM - Document Object Model 
    //converter texto para número
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    // vamos fazer a subtração
    let sub = nro1 - nro2
    // vamos mostrar o resultado
    //alert("A subtração é " + sub)
    document.getElementById("sub").innerText = "O resultado é " + sub
}
function exe2(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    let sub = nro1 * nro2 * nro3
    document.getElementById("sub").innerText = "Resultado: " + sub
}
function exe3(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    if (nro2 == 0){
        alert("Número 2 precisa ser diferente de 0")
    }
    else {
        sub = nro1 / nro2
    }
    document.getElementById("sub").innerText = "Resultado: " + sub
}
function exe4(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let sub = ((nota1 * 2) + (nota2 * 3)) / (2 + 3)
    document.getElementById("sub").innerText = "Média: " + sub
}
function exe5(){
    let preco = Number(document.getElementById("preco").value)
    desconto = preco * 0.1
    let sub = preco - desconto 
    document.getElementById("sub").innerText = "Valor com desconto: R$" + sub
}
function exe6(){
    let salario = Number(document.getElementById("salario").value)
    let venda = Number(document.getElementById("venda").value)
    let comissao = venda * 0.04
    let sub = salario + comissao
    document.getElementById("sub").innerText = "Novo Salário: R$" + sub
    document.getElementById("comissao").innerText = "Comissão: R$" + comissao 
}
function exe7(){
    let peso = Number(document.getElementById("peso").value)
    peso_maior = peso * 0.15
    peso_menor = peso * 0.20
    let p_maior = peso + peso_maior
    let p_menor = peso - peso_menor
    document.getElementById("p_maior").innerText = "Peso + 15%: " + p_maior + "kg"
    document.getElementById("p_menor").innerText = "Peso - 20%: " + p_menor + "kg"
}
function exe8(){
    let peso = Number(document.getElementById("peso").value)
    let grama = peso * 1000
    document.getElementById("grama").innerText = "Peso em gramas: " + grama + "g"
}
function exe9(){
    let base_maior = Number(document.getElementById("base_maior").value)
    let base_menor = Number(document.getElementById("base_menor").value)
    let altura = Number(document.getElementById("altura").value)
    let area = ((base_maior + base_menor) * altura) / 2
    document.getElementById("area").innerText = "Área: " + area + "cm²"
}
function exe10(){
    let lado1 = Number(document.getElementById("lado1").value)
    let lado2 = Number(document.getElementById("lado2").value)
    let area = lado1 * lado2
    document.getElementById("area").innerText = "Área: " + area + "cm²"
}