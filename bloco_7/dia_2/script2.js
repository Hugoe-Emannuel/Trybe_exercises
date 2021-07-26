const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const morningShif = (obj, key, value) => {
  obj[key] = value;
  return obj;
}
morningShif(lesson2, 'turno', 'manha')


const listKey = (obj) => {
  return Object.keys(obj);
}
listKey(lesson3)


const objectSize = (obj) => {
  return Object.keys(obj).length;
}
objectSize(lesson1)

const objectValue = (obj) => {

  return Object.values(obj);
}
objectValue(lesson3)

const allLessons = Object.assign({}, {
  lesson1,
  lesson2,
  lesson3
});


const totalStudents = () => {

  let students;
  students = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes +
    allLessons.lesson3.numeroEstudantes;
  return students
}

totalStudents();