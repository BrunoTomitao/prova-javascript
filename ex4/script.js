const nome = prompt("Digite seu nome:");
const anoAtual = new Date().getFullYear();
const nasci = prompt("Digite sua idade:");

if (!isNaN(nasci)) {
  const anoNascimento = parseFloat(nasci);
  const idadeCalculada = anoAtual - anoNascimento;
  alert(`Você nasceu em ${idadeCalculada}`);
  if (idadeCalculada % 2 == 0) {
    console.log('O numero ' + idadeCalculada + ' é par')
} else {
    console.log('O numero ' + idadeCalculada + ' é impar')
}
} else {
  alert("Digite uma idade valida.");
}