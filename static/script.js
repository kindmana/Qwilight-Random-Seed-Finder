class DotNetRandom {
    constructor(seed) {
        this.seedArray = new Array(56);
        this.inext = 0; this.inextp = 21;
        let subtraction = (seed === -2147483648) ? 2147483647 : Math.abs(seed);
        let mj = 161803398 - subtraction;
        this.seedArray[55] = mj;
        let mk = 1;
        for (let i = 1; i < 55; i++) {
            let ii = (21 * i) % 55;
            this.seedArray[ii] = mk;
            mk = mj - mk;
            if (mk < 0) mk += 2147483647;
            mj = this.seedArray[ii];
        }
        for (let k = 1; k < 5; k++) {
            for (let i = 1; i < 56; i++) {
                this.seedArray[i] -= this.seedArray[1 + (i + 30) % 55];
                if (this.seedArray[i] < 0) this.seedArray[i] += 2147483647;
            }
        }
    }
    next(min, max) {
        let range = max - min;
        return Math.floor(this.internalSample() * range) + min;
    }
    internalSample() {
        if (++this.inext >= 56) this.inext = 1;
        if (++this.inextp >= 56) this.inextp = 1;
        let retVal = this.seedArray[this.inext] - this.seedArray[this.inextp];
        if (retVal === 2147483647) retVal--;
        if (retVal < 0) retVal += 2147483647;
        this.seedArray[this.inext] = retVal;
        return retVal * (1.0 / 2147483647.0);
    }
}

function findSeed() {
    const inputVal = document.getElementById('inputVal');
    const input = inputVal.value.trim();
    const resDiv = document.getElementById('result');
    
    if (!input) return;

    const n = input.length;
    const hasDuplicate = new Set(input).size !== n;
    
    if (n > 9 || hasDuplicate || isNaN(input)) {
        resDiv.innerText = "잘못된 배치입니다. 다시 입력해 주세요";
        return;
    }

    const target = Array.from({length: n}, (_, i) => i + 1);
    resDiv.innerText = "탐색 중...";

    setTimeout(() => {
        let found = false;
        for (let seed = 0; seed < 2147483647; seed++) {
            let rng = new DotNetRandom(seed);
            let current = input.split('').map(Number);

            for (let i = 0; i < n - 1; i++) {
                let j = rng.next(i, n);
                [current[i], current[j]] = [current[j], current[i]];
            }

            if (current.every((v, idx) => v === target[idx])) {
                resDiv.innerText = "찾은 시드: " + seed;
                found = true;
                break;
            }
        }
        if (!found) resDiv.innerText = "시드를 찾지 못했습니다.";
    }, 50);
}
