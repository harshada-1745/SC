class Car {
    brand: string;
    model: string;
    isAvailable: boolean;

    constructor(brand: string, model: string, isAvailable: boolean) {
        this.brand = brand;
        this.model = model;
        this.isAvailable = isAvailable;
    }

    checkAvailability(): void {
        if (this.isAvailable) {
            console.log(this.brand + " " + this.model + " is available for rent.");
        } else {
            console.log(this.brand + " " + this.model + " is not available.");
        }
    }

    rentCar(): void {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log("Car rented successfully!");
        } else {
            console.log("Car is already rented.");
        }
    }
}


let car1 = new Car("Toyota", "Innova", true);


car1.checkAvailability();
car1.rentCar();
car1.checkAvailability();