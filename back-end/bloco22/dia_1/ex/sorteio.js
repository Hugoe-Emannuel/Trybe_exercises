const readline = require('readline-sync');

const responseLog = (number, response) => {
  if (response !== number) return console.log(`O nume gerado Foi ${number} e voce digitou ${response}, não foi dessa vez `);

  return console.log(`O nume gerado Foi ${number} e voce mandou ${response}, Parabéns, número correto! `)
};

const playAgain = () => {
  const getRandomNumber = Math.floor(Math.random() * 10);
  const response = readline.questionInt("Digite seu numero");

  responseLog(getRandomNumber, response);

  const wantToPlayAgain = readline.question("Quer joga novamente ? (s/n) ");

  if (wantToPlayAgain !== 's') return console.log("Adeus");
  playAgain();
}

playAgain();
