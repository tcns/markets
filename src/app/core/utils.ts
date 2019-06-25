export class Utils {
    static pickRandom = (arr, size, times) => {
        let shuffled = arr.slice(0), i = arr.length, temp, index;
        while (i--) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        let resp = shuffled.slice(0, size);
        for (i = 0; i < times; i++) {
            resp = resp.concat(resp.slice());
        }
        return resp;
    }
}
