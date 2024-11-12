export class Main {

    berlinClock(hours,minutes, seconds){ 
        const second = this.getSeconds(seconds);
        const fiveHours = this.getFiveHours(hours);
        const simpleHour = this.getSimpleHour(hours);
        const fiveMinutes = this.getFiveMinutes(minutes);
        const simpleMinutes = this.getSimpleMinute(minutes);
        return `${second}\n${fiveHours}\n${simpleHour}\n${fiveMinutes}\n${simpleMinutes}`;
    }

    getSimpleMinute(minutes){
        const simpleMinutes = minutes % 5;
        return "Y".repeat(simpleMinutes) + "0".repeat(Math.abs(4-simpleMinutes));
    }

    getFiveMinutes(minutes) {
        const lightOn = Math.floor(minutes / 5); 
        let totalLights = ""; 

        for (let i = 0; i < lightOn; i++) {
            if ((i + 1) % 3 === 0) {  // multiple de 3 = lumiere rouge
                totalLights += "R";
            } else {
                totalLights += "Y"; 
            }
        }

        while (totalLights.length < 11) {
            totalLights += "0";
        }

        return totalLights; 
    }

    getSimpleHour(hours) {
        const simpleHour = hours % 5;
        return "R".repeat(simpleHour) + "0".repeat(Math.abs(4-simpleHour));
    }

    getFiveHours(hours) {
        const fiveHours = parseInt(hours / 5);
        return "R".repeat(fiveHours) + "0".repeat(Math.abs(4-fiveHours));
    }

    getSeconds(seconds){
        return seconds % 2 === 0 ? "R" : "0"
    }

}