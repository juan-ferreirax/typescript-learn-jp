// Arquivo main

import { EmailValidator, ZipCodeValidator } from "./validators";

const email = 'google@gmail.com';
let validator = new EmailValidator;
let result = validator.isValid(email);

console.log(`O email ${email} é válido? ${result}`);

const cep = '39200-542';
let cepValidator = new ZipCodeValidator;
let cepResult = cepValidator.isValid(cep);

console.log(`O CEP ${cep} é válido? ${cepResult}`);