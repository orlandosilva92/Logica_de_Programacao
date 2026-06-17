let letra = 'c';
if (
  letra === 'a' ||
  letra === 'e' ||
  letra === 'i' ||
  letra === 'o' ||
  letra === 'u'
) {
  console.log('A letra escolhida é uma vogal');
} else {
  console.log('A letra escolhida é uma consoante');
}
//----------------------------------------------------------------------
let primeiraNota = 5,
  segundaNota = 7;
let media = (primeiraNota + segundaNota) / 2;

if (media < 7) {
  console.log('Sua média foi ' + media + '. Voce esta reprovado.');
} else if (media >= 8 && media <= 9) {
  console.log('Sua média foi ' + media + '. Voce foi aprovado por média.');
} else {
  console.log('Sua média foi ' + media + '. Aprovado com distinção.');
}
//----------------------------------------------------------------------------
let numeroA = 2,
  numeroB = 3,
  numeroC = 1;
if (numeroA > numeroB && numeroA > numeroC) {
  console.log('O primeiro número é o maior');
} else if (numeroB > numeroA && numeroB > numeroC) {
  console.log('O segundo número é o maior');
} else if (numeroC > numeroB && numeroC > numeroA) {
  console.log('O terceiro número é o maior');
}
//Há outras comparações a ser feitas acima, mas vou deixa até esse nível
//----------------------------------------------------------------------------
let porcentagemA = 0.2;
let porcentagemB = 0.15;
let porcentagemC = 0.1;
let porcentagemD = 0.05;
let aumento;
let salarioAntigo;
let salarioNovo;

salarioAntigo = 701;
if (salarioAntigo <= 280) {
  aumento = salarioAntigo * porcentagemA;
  salarioNovo = salarioAntigo + aumento;
}else if(salarioAntigo > 280 && salarioAntigo <= 700) {
  aumento = salarioAntigo * porcentagemA;
  salarioNovo = salarioAntigo + aumento;
}else if(salarioAntigo > 700 && salarioAntigo <= 1500){
  aumento = salarioAntigo * porcentagemA;
  salarioNovo = salarioAntigo + aumento;
}else{
  aumento = salarioAntigo * porcentagemA;
  salarioNovo = salarioAntigo + aumento;
}

console.log('Salario antes do reajusta R$ ' + salarioAntigo);
console.log('Percentual de aumento aplicado ' + porcentagemA);
console.log('Valor do aumento R$ ' + aumento);
console.log('Seu novo salário é R$ ' + salarioNovo);

