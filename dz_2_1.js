function primeNumbers (n) {
    const pn = [2];
    if (n===1) {
        return pn;
    } else {
        for (let i=3; pn.length<n; i++) {
            for (let a=2; a<=i; a++) {
                if (i % a === 0 && i / a > 1) {
                    break;
                } else if ((i % a === 0 && i / a === 1)) {
                    pn.push(i);
                }
            }  
        }
        return pn;
    }
}


console.log(primeNumbers(process.argv[2]));