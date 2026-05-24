"use strict";
// Centralização de imports para facilitar a exportação
// Deixa o código mais limpo na importação do main
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipCodeValidator = exports.EmailValidator = void 0;
const emailValidator_1 = require("./emailValidator");
Object.defineProperty(exports, "EmailValidator", { enumerable: true, get: function () { return emailValidator_1.EmailValidator; } });
const zipCodeValidator_1 = require("./zipCodeValidator");
Object.defineProperty(exports, "ZipCodeValidator", { enumerable: true, get: function () { return zipCodeValidator_1.ZipCodeValidator; } });
