import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["**/node_modules/**", "**/*.js", "**/*.d.ts", "eslint.config.mjs"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      // Mantém a regra do any que você queria
      "@typescript-eslint/no-explicit-any": "error",
      "semi": ["warn", "always"],
      
      // Desliga regras chatas para um ambiente de estudos:
      "@typescript-eslint/no-empty-function": "off", // Permite funções vazias
      "prefer-const": "off",                         // Para de exigir const no lugar de let
      "@typescript-eslint/no-unused-vars": "off",    // Permite criar variáveis e não usar
      "no-useless-assignment": "off",                // Permite reatribuir valores só para testar
      "no-unassigned-vars": "off",                    // Permite declarar variável sem valor
      //"@typescript-eslint/no-inferrable-types": "warn"
    },
  }
);