export class Main {

    berlinClock(minutes){ 
        return this.getSimpleMinute(minutes) + this.getFiveMinutes(minutes);
    }

    getSimpleMinute(minutes){
        return "Y".repeat(minutes) + "0".repeat(Math.abs(4-minutes));
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
}