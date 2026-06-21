Como apresentar algo na tela? 
console.log(“Texto a ser mostrado”)

Como declarar uma variável? 
let nomeDaVariavel = “Dado contido na variável”

Posso declarar um variável sem atribuir dados? 
Sim let nomeDaVariavel

Como faz para criar comentários? 
É utilizado // - Para uma única linha ou utilizar /**/ - Para mais de uma linha

Como juntar um dado com uma variável? 
Utilizando o “+”. console.get(“Meu nome é: ” + nome)

O que é uma CONSTANTE? 
É um dado que não varia 
const nomeDaConstante = “Dado contido na constante”

Quais os principais tipos de variáveis? 

Strings - Texto 
Numbers - Numérico 
Booleans - Verdadeiro ou Falso

Para que serve um vetor?
Para armazenar mais de um dado em uma mesma variável ou constante

Como declará uma vetor?
let nomeDoVetor = ["dado" , "contigo" , "no" , "vetor"]
const nomeDoVetor =  = ["dado" , "contigo" , "no" , "vetor"]

Para que serve uma matriz?
Para armazenar dados mais complexos, organizar de forma a esta facil a interpretação de onde esta cada dado
Pense em uma matriz como uma planilha de excel, onde há linhas e colunas, e a depender a linha e coluna escolhida, mostrará um resultado

Como se declará uma matriz?
let nomeDaMatriz = [
  ["jose" , "Casado" , 3],
  ["Renan" , "Soleiro" , 1],
  ["joana" , "Solteira" , 1]
]

ANOTAAAAA:
#Metodos são ações que podem ser feitas com seu vetor ou sua matriz
#Propriedades são caracteristicas

Tipo de operadores
Aritméticos
+,-,*,/,%

Relacionais
==, !=, > , <, >= , <=

Lógicos
&&  = and , || = or, ! = NOT

Atribuição
=, +=, -=, *=, /=, %=

Incremento e Decremento
"++"
"--"

Trabalhando com condicionais

Para entrar em uma condicional é necessário que a expressão informada seja confirmada

let possuiOvos = True
if (possuiOvos){
  console.log("Vamos fazer um bolo")
}

Como a expressão foi possitiva então pode retornar oque estava dentro do if

Um segunda opção seria utilizar o "else", ele é o nosso se não, então ficaria, se a primeira expressão der falsa é pulado para o "else" automaticamente

let possuiOvos = False
if (possuiOvos){
  console.log("Vamos fazer um bolo")
}else{
  console.log("Vamos pedir uma pizza")
}

Falando em if encadeado - if dentro de if

let minhaIdade = 13
if (minhaIdade >= 18) {
  console.log('Sou maior de idade');
} else if ((minhaIdade > 0 && minhaIdade > 14) && minhaIdade < 18) {
  console.log('Sou adolescente');
} else {
  console.log('Sou criança');
}

Como trabalhar com switch case?

Estrutura:

switch (variavel_verificada){
  case(valor_variavel_1):
    console.log("informação 1")
    break
  case(valor_variavel_2):
    console.log("informação 2")
    break
  default:
    console.log("Outro valor")
}

O break serve para parar o swicth caso o valor esperado seja alcançado
O default serve como um escape do programa, caso nenhuma das opções seja a esperada
Pode ter mais de um valor dentro da case

case(valor_variavel_1):
case(valor_variavel_2):
  console.log("Informação 1 e 2")
  break

Dentro do case pode ter várias outras coisas, como ifs, switchs, for, ....

Como trabalhar com o laço de repetição FOR?

for(declara_variavel_inicial; declara_como_vai_parar; incrementa++){
  //Tudo que estiver dentro da chave vai ser repetido ate que o valor de parada esteja completo
}

Exemplo:

let valor = 1
let soma

for (let contador = 0; contador < 10; contador++){
  soma = valor + contador
  console.log(valor + " + " + contador + " = " + soma)
}

