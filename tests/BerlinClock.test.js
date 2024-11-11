import { Main } from '../src/Berlin-clock.js';

describe("Berlin clock kata project", function() {
    let main = new Main();

    it("BerlinClock should return 1 when given 1", function() {
        const result = main.berlinClock(1);
        expect(result).toBe("2");
    });


});

