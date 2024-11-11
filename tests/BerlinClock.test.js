import { Main } from '../src/Berlin-clock.js';

describe("Berlin clock kata project", function() {
    let main = new Main();
    // Etape 1

    it("BerlinClock should return 0000 when given 00:00:00", function() {
        const result = main.getSimpleMinute(0);
        expect(result).toBe("0000");
    });

    it("BerlinClock should return Y000 when given 00:01:00", function() {
        const result = main.getSimpleMinute(1);
        expect(result).toBe("Y000");
    });

    it("BerlinClock should return YY00 when given 00:02:00", function() {
        const result = main.getSimpleMinute(2);
        expect(result).toBe("YY00");
    });

    it("BerlinClock should return YYY0 when given 00:03:00", function() {
        const result = main.getSimpleMinute(3);
        expect(result).toBe("YYY0");
    });

    it("BerlinClock should return YYYY when given 00:04:00", function() {
        const result = main.getSimpleMinute(4);
        expect(result).toBe("YYYY");
    });

    //Etape 2

    it("BerlinClock should return Y0000000000 when given 00:05:00", function() {
        const result = main.getFiveMinutes(5);
        expect(result).toBe("Y0000000000");
    });

    it("BerlinClock should return YYR00000000 when given 00:15:00", function() {
        const result = main.getFiveMinutes(15);
        expect(result).toBe("YYR00000000");
    });

    it("BerlinClock should return YYRYYR00000 when given 00:30:00", function() {
        const result = main.getFiveMinutes(30);
        expect(result).toBe("YYRYYR00000");
    });

    it("BerlinClock should return YYRYYRYY000 when given 00:40:00", function() {
        const result = main.getFiveMinutes(40);
        expect(result).toBe("YYRYYRYY000");
    });

    //Etape 3


    //Etape 4
    //Etape 5
    //Etape 6

});