export class Main {

    berlinClock(time){ 
        const second = this.getSeconds(getSecond(time));
        const fiveHours = this.getFiveHours(getHours(time));
        const simpleHour = this.getSimpleHour(getHours(time));
        const fiveMinutes = this.getFiveMinutes(getMinutes(time));
        const simpleMinutes = this.getSimpleMinute(getMinutes(time));
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

    // convertor
    //23:45:54 -> 
    getMinutes(time) {
        return parseInt(time.split(':')[1])
    }

    getHours(time) {
        return parseInt(time.split(':')[0])
    }

    getSecond(time) {
        return parseInt(time.split(':')[2])
    }


}