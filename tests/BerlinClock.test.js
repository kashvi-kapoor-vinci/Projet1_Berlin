import { Main } from '../src/Berlin-clock.js';

describe("Berlin clock kata project", function() {
    let main = new Main();
    // Etape 1

    it("BerlinClock should return 0000 when given 00:00:00", function() {
        const result = main.getSimpleMinute("00:00:00");
        expect(result).toBe("0000");
    });

    it("BerlinClock should return Y000 when given 00:01:00", function() {
        const result = main.getSimpleMinute("00:01:00");
        expect(result).toBe("Y000");
    });

    it("BerlinClock should return YY00 when given 00:02:00", function() {
        const result = main.getSimpleMinute("00:02:00");
        expect(result).toBe("YY00");
    });

    it("BerlinClock should return YYY0 when given 00:03:00", function() {
        const result = main.getSimpleMinute("00:03:00");
        expect(result).toBe("YYY0");
    });

    it("BerlinClock should return YYYY when given 00:04:00", function() {
        const result = main.getSimpleMinute("00:04:00");
        expect(result).toBe("YYYY");
    });
    
    //Etape 2

    it("BerlinClock should return Y0000000000 when given 00:05:00", function() {
        const result = main.getFiveMinutes("00:05:00");
        expect(result).toBe("Y0000000000");
    });

    it("BerlinClock should return YYR00000000 when given 00:15:00", function() {
        const result = main.getFiveMinutes("00:15:00");
        expect(result).toBe("YYR00000000");
    });

    it("BerlinClock should return YYRYYR00000 when given 00:30:00", function() {
        const result = main.getFiveMinutes("00:30:00");
        expect(result).toBe("YYRYYR00000");
    });

    it("BerlinClock should return YYRYYRYY000 when given 00:40:00", function() {
        const result = main.getFiveMinutes("00:40:00");
        expect(result).toBe("YYRYYRYY000");
    });

    //Etape 1 + 2
    it("BerlinClock should return R:0000:0000:YYR00000000:Y000 when given 00:16:00", function() {
        const result = main.berlinClock("00:16:00");
        expect(result).toBe("R\n0000\n0000\nYYR00000000\nY000");
    });

    it("BerlinClock should return R:0000:0000:YYRYYRY0000:YYYY when given 00:39:00", function() {
        const result = main.berlinClock("00:39:00");
        expect(result).toBe("R\n0000\n0000\nYYRYYRY0000\nYYYY");
    });

    //Etape 3
    it("BerlinClock should return 0000 when given 00:00:00", function() {
        const result = main.getSimpleHour("00:00:00");
        expect(result).toBe("0000");
    });

    it("BerlinClock should return R000 when given 01:00:00", function() {
        const result = main.getSimpleHour("01:00:00");
        expect(result).toBe("R000");
    });

    it("BerlinClock should return RR00 when given 02:00:00", function() {
        const result = main.getSimpleHour("02:00:00");
        expect(result).toBe("RR00");
    });

    it("BerlinClock should return RRR0 when given 03:00:00", function() {
        const result = main.getSimpleHour("03:00:00");
        expect(result).toBe("RRR0");
    });

    it("BerlinClock should return RRRR when given 04:00:00", function() {
        const result = main.getSimpleHour("04:00:00");
        expect(result).toBe("RRRR");
    });

    //Etape 1+2+3
    it("BerlinClock should return R:0000:RR00:YYRYY000000:Y000 when given 02:26:00", function() {
        const result = main.berlinClock("02:26:00");
        expect(result).toBe("R\n0000\nRR00\nYYRYY000000\nY000");
    });

    it("BerlinClock should return R:0000:RRRR:YYRYYRYYRYY:YYYY when given 04:59:00", function() {
        const result = main.berlinClock("04:59:00");
        expect(result).toBe("R\n0000\nRRRR\nYYRYYRYYRYY\nYYYY");
    });


    //Etape 4

    it("BerlinClock should return 0000 when given 00:00:00", function() {
        const result = main.getFiveHours("00:00:00");
        expect(result).toBe("0000");
    });

    it("BerlinClock should return R000 when given 05:00:00", function() {
        const result = main.getFiveHours("05:00:00");
        expect(result).toBe("R000");
    });

    it("BerlinClock should return RR00 when given 10:00:00", function() {
        const result = main.getFiveHours("10:00:00");
        expect(result).toBe("RR00");
    });

    it("BerlinClock should return RRR0 when given 15:00:00", function() {
        const result = main.getFiveHours("15:00:00");
        expect(result).toBe("RRR0");
    });

    it("BerlinClock should return RRRR when given 20:00:00", function() {
        const result = main.getFiveHours("20:00:00");
        expect(result).toBe("RRRR");
    });
    
    //Etape 1+2+3+4

    it("BerlinClock should return R:RRR0:RR00:00000000000:0000 when given 17:00:00", function() {
        const result = main.berlinClock("17:00:00");
        expect(result).toBe("R\nRRR0\nRR00\n00000000000\n0000");
    });

    it("BerlinClock should return R:RRRR:R000:YYRYYRYYRYY:YYYY when given 21:59:00", function() {
        const result = main.berlinClock("21:59:00");
        expect(result).toBe("R\nRRRR\nR000\nYYRYYRYYRYY\nYYYY");
    });

    //Etape 6

    it("BerlinClock should return R when given even second", function(){
        const result = main.getSeconds("00:00:02");
        expect(result).toBe("R");
    });

    it("BerlinClock should return 0 when given odd second", function(){
        const result = main.getSeconds("00:00:01");
        expect(result).toBe("0");
    });

    //Etape 1+2+3+4+6

    it("BerlinClock should return R:RRR0:RR00:00000000000:0000 when given 17:00:30", function() {
        const result = main.berlinClock("17:00:30");
        expect(result).toBe("R\nRRR0\nRR00\n00000000000\n0000");
    });

    it("BerlinClock should return 0:RRRR:R000:YYRYYRYYRYY:YYYY when given 21:59:15", function() {
        const result = main.berlinClock("21:59:15");
        expect(result).toBe("0\nRRRR\nR000\nYYRYYRYYRYY\nYYYY");
    });

    //Etape 7
    

});