let num1;
let num2;
let num3;

  for ( let i = 0; i <= 3 ; i += 1 ) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    if (i === 0) {
      num1 = randomNumber;
    } 
    if (i === 2) {
      num2 = randomNumber;
    }
    if (i === 3) {
      num3 = randomNumber;
    }
  };

const calculo = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof num1 !== 'number'|| typeof num2 !== 'number'|| typeof num3 !== 'number') reject(new Error("Informe apenas números"));
    const result = (num1 + num2) * num3;
    if (result < 50) reject(new Error("Valor muito baixo"));
    resolve(result);
  });
  return promise;
};

calculo(num1,num2,num3)
.then((result) => console.log(`resultado: ${result}`))
.catch((err) => console.log(`erro: ${err.message}`));