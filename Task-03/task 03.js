const start = 2;
const n = parseInt(prompt("Enter a number: "));

for (let number = start; number <= n; number++) {
    if (number > 1) {
        let isPrime = true;
        for (let i = start; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(number);
        }
    }   
}