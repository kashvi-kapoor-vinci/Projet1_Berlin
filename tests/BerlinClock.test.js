import { Main } from '../src/Berlin-clock.js';

describe("Berlin clock kata project", function() {

    let main = new Main();

    describe("simples minutes", function() {
    
        let main = new Main();
        //simples minutes 

        it("BerlinClock should return 0 when given 0", function() {
            const result = main.berlinClock(0);
            expect(result).toBe("0000");
        });

        it("BerlinClock should return 1 when given 1", function() {
            const result = main.berlinClock(1);
            expect(result).toBe("Y000");
        });

        it("BerlinClock should return 2 when given 2", function() {
            const result = main.berlinClock(2);
            expect(result).toBe("YY00");
        });

        it("BerlinClock should return 3 when given 3", function() {
            const result = main.berlinClock(3);
            expect(result).toBe("YYY0");
        });

        it("BerlinClock should return 4 when given 4", function() {
            const result = main.berlinClock(4);
            expect(result).toBe("YYYY");
        });
    });

    describe("five minutes blocks", function() {
    
        let main = new Main();

        //bloc de 5 minutes

        it("BerlinClock should return the correct five minutes blocks when given 5", function() {
            const result = main.berlinClock(5);
            expect(result).toBe("Y0000000000");
        });

        it("BerlinClock should return the correct five minutes blocks when given 15", function() {
            const result = main.berlinClock(15);
            expect(result).toBe("YYR00000000");
        });

        it("BerlinClock should return the correct five minutes blocks when given 30", function() {
            const result = main.berlinClock(30);
            expect(result).toBe("YYRYYR00000");
        });

        it("BerlinClock should return the correct five minutes blocks when given 40", function() {
            const result = main.berlinClock(40);
            expect(result).toBe("YYRYYRYY000");
        });
    });
});

