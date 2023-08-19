// Exercício 1

const bool1 = true
const bool2 = false
const bool3 = !bool2 // true

let resultado = bool1 && bool2
console.log("a. ", resultado) // a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // b. false 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // c. true

console.log("d. ", typeof resultado) // d. boolean 

// Exercício 2 

let primeiroNumero = prompt("Digite um numero!") 
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) // vai concatenar 

/* Exercício 3. Solução: colocar Number() no prompt */

