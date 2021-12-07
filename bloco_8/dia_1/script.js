const newPeople = (name) => {
  let email = name.split(' ').join('_') + '@trybe.com';
  return {
    name,
    email
  };
};

const newEmployees = (chamadaFuncao) => {
  const employees = {
    id1: chamadaFuncao('pedro guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: chamadaFuncao('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: chamadaFuncao('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const check = (num, comp) => num === comp;
const lottery = (num, func) => {
  const number = Math.floor(Math.random() * (6 - 1)) + 1;
  return func(num, number) ? 'Parabéns você ganhou' : 'Tente novamente';
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkRes = (student, template) => {
  let res = 0;
  for (let i = 0; i <= student.length; i += 1) {
    if (student[i] === template[i] ) {
      res += 1;
    } else if (student[i] !== template[i] ) {
      res -= 0.5;
    } else if (student[i] === 'N.A' ) {
      res += 0;
    }
  }
  return res;
}

console.log(checkRes(STUDENT_ANSWERS, RIGHT_ANSWERS));