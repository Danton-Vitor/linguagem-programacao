function exe1(){
    let idade, altura, peso, raca, pelo, idadeEpeso = 0, somaIdade = 0, mAltura = 0
    let labrador = 0, peloEraca = 0, media
    for (let i = 1; i <= 10; i++){
        do {
            idade = Number(prompt(`Informe a idade do ${i}º cachorro (anos)`))
        }
        while (idade < 0)
        do {
            altura = Number(prompt(`Informe a altura do ${i}º cachorro (metro)`))
        }
        while (altura < 0)
        do {
            peso = Number(prompt(`Informe o peso do ${i}º cachorro (kg)`))
        }
        while (peso < 0)
        do {
            raca = prompt(`Informe a raça do ${i}º cachorro \n V - Vira Lata \n L - Labrador \n P - Poodle`).toUpperCase()
        }
        while (raca != 'V' && raca != 'L' && raca != 'P')
        do{
            pelo = prompt(`Informe a cor do pelo do ${i} cachorro \n P - Preto \n C - Castanho \n L - Loiro \n B - Branco`).toUpperCase()
        }
        while (pelo != 'P' && pelo != 'C' && pelo != 'C' && pelo != 'B')
        
        if (idade > 10 && peso < 10){ //item 1
            idadeEpeso++
        }
        if (altura < 0.5){ // item 2
            somaIdade += idade
            mAltura++
        }
        if (raca == 'L'){ //item 3
            labrador++
        }
        if (pelo == 'B' && raca != 'V'){ // item 4
            peloEraca++
        }
    }
    if (mAltura == 0){ // teste de divisão por 0
        media = 0
    }
    else{
        media = somaIdade/mAltura
    }
    document.getElementById("resultado").innerHTML = `Item 1: ${idadeEpeso} <br/> Item 2: ${media} <br/> Item 3: ${labrador} <br/> Item 4: ${peloEraca}`
}