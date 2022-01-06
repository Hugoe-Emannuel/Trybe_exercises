const readline = require('readline-sync');

const calculationImc = () => {
  const weight = readline.questionFloat('Qual o seu peso? ');
  const height = readline.questionInt('Qual a sua altura? ');
  const imc = (weight / Math.pow(height / 100, 2)).toFixed(2);

  if (imc < 18.5) {
    return console.log(`IMC: ${imc}, Abaixo do peso (magreza)`);
  } 

   if (imc > 18.5 && imc <= 24.9 ) {
   return console.log(`IMC: ${imc}, Peso normal `);
  }

  if (imc >= 25.0 && imc <= 29.9 ) {
    return console.log(`IMC: ${imc}, Acima do peso (sobrepeso)`);
  }

  if (imc >= 30.0 && imc <= 34.9) {
    return console.log(`IMC: ${imc}, Obesidade grau I `);
  }

  if (imc >= 35.0 && imc <= 39.9) {
    return console.log(`IMC: ${imc}, Obesidade grau II`);
  }

  if (imc > 40.0) {
    return console.log(`IMC ${imc}, Obesidade graus III e IV`);
  }
}

calculationImc();