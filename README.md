# Lógica de Programação com JavaScript

Anotações e exercícios do meu estudo de lógica de programação, usando JavaScript. Cada aula tem um arquivo em [`src/`](src) (`aula_01.js` ... `aula_10.js`) e as anotações abaixo servem como resumo de consulta.

## Índice

- [Saída, variáveis e constantes](#saída-variáveis-e-constantes)
- [Tipos de dados](#tipos-de-dados)
- [Vetores e matrizes](#vetores-e-matrizes)
- [Operadores](#operadores)
- [Condicionais: if, else e switch](#condicionais-if-else-e-switch)
- [Laço de repetição: for](#laço-de-repetição-for)

## Saída, variáveis e constantes

**Como mostrar algo na tela?**

```js
console.log("Texto a ser mostrado");
```

**Como declarar uma variável?** Com `let`. Dá para declarar sem atribuir um valor.

```js
let nomeDaVariavel = "Dado contido na variável";
let semValor;
```

**Como criar comentários?**

```js
// comentário de uma linha

/* comentário
   de várias linhas */
```

**Como juntar um texto com uma variável?** Com o `+`.

```js
let nome = "José";
console.log("Meu nome é: " + nome);
```

**O que é uma constante?** Um dado que não varia. Usa-se `const`.

```js
const nomeDaConstante = "Dado contido na constante";
```

## Tipos de dados

| Tipo | Descrição |
|---|---|
| `String` | Texto |
| `Number` | Numérico |
| `Boolean` | Verdadeiro ou falso (`true` / `false`) |

## Vetores e matrizes

**Vetor:** armazena mais de um dado na mesma variável ou constante.

```js
let nomeDoVetor = ["dado", "contido", "no", "vetor"];
const outroVetor = ["dado", "contido", "no", "vetor"];
```

**Matriz:** organiza dados mais complexos. Pense em uma planilha do Excel: o resultado depende da linha e da coluna escolhidas.

```js
let nomeDaMatriz = [
  ["José", "Casado", 3],
  ["Renan", "Solteiro", 1],
  ["Joana", "Solteira", 1],
];
```

> **Métodos** são ações que podem ser feitas com o vetor ou a matriz.
> **Propriedades** são características deles.

## Operadores

| Tipo | Operadores |
|---|---|
| Aritméticos | `+`, `-`, `*`, `/`, `%` |
| Relacionais | `==`, `!=`, `>`, `<`, `>=`, `<=` |
| Lógicos | `&&` (e), `\|\|` (ou), `!` (não) |
| Atribuição | `=`, `+=`, `-=`, `*=`, `/=`, `%=` |
| Incremento / decremento | `++`, `--` |

## Condicionais: if, else e switch

### if

O bloco só executa se a expressão for verdadeira.

```js
let possuiOvos = true;

if (possuiOvos) {
  console.log("Vamos fazer um bolo");
}
```

### else

É o "senão": roda quando a expressão do `if` é falsa.

```js
let possuiOvos = false;

if (possuiOvos) {
  console.log("Vamos fazer um bolo");
} else {
  console.log("Vamos pedir uma pizza");
}
```

### if encadeado

```js
let minhaIdade = 13;

if (minhaIdade >= 18) {
  console.log("Sou maior de idade");
} else if (minhaIdade >= 12) {
  console.log("Sou adolescente");
} else {
  console.log("Sou criança");
}
```

### switch / case

```js
switch (variavelVerificada) {
  case valor1:
    console.log("informação 1");
    break;
  case valor2:
    console.log("informação 2");
    break;
  default:
    console.log("Outro valor");
}
```

- `break` para o `switch` quando o valor esperado é encontrado.
- `default` é a saída de escape, caso nenhuma opção seja a esperada.
- Um mesmo bloco pode atender mais de um `case`:

```js
case valor1:
case valor2:
  console.log("Informação 1 e 2");
  break;
```

Dentro de um `case` pode haver outras estruturas, como `if`, `switch` e `for`.

## Laço de repetição: for

```js
for (inicio; condicaoDeParada; incremento) {
  // repete até a condição de parada deixar de ser verdadeira
}
```

Exemplo:

```js
let valor = 1;
let soma;

for (let contador = 0; contador < 10; contador++) {
  soma = valor + contador;
  console.log(valor + " + " + contador + " = " + soma);
}
```
