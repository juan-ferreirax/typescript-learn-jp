"use strict";
// Arquivo main
Object.defineProperty(exports, "__esModule", { value: true });
const validators_1 = require("./validators");
const email = 'google@gmail.com';
let validator = new validators_1.EmailValidator;
let result = validator.isValid(email);
console.log(`O email ${email} é válido? ${result}`);
const cep = '39200-542';
let cepValidator = new validators_1.ZipCodeValidator;
let cepResult = cepValidator.isValid(cep);
console.log(`O CEP ${cep} é válido? ${cepResult}`);
