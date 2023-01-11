import validator from 'validator';
import "./style.css";

const input = document.querySelector('input');
const select = document.querySelector('select');
const button = document.querySelector('button');
const returnPhrase = document.querySelector('p');

button.addEventListener('click', (event) => {
    event.preventDefault();
    const campos = {
        cpf: validator.isTaxID(input.value, 'pt-BR'),
        data: validator.isDate(input.value, 'DD/MM/YYYY'),
        email: validator.isEmail(input.value),
        telefone: validator.isMobilePhone(input.value, 'pt-BR'),
        maiuscula: validator.isUppercase(input.value),
      };
      returnPhrase.innerHTML = `A validação retornou ${campos[select.value]}`;
});