import { Main } from '../src/Berlin-clock.js';

describe("Berlin clock kata project", function() {
    let main = new Main();

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

