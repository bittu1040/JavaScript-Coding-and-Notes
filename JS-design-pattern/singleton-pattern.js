// singleton design pattern

// The Singleton Design Pattern ensures that only one instance of a class exists.
// It provides a single point of access to that instance throughout the application.
// It is used when controlling access to a shared resource.

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            this.data = [];
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
    addData(data) {
        this.data.push(data);
    }
    getData() {
        return this.data;
    }
}

const singleton1 = new Singleton();
const singleton2 = new Singleton();

singleton1.addData("Data 1");
singleton1.addData("Data 2");

console.log(singleton1.getData());   // [ 'Data 1', 'Data 2' ]
console.log(singleton2.getData());   // [ 'Data 1', 'Data 2' ]
