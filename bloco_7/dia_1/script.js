const testingScope = (escopo) => {
  let ifScope;
  let elseScope;
  if (escopo === true) {
    ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const numOrder = () => oddsAndEvens.sort((n1, n2) => n1 - n2);
console.log(`oddsAndEvens ${numOrder([13, 3, 4, 10, 7, 2])}`);


const fatorial = (num) => {
  let res = 1;

  for (let i = 1; i <= num; i += 1) {
    res *= i;
  }
  return res;
}
console.log(fatorial(5));

const maiorPalavra = (frase) => {
  let palavra = frase.split(' ');
  let pMaior = ' ';
  for (let i = 0; i < palavra.length; i += 1) {
    if (palavra[i].length > pMaior.length) {
      pMaior = palavra[i];
    }
  }
  return pMaior;
}
console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"));