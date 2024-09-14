# Fundamentos da Programação:

### Linguagem de Programação

É a maneira que usamos para dar instrução ao computador. Como um lego, você irá utilizar peças para criar algoritmos, ou seja, para resolver problemas.

> **Algoritmos:** Sequência de passos lógica e finita para resolução de um problema.

`==>` É importante salientar que para este Bootcamp estamos usando JavaScript e muito do que aprenderemos aqui pode ser replicado em muitas outras linguagens, porém cada uma delas possui suas peculiaridades, às vezes comuns em outras linguagens, às vezes exclusivas.
JS, como tantas outas linguagens é "Case Sensitive", isto é, ela diferencia maiúsculas de minúsculas na hora de codar.

### Fases da resolução de um problema:

- [x] Coletar os dados
- [x] Processar os dados (manipular, alterar...)
- [x] Apresentar os dados

## Peças de uma linguagem:

- [x] 1. Comentários: //conteúdo e /_bloco de conteúdo_/
- [x] 2. Tipos de dados (string, number, boolean)
- [x] 3. Declaração de variáveis (let, const)
  - Escopo
  - Variáveis
- [x] 4. Operadores (atribuição, concatenação, matemáticos, lógicos)
- [x] 5. Estrutura de Dados (functions, object, array)
  - Criar, passar argumentos
  - Executar
  - funcition named / arrow function
- [] 6. Controle de fluxo (if/else)
- [] 7. Estrutura de repetição (for, while)

## 1. Comentários

// Hello, World! - Aqui utilizamos duas barras para comentar
/_ Para comentar um bloco inteiro usamos => /_ _/
/_ Comentários na medida certa são importantes dentro do código para poder trazer clareza e justificar determinados usos e trechos de códigos utilizados. \*/

vejamos um trecho de código:

```js
console.log("Hello, World!");
"console" - Objeto;
(".log('Hello, World!')");
```

Função: uma caixinha com algumas ou várias informações dentro desta caixinha, lá dentro ela coleta este dado, processa e posteriormente ela apresenta. Nós não vemos todo este processo, mas é desta forma que ocorre. (veremos isto mais tarde).
=> nesta função usamos um tipo de dado chamado "string", que é conjunto de letras, ou seja, textos

\*/

## 2. Tipos de Dados

- [x] Strings (textos): "", '', ``;
- [x] Number: 2, 15.7, -54.1
- [] Boolean: false/true

## 3. Variáveis e Escopos:

- **As variáveis** são elementos na programação que recebem valores como, por exemplo, uma mensagem: "Hello, World!", a fim de serem utilizados novamente, sem que tenhamos que declará-los, novamente. Ao invés disso, chamamos apenas o nome, cujo qual o valor foi atribuido. <br><br> <p> **Existem dois tipos de declaração de variáveis:** a **"variável"**, propriamente dito e a **"constante"**, **em JS: 'let' e 'const'.**
  A diferença entre elas, como o nome sugere, consiste em sua flexibilidade a mudanças. `let` é utilizado para valores que queremos permitir futuras mudanças, diferente de `const`, que é a declaração que usamos quando desejamos manter seu valor sem alterações ao longo do programa.

- O **escopo** em programação define onde uma variável ou função pode ser **acessada** ou utilizada no código. Existem dois tipos principais: **escopo global**, onde variáveis/funções são **acessíveis em todo o programa**, e **escopo local**, onde **são acessíveis apenas dentro de um bloco específico**, como uma função e usamos { } para delimitar este escopo. <br>
  É interessante observar que, dentro de um escopo local, podemos utilizar declarar uma constante de mesmo nome, com valores diferentes em relação a constante declarada no escopo global, por exemplo:

```js
const mensagem = "Olá, Mundo!";
{
  const mensagem = "Hello, World!";
  console.log(mensagem);
}
console.log(mensagem);
```

Embora a const 'mensagem' já tenha sido declarada, no escopo global, com o valor "Olá, Mundo!", dentro do escopo local foi realizada uma nova declaração que está isolada do escopo global evitando conflitos.

```js
const mensagem = "Olá, Mundo!";
{
  const mensagem = "Hello, World!";
  console.log(mensagem);
}
console.log(mensagem);
```

## 4. Operadores

- **Operador de atribuição de valor**: `=`

  Diferente da matemática, na programação este sinal não representa igualdade, pois existe outra forma para isso. Aqui, o sinal `=` representa **atribuição**, com ele fazemos a declaração de variáveis.

