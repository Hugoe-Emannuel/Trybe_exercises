const readline = require('readline-sync');

const calculatedSpeed = () => {
  const distance = readline.questionInt('Qual a sua distancia ?');
  const time = readline.questionInt('Qual o tempo estimado ?');
  const speed = (distance / time).toFixed(2);

  console.log(`Speed: ${speed}Km`);

};

calculatedSpeed();