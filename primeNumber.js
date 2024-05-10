const checkPrimeNumber = (num) => {
    // We need to handle the case where num is less than or equal to 1
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

    // If the loop completes without finding divisors, then num is prime
    console.log("IS PRIME");
}

checkPrimeNumber(14);
