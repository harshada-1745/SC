class Fibonacci {
    terms: number;

    constructor(terms: number) {
        this.terms = terms;
    }

    printSeries(): void {
        let n1 = 0;
        let n2 = 1;

        console.log("Fibonacci Series:");

        for (let i = 1; i <= this.terms; i++) {
            console.log(n1);

            let next = n1 + n2;
            n1 = n2;
            n2 = next;
        }
    }
}

// Creating object
let obj = new Fibonacci(7);
obj.printSeries();