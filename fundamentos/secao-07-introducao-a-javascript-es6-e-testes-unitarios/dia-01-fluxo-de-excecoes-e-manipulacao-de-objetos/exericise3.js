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


const addNewKey = (obj,key,value) => {
    obj[key] = value;
};
addNewKey(lesson2, 'turno','noite');

const objectSize = (obj) => {
    console.log(Object.keys(obj).length);
}
objectSize(lesson2);

const valueList = (obj) => {
    console.log(Object.values(obj));
}
valueList(lesson2);

const allLessons = Object.assign({},{lesson1, lesson2, lesson3});
console.log(allLessons)


