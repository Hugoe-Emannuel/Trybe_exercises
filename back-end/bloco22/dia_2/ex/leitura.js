const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
.then((text) => JSON.parse(text))
.then((sp) => sp.map(({id , name}) => `${id} - ${name}`))
.then((st) => console.log(st))


const getSimpson = async () => {
  const simpson = await fs
  .readFile('./simpsons.json', 'utf-8')
  .then((text) => JSON.parse(text))
  .then((sp) => console.log(sp));
}

getSimpson();

