const fs = require('fs').promises;
const arquivo = './simpsons.json';

fs.readFile(arquivo, 'utf-8')
.then((text) => JSON.parse(text))
.then((sp) => sp.map(({id , name}) => `${id} - ${name}`))
.then((st) => console.log(st))


const getSimpson = async () => {
  const simpson = await fs
  .readFile(arquivo, 'utf-8')
  .then((text) => JSON.parse(text))
  .then((sp) => sp.map(({id ,name}) => `${id} - ${name}`))
  .then((res) => console.log(res));
}

getSimpson();

