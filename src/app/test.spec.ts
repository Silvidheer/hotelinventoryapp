import { Calculator } from "./testservice";

describe('testservice', () => {
    it('should add 2 numbers', () => {
        const service = new Calculator();
        expect(service.add(4, 8)).toBe(12);
    });
    it('should subtract 2 numbers', () => {
        const service = new Calculator();
        expect(service.add(5, 5)).toBe(0);
    })
});