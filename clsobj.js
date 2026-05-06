var Car = /** @class */ (function () {
    function Car(brand, model, isAvailable) {
        this.brand = brand;
        this.model = model;
        this.isAvailable = isAvailable;
    }
    Car.prototype.checkAvailability = function () {
        if (this.isAvailable) {
            console.log(this.brand + " " + this.model + " is available for rent.");
        }
        else {
            console.log(this.brand + " " + this.model + " is not available.");
        }
    };
    Car.prototype.rentCar = function () {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log("Car rented successfully!");
        }
        else {
            console.log("Car is already rented.");
        }
    };
    return Car;
}());
// Creating object
var car1 = new Car("Toyota", "Innova", true);
// Using methods
car1.checkAvailability();
car1.rentCar();
car1.checkAvailability();