- **Operador de igualdade**: `==` e `===`

  O operador `==` compara os valores, enquanto o `===` compara tanto os valores quanto os tipos. Ou seja, `===` é considerado o **operador de igualdade estrita**.

  Exemplo:

  ```js
  5 == "5"; // true (comparação de valor)
  5 === "5"; // false (comparação de valor e tipo)
  ```

- **Operador de adição/concatenação**: `+`

Utilizado para somar dois números ou concatenar strings.

Exemplo:

```js
5 + 3; // 8 (soma)
"Hello" + " World"; // 'Hello World' (concatenação de strings)
```

- **Operador de subtração**: `-`

Utilizado para subtrair um valor de outro.

Exemplo:

```js
10 - 4; // 6
```

- **Operador de multiplicação**: `*-*`

Utilizado para multiplicar dois valores.

Exemplo:

```js
4 * 3; // 12
```

- **Operador de divisão**: `/`

Utilizado para dividir um número por outro.

Exemplo:

```js
8 / 2; // 4
```

- **Operador de módulo**: `%`

Retorna o resto da divisão de dois números. Muito utilizado para verificar se um número é par ou ímpar.

Exemplo:

```js
10 % 3; // 1 (resto da divisão)
```

- **Operador de incremento**: `++`

Aumenta o valor de uma variável em 1.

Exemplo:

```js
let x = 5;
x++; // x passa a valer 6
```

- **Operador de decremento**: `--`

Diminui o valor de uma variável em 1.

Exemplo:

```js
let y = 5;
y--; // y passa a valer 5
```

- **Operadores lógicos**: `&&`, `||`, `!`

`&&` (E lógico): Retorna true se ambas as expressões forem verdadeiras.<br>
`||` (OU lógico): Retorna true se pelo menos uma das expressões for verdadeira.<br>
`!` (NÃO lógico): Inverte o valor lógico de uma expressão.<br>
Exemplo:

```js
true && false; // false
true || false; // true
!true; // false
```

- **peradores relacionais**: `>`, `<`, `>=`, `<=`

Comparadores usados para verificar relações entre valores numéricos.

Exemplo:

```js
5 > 3; // true
4 <= 2; // false
```

## 5. Estrutura de dados

**Definição de Estrutura de Dados**

Estruturas de dados são formas de organizar e armazenar dados de maneira eficiente para que possam ser utilizados e manipulados de forma eficaz. Elas são fundamentais em programação para otimizar o uso de memória e melhorar o desempenho das aplicações.

**Tipos de Estruturas de Dados**

- **Estáticas**: Têm tamanho fixo, como arrays de tamanho definido.
- **Dinâmicas**: Podem crescer ou diminuir durante a execução do programa, como listas encadeadas.

### 5.1 Arrays

Um array é uma lista ordenada de valores, onde cada valor é acessado por um índice numérico que começa em 0. Arrays são usados para armazenar coleções de dados e manipular listas de itens.

Sintaxe:

```js
const nomeDoArray = [valor1, valor2, valor3, ...];
```

Exemplo prático:

```js
const frutas = ["maçã", "banana", "laranja"];

console.log(frutas[0]); // Output: maçã
console.log(frutas.length); // Output: 3

// Adicionando um novo elemento
frutas.push("manga");
console.log(frutas); // Output: ['maçã', 'banana', 'laranja', 'manga']
```

### 5.2 Objetos

Um objeto é uma coleção de propriedades, onde cada propriedade é uma associação entre uma chave (ou nome) e um valor. Objetos permitem agrupar dados relacionados e são uma estrutura fundamental em JavaScript.

Sintaxe:

```js
const nomeDoObjeto = {
  chave1: valor1,
  chave2: valor2,
  // mais pares chave-valor
};
```

Exemplo prático:

```js
const pessoa = {
  nome: "Matheus",
  idade: 25,
  saudacao: function () {
    return `Olá, meu nome é ${this.nome}`;
  },
};

console.log(pessoa.nome); // Output: Matheus
console.log(pessoa.saudacao()); // Output: Olá, meu nome é Matheus
```

#### 5.2.1 Criação e Manipulação de Objetos:

Criar e manipular objetos envolve definir um novo objeto e modificar suas propriedades e valores. Objetos são criados para agrupar dados relacionados e podem ser manipulados para atualizar ou acessar suas propriedades.

Podemos adicionar, modificar ou remover propriedades.

```js
const carro = {
  marca: "Ford",
  modelo: "Fusion",
  ano: 2022,
};

carro.cor = "azul"; // Adiciona a propriedade cor
carro.ano = 2023; // Modifica a propriedade ano
delete carro.modelo; // Remove a propriedade modelo
console.log(carro); // Output: { marca: 'Ford', ano: 2023, cor: 'azul' }
```

