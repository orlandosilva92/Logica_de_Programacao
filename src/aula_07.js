//Trabalhando com Matrizes - Vetores bidimensionais
//matriz é igual a uma planilha de excel, com linhas e colunas, para encontrar determinado dado
//é necessário informa em qual linha ele esta e em qual coluna, lembrando que sempre vai iniciar
//da linha 0 e coluna 0

let listaDeCasamento = [
  ["jose" , "Casado" , 3],
  ["Renan" , "Soleiro" , 1],
  ["joana" , "Solteira" , 1]
]

console.log("Esses são os convidados: " + listaDeCasamento[0][0] + ", " + listaDeCasamento[1][1] + " e " +
listaDeCasamento[2][0] + ".")

console.log(listaDeCasamento.length)