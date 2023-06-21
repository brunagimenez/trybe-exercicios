console.log('Hello, TypeScript!');

const firstName: string = "Joel";
const age: number = 38;
const brazilian: boolean = false;

function greet(name: string): void {
    console.log(`Olá, ${name.toUpperCase()}!`);
  }

function getFavoriteNumber(): number {
    return 26;
}

function printPersonalInfo(data: { name: string; birthYear: number }) {
    console.log(`${data.name} was born in ${data.birthYear}.`);
}

const evenNumbers: number[] = [2, 4, 6];
const vowel: string[] = ['a', 'e', 'i', 'o', 'u'];
const booleanValues: boolean[] = [true, false];

evenNumbers.push(8) // Funciona

printPersonalInfo({ name: 'Rogerinho', birthYear: 1978 });

greet(firstName);