#### 5.2.2 Atributos e Métodos

Em objetos, atributos são as propriedades que armazenam dados, enquanto métodos são funções associadas ao objeto que realizam operações com esses dados.

**Atributos**: São pares chave-valor que armazenam informações dentro do objeto.

```js
const pessoa = {
  nome: "Ana",
  idade: 30,
};
```

**Métodos**: São funções definidas dentro de um objeto que podem manipular e acessar os atributos do objeto.

```js
const nomeDoObjeto = {
  chave1: valor1,
  metodoNome: function () {
    // corpo do método
  },
};
```

Exemplo prático:

```js
const pessoa = {
  nome: "Ana",
  idade: 30,
  saudacao: function () {
    return `Olá, meu nome é ${this.nome}`;
  },
};

console.log(pessoa.saudacao()); // Output: Olá, meu nome é Ana
```

#### 5.2.3 Acesso a Propriedades de Objetos

Acessar propriedades de objetos permite ler ou modificar os valores armazenados nas propriedades.

**Acesso por notação de Ponto**: `const valor = objeto.propriedade;`

Por exemplo:

```js
const pessoa = {
  nome: "Ana",
  idade: 30,
};

console.log(pessoa.nome); // Output: Ana
```

**Acesso por Notação de Colchetes**:
Permite acessar propriedades usando strings como chaves. Útil quando a chave é dinâmica ou não é uma string válida para a notação de ponto. `const valor = objeto['propriedade'];`

```js
const pessoa = {
  nome: "Ana",
  idade: 30,
};

console.log(pessoa["idade"]); // Output: 30
```

**Modificação de Propriedades**: `objeto.propriedade = novoValor;`

```js
const pessoa = {
  nome: "Ana",
  idade: 30,
};

pessoa.idade = 31;
console.log(pessoa.idade); // Output: 31
```

Esses conceitos são fundamentais para trabalhar com objetos em JavaScript e permitem uma ampla gama de manipulações e operações sobre dados estruturados.

### 5.3 Funções

#### 5.3.1 Função Nomeada (Named Function):

Uma função nomeada é uma função que é declarada com um nome específico. Este nome pode ser usado para chamar a função em qualquer lugar do código após sua declaração.

Sintaxe:

```js
function nomeDaFuncao(param1, param2) {
  // corpo da função
  return resultado;
}
```

Exemplo prático:

```js
function soma(a, b) {
  return a + b;
}

console.log(soma(2, 3)); // Output: 5
```

#### 5.3.2 Função Arrow (Arrow Function)

Uma função arrow é uma sintaxe concisa para escrever funções. Ela também não tem seu próprio this, o que é útil para passar funções como argumentos em callbacks.

Sintaxe:

```js
const nomeDaFuncao = (param1, param2) => {
  // corpo da função
  return resultado;
};
```

Exemplo prático:

```js
const multiplicar = (a, b) => a * b;

console.log(multiplicar(2, 3)); // Output: 6
```

## 7. Estrutura de Repetição

Estruturas de repetição (ou loops) em JavaScript permitem executar um bloco de código várias vezes, de acordo com uma condição. As principais são:

### 7.1 While: foco do bootcamp

Continua executando enquanto a condição for verdadeira.

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### 7.2 For:

for: Ideal para quando você sabe o número exato de repetições.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### 7.3 Do While:

Similar ao while, mas garante que o código seja executado ao menos uma vez.

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

## 08. Condicionais

Condicionais permitem que você execute diferentes blocos de código com base em condições específicas. Aqui estão os principais tipos:

`if`: Executa um bloco de código se a condição for verdadeira.

```js
let idade = 18;
if (idade >= 18) {
  console.log("Você é maior de idade.");
}
```

`if`... `else`: Executa um bloco de código se a condição for verdadeira e outro bloco se for falsa.

```js
let idade = 16;
if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

`if`, `else if` e `else`: Permite testar múltiplas condições.

```js
let nota = 75;
if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Bom");
} else {
  console.log("Precisa melhorar");
}
```

`switch`: Executa um bloco de código com base em diferentes valores possíveis de uma expressão.

```js
let dia = 3;
switch (dia) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  default:
    console.log("Dia inválido");
}
```

> **Dicas:**
>
> - `break` no `switch` evita que o código continue executando os casos seguintes.
> - Sempre cuide para não criar condições que nunca são satisfeitas (loop infinito) e garantir que a lógica esteja clara.
