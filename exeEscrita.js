// Exercício 1

let minhaIdade = prompt("Qual sua idade?")
let idadeAmigo = prompt("Qual idade do seu melhor amigo ou amiga?")
let idadeMaior = minhaIdade > idadeAmigo
console.log("Sua idade é maior que a do seu amigo?", idadeMaior)

// Exercício 2 

let numeroPar = Number(prompt("Digite um número par"))
console.log(numeroPar % 2)
// Números pares não têm resto de divisão diferente do impar que retorna um numero diferente de 0. 

// Exercício 3 

let idadeAnos = prompt("Digite sua idade em anos")
let idadeMeses = 12 * idadeAnos
let idadeDias = 365 * idadeAnos 
let idadeHoras = (365 * 24) * idadeAnos

console.log("Sua idade em meses é", idadeMeses)
console.log("Sua idade em dias é", idadeDias)
console.log("Sua idade em horas é", idadeHoras)

// Exercício 4 

let primeiroNumero = prompt("Digite o primeiro número")
let segundoNumero = prompt("Digite o segundo número")

console.log("O primeiro número é maior que o segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro número é igual ao segundo", primeiroNumero === segundoNumero)
console.log("O primeiro número é divisível pelo segundo", (primeiroNumero % segundoNumero) == 0)
console.log("O segundo número é divisível pelo primeiro", (segundoNumero % primeiroNumero) == 0)

