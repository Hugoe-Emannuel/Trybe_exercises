const readline = require('readline-sync');

const npms = [
  { name: "IMC", script: './imc.js' },
  { name: "Velocidade", script: './velocidade.js' },
  { name: "Sorteio", script: './sorteio.js' },
];

let selected = npms.map((npm, index) => `${ index + 1 } - ${ npm }`);

selected.unshift("Escolha um numero para executar");

selected = selected.join('\n');

const question = readline.questionInt() -1;

const script = npms[question];

if (!script) return console.log('Escolha um numero valido');

require(script.script)
