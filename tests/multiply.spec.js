const { multiply } = require('./../calculator.js');
describe('Multiply', () => {
    test("should divide two positive integers correctly", () => {
        const result = multiply(1, 2);
        expect(result).toBe(2);
      });
      test("el resul debe ser multiplicar un entero negativo y uno positivo", () => {
        const result = multiply(-1, 2);
        expect(result).toBe(-2);
      });
      test("el resul debe ser 0 si alguno de los dos es cero", () => {
        const result = multiply(0, 2);
        expect(result).toBe(0);
      });
  });