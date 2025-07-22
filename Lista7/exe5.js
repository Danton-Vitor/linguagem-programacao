function cadastra(mat, vet) {
    for (let i = 0; i < 12; i++) {
      vet.push(prompt(`Informe o ${i + 1}o. nome`));
      mat[i] = []; // cria espaço na memoria para cada vetor da matriz;
      for (let j = 0; j < 4; j++) {
        mat[i][j] = Number(prompt(`Informe as vendas da semana ${j + 1} do mês ${vet[i]}`))
      }
    }
  }
  
  function calculaTotalMes(mat) {
    let soma = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 5; j++) {
        soma += mat[i][j]
      }
    }
    return soma
  }
  function calculaTotalMes(mat, vet){
    for(let i = 0; i < mat.length; i++){
        let soma = 0 // vamos iniciar um novo mês
        for(let j = 0; j < mat[i].length; j++){
            soma += mat[i][j]
        }
        alert(`Total vendido em ${vet[i]} foi de ${soma}`)
    }
  }
  function calculaTotalSemana(mat){
    for(let j = 0; j < 4; j++){ // para cada semana
        let soma = 0
        for(let i = 0; i < 12; i++){ // para cada mês
            soma += mat[i][j]
        }
        alert(`Total vendido na semana ${j} é de ${soma}`)
    }
  }
  function calculaTotalAno(mat){
    let soma = 0
    for(let i = 0; i < 12; i++){
        for(let j = 0; j < 4; j++){
            soma += mat[i][j]
        }
    }
    return soma
  }
  function vendaMaior5000(mat, vat){
    for (let i = 0; i < 12; i++){
      let qtde = 0
      for (let j = 0; j < 4; j++){
        if (mat[i][j] > 5000){
          qtde++
        }
      }
      alert(`Em ${vet[i]} teve ${qtde} vendas maiores que R% 5.000,00`)
    }
  }
  function vendaMesesMenores1000(mat, vet){
    for (let i = 0; i < 12; i++){
      let qtde = 0
      for (let j = 0; j < 4; j++){
        if (mat[i][j] < 1000){
          qtde++
        }
      }
      if (qtde > 0){
        alert(`Em ${vet[i]} teve ${qtde} vendas menores que R$ 1.000,00`)
      }
    }
  }
  function exe5() {
    let mat = []
    const vet = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio","Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
    ]
    cadastra(mat, vet)
    calculaTotalMes(mat, vet)
    calculaTotalSemana(mat)
    vendaMaior5000(mat, vat)
    vendaMesesMenores1000(mat, vet)
    alert(`Total vendido no ano ${calculaTotalAno(mat)}`)
  }
  exe5()