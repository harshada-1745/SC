var Fibonacci = /** @class */ (function () {
    function Fibonacci(terms) {
        this.terms = terms;
    }
    Fibonacci.prototype.printSeries = function () {
        var n1 = 0;
        var n2 = 1;
        console.log("Fibonacci Series:");
        for (var i = 1; i <= this.terms; i++) {
            console.log(n1);
            var next = n1 + n2;
            n1 = n2;
            n2 = next;
        }
    };
    return Fibonacci;
}());
// Creating object
var obj = new Fibonacci(7);
obj.printSeries();
