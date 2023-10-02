let numero = prompt('Digite o primeiro numero')
let numero2 = prompt('Digite o segundo numero')

if (isNaN(numero) || isNaN(numero2)) {
  alert('Não é numero')
} else {
  if (numero > numero2) {
    console.log(`O numero ${numero} é maior que ${numero2}`)
  } else if (numero < numero2) {
    console.log(`O numero ${numero2} é maior que ${numero}`)
  } else {
    console.log(`O numero ${numero} é igual ao ${numero2}`)
  }
}