function printId(id: number | string) {
    if (typeof id === "string") {
      return console.log(id.toUpperCase());
    }
    return console.log(id);
}
  
printId(101);

//Type Aliases

type PersonalInfo = {
    name: string;
    birthYear: number;
};

function printPersonalInfo(data: PersonalInfo) {
    console.log(`${data.name} was born in ${data.birthYear}.`);
  }
  
  printPersonalInfo({ name: 'Rogerinho', birthYear: 1978});

// type PersonalInfo = {
//   name: string;
//   birthYear: number | string;
// };

// type ID = number | string;
