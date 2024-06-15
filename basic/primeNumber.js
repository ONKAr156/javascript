const checkPrimeNumber = (num) => {
    if (num <= 1) {
        console.log("Not a prime number");
        return;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log("Not a prime number");
            return;
        }
    }

    console.log("IS PRIME");
}

checkPrimeNumber(13);